#!/usr/bin/env python3
from __future__ import annotations
"""
process_physionet.py
Reads the downloaded PhysioNet 2019 PSV files and converts them into
realData.js — the format expected by the MedAI React frontend.


Columns in each PSV file (pipe-separated):
HR | O2Sat | Temp | SBP | MAP | DBP | Resp | EtCO2 |
BaseExcess | HCO3 | FiO2 | pH | PaCO2 | SaO2 |
AST | BUN | Alkalinephos | Calcium | Chloride | Creatinine |
Bilirubin_direct | Glucose | Lactate | Magnesium | Phosphate |
Potassium | Bilirubin_total | TroponinI | Hct | Hgb | PTT | WBC |
Fibrinogen | Platelets |
Age | Gender | Unit1 | Unit2 | HospAdmTime | ICULOS | SepsisLabel

Source: https://physionet.org/content/challenge-2019/1.0.0/
"""

import os
import json
import math
import random
import glob

RAW_DIR  = os.path.join(os.path.dirname(__file__), "raw")
OUT_FILE = os.path.join(
    os.path.dirname(__file__),
    "..", "frontend", "src", "data", "realData.js"
)

COLUMNS = [
    "HR","O2Sat","Temp","SBP","MAP","DBP","Resp","EtCO2",
    "BaseExcess","HCO3","FiO2","pH","PaCO2","SaO2",
    "AST","BUN","Alkalinephos","Calcium","Chloride","Creatinine",
    "Bilirubin_direct","Glucose","Lactate","Magnesium","Phosphate",
    "Potassium","Bilirubin_total","TroponinI","Hct","Hgb","PTT","WBC",
    "Fibrinogen","Platelets",
    "Age","Gender","Unit1","Unit2","HospAdmTime","ICULOS","SepsisLabel",
]

# Synthetic ICU names for Unit1/Unit2 flags
UNIT_NAMES = {
    (1, 0): "MICU",
    (0, 1): "CICU",
    (1, 1): "SICU",
    (0, 0): "NICU",
}

# ── Anonymous patient name pool ──────────────────────────────────────
FIRST_M = ["James","Robert","Michael","David","William","Daniel","Thomas","Charles","Mark","Steven"]
FIRST_F = ["Sarah","Emily","Jessica","Jennifer","Ashley","Amanda","Melissa","Hannah","Rachel","Lisa"]
LAST    = ["Wilson","Chen","Martinez","Johnson","Thompson","Park","Kim","Kowalski","Patel","Brown",
           "Garcia","Smith","Davis","Anderson","Jackson","Taylor","White","Lewis","Harris","Clark"]


def safe(v):
    """Convert string to float, returning None for NaN/missing."""
    try:
        f = float(v)
        return None if math.isnan(f) else f
    except (ValueError, TypeError):
        return None


def forward_fill(series: list) -> list:
    """Forward-fill None values in a numeric series."""
    last = None
    out  = []
    for v in series:
        if v is not None:
            last = v
        out.append(last)
    return out


def last_valid(series: list):
    """Return the last non-None value in a series."""
    for v in reversed(series):
        if v is not None:
            return v
    return None


def parse_psv(path: str) -> dict | None:
    """Parse one PSV file into a dict of column → list of values."""
    try:
        rows = []
        with open(path) as f:
            lines = f.readlines()
        header = lines[0].strip().split("|")
        for line in lines[1:]:
            vals = line.strip().split("|")
            if len(vals) == len(header):
                rows.append({header[k]: safe(vals[k]) for k in range(len(header))})
        if not rows:
            return None
        # Transpose into column arrays
        cols = {c: [r.get(c) for r in rows] for c in COLUMNS if c in header}
        return cols
    except Exception:
        return None


