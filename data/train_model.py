#!/usr/bin/env python3
from __future__ import annotations

import os
import joblib
import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import classification_report, roc_auc_score
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import StandardScaler

ROOT_DIR = os.path.dirname(__file__)
TRAIN_FILE = os.path.join(ROOT_DIR, "train_data.csv")
MODEL_FILE = os.path.join(ROOT_DIR, "sepsis_model.joblib")

NUMERIC_FEATURES = [
    "age",
    "gender",
    "unit1",
    "unit2",
    "icu_hours",
    "hr_last",
    "hr_mean",
    "hr_min",
    "hr_max",
    "sbp_last",
    "sbp_mean",
    "sbp_min",
    "sbp_max",
    "o2_last",
    "o2_mean",
    "o2_min",
    "o2_max",
    "temp_last",
    "temp_mean",
    "temp_min",
    "temp_max",
    "resp_last",
    "resp_mean",
    "resp_min",
    "resp_max",
    "lac_last",
    "creatinine_last",
    "wbc_last",
]


def load_data() -> pd.DataFrame:
    if not os.path.exists(TRAIN_FILE):
        raise FileNotFoundError(f"Training data not found: {TRAIN_FILE}")
    df = pd.read_csv(TRAIN_FILE)
    return df


def prepare_features(df: pd.DataFrame) -> tuple[pd.DataFrame, pd.Series]:
    X = df[NUMERIC_FEATURES].copy()
    y = df["label"].copy()
    X = X.fillna(0.0)
    scaler = StandardScaler()
    X_scaled = pd.DataFrame(scaler.fit_transform(X), columns=X.columns)
    return X_scaled, y, scaler


def train_model() -> tuple[RandomForestClassifier, StandardScaler]:
    df = load_data()
    X, y, scaler = prepare_features(df)
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42, stratify=y)

    model = RandomForestClassifier(n_estimators=100, random_state=42, n_jobs=-1)
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    y_proba = model.predict_proba(X_test)[:, 1]

    print("=== Training evaluation ===")
    print(classification_report(y_test, y_pred, digits=4))
    try:
        auc = roc_auc_score(y_test, y_proba)
        print(f"ROC AUC: {auc:.4f}")
    except Exception:
        print("ROC AUC could not be computed.")

    return model, scaler


def save_artifacts(model: RandomForestClassifier, scaler: StandardScaler) -> None:
    os.makedirs(ROOT_DIR, exist_ok=True)
    joblib.dump({"model": model, "scaler": scaler}, MODEL_FILE)
    print(f"Saved model artifact to {MODEL_FILE}")


def main() -> None:
    model, scaler = train_model()
    save_artifacts(model, scaler)


if __name__ == "__main__":
    main()
