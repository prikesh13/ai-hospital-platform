"""
MedAI Platform — FastAPI Backend
Phase 1 skeleton: routes, models, DB config

⚠️  PROTOTYPE: Not for clinical use.
"""
import os
import sys
import glob
import json
import random
import joblib
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
sys.path.append(os.path.join(BASE_DIR, "data"))
import process_physionet

MODEL_PATH = os.path.join(BASE_DIR, "data", "sepsis_model.joblib")
PATIENTS_FILE = os.path.join(BASE_DIR, "data", "patients_manual.json")
RAW_DIR = os.path.join(BASE_DIR, "data", "raw")

app = FastAPI(
    title="MedAI Hospital Intelligence Platform",
    description="AI-powered ICU early warning, resource forecasting, XAI, and digital twin.",
    version="0.1.0",
)


class PredictionInput(BaseModel):
    age: float = 0.0
    gender: float = 0.0
    unit1: float = 0.0
    unit2: float = 0.0
    icu_hours: float = 0.0
    hr_last: float = 0.0
    hr_mean: float = 0.0
    hr_min: float = 0.0
    hr_max: float = 0.0
    sbp_last: float = 0.0
    sbp_mean: float = 0.0
    sbp_min: float = 0.0
    sbp_max: float = 0.0
    o2_last: float = 0.0
    o2_mean: float = 0.0
    o2_min: float = 0.0
    o2_max: float = 0.0
    temp_last: float = 0.0
    temp_mean: float = 0.0
    temp_min: float = 0.0
    temp_max: float = 0.0
    resp_last: float = 0.0
    resp_mean: float = 0.0
    resp_min: float = 0.0
    resp_max: float = 0.0
    lac_last: float = 0.0
    creatinine_last: float = 0.0
    wbc_last: float = 0.0

@app.on_event("startup")
async def load_prediction_model():
    try:
        artifact = joblib.load(MODEL_PATH)
        app.state.model = artifact.get("model")
        app.state.scaler = artifact.get("scaler")
        try:
            import shap
            app.state.explainer = shap.TreeExplainer(app.state.model)
        except Exception as e:
            print(f"Warning: SHAP explainer failed: {e}")
            app.state.explainer = None
    except Exception as exc:
        app.state.model = None
        app.state.scaler = None
        print(f"Warning: model could not be loaded: {exc}")

    # Process all PSV files on startup
    print("Loading raw ICU patients...")
    rng = random.Random(42)
    psv_files = sorted(glob.glob(os.path.join(RAW_DIR, "*.psv")))
    icu_patients = []
    
    for psv_path in psv_files:
        pid = os.path.basename(psv_path).replace(".psv", "")
        cols = process_physionet.parse_psv(psv_path)
        if cols is None or not cols.get("HR"):
            continue
        try:
            # Get features
            row = process_physionet.make_training_row(pid, cols)
            features = [row[f] if row[f] is not None else 0.0 for f in process_physionet.TRAIN_FIELDS[1:-1]]
            
            # Predict
            if app.state.model and app.state.scaler:
                scaled = app.state.scaler.transform([features])
                score = float(app.state.model.predict_proba(scaled)[0][1])
                if app.state.explainer:
                    shap_vals = app.state.explainer.shap_values(scaled)
                    if isinstance(shap_vals, list):
                        s_vals = shap_vals[1][0]
                    elif len(shap_vals.shape) == 3:
                        s_vals = shap_vals[0, :, 1]
                    else:
                        s_vals = shap_vals[0]
                else:
                    s_vals = [0] * len(features)
            else:
                score = 0.1
                s_vals = [0] * len(features)
            
            # Generate patient dict
            pat = process_physionet.make_patient(pid, cols, rng)
            
            # OVERWRITE risk with REAL ML predictions
            pat["riskScore6h"] = round(score, 2)
            pat["riskScore12h"] = max(0.05, round(score - 0.08, 2))
            pat["riskScore24h"] = max(0.02, round(score - 0.14, 2))
            pat["riskCategory"] = process_physionet.classify_risk(score)
            pat["alertTriggered"] = pat["riskCategory"] in ("CRITICAL", "HIGH")
            
            # OVERWRITE SHAP with real SHAP values
            shap_features = []
            for i, f_name in enumerate(process_physionet.TRAIN_FIELDS[1:-1]):
                val = s_vals[i]
                if abs(val) > 0.001:
                    shap_features.append({
                        "feature": f_name,
                        "value": round(abs(val), 3),
                        "direction": "positive" if val > 0 else "negative"
                    })
            shap_features.sort(key=lambda x: x["value"], reverse=True)
            pat["shapValues"] = shap_features[:5]
            if not pat["shapValues"]:
                pat["shapValues"] = [{"feature": "Stable", "value": 0.01, "direction": "negative"}]
                
            top = pat["shapValues"][0]["feature"]
            cat = pat["riskCategory"]
            summaries = {
                "CRITICAL": f"<strong>Critical deterioration risk ({round(score*100)}%)</strong> primarily driven by {top}. Immediate clinical review required.",
                "HIGH":     f"<strong>High risk ({round(score*100)}%)</strong>. Top driver: {top}. Close monitoring and early intervention recommended.",
                "MODERATE": f"Moderate risk ({round(score*100)}%) with {top} as primary contributor. Continue observation and trend vitals.",
                "LOW":      f"<strong>Low risk ({round(score*100)}%)</strong>. {top} within acceptable bounds. Routine monitoring appropriate.",
            }
            pat["shapSummary"] = summaries[cat]
            
            icu_patients.append(pat)
        except Exception as e:
            import traceback
            traceback.print_exc()
            print(f"Error for {pid}: {e}")

    icu_patients.sort(key=lambda p: p["riskScore6h"], reverse=True)
    app.state.icu_patients = icu_patients[:20]
    print(f"Loaded {len(app.state.icu_patients)} ICU patients from real ML model.")

