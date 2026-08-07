"""
MedAI Platform — FastAPI Backend
Phase 1 skeleton: routes, models, DB config

⚠️  PROTOTYPE: Not for clinical use.
"""
import os
from typing import Optional

import json
import joblib
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

BASE_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), "..", ".."))
MODEL_PATH = os.path.join(BASE_DIR, "data", "sepsis_model.joblib")
PATIENTS_FILE = os.path.join(BASE_DIR, "data", "patients_manual.json")

app = FastAPI(
    title="MedAI Hospital Intelligence Platform",
    description="AI-powered ICU early warning, resource forecasting, XAI, and digital twin.",
    version="0.1.0",
)


class PredictionInput(BaseModel):
    age: Optional[float] = 0.0
    gender: Optional[float] = 0.0
    unit1: Optional[float] = 0.0
    unit2: Optional[float] = 0.0
    icu_hours: Optional[float] = 0.0
    hr_last: Optional[float] = 0.0
    hr_mean: Optional[float] = 0.0
    hr_min: Optional[float] = 0.0
    hr_max: Optional[float] = 0.0
    sbp_last: Optional[float] = 0.0
    sbp_mean: Optional[float] = 0.0
    sbp_min: Optional[float] = 0.0
    sbp_max: Optional[float] = 0.0
    o2_last: Optional[float] = 0.0
    o2_mean: Optional[float] = 0.0
    o2_min: Optional[float] = 0.0
    o2_max: Optional[float] = 0.0
    temp_last: Optional[float] = 0.0
    temp_mean: Optional[float] = 0.0
    temp_min: Optional[float] = 0.0
    temp_max: Optional[float] = 0.0
    resp_last: Optional[float] = 0.0
    resp_mean: Optional[float] = 0.0
    resp_min: Optional[float] = 0.0
    resp_max: Optional[float] = 0.0
    lac_last: Optional[float] = 0.0
    creatinine_last: Optional[float] = 0.0
    wbc_last: Optional[float] = 0.0


@app.on_event("startup")
async def load_prediction_model():
    try:
        artifact = joblib.load(MODEL_PATH)
        app.state.model = artifact.get("model")
        app.state.scaler = artifact.get("scaler")
    except Exception as exc:
        app.state.model = None
        app.state.scaler = None
        print(f"Warning: model could not be loaded: {exc}")


@app.post("/predict")
async def predict(input: PredictionInput):
    if app.state.model is None or app.state.scaler is None:
        raise HTTPException(status_code=503, detail="Prediction model is not available")

    features = [
        input.age,
        input.gender,
        input.unit1,
        input.unit2,
        input.icu_hours,
        input.hr_last,
        input.hr_mean,
        input.hr_min,
        input.hr_max,
        input.sbp_last,
        input.sbp_mean,
        input.sbp_min,
        input.sbp_max,
        input.o2_last,
        input.o2_mean,
        input.o2_min,
        input.o2_max,
        input.temp_last,
        input.temp_mean,
        input.temp_min,
        input.temp_max,
        input.resp_last,
        input.resp_mean,
        input.resp_min,
        input.resp_max,
        input.lac_last,
        input.creatinine_last,
        input.wbc_last,
    ]

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


# ---- Placeholder routers (implemented in Phase 2–6) ---- #
# from app.api import patients, predictions, resources, websocket
# app.include_router(patients.router,    prefix="/api/patients",    tags=["Patients"])
# app.include_router(predictions.router, prefix="/api/predictions", tags=["Predictions"])
# app.include_router(resources.router,   prefix="/api/resources",   tags=["Resources"])
# app.include_router(websocket.router,   prefix="/ws",              tags=["WebSocket"])
