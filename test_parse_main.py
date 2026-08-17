import os
import sys
import glob
import random
import traceback
import joblib
BASE_DIR = os.path.abspath(".")
sys.path.append(os.path.join(BASE_DIR, "data"))
import process_physionet
RAW_DIR = os.path.join(BASE_DIR, "data", "raw")
MODEL_PATH = os.path.join(BASE_DIR, "data", "sepsis_model.joblib")

artifact = joblib.load(MODEL_PATH)
model = artifact.get("model")
scaler = artifact.get("scaler")
import shap
explainer = shap.TreeExplainer(model)

psv_files = sorted(glob.glob(os.path.join(RAW_DIR, "*.psv")))
rng = random.Random(42)
for psv_path in psv_files[:1]:
    pid = os.path.basename(psv_path).replace(".psv", "")
    cols = process_physionet.parse_psv(psv_path)
    try:
        row = process_physionet.make_training_row(pid, cols)
        features = [row[f] if row[f] is not None else 0.0 for f in process_physionet.TRAIN_FIELDS[1:-1]]
        scaled = scaler.transform([features])
        score = float(model.predict_proba(scaled)[0][1])
        shap_vals = explainer.shap_values(scaled)
        if isinstance(shap_vals, list):
            s_vals = shap_vals[1][0]
        else:
            s_vals = shap_vals[0]
        print("Success for model prediction")
    except Exception as e:
        traceback.print_exc()