@app.get("/api/patients/icu", tags=["Patients"])
async def get_icu_patients():
    return getattr(app.state, "icu_patients", [])

@app.post("/predict")
async def predict(input: PredictionInput):
    if app.state.model is None or app.state.scaler is None:
        raise HTTPException(status_code=503, detail="Prediction model is not available")

    features = [getattr(input, f) for f in process_physionet.TRAIN_FIELDS[1:-1]]

    try:
        scaled = app.state.scaler.transform([features])
        score = float(app.state.model.predict_proba(scaled)[0][1])
        prediction = int(app.state.model.predict(scaled)[0])
    except Exception as exc:
        raise HTTPException(status_code=500, detail=f"Prediction failed: {exc}")

    return {
        "prediction": prediction,
        "sepsis_probability": round(score, 4),
        "threshold": 0.5,
    }

@app.post("/predict/twin")
async def predict_twin(input: dict):
    if app.state.model is None or app.state.scaler is None:
        raise HTTPException(status_code=503, detail="Prediction model is not available")
    
    pid = input.get("id")
    twin_vals = input.get("twinVals", {})
    
    pat = next((p for p in getattr(app.state, "icu_patients", []) if p["id"] == pid), None)
    if not pat:
        raise HTTPException(status_code=404, detail="Patient not found")
        
    cols = process_physionet.parse_psv(os.path.join(RAW_DIR, f"{pid}.psv"))
    row = process_physionet.make_training_row(pid, cols)
    
    if "heartRate" in twin_vals:
        row["hr_last"] = twin_vals["heartRate"]
    if "systolicBP" in twin_vals:
        row["sbp_last"] = twin_vals["systolicBP"]
    if "spo2" in twin_vals:
        row["o2_last"] = twin_vals["spo2"]
    if "respiratoryRate" in twin_vals:
        row["resp_last"] = twin_vals["respiratoryRate"]
        
    features = [row[f] if row[f] is not None else 0.0 for f in process_physionet.TRAIN_FIELDS[1:-1]]
    
    scaled = app.state.scaler.transform([features])
    score = float(app.state.model.predict_proba(scaled)[0][1])
    
    return {
        "sepsis_probability": score
    }

# Allow React dev server
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/", tags=["Health"])
async def root():
    return {"status": "ok", "service": "MedAI Platform", "version": "0.1.0"}

@app.get("/health", tags=["Health"])
async def health():
    return {"status": "healthy"}

def _ensure_patients_file():
    if not os.path.exists(PATIENTS_FILE):
        try:
            with open(PATIENTS_FILE, 'w') as f:
                json.dump([], f)
        except Exception:
            pass

def load_manual_patients():
    _ensure_patients_file()
    try:
        with open(PATIENTS_FILE, 'r') as f:
            return json.load(f)
    except Exception:
        return []

def save_manual_patients(patients_list):
    _ensure_patients_file()
    with open(PATIENTS_FILE, 'w') as f:
        json.dump(patients_list, f, indent=2)

@app.get('/api/patients', tags=['Patients'])
async def get_patients():
    """Return manually-added patients stored on disk."""
    return load_manual_patients()

@app.post('/api/patients', tags=['Patients'])
async def add_patient(request: Request):
    """Accept a single patient JSON body and persist it to disk."""
    try:
        body = await request.json()
    except Exception as exc:
        raise HTTPException(status_code=400, detail=f'Invalid JSON: {exc}')

    try:
        patients = load_manual_patients()
        patients.append(body)
        save_manual_patients(patients)
        return {"status": "ok", "patient": body}
    except Exception as exc:
        raise HTTPException(status_code=500, detail=str(exc))