def make_hourly_series(values: list, label_prefix: str = "") -> list:
    """
    Take up to last 24 valid readings from a column and format as
    [{hour: 'HH:00', value: float}, …].
    NaN gaps are forward-filled; remaining Nones get the column mean.
    """
    filled = forward_fill(values)
    # Use last 24 rows
    window = filled[-24:] if len(filled) >= 24 else filled
    # Compute mean for back-fill (anything still None at start)
    valid  = [v for v in window if v is not None]
    mean   = round(sum(valid) / len(valid), 1) if valid else 0.0
    out    = []
    for i, v in enumerate(window):
        h = (i * (24 // max(len(window), 1))) % 24
        out.append({"hour": f"{h:02d}:00", "value": v if v is not None else mean})
    return out


def calc_risk(cols: dict, sepsis_labels: list) -> tuple[float, float, float]:
    """
    Estimate 6h/12h/24h sepsis risk using Sepsis-3-inspired scoring.
    Uses actual SepsisLabel trajectory + key vitals/labs as a heuristic.
    """
    # If patient develops sepsis → base risk from hours to onset
    sepsis_onset = next((i for i, v in enumerate(sepsis_labels) if v == 1), None)
    iculos_vals  = cols.get("ICULOS", [])
    current_icu  = last_valid(iculos_vals) or 0

    if sepsis_onset is not None:
        hours_to_sep = sepsis_onset - current_icu
        r6  = max(0.5, min(0.97, 0.95 - hours_to_sep * 0.03))
        r12 = max(0.35, r6 - 0.12)
        r24 = max(0.20, r6 - 0.24)
        return round(r6, 2), round(r12, 2), round(r24, 2)

    # Non-sepsis: compute NEWS2-like score
    score = 0.0
    hr    = last_valid(forward_fill(cols.get("HR", [])))
    sbp   = last_valid(forward_fill(cols.get("SBP", [])))
    o2    = last_valid(forward_fill(cols.get("O2Sat", [])))
    rr    = last_valid(forward_fill(cols.get("Resp", [])))
    temp  = last_valid(forward_fill(cols.get("Temp", [])))
    lac   = last_valid(forward_fill(cols.get("Lactate", [])))

    if hr  is not None and (hr < 40 or hr > 130):  score += 0.18
    elif hr is not None and (hr < 50 or hr > 110):  score += 0.09
    if sbp is not None and sbp < 90:  score += 0.20
    elif sbp is not None and sbp < 100: score += 0.08
    if o2  is not None and o2  < 92:  score += 0.18
    elif o2 is not None and o2  < 95:  score += 0.06
    if rr  is not None and (rr < 8 or rr > 25): score += 0.14
    elif rr is not None and rr > 20:  score += 0.05
    if temp is not None and (temp < 36.0 or temp > 38.5): score += 0.10
    if lac  is not None and lac > 2.0: score += 0.20
    elif lac is not None and lac > 1.5: score += 0.08

    r6  = min(0.45, score)
    r12 = max(0.05, r6 - 0.08)
    r24 = max(0.03, r6 - 0.14)
    return round(r6, 2), round(r12, 2), round(r24, 2)


def classify_risk(score: float) -> str:
    if score >= 0.75: return "CRITICAL"
    if score >= 0.55: return "HIGH"
    if score >= 0.30: return "MODERATE"
    return "LOW"


def make_shap(cols: dict, r6: float) -> tuple[list, str]:
    """Build heuristic SHAP values from the most abnormal features."""
    feats = []
    hr    = last_valid(forward_fill(cols.get("HR",      [])))
    sbp   = last_valid(forward_fill(cols.get("SBP",     [])))
    o2    = last_valid(forward_fill(cols.get("O2Sat",   [])))
    rr    = last_valid(forward_fill(cols.get("Resp",    [])))
    temp  = last_valid(forward_fill(cols.get("Temp",    [])))
    lac   = last_valid(forward_fill(cols.get("Lactate", [])))
    crea  = last_valid(forward_fill(cols.get("Creatinine",[])))
    wbc   = last_valid(forward_fill(cols.get("WBC",     [])))
    age   = last_valid(cols.get("Age", []))
    sep_l = cols.get("SepsisLabel", [])
    is_sep= any(v == 1 for v in sep_l)

    def add(name, val, shap):
        feats.append({"feature": name, "value": round(abs(shap), 3),
                      "direction": "positive" if shap > 0 else "negative"})

    if hr  is not None: add(f"HR ({hr:.0f} bpm)",    hr,  0.03 + max(0, (hr - 100) / 250))
    if sbp is not None: add(f"SBP ({sbp:.0f} mmHg)", sbp, 0.02 + max(0, (95 - sbp) / 200))
    if o2  is not None: add(f"SpO₂ ({o2:.1f}%)",     o2,  0.02 + max(0, (95 - o2) / 100))
    if rr  is not None: add(f"Resp Rate ({rr:.0f}/m)",rr,  0.015 + max(0, (rr - 20) / 200))
    if temp is not None: add(f"Temp ({temp:.1f}°C)",   temp,max(0,(temp - 37.5) / 10 + (36.0 - temp) / 10))
    if lac  is not None: add(f"Lactate ({lac:.1f}mmol/L)",lac,max(0, (lac - 1.0) / 8))
    if crea is not None: add(f"Creatinine ({crea:.1f}mg/dL)",crea,max(0,(crea - 1.2) / 10))
    if wbc  is not None: add(f"WBC ({wbc:.1f}k/µL)",  wbc, max(0, (wbc - 11) / 50))
    if age  is not None: add(f"Age ({age:.0f} yrs)",   age, max(0, (age - 60) / 150))
    if is_sep:           add("Sepsis onset detected",   1,   0.15)

    feats.sort(key=lambda x: x["value"], reverse=True)
    feats = feats[:5]
    if not feats:
        feats = [{"feature":"Insufficient data","value":0.01,"direction":"positive"}]

    # Build NL summary
    top = feats[0]["feature"] if feats else "clinical data"
    cat = classify_risk(r6)
    summaries = {
        "CRITICAL": f"<strong>Critical deterioration risk ({round(r6*100)}%)</strong> primarily driven by {top}. Immediate clinical review required.",
        "HIGH":     f"<strong>High risk ({round(r6*100)}%)</strong>. Top driver: {top}. Close monitoring and early intervention recommended.",
        "MODERATE": f"Moderate risk ({round(r6*100)}%) with {top} as primary contributor. Continue observation and trend vitals.",
        "LOW":      f"<strong>Low risk ({round(r6*100)}%)</strong>. {top} within acceptable bounds. Routine monitoring appropriate.",
    }
    return feats, summaries[cat]


def make_labs(cols: dict) -> list:
    """Extract last valid lab values and assign clinical flags."""
    lab_defs = [
        ("WBC",         "WBC",          "10³/µL", 4.5,  11.0,  14.0,  20.0),
        ("Creatinine",  "Creatinine",   "mg/dL",  0.6,  1.2,   2.0,   3.5),
        ("Lactate",     "Lactate",      "mmol/L", 0.5,  1.6,   2.5,   4.0),
        ("Glucose",     "Glucose",      "mg/dL",  70,   140,   200,   400),
        ("Hgb",         "Hemoglobin",   "g/dL",   12.0, 17.0,  None,  None),
        ("Potassium",   "Potassium",    "mEq/L",  3.5,  5.0,   5.5,   6.5),
        ("HCO3",        "Bicarbonate",  "mEq/L",  22,   29,    None,  None),
        ("BUN",         "BUN",          "mg/dL",  7,    20,    50,    80),
        ("Platelets",   "Platelets",    "10³/µL", 150,  400,   None,  None),
        ("TroponinI",   "Troponin-I",   "ng/mL",  None, 0.04,  0.5,   2.0),
        ("pH",          "Blood pH",     "",        7.35, 7.45,  None,  None),
        ("Hct",         "Hematocrit",   "%",       36,   50,    None,  None),
    ]
    labs = []
    for col, name, unit, lo, hi, hi2, crit in lab_defs:
        v = last_valid(forward_fill(cols.get(col, [])))
        if v is None:
            continue
        v = round(v, 2)
        # Assign flag
        if crit is not None and v >= crit:
            flag = "CRITICAL"
        elif hi2 is not None and v >= hi2:
            flag = "HIGH"
        elif lo is not None and v < lo:
            flag = "LOW"
        elif hi is not None and v > hi:
            flag = "HIGH"
        else:
            flag = "NORMAL"
        ref = f"{lo}–{hi}" if lo is not None else f"<{hi}"
        labs.append({"name": name, "value": v, "unit": unit, "flag": flag, "range": ref})
    return labs[:8]  # cap at 8 labs


def make_patient(pid: str, cols: dict, rng: random.Random) -> dict:
    """Convert parsed PSV columns into a patient dict for the UI."""
    age     = last_valid(cols.get("Age", [])) or rng.randint(35, 85)
    gender  = last_valid(cols.get("Gender", [])) or rng.choice([0, 1])
    u1      = last_valid(cols.get("Unit1", [])) or 0
    u2      = last_valid(cols.get("Unit2", [])) or 0
    ward    = UNIT_NAMES.get((int(u1 > 0.5), int(u2 > 0.5)), "MICU")
    sep_lst = [v for v in cols.get("SepsisLabel", []) if v is not None]
    is_sep  = any(v == 1 for v in sep_lst)

    r6, r12, r24 = calc_risk(cols, sep_lst)
    cat = classify_risk(r6)
    shap_vals, shap_txt = make_shap(cols, r6)
    labs = make_labs(cols)

    # Name
    g_int  = int(gender + 0.5)
    pool   = FIRST_M if g_int == 1 else FIRST_F
    rng.seed(int(pid.replace("p", "")))
    fname  = rng.choice(pool)
    lname  = rng.choice(LAST)

    # Beds
    beds_per_ward = {"MICU": 20, "CICU": 16, "SICU": 14, "NICU": 12}
    bed_n  = rng.randint(1, beds_per_ward.get(ward, 12))
    bed    = f"{ward[0]}-{bed_n:03d}"

    # Comorbidities heuristic
    comorbidities = []
    if age > 65:       comorbidities.append("HTN")
    if age > 70:       comorbidities.append("DM Type 2")
    creat = last_valid(forward_fill(cols.get("Creatinine", [])))
    if creat and creat > 1.5: comorbidities.append("CKD")
    if is_sep:         comorbidities.append("Sepsis-3")

    # Diagnosis
    diagnoses = {
        "CRITICAL": ["Septic Shock", "ARDS", "Multi-Organ Failure"],
        "HIGH":     ["Severe Sepsis", "Pneumonia", "AKI Stage 3"],
        "MODERATE": ["Sepsis", "CHF Exacerbation", "DKA"],
        "LOW":      ["Post-op Monitoring", "Cellulitis", "Dehydration"],
    }
    diag = rng.choice(diagnoses[cat])

    # Vital time series (24h window)
    def vital_series(col):
        vals = forward_fill(cols.get(col, []))
        return make_hourly_series(vals)

    return {
        "id":             pid,
        "name":           f"{fname} {lname}",
        "age":            int(round(age)),
        "gender":         "M" if g_int == 1 else "F",
        "ward":           ward,
        "bed":            bed,
        "admitTime":      "2026-08-04T08:00:00",
        "diagnosis":      diag,
        "comorbidities":  comorbidities,
        "riskScore6h":    r6,
        "riskScore12h":   r12,
        "riskScore24h":   r24,
        "riskCategory":   cat,
        "alertTriggered": cat in ("CRITICAL", "HIGH") and is_sep,
        "isSepsis":       is_sep,
        "vitals": {
            "heartRate":       vital_series("HR"),
            "systolicBP":      vital_series("SBP"),
            "diastolicBP":     vital_series("DBP"),
            "spo2":            vital_series("O2Sat"),
            "temperature":     vital_series("Temp"),
            "respiratoryRate": vital_series("Resp"),
        },
        "labs":       labs,
        "shapValues": shap_vals,
        "shapSummary": shap_txt,
        "_source": "PhysioNet Challenge 2019 (de-identified)",
    }


# ── Main ──────────────────────────────────────────────────────────────
def main():
    psv_files = sorted(glob.glob(os.path.join(RAW_DIR, "*.psv")))
    print(f"Found {len(psv_files)} PSV files in {RAW_DIR}")

    rng      = random.Random(42)
    patients = []
    skipped  = 0

    for psv_path in psv_files:
        pid  = os.path.basename(psv_path).replace(".psv", "")
        cols = parse_psv(psv_path)
        if cols is None or not cols.get("HR"):
            skipped += 1
            continue
        try:
            pat = make_patient(pid, cols, rng)
            patients.append(pat)
        except Exception as e:
            skipped += 1
            print(f"  Warning: {pid} → {e}")

    # Sort by risk descending
    patients.sort(key=lambda p: p["riskScore6h"], reverse=True)

    # Cap to first 20 most interesting patients for the UI
    patients = patients[:20]

    print(f"Processed {len(patients)} patients  (skipped {skipped})")
    print("Risk breakdown:")
    for cat in ["CRITICAL","HIGH","MODERATE","LOW"]:
        n = sum(1 for p in patients if p["riskCategory"] == cat)
        print(f"  {cat}: {n}")

    # ── Write output JS ──────────────────────────────────────────────
    js_patients = json.dumps(patients, indent=2)

    js_content = f'''\
/**
 * realData.js — PhysioNet / CinC Challenge 2019 Patient Data
 *
 * Source  : https://physionet.org/content/challenge-2019/1.0.0/
 * License : Open Access (PhysioNet)
 * Citation: Reyna et al., Critical Care Medicine 2019
 *           https://doi.org/10.1097/CCM.0000000000004145
 *
 * Data is de-identified per PhysioNet standards.
 * Vital time-series extracted from hourly ICU recordings.
 * Risk scores computed using heuristic Sepsis-3 / NEWS2 scoring.
 * SHAP values are feature-importance heuristics, not ML-derived.
 *
 * ⚠️  RESEARCH ONLY — NOT for clinical decision-making.
 */

export const patients = {js_patients};

/* ---- Resource data (unchanged) ---- */
export const resourceData = {{
  wards: [
    {{ id: "MICU",   name: "Medical ICU",    beds: 20, occupied: {sum(1 for p in patients if p["ward"]=="MICU")}, vents: 12, ventsInUse: {max(1, sum(1 for p in patients if p["ward"]=="MICU" and p["riskCategory"] in ("CRITICAL","HIGH")))}, nurses: 8, doctors: 3 }},
    {{ id: "CICU",   name: "Cardiac ICU",    beds: 16, occupied: {sum(1 for p in patients if p["ward"]=="CICU")}, vents:  8, ventsInUse: {max(0, sum(1 for p in patients if p["ward"]=="CICU" and p["riskCategory"] in ("CRITICAL","HIGH")))}, nurses: 6, doctors: 2 }},
    {{ id: "SICU",   name: "Surgical ICU",   beds: 14, occupied: {sum(1 for p in patients if p["ward"]=="SICU")}, vents:  7, ventsInUse: {max(0, sum(1 for p in patients if p["ward"]=="SICU" and p["riskCategory"] in ("CRITICAL","HIGH")))}, nurses: 5, doctors: 2 }},
    {{ id: "NICU",   name: "Neuro ICU",      beds: 12, occupied: {sum(1 for p in patients if p["ward"]=="NICU")}, vents:  6, ventsInUse: 2, nurses: 4, doctors: 2 }},
    {{ id: "PICU",   name: "Pedi ICU",       beds: 10, occupied: 5,  vents:  5, ventsInUse: 2, nurses: 4, doctors: 1 }},
    {{ id: "STDOWN", name: "Step-Down",      beds: 30, occupied: 22, vents:  0, ventsInUse: 0, nurses: 8, doctors: 2 }},
  ],
  occupancyTrend: Array.from({{ length: 24 }}, (_, i) => {{
    const h = new Date(Date.now() - (23 - i) * 3600000);
    return {{
      hour: `${{h.getHours().toString().padStart(2,"0")}}:00`,
      micu: Math.round(75 + Math.sin(i * 0.4) * 10 + (Math.random() - 0.5) * 5),
      cicu: Math.round(65 + Math.sin(i * 0.3 + 1) * 8 + (Math.random() - 0.5) * 4),
      sicu: Math.round(70 + Math.sin(i * 0.35 + 2) * 7 + (Math.random() - 0.5) * 4),
    }};
  }}),
  forecast: Array.from({{ length: 14 }}, (_, i) => {{
    const d = new Date(); d.setDate(d.getDate() + i - 7);
    const base = 72 + Math.sin(i * 0.5) * 7;
    const isActual = i < 7;
    return {{
      day: d.toLocaleDateString("en-US", {{ month: "short", day: "numeric" }}),
      actual:   isActual  ? Math.round(base + (Math.random() - 0.5) * 5) : null,
      forecast: !isActual ? Math.round(base + (Math.random() - 0.5) * 3) : null,
      upper:    !isActual ? Math.round(base + 11) : null,
      lower:    !isActual ? Math.round(base - 11) : null,
    }};
  }}),
  heatmap: ["MICU","CICU","SICU","NICU","PICU","Step-Down"].map(ward => ({{
    ward,
    hours: Array.from({{ length: 8 }}, () => {{
      const base = ward === "MICU" ? 82 : ward === "CICU" ? 68 : ward === "SICU" ? 71 : ward === "NICU" ? 66 : ward === "PICU" ? 50 : 73;
      return Math.min(100, Math.round(base + (Math.random() - 0.5) * 18));
    }}),
  }})),
}};

export const recentAlerts = patients
  .filter(p => p.alertTriggered)
  .slice(0, 6)
  .map((p, i) => ({{
    id: `A${{(i+1).toString().padStart(3,"0")}}`,
    patient: p.name,
    type: p.riskCategory,
    message: p.shapSummary.replace(/<[^>]+>/g, "").slice(0, 90) + "…",
    time: `${{(i * 8 + 2)}} min ago`,
  }}));

export const getRiskClass = (cat) =>
  ({{ CRITICAL: "critical", HIGH: "high", MODERATE: "moderate", LOW: "low" }}[cat] ?? "low");

export const getOccupancyColor = (pct) =>
  pct >= 90 ? "#ef4444" : pct >= 75 ? "#f97316" : pct >= 60 ? "#eab308" : "#22c55e";
'''

    os.makedirs(os.path.dirname(OUT_FILE), exist_ok=True)
    with open(OUT_FILE, "w") as f:
        f.write(js_content)

    print(f"\n✅  Written → {OUT_FILE}")
    print(f"   Patients exported: {len(patients)}")
    print(f"   Sepsis patients:   {sum(1 for p in patients if p['isSepsis'])}")


if __name__ == "__main__":
    main()
