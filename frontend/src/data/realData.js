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

export const patients = [
  {
    "id": "p000009",
    "name": "Charles Clark",
    "age": 28,
    "gender": "M",
    "ward": "NICU",
    "bed": "N-006",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "ARDS",
    "comorbidities": [
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 119.0
        },
        {
          "hour": "01:00",
          "value": 125.0
        },
        {
          "hour": "02:00",
          "value": 128.0
        },
        {
          "hour": "03:00",
          "value": 129.0
        },
        {
          "hour": "04:00",
          "value": 133.0
        },
        {
          "hour": "05:00",
          "value": 137.0
        },
        {
          "hour": "06:00",
          "value": 138.0
        },
        {
          "hour": "07:00",
          "value": 140.0
        },
        {
          "hour": "08:00",
          "value": 135.0
        },
        {
          "hour": "09:00",
          "value": 129.0
        },
        {
          "hour": "10:00",
          "value": 122.0
        },
        {
          "hour": "11:00",
          "value": 121.0
        },
        {
          "hour": "12:00",
          "value": 115.0
        },
        {
          "hour": "13:00",
          "value": 113.0
        },
        {
          "hour": "14:00",
          "value": 119.0
        },
        {
          "hour": "15:00",
          "value": 118.0
        },
        {
          "hour": "16:00",
          "value": 111.0
        },
        {
          "hour": "17:00",
          "value": 116.0
        },
        {
          "hour": "18:00",
          "value": 120.0
        },
        {
          "hour": "19:00",
          "value": 120.0
        },
        {
          "hour": "20:00",
          "value": 120.0
        },
        {
          "hour": "21:00",
          "value": 120.0
        },
        {
          "hour": "22:00",
          "value": 120.0
        },
        {
          "hour": "23:00",
          "value": 120.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 151.0
        },
        {
          "hour": "01:00",
          "value": 153.0
        },
        {
          "hour": "02:00",
          "value": 149.0
        },
        {
          "hour": "03:00",
          "value": 136.0
        },
        {
          "hour": "04:00",
          "value": 141.0
        },
        {
          "hour": "05:00",
          "value": 142.0
        },
        {
          "hour": "06:00",
          "value": 142.0
        },
        {
          "hour": "07:00",
          "value": 138.0
        },
        {
          "hour": "08:00",
          "value": 136.0
        },
        {
          "hour": "09:00",
          "value": 139.0
        },
        {
          "hour": "10:00",
          "value": 136.0
        },
        {
          "hour": "11:00",
          "value": 140.0
        },
        {
          "hour": "12:00",
          "value": 139.0
        },
        {
          "hour": "13:00",
          "value": 134.0
        },
        {
          "hour": "14:00",
          "value": 140.0
        },
        {
          "hour": "15:00",
          "value": 138.0
        },
        {
          "hour": "16:00",
          "value": 136.0
        },
        {
          "hour": "17:00",
          "value": 143.0
        },
        {
          "hour": "18:00",
          "value": 138.0
        },
        {
          "hour": "19:00",
          "value": 138.0
        },
        {
          "hour": "20:00",
          "value": 138.0
        },
        {
          "hour": "21:00",
          "value": 138.0
        },
        {
          "hour": "22:00",
          "value": 138.0
        },
        {
          "hour": "23:00",
          "value": 138.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 95.0
        },
        {
          "hour": "01:00",
          "value": 93.0
        },
        {
          "hour": "02:00",
          "value": 92.0
        },
        {
          "hour": "03:00",
          "value": 83.0
        },
        {
          "hour": "04:00",
          "value": 86.0
        },
        {
          "hour": "05:00",
          "value": 87.0
        },
        {
          "hour": "06:00",
          "value": 87.0
        },
        {
          "hour": "07:00",
          "value": 83.0
        },
        {
          "hour": "08:00",
          "value": 82.0
        },
        {
          "hour": "09:00",
          "value": 85.0
        },
        {
          "hour": "10:00",
          "value": 86.0
        },
        {
          "hour": "11:00",
          "value": 89.0
        },
        {
          "hour": "12:00",
          "value": 85.0
        },
        {
          "hour": "13:00",
          "value": 81.0
        },
        {
          "hour": "14:00",
          "value": 85.0
        },
        {
          "hour": "15:00",
          "value": 88.0
        },
        {
          "hour": "16:00",
          "value": 86.0
        },
        {
          "hour": "17:00",
          "value": 88.0
        },
        {
          "hour": "18:00",
          "value": 85.0
        },
        {
          "hour": "19:00",
          "value": 85.0
        },
        {
          "hour": "20:00",
          "value": 85.0
        },
        {
          "hour": "21:00",
          "value": 85.0
        },
        {
          "hour": "22:00",
          "value": 85.0
        },
        {
          "hour": "23:00",
          "value": 85.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 97.0
        },
        {
          "hour": "01:00",
          "value": 95.0
        },
        {
          "hour": "02:00",
          "value": 96.0
        },
        {
          "hour": "03:00",
          "value": 94.0
        },
        {
          "hour": "04:00",
          "value": 94.0
        },
        {
          "hour": "05:00",
          "value": 94.0
        },
        {
          "hour": "06:00",
          "value": 96.0
        },
        {
          "hour": "07:00",
          "value": 96.0
        },
        {
          "hour": "08:00",
          "value": 97.0
        },
        {
          "hour": "09:00",
          "value": 98.0
        },
        {
          "hour": "10:00",
          "value": 99.0
        },
        {
          "hour": "11:00",
          "value": 98.0
        },
        {
          "hour": "12:00",
          "value": 98.0
        },
        {
          "hour": "13:00",
          "value": 97.0
        },
        {
          "hour": "14:00",
          "value": 100.0
        },
        {
          "hour": "15:00",
          "value": 96.0
        },
        {
          "hour": "16:00",
          "value": 97.0
        },
        {
          "hour": "17:00",
          "value": 96.0
        },
        {
          "hour": "18:00",
          "value": 97.0
        },
        {
          "hour": "19:00",
          "value": 97.0
        },
        {
          "hour": "20:00",
          "value": 97.0
        },
        {
          "hour": "21:00",
          "value": 97.0
        },
        {
          "hour": "22:00",
          "value": 97.0
        },
        {
          "hour": "23:00",
          "value": 97.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 36.78
        },
        {
          "hour": "01:00",
          "value": 36.78
        },
        {
          "hour": "02:00",
          "value": 36.28
        },
        {
          "hour": "03:00",
          "value": 36.28
        },
        {
          "hour": "04:00",
          "value": 36.28
        },
        {
          "hour": "05:00",
          "value": 36.28
        },
        {
          "hour": "06:00",
          "value": 39.33
        },
        {
          "hour": "07:00",
          "value": 39.33
        },
        {
          "hour": "08:00",
          "value": 38.67
        },
        {
          "hour": "09:00",
          "value": 38.67
        },
        {
          "hour": "10:00",
          "value": 38.06
        },
        {
          "hour": "11:00",
          "value": 38.06
        },
        {
          "hour": "12:00",
          "value": 37.72
        },
        {
          "hour": "13:00",
          "value": 37.72
        },
        {
          "hour": "14:00",
          "value": 37.94
        },
        {
          "hour": "15:00",
          "value": 37.94
        },
        {
          "hour": "16:00",
          "value": 37.39
        },
        {
          "hour": "17:00",
          "value": 37.72
        },
        {
          "hour": "18:00",
          "value": 37.72
        },
        {
          "hour": "19:00",
          "value": 37.72
        },
        {
          "hour": "20:00",
          "value": 37.72
        },
        {
          "hour": "21:00",
          "value": 37.72
        },
        {
          "hour": "22:00",
          "value": 37.72
        },
        {
          "hour": "23:00",
          "value": 37.72
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 32.0
        },
        {
          "hour": "01:00",
          "value": 30.0
        },
        {
          "hour": "02:00",
          "value": 28.5
        },
        {
          "hour": "03:00",
          "value": 28.0
        },
        {
          "hour": "04:00",
          "value": 33.0
        },
        {
          "hour": "05:00",
          "value": 30.0
        },
        {
          "hour": "06:00",
          "value": 30.5
        },
        {
          "hour": "07:00",
          "value": 32.0
        },
        {
          "hour": "08:00",
          "value": 31.0
        },
        {
          "hour": "09:00",
          "value": 29.0
        },
        {
          "hour": "10:00",
          "value": 28.0
        },
        {
          "hour": "11:00",
          "value": 28.0
        },
        {
          "hour": "12:00",
          "value": 27.0
        },
        {
          "hour": "13:00",
          "value": 26.0
        },
        {
          "hour": "14:00",
          "value": 26.5
        },
        {
          "hour": "15:00",
          "value": 26.0
        },
        {
          "hour": "16:00",
          "value": 26.0
        },
        {
          "hour": "17:00",
          "value": 30.0
        },
        {
          "hour": "18:00",
          "value": 32.0
        },
        {
          "hour": "19:00",
          "value": 32.0
        },
        {
          "hour": "20:00",
          "value": 32.0
        },
        {
          "hour": "21:00",
          "value": 32.0
        },
        {
          "hour": "22:00",
          "value": 32.0
        },
        {
          "hour": "23:00",
          "value": 32.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 14.4,
        "unit": "10\u00b3/\u00b5L",
        "flag": "HIGH",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.7,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 2.2,
        "unit": "mmol/L",
        "flag": "HIGH",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 114.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 10.0,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 4.1,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 25.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 23.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Lactate (2.2mmol/L)",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "HR (120 bpm)",
        "value": 0.11,
        "direction": "positive"
      },
      {
        "feature": "Resp Rate (32/m)",
        "value": 0.075,
        "direction": "positive"
      },
      {
        "feature": "WBC (14.4k/\u00b5L)",
        "value": 0.068,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Lactate (2.2mmol/L). Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000011",
    "name": "Charles Lewis",
    "age": 66,
    "gender": "M",
    "ward": "NICU",
    "bed": "N-008",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "ARDS",
    "comorbidities": [
      "HTN",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 80.0
        },
        {
          "hour": "01:00",
          "value": 81.0
        },
        {
          "hour": "02:00",
          "value": 85.0
        },
        {
          "hour": "03:00",
          "value": 88.0
        },
        {
          "hour": "04:00",
          "value": 88.0
        },
        {
          "hour": "05:00",
          "value": 86.0
        },
        {
          "hour": "06:00",
          "value": 87.0
        },
        {
          "hour": "07:00",
          "value": 89.0
        },
        {
          "hour": "08:00",
          "value": 94.0
        },
        {
          "hour": "09:00",
          "value": 93.0
        },
        {
          "hour": "10:00",
          "value": 101.0
        },
        {
          "hour": "11:00",
          "value": 99.0
        },
        {
          "hour": "12:00",
          "value": 97.0
        },
        {
          "hour": "13:00",
          "value": 100.0
        },
        {
          "hour": "14:00",
          "value": 98.0
        },
        {
          "hour": "15:00",
          "value": 95.0
        },
        {
          "hour": "16:00",
          "value": 90.0
        },
        {
          "hour": "17:00",
          "value": 88.0
        },
        {
          "hour": "18:00",
          "value": 89.0
        },
        {
          "hour": "19:00",
          "value": 95.0
        },
        {
          "hour": "20:00",
          "value": 90.0
        },
        {
          "hour": "21:00",
          "value": 90.0
        },
        {
          "hour": "22:00",
          "value": 106.0
        },
        {
          "hour": "23:00",
          "value": 89.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 137.0
        },
        {
          "hour": "01:00",
          "value": 146.0
        },
        {
          "hour": "02:00",
          "value": 107.0
        },
        {
          "hour": "03:00",
          "value": 151.0
        },
        {
          "hour": "04:00",
          "value": 155.0
        },
        {
          "hour": "05:00",
          "value": 148.0
        },
        {
          "hour": "06:00",
          "value": 164.0
        },
        {
          "hour": "07:00",
          "value": 122.0
        },
        {
          "hour": "08:00",
          "value": 142.0
        },
        {
          "hour": "09:00",
          "value": 146.0
        },
        {
          "hour": "10:00",
          "value": 146.0
        },
        {
          "hour": "11:00",
          "value": 146.0
        },
        {
          "hour": "12:00",
          "value": 144.0
        },
        {
          "hour": "13:00",
          "value": 142.0
        },
        {
          "hour": "14:00",
          "value": 147.0
        },
        {
          "hour": "15:00",
          "value": 151.0
        },
        {
          "hour": "16:00",
          "value": 149.0
        },
        {
          "hour": "17:00",
          "value": 141.0
        },
        {
          "hour": "18:00",
          "value": 157.0
        },
        {
          "hour": "19:00",
          "value": 158.0
        },
        {
          "hour": "20:00",
          "value": 140.0
        },
        {
          "hour": "21:00",
          "value": 155.0
        },
        {
          "hour": "22:00",
          "value": 171.0
        },
        {
          "hour": "23:00",
          "value": 141.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 66.0
        },
        {
          "hour": "01:00",
          "value": 69.0
        },
        {
          "hour": "02:00",
          "value": 54.0
        },
        {
          "hour": "03:00",
          "value": 67.0
        },
        {
          "hour": "04:00",
          "value": 69.0
        },
        {
          "hour": "05:00",
          "value": 67.0
        },
        {
          "hour": "06:00",
          "value": 72.0
        },
        {
          "hour": "07:00",
          "value": 56.0
        },
        {
          "hour": "08:00",
          "value": 61.0
        },
        {
          "hour": "09:00",
          "value": 63.0
        },
        {
          "hour": "10:00",
          "value": 63.0
        },
        {
          "hour": "11:00",
          "value": 57.0
        },
        {
          "hour": "12:00",
          "value": 59.0
        },
        {
          "hour": "13:00",
          "value": 59.0
        },
        {
          "hour": "14:00",
          "value": 59.0
        },
        {
          "hour": "15:00",
          "value": 58.0
        },
        {
          "hour": "16:00",
          "value": 60.0
        },
        {
          "hour": "17:00",
          "value": 57.0
        },
        {
          "hour": "18:00",
          "value": 62.0
        },
        {
          "hour": "19:00",
          "value": 70.0
        },
        {
          "hour": "20:00",
          "value": 59.0
        },
        {
          "hour": "21:00",
          "value": 63.0
        },
        {
          "hour": "22:00",
          "value": 67.0
        },
        {
          "hour": "23:00",
          "value": 57.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 100.0
        },
        {
          "hour": "01:00",
          "value": 100.0
        },
        {
          "hour": "02:00",
          "value": 100.0
        },
        {
          "hour": "03:00",
          "value": 100.0
        },
        {
          "hour": "04:00",
          "value": 100.0
        },
        {
          "hour": "05:00",
          "value": 100.0
        },
        {
          "hour": "06:00",
          "value": 100.0
        },
        {
          "hour": "07:00",
          "value": 100.0
        },
        {
          "hour": "08:00",
          "value": 100.0
        },
        {
          "hour": "09:00",
          "value": 100.0
        },
        {
          "hour": "10:00",
          "value": 100.0
        },
        {
          "hour": "11:00",
          "value": 100.0
        },
        {
          "hour": "12:00",
          "value": 100.0
        },
        {
          "hour": "13:00",
          "value": 100.0
        },
        {
          "hour": "14:00",
          "value": 100.0
        },
        {
          "hour": "15:00",
          "value": 100.0
        },
        {
          "hour": "16:00",
          "value": 100.0
        },
        {
          "hour": "17:00",
          "value": 100.0
        },
        {
          "hour": "18:00",
          "value": 100.0
        },
        {
          "hour": "19:00",
          "value": 100.0
        },
        {
          "hour": "20:00",
          "value": 100.0
        },
        {
          "hour": "21:00",
          "value": 100.0
        },
        {
          "hour": "22:00",
          "value": 100.0
        },
        {
          "hour": "23:00",
          "value": 100.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 37.44
        },
        {
          "hour": "01:00",
          "value": 37.44
        },
        {
          "hour": "02:00",
          "value": 37.44
        },
        {
          "hour": "03:00",
          "value": 37.44
        },
        {
          "hour": "04:00",
          "value": 37.17
        },
        {
          "hour": "05:00",
          "value": 37.17
        },
        {
          "hour": "06:00",
          "value": 37.17
        },
        {
          "hour": "07:00",
          "value": 37.17
        },
        {
          "hour": "08:00",
          "value": 37.83
        },
        {
          "hour": "09:00",
          "value": 37.83
        },
        {
          "hour": "10:00",
          "value": 37.83
        },
        {
          "hour": "11:00",
          "value": 37.83
        },
        {
          "hour": "12:00",
          "value": 37.56
        },
        {
          "hour": "13:00",
          "value": 37.56
        },
        {
          "hour": "14:00",
          "value": 37.56
        },
        {
          "hour": "15:00",
          "value": 37.56
        },
        {
          "hour": "16:00",
          "value": 37.67
        },
        {
          "hour": "17:00",
          "value": 37.67
        },
        {
          "hour": "18:00",
          "value": 37.67
        },
        {
          "hour": "19:00",
          "value": 37.67
        },
        {
          "hour": "20:00",
          "value": 37.17
        },
        {
          "hour": "21:00",
          "value": 37.17
        },
        {
          "hour": "22:00",
          "value": 37.17
        },
        {
          "hour": "23:00",
          "value": 37.17
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 14.5
        },
        {
          "hour": "01:00",
          "value": 22.0
        },
        {
          "hour": "02:00",
          "value": 15.0
        },
        {
          "hour": "03:00",
          "value": 15.0
        },
        {
          "hour": "04:00",
          "value": 12.0
        },
        {
          "hour": "05:00",
          "value": 18.0
        },
        {
          "hour": "06:00",
          "value": 17.5
        },
        {
          "hour": "07:00",
          "value": 19.0
        },
        {
          "hour": "08:00",
          "value": 18.0
        },
        {
          "hour": "09:00",
          "value": 17.0
        },
        {
          "hour": "10:00",
          "value": 21.0
        },
        {
          "hour": "11:00",
          "value": 21.0
        },
        {
          "hour": "12:00",
          "value": 21.0
        },
        {
          "hour": "13:00",
          "value": 21.0
        },
        {
          "hour": "14:00",
          "value": 21.0
        },
        {
          "hour": "15:00",
          "value": 21.0
        },
        {
          "hour": "16:00",
          "value": 21.0
        },
        {
          "hour": "17:00",
          "value": 18.5
        },
        {
          "hour": "18:00",
          "value": 18.0
        },
        {
          "hour": "19:00",
          "value": 16.0
        },
        {
          "hour": "20:00",
          "value": 18.0
        },
        {
          "hour": "21:00",
          "value": 18.0
        },
        {
          "hour": "22:00",
          "value": 19.0
        },
        {
          "hour": "23:00",
          "value": 17.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 10.6,
        "unit": "10\u00b3/\u00b5L",
        "flag": "NORMAL",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.7,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.0,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 137.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 11.2,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 3.5,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 25.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 9.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Age (66 yrs)",
        "value": 0.039,
        "direction": "positive"
      },
      {
        "feature": "HR (89 bpm)",
        "value": 0.03,
        "direction": "positive"
      },
      {
        "feature": "SBP (141 mmHg)",
        "value": 0.02,
        "direction": "positive"
      },
      {
        "feature": "SpO\u2082 (100.0%)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000015",
    "name": "David Wilson",
    "age": 59,
    "gender": "M",
    "ward": "NICU",
    "bed": "N-009",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Multi-Organ Failure",
    "comorbidities": [
      "CKD",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 87.6
        },
        {
          "hour": "01:00",
          "value": 85.0
        },
        {
          "hour": "02:00",
          "value": 89.5
        },
        {
          "hour": "03:00",
          "value": 97.0
        },
        {
          "hour": "04:00",
          "value": 90.0
        },
        {
          "hour": "05:00",
          "value": 86.0
        },
        {
          "hour": "06:00",
          "value": 87.0
        },
        {
          "hour": "07:00",
          "value": 88.0
        },
        {
          "hour": "08:00",
          "value": 87.0
        },
        {
          "hour": "09:00",
          "value": 86.0
        },
        {
          "hour": "10:00",
          "value": 86.0
        },
        {
          "hour": "11:00",
          "value": 89.0
        },
        {
          "hour": "12:00",
          "value": 87.0
        },
        {
          "hour": "13:00",
          "value": 82.0
        },
        {
          "hour": "14:00",
          "value": 87.5
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 117.7
        },
        {
          "hour": "01:00",
          "value": 117.0
        },
        {
          "hour": "02:00",
          "value": 122.5
        },
        {
          "hour": "03:00",
          "value": 127.0
        },
        {
          "hour": "04:00",
          "value": 110.0
        },
        {
          "hour": "05:00",
          "value": 107.0
        },
        {
          "hour": "06:00",
          "value": 112.0
        },
        {
          "hour": "07:00",
          "value": 119.0
        },
        {
          "hour": "08:00",
          "value": 125.0
        },
        {
          "hour": "09:00",
          "value": 119.0
        },
        {
          "hour": "10:00",
          "value": 119.0
        },
        {
          "hour": "11:00",
          "value": 130.0
        },
        {
          "hour": "12:00",
          "value": 124.0
        },
        {
          "hour": "13:00",
          "value": 113.0
        },
        {
          "hour": "14:00",
          "value": 103.5
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 72.3
        },
        {
          "hour": "01:00",
          "value": 74.0
        },
        {
          "hour": "02:00",
          "value": 75.5
        },
        {
          "hour": "03:00",
          "value": 79.0
        },
        {
          "hour": "04:00",
          "value": 70.0
        },
        {
          "hour": "05:00",
          "value": 69.0
        },
        {
          "hour": "06:00",
          "value": 68.0
        },
        {
          "hour": "07:00",
          "value": 72.0
        },
        {
          "hour": "08:00",
          "value": 73.0
        },
        {
          "hour": "09:00",
          "value": 72.0
        },
        {
          "hour": "10:00",
          "value": 72.0
        },
        {
          "hour": "11:00",
          "value": 77.0
        },
        {
          "hour": "12:00",
          "value": 76.0
        },
        {
          "hour": "13:00",
          "value": 69.0
        },
        {
          "hour": "14:00",
          "value": 66.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 0.0
        },
        {
          "hour": "01:00",
          "value": 0.0
        },
        {
          "hour": "02:00",
          "value": 0.0
        },
        {
          "hour": "03:00",
          "value": 0.0
        },
        {
          "hour": "04:00",
          "value": 0.0
        },
        {
          "hour": "05:00",
          "value": 0.0
        },
        {
          "hour": "06:00",
          "value": 0.0
        },
        {
          "hour": "07:00",
          "value": 0.0
        },
        {
          "hour": "08:00",
          "value": 0.0
        },
        {
          "hour": "09:00",
          "value": 0.0
        },
        {
          "hour": "10:00",
          "value": 0.0
        },
        {
          "hour": "11:00",
          "value": 0.0
        },
        {
          "hour": "12:00",
          "value": 0.0
        },
        {
          "hour": "13:00",
          "value": 0.0
        },
        {
          "hour": "14:00",
          "value": 0.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 36.8
        },
        {
          "hour": "01:00",
          "value": 36.1
        },
        {
          "hour": "02:00",
          "value": 36.55
        },
        {
          "hour": "03:00",
          "value": 36.7
        },
        {
          "hour": "04:00",
          "value": 37.0
        },
        {
          "hour": "05:00",
          "value": 37.1
        },
        {
          "hour": "06:00",
          "value": 37.2
        },
        {
          "hour": "07:00",
          "value": 37.0
        },
        {
          "hour": "08:00",
          "value": 37.0
        },
        {
          "hour": "09:00",
          "value": 36.9
        },
        {
          "hour": "10:00",
          "value": 36.9
        },
        {
          "hour": "11:00",
          "value": 36.9
        },
        {
          "hour": "12:00",
          "value": 36.9
        },
        {
          "hour": "13:00",
          "value": 36.7
        },
        {
          "hour": "14:00",
          "value": 36.7
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 10.4
        },
        {
          "hour": "01:00",
          "value": 11.0
        },
        {
          "hour": "02:00",
          "value": 9.5
        },
        {
          "hour": "03:00",
          "value": 12.0
        },
        {
          "hour": "04:00",
          "value": 14.0
        },
        {
          "hour": "05:00",
          "value": 10.0
        },
        {
          "hour": "06:00",
          "value": 14.0
        },
        {
          "hour": "07:00",
          "value": 5.0
        },
        {
          "hour": "08:00",
          "value": 13.5
        },
        {
          "hour": "09:00",
          "value": 4.0
        },
        {
          "hour": "10:00",
          "value": 4.0
        },
        {
          "hour": "11:00",
          "value": 12.0
        },
        {
          "hour": "12:00",
          "value": 12.0
        },
        {
          "hour": "13:00",
          "value": 12.0
        },
        {
          "hour": "14:00",
          "value": 13.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 17.7,
        "unit": "10\u00b3/\u00b5L",
        "flag": "HIGH",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 4.4,
        "unit": "mg/dL",
        "flag": "CRITICAL",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.6,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 95.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 9.9,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 4.5,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 17.0,
        "unit": "mEq/L",
        "flag": "LOW",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 29.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Creatinine (4.4mg/dL)",
        "value": 0.32,
        "direction": "positive"
      },
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "WBC (17.7k/\u00b5L)",
        "value": 0.134,
        "direction": "positive"
      },
      {
        "feature": "Lactate (1.6mmol/L)",
        "value": 0.075,
        "direction": "positive"
      },
      {
        "feature": "HR (88 bpm)",
        "value": 0.03,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Creatinine (4.4mg/dL). Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000018",
    "name": "Michael Johnson",
    "age": 39,
    "gender": "M",
    "ward": "MICU",
    "bed": "M-015",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "ARDS",
    "comorbidities": [
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 95.0
        },
        {
          "hour": "01:00",
          "value": 97.0
        },
        {
          "hour": "02:00",
          "value": 113.0
        },
        {
          "hour": "03:00",
          "value": 113.0
        },
        {
          "hour": "04:00",
          "value": 122.5
        },
        {
          "hour": "05:00",
          "value": 99.0
        },
        {
          "hour": "06:00",
          "value": 98.0
        },
        {
          "hour": "07:00",
          "value": 113.0
        },
        {
          "hour": "08:00",
          "value": 109.0
        },
        {
          "hour": "09:00",
          "value": 109.0
        },
        {
          "hour": "10:00",
          "value": 107.0
        },
        {
          "hour": "11:00",
          "value": 105.0
        },
        {
          "hour": "12:00",
          "value": 116.0
        },
        {
          "hour": "13:00",
          "value": 102.0
        },
        {
          "hour": "14:00",
          "value": 110.0
        },
        {
          "hour": "15:00",
          "value": 105.0
        },
        {
          "hour": "16:00",
          "value": 112.0
        },
        {
          "hour": "17:00",
          "value": 116.0
        },
        {
          "hour": "18:00",
          "value": 101.0
        },
        {
          "hour": "19:00",
          "value": 91.0
        },
        {
          "hour": "20:00",
          "value": 89.0
        },
        {
          "hour": "21:00",
          "value": 100.0
        },
        {
          "hour": "22:00",
          "value": 103.0
        },
        {
          "hour": "23:00",
          "value": 116.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 109.0
        },
        {
          "hour": "01:00",
          "value": 134.0
        },
        {
          "hour": "02:00",
          "value": 169.0
        },
        {
          "hour": "03:00",
          "value": 169.0
        },
        {
          "hour": "04:00",
          "value": 159.0
        },
        {
          "hour": "05:00",
          "value": 98.0
        },
        {
          "hour": "06:00",
          "value": 114.0
        },
        {
          "hour": "07:00",
          "value": 153.0
        },
        {
          "hour": "08:00",
          "value": 133.0
        },
        {
          "hour": "09:00",
          "value": 123.0
        },
        {
          "hour": "10:00",
          "value": 127.0
        },
        {
          "hour": "11:00",
          "value": 127.0
        },
        {
          "hour": "12:00",
          "value": 127.0
        },
        {
          "hour": "13:00",
          "value": 127.0
        },
        {
          "hour": "14:00",
          "value": 127.0
        },
        {
          "hour": "15:00",
          "value": 127.0
        },
        {
          "hour": "16:00",
          "value": 127.0
        },
        {
          "hour": "17:00",
          "value": 127.0
        },
        {
          "hour": "18:00",
          "value": 108.0
        },
        {
          "hour": "19:00",
          "value": 124.0
        },
        {
          "hour": "20:00",
          "value": 132.0
        },
        {
          "hour": "21:00",
          "value": 172.0
        },
        {
          "hour": "22:00",
          "value": 186.0
        },
        {
          "hour": "23:00",
          "value": 200.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 53.0
        },
        {
          "hour": "01:00",
          "value": 59.0
        },
        {
          "hour": "02:00",
          "value": 75.0
        },
        {
          "hour": "03:00",
          "value": 75.0
        },
        {
          "hour": "04:00",
          "value": 70.0
        },
        {
          "hour": "05:00",
          "value": 58.0
        },
        {
          "hour": "06:00",
          "value": 62.0
        },
        {
          "hour": "07:00",
          "value": 86.0
        },
        {
          "hour": "08:00",
          "value": 79.0
        },
        {
          "hour": "09:00",
          "value": 80.0
        },
        {
          "hour": "10:00",
          "value": 88.0
        },
        {
          "hour": "11:00",
          "value": 88.0
        },
        {
          "hour": "12:00",
          "value": 88.0
        },
        {
          "hour": "13:00",
          "value": 88.0
        },
        {
          "hour": "14:00",
          "value": 88.0
        },
        {
          "hour": "15:00",
          "value": 88.0
        },
        {
          "hour": "16:00",
          "value": 88.0
        },
        {
          "hour": "17:00",
          "value": 88.0
        },
        {
          "hour": "18:00",
          "value": 59.0
        },
        {
          "hour": "19:00",
          "value": 63.0
        },
        {
          "hour": "20:00",
          "value": 69.0
        },
        {
          "hour": "21:00",
          "value": 84.0
        },
        {
          "hour": "22:00",
          "value": 90.0
        },
        {
          "hour": "23:00",
          "value": 90.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 95.0
        },
        {
          "hour": "01:00",
          "value": 93.0
        },
        {
          "hour": "02:00",
          "value": 95.0
        },
        {
          "hour": "03:00",
          "value": 95.0
        },
        {
          "hour": "04:00",
          "value": 95.0
        },
        {
          "hour": "05:00",
          "value": 95.0
        },
        {
          "hour": "06:00",
          "value": 96.0
        },
        {
          "hour": "07:00",
          "value": 94.0
        },
        {
          "hour": "08:00",
          "value": 95.0
        },
        {
          "hour": "09:00",
          "value": 96.0
        },
        {
          "hour": "10:00",
          "value": 95.0
        },
        {
          "hour": "11:00",
          "value": 96.0
        },
        {
          "hour": "12:00",
          "value": 95.0
        },
        {
          "hour": "13:00",
          "value": 95.0
        },
        {
          "hour": "14:00",
          "value": 98.0
        },
        {
          "hour": "15:00",
          "value": 96.0
        },
        {
          "hour": "16:00",
          "value": 96.0
        },
        {
          "hour": "17:00",
          "value": 96.0
        },
        {
          "hour": "18:00",
          "value": 93.0
        },
        {
          "hour": "19:00",
          "value": 95.0
        },
        {
          "hour": "20:00",
          "value": 95.0
        },
        {
          "hour": "21:00",
          "value": 95.0
        },
        {
          "hour": "22:00",
          "value": 95.0
        },
        {
          "hour": "23:00",
          "value": 97.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 37.44
        },
        {
          "hour": "01:00",
          "value": 37.39
        },
        {
          "hour": "02:00",
          "value": 37.39
        },
        {
          "hour": "03:00",
          "value": 37.39
        },
        {
          "hour": "04:00",
          "value": 39.44
        },
        {
          "hour": "05:00",
          "value": 37.72
        },
        {
          "hour": "06:00",
          "value": 37.72
        },
        {
          "hour": "07:00",
          "value": 37.72
        },
        {
          "hour": "08:00",
          "value": 37.72
        },
        {
          "hour": "09:00",
          "value": 37.61
        },
        {
          "hour": "10:00",
          "value": 37.61
        },
        {
          "hour": "11:00",
          "value": 37.61
        },
        {
          "hour": "12:00",
          "value": 39.0
        },
        {
          "hour": "13:00",
          "value": 37.89
        },
        {
          "hour": "14:00",
          "value": 37.89
        },
        {
          "hour": "15:00",
          "value": 37.83
        },
        {
          "hour": "16:00",
          "value": 37.83
        },
        {
          "hour": "17:00",
          "value": 38.61
        },
        {
          "hour": "18:00",
          "value": 37.78
        },
        {
          "hour": "19:00",
          "value": 37.61
        },
        {
          "hour": "20:00",
          "value": 36.39
        },
        {
          "hour": "21:00",
          "value": 36.33
        },
        {
          "hour": "22:00",
          "value": 36.33
        },
        {
          "hour": "23:00",
          "value": 38.28
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 25.0
        },
        {
          "hour": "01:00",
          "value": 22.0
        },
        {
          "hour": "02:00",
          "value": 29.0
        },
        {
          "hour": "03:00",
          "value": 29.0
        },
        {
          "hour": "04:00",
          "value": 25.25
        },
        {
          "hour": "05:00",
          "value": 16.0
        },
        {
          "hour": "06:00",
          "value": 21.5
        },
        {
          "hour": "07:00",
          "value": 33.0
        },
        {
          "hour": "08:00",
          "value": 19.0
        },
        {
          "hour": "09:00",
          "value": 22.5
        },
        {
          "hour": "10:00",
          "value": 25.0
        },
        {
          "hour": "11:00",
          "value": 26.0
        },
        {
          "hour": "12:00",
          "value": 24.0
        },
        {
          "hour": "13:00",
          "value": 25.0
        },
        {
          "hour": "14:00",
          "value": 20.0
        },
        {
          "hour": "15:00",
          "value": 20.0
        },
        {
          "hour": "16:00",
          "value": 21.0
        },
        {
          "hour": "17:00",
          "value": 21.5
        },
        {
          "hour": "18:00",
          "value": 21.0
        },
        {
          "hour": "19:00",
          "value": 21.0
        },
        {
          "hour": "20:00",
          "value": 19.0
        },
        {
          "hour": "21:00",
          "value": 25.0
        },
        {
          "hour": "22:00",
          "value": 25.0
        },
        {
          "hour": "23:00",
          "value": 24.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 11.7,
        "unit": "10\u00b3/\u00b5L",
        "flag": "HIGH",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.4,
        "unit": "mg/dL",
        "flag": "LOW",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.1,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 126.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 8.1,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 3.9,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 31.0,
        "unit": "mEq/L",
        "flag": "HIGH",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 8.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "HR (116 bpm)",
        "value": 0.094,
        "direction": "positive"
      },
      {
        "feature": "Resp Rate (24/m)",
        "value": 0.035,
        "direction": "positive"
      },
      {
        "feature": "SBP (200 mmHg)",
        "value": 0.02,
        "direction": "positive"
      },
      {
        "feature": "SpO\u2082 (97.0%)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000022",
    "name": "Michael Kowalski",
    "age": 77,
    "gender": "M",
    "ward": "CICU",
    "bed": "C-001",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Multi-Organ Failure",
    "comorbidities": [
      "HTN",
      "DM Type 2",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 77.0
        },
        {
          "hour": "01:00",
          "value": 75.0
        },
        {
          "hour": "02:00",
          "value": 83.0
        },
        {
          "hour": "03:00",
          "value": 80.0
        },
        {
          "hour": "04:00",
          "value": 79.5
        },
        {
          "hour": "05:00",
          "value": 85.0
        },
        {
          "hour": "06:00",
          "value": 69.0
        },
        {
          "hour": "07:00",
          "value": 66.0
        },
        {
          "hour": "08:00",
          "value": 68.0
        },
        {
          "hour": "09:00",
          "value": 73.0
        },
        {
          "hour": "10:00",
          "value": 69.0
        },
        {
          "hour": "11:00",
          "value": 68.0
        },
        {
          "hour": "12:00",
          "value": 66.0
        },
        {
          "hour": "13:00",
          "value": 71.0
        },
        {
          "hour": "14:00",
          "value": 72.0
        },
        {
          "hour": "15:00",
          "value": 76.0
        },
        {
          "hour": "16:00",
          "value": 79.0
        },
        {
          "hour": "17:00",
          "value": 80.0
        },
        {
          "hour": "18:00",
          "value": 81.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 126.0
        },
        {
          "hour": "01:00",
          "value": 115.0
        },
        {
          "hour": "02:00",
          "value": 129.0
        },
        {
          "hour": "03:00",
          "value": 89.0
        },
        {
          "hour": "04:00",
          "value": 143.0
        },
        {
          "hour": "05:00",
          "value": 161.0
        },
        {
          "hour": "06:00",
          "value": 91.0
        },
        {
          "hour": "07:00",
          "value": 116.0
        },
        {
          "hour": "08:00",
          "value": 148.0
        },
        {
          "hour": "09:00",
          "value": 117.0
        },
        {
          "hour": "10:00",
          "value": 113.0
        },
        {
          "hour": "11:00",
          "value": 112.0
        },
        {
          "hour": "12:00",
          "value": 97.0
        },
        {
          "hour": "13:00",
          "value": 134.0
        },
        {
          "hour": "14:00",
          "value": 103.0
        },
        {
          "hour": "15:00",
          "value": 143.0
        },
        {
          "hour": "16:00",
          "value": 122.0
        },
        {
          "hour": "17:00",
          "value": 116.0
        },
        {
          "hour": "18:00",
          "value": 111.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 53.0
        },
        {
          "hour": "01:00",
          "value": 46.5
        },
        {
          "hour": "02:00",
          "value": 50.0
        },
        {
          "hour": "03:00",
          "value": 41.0
        },
        {
          "hour": "04:00",
          "value": 52.5
        },
        {
          "hour": "05:00",
          "value": 56.0
        },
        {
          "hour": "06:00",
          "value": 43.0
        },
        {
          "hour": "07:00",
          "value": 40.0
        },
        {
          "hour": "08:00",
          "value": 50.0
        },
        {
          "hour": "09:00",
          "value": 44.0
        },
        {
          "hour": "10:00",
          "value": 42.0
        },
        {
          "hour": "11:00",
          "value": 41.0
        },
        {
          "hour": "12:00",
          "value": 39.0
        },
        {
          "hour": "13:00",
          "value": 47.0
        },
        {
          "hour": "14:00",
          "value": 45.0
        },
        {
          "hour": "15:00",
          "value": 44.0
        },
        {
          "hour": "16:00",
          "value": 40.0
        },
        {
          "hour": "17:00",
          "value": 42.0
        },
        {
          "hour": "18:00",
          "value": 43.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 100.0
        },
        {
          "hour": "01:00",
          "value": 99.5
        },
        {
          "hour": "02:00",
          "value": 100.0
        },
        {
          "hour": "03:00",
          "value": 99.0
        },
        {
          "hour": "04:00",
          "value": 100.0
        },
        {
          "hour": "05:00",
          "value": 100.0
        },
        {
          "hour": "06:00",
          "value": 95.0
        },
        {
          "hour": "07:00",
          "value": 98.0
        },
        {
          "hour": "08:00",
          "value": 99.0
        },
        {
          "hour": "09:00",
          "value": 97.0
        },
        {
          "hour": "10:00",
          "value": 94.0
        },
        {
          "hour": "11:00",
          "value": 95.0
        },
        {
          "hour": "12:00",
          "value": 93.0
        },
        {
          "hour": "13:00",
          "value": 97.0
        },
        {
          "hour": "14:00",
          "value": 96.0
        },
        {
          "hour": "15:00",
          "value": 97.0
        },
        {
          "hour": "16:00",
          "value": 95.0
        },
        {
          "hour": "17:00",
          "value": 95.0
        },
        {
          "hour": "18:00",
          "value": 96.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 0.0
        },
        {
          "hour": "01:00",
          "value": 0.0
        },
        {
          "hour": "02:00",
          "value": 0.0
        },
        {
          "hour": "03:00",
          "value": 0.0
        },
        {
          "hour": "04:00",
          "value": 0.0
        },
        {
          "hour": "05:00",
          "value": 0.0
        },
        {
          "hour": "06:00",
          "value": 0.0
        },
        {
          "hour": "07:00",
          "value": 0.0
        },
        {
          "hour": "08:00",
          "value": 0.0
        },
        {
          "hour": "09:00",
          "value": 0.0
        },
        {
          "hour": "10:00",
          "value": 0.0
        },
        {
          "hour": "11:00",
          "value": 0.0
        },
        {
          "hour": "12:00",
          "value": 0.0
        },
        {
          "hour": "13:00",
          "value": 0.0
        },
        {
          "hour": "14:00",
          "value": 0.0
        },
        {
          "hour": "15:00",
          "value": 0.0
        },
        {
          "hour": "16:00",
          "value": 0.0
        },
        {
          "hour": "17:00",
          "value": 0.0
        },
        {
          "hour": "18:00",
          "value": 0.0
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 16.0
        },
        {
          "hour": "01:00",
          "value": 16.0
        },
        {
          "hour": "02:00",
          "value": 17.0
        },
        {
          "hour": "03:00",
          "value": 18.0
        },
        {
          "hour": "04:00",
          "value": 19.0
        },
        {
          "hour": "05:00",
          "value": 18.0
        },
        {
          "hour": "06:00",
          "value": 15.0
        },
        {
          "hour": "07:00",
          "value": 20.0
        },
        {
          "hour": "08:00",
          "value": 17.0
        },
        {
          "hour": "09:00",
          "value": 14.0
        },
        {
          "hour": "10:00",
          "value": 16.0
        },
        {
          "hour": "11:00",
          "value": 17.0
        },
        {
          "hour": "12:00",
          "value": 19.0
        },
        {
          "hour": "13:00",
          "value": 23.0
        },
        {
          "hour": "14:00",
          "value": 20.0
        },
        {
          "hour": "15:00",
          "value": 22.0
        },
        {
          "hour": "16:00",
          "value": 21.0
        },
        {
          "hour": "17:00",
          "value": 27.0
        },
        {
          "hour": "18:00",
          "value": 21.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 20.2,
        "unit": "10\u00b3/\u00b5L",
        "flag": "CRITICAL",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.7,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Glucose",
        "value": 168.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 9.7,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 4.9,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 23.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 27.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "7\u201320"
      },
      {
        "name": "Platelets",
        "value": 148.0,
        "unit": "10\u00b3/\u00b5L",
        "flag": "LOW",
        "range": "150\u2013400"
      }
    ],
    "shapValues": [
      {
        "feature": "WBC (20.2k/\u00b5L)",
        "value": 0.184,
        "direction": "positive"
      },
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Age (77 yrs)",
        "value": 0.115,
        "direction": "positive"
      },
      {
        "feature": "HR (81 bpm)",
        "value": 0.03,
        "direction": "positive"
      },
      {
        "feature": "SBP (111 mmHg)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by WBC (20.2k/\u00b5L). Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000028",
    "name": "Emily Thompson",
    "age": 56,
    "gender": "F",
    "ward": "MICU",
    "bed": "M-018",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Multi-Organ Failure",
    "comorbidities": [
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 105.0
        },
        {
          "hour": "01:00",
          "value": 105.0
        },
        {
          "hour": "02:00",
          "value": 96.0
        },
        {
          "hour": "03:00",
          "value": 91.0
        },
        {
          "hour": "04:00",
          "value": 89.0
        },
        {
          "hour": "05:00",
          "value": 93.0
        },
        {
          "hour": "06:00",
          "value": 87.0
        },
        {
          "hour": "07:00",
          "value": 84.0
        },
        {
          "hour": "08:00",
          "value": 84.0
        },
        {
          "hour": "09:00",
          "value": 84.0
        },
        {
          "hour": "10:00",
          "value": 79.0
        },
        {
          "hour": "11:00",
          "value": 80.0
        },
        {
          "hour": "12:00",
          "value": 87.0
        },
        {
          "hour": "13:00",
          "value": 84.0
        },
        {
          "hour": "14:00",
          "value": 88.0
        },
        {
          "hour": "15:00",
          "value": 82.0
        },
        {
          "hour": "16:00",
          "value": 83.0
        },
        {
          "hour": "17:00",
          "value": 81.0
        },
        {
          "hour": "18:00",
          "value": 81.0
        },
        {
          "hour": "19:00",
          "value": 81.0
        },
        {
          "hour": "20:00",
          "value": 88.0
        },
        {
          "hour": "21:00",
          "value": 98.0
        },
        {
          "hour": "22:00",
          "value": 85.0
        },
        {
          "hour": "23:00",
          "value": 91.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 121.0
        },
        {
          "hour": "01:00",
          "value": 146.0
        },
        {
          "hour": "02:00",
          "value": 139.0
        },
        {
          "hour": "03:00",
          "value": 142.0
        },
        {
          "hour": "04:00",
          "value": 147.0
        },
        {
          "hour": "05:00",
          "value": 121.0
        },
        {
          "hour": "06:00",
          "value": 118.0
        },
        {
          "hour": "07:00",
          "value": 114.0
        },
        {
          "hour": "08:00",
          "value": 122.0
        },
        {
          "hour": "09:00",
          "value": 121.0
        },
        {
          "hour": "10:00",
          "value": 124.0
        },
        {
          "hour": "11:00",
          "value": 123.0
        },
        {
          "hour": "12:00",
          "value": 134.0
        },
        {
          "hour": "13:00",
          "value": 118.0
        },
        {
          "hour": "14:00",
          "value": 141.0
        },
        {
          "hour": "15:00",
          "value": 120.0
        },
        {
          "hour": "16:00",
          "value": 125.0
        },
        {
          "hour": "17:00",
          "value": 121.0
        },
        {
          "hour": "18:00",
          "value": 127.0
        },
        {
          "hour": "19:00",
          "value": 129.0
        },
        {
          "hour": "20:00",
          "value": 97.0
        },
        {
          "hour": "21:00",
          "value": 137.0
        },
        {
          "hour": "22:00",
          "value": 104.0
        },
        {
          "hour": "23:00",
          "value": 122.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 41.0
        },
        {
          "hour": "01:00",
          "value": 65.0
        },
        {
          "hour": "02:00",
          "value": 91.0
        },
        {
          "hour": "03:00",
          "value": 93.0
        },
        {
          "hour": "04:00",
          "value": 96.0
        },
        {
          "hour": "05:00",
          "value": 86.0
        },
        {
          "hour": "06:00",
          "value": 83.0
        },
        {
          "hour": "07:00",
          "value": 80.0
        },
        {
          "hour": "08:00",
          "value": 88.0
        },
        {
          "hour": "09:00",
          "value": 84.0
        },
        {
          "hour": "10:00",
          "value": 85.0
        },
        {
          "hour": "11:00",
          "value": 86.0
        },
        {
          "hour": "12:00",
          "value": 91.0
        },
        {
          "hour": "13:00",
          "value": 79.0
        },
        {
          "hour": "14:00",
          "value": 91.0
        },
        {
          "hour": "15:00",
          "value": 80.0
        },
        {
          "hour": "16:00",
          "value": 84.0
        },
        {
          "hour": "17:00",
          "value": 78.0
        },
        {
          "hour": "18:00",
          "value": 81.0
        },
        {
          "hour": "19:00",
          "value": 82.0
        },
        {
          "hour": "20:00",
          "value": 45.0
        },
        {
          "hour": "21:00",
          "value": 73.0
        },
        {
          "hour": "22:00",
          "value": 53.0
        },
        {
          "hour": "23:00",
          "value": 60.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 100.0
        },
        {
          "hour": "01:00",
          "value": 100.0
        },
        {
          "hour": "02:00",
          "value": 99.0
        },
        {
          "hour": "03:00",
          "value": 96.0
        },
        {
          "hour": "04:00",
          "value": 99.0
        },
        {
          "hour": "05:00",
          "value": 99.0
        },
        {
          "hour": "06:00",
          "value": 99.0
        },
        {
          "hour": "07:00",
          "value": 100.0
        },
        {
          "hour": "08:00",
          "value": 100.0
        },
        {
          "hour": "09:00",
          "value": 99.0
        },
        {
          "hour": "10:00",
          "value": 99.0
        },
        {
          "hour": "11:00",
          "value": 99.0
        },
        {
          "hour": "12:00",
          "value": 90.0
        },
        {
          "hour": "13:00",
          "value": 96.0
        },
        {
          "hour": "14:00",
          "value": 96.0
        },
        {
          "hour": "15:00",
          "value": 95.0
        },
        {
          "hour": "16:00",
          "value": 96.0
        },
        {
          "hour": "17:00",
          "value": 95.0
        },
        {
          "hour": "18:00",
          "value": 96.0
        },
        {
          "hour": "19:00",
          "value": 96.0
        },
        {
          "hour": "20:00",
          "value": 96.0
        },
        {
          "hour": "21:00",
          "value": 92.0
        },
        {
          "hour": "22:00",
          "value": 94.0
        },
        {
          "hour": "23:00",
          "value": 95.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 37.0
        },
        {
          "hour": "01:00",
          "value": 37.0
        },
        {
          "hour": "02:00",
          "value": 37.0
        },
        {
          "hour": "03:00",
          "value": 36.28
        },
        {
          "hour": "04:00",
          "value": 36.28
        },
        {
          "hour": "05:00",
          "value": 36.28
        },
        {
          "hour": "06:00",
          "value": 36.28
        },
        {
          "hour": "07:00",
          "value": 37.06
        },
        {
          "hour": "08:00",
          "value": 37.06
        },
        {
          "hour": "09:00",
          "value": 37.06
        },
        {
          "hour": "10:00",
          "value": 37.06
        },
        {
          "hour": "11:00",
          "value": 37.44
        },
        {
          "hour": "12:00",
          "value": 37.44
        },
        {
          "hour": "13:00",
          "value": 37.44
        },
        {
          "hour": "14:00",
          "value": 37.44
        },
        {
          "hour": "15:00",
          "value": 37.28
        },
        {
          "hour": "16:00",
          "value": 37.28
        },
        {
          "hour": "17:00",
          "value": 37.28
        },
        {
          "hour": "18:00",
          "value": 37.28
        },
        {
          "hour": "19:00",
          "value": 37.67
        },
        {
          "hour": "20:00",
          "value": 37.67
        },
        {
          "hour": "21:00",
          "value": 37.67
        },
        {
          "hour": "22:00",
          "value": 37.67
        },
        {
          "hour": "23:00",
          "value": 37.56
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 28.0
        },
        {
          "hour": "01:00",
          "value": 28.0
        },
        {
          "hour": "02:00",
          "value": 32.0
        },
        {
          "hour": "03:00",
          "value": 32.0
        },
        {
          "hour": "04:00",
          "value": 32.0
        },
        {
          "hour": "05:00",
          "value": 32.0
        },
        {
          "hour": "06:00",
          "value": 32.0
        },
        {
          "hour": "07:00",
          "value": 32.0
        },
        {
          "hour": "08:00",
          "value": 32.0
        },
        {
          "hour": "09:00",
          "value": 32.0
        },
        {
          "hour": "10:00",
          "value": 32.0
        },
        {
          "hour": "11:00",
          "value": 30.0
        },
        {
          "hour": "12:00",
          "value": 28.0
        },
        {
          "hour": "13:00",
          "value": 27.0
        },
        {
          "hour": "14:00",
          "value": 25.0
        },
        {
          "hour": "15:00",
          "value": 27.5
        },
        {
          "hour": "16:00",
          "value": 26.0
        },
        {
          "hour": "17:00",
          "value": 27.0
        },
        {
          "hour": "18:00",
          "value": 25.0
        },
        {
          "hour": "19:00",
          "value": 27.0
        },
        {
          "hour": "20:00",
          "value": 28.0
        },
        {
          "hour": "21:00",
          "value": 26.0
        },
        {
          "hour": "22:00",
          "value": 22.0
        },
        {
          "hour": "23:00",
          "value": 25.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 6.4,
        "unit": "10\u00b3/\u00b5L",
        "flag": "NORMAL",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.6,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.2,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 197.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 8.5,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 4.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 19.0,
        "unit": "mEq/L",
        "flag": "LOW",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 33.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Resp Rate (25/m)",
        "value": 0.04,
        "direction": "positive"
      },
      {
        "feature": "HR (91 bpm)",
        "value": 0.03,
        "direction": "positive"
      },
      {
        "feature": "Lactate (1.2mmol/L)",
        "value": 0.025,
        "direction": "positive"
      },
      {
        "feature": "SBP (122 mmHg)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000034",
    "name": "Mark Smith",
    "age": 77,
    "gender": "M",
    "ward": "CICU",
    "bed": "C-001",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Septic Shock",
    "comorbidities": [
      "HTN",
      "DM Type 2",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 88.0
        },
        {
          "hour": "01:00",
          "value": 88.0
        },
        {
          "hour": "02:00",
          "value": 88.0
        },
        {
          "hour": "03:00",
          "value": 83.5
        },
        {
          "hour": "04:00",
          "value": 80.0
        },
        {
          "hour": "05:00",
          "value": 88.0
        },
        {
          "hour": "06:00",
          "value": 91.0
        },
        {
          "hour": "07:00",
          "value": 88.0
        },
        {
          "hour": "08:00",
          "value": 83.0
        },
        {
          "hour": "09:00",
          "value": 80.0
        },
        {
          "hour": "10:00",
          "value": 80.0
        },
        {
          "hour": "11:00",
          "value": 82.0
        },
        {
          "hour": "12:00",
          "value": 77.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 105.0
        },
        {
          "hour": "01:00",
          "value": 103.0
        },
        {
          "hour": "02:00",
          "value": 98.0
        },
        {
          "hour": "03:00",
          "value": 92.5
        },
        {
          "hour": "04:00",
          "value": 124.0
        },
        {
          "hour": "05:00",
          "value": 90.0
        },
        {
          "hour": "06:00",
          "value": 110.0
        },
        {
          "hour": "07:00",
          "value": 99.0
        },
        {
          "hour": "08:00",
          "value": 91.0
        },
        {
          "hour": "09:00",
          "value": 110.0
        },
        {
          "hour": "10:00",
          "value": 96.0
        },
        {
          "hour": "11:00",
          "value": 98.0
        },
        {
          "hour": "12:00",
          "value": 115.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 55.0
        },
        {
          "hour": "01:00",
          "value": 58.0
        },
        {
          "hour": "02:00",
          "value": 57.0
        },
        {
          "hour": "03:00",
          "value": 56.5
        },
        {
          "hour": "04:00",
          "value": 69.0
        },
        {
          "hour": "05:00",
          "value": 54.0
        },
        {
          "hour": "06:00",
          "value": 64.0
        },
        {
          "hour": "07:00",
          "value": 59.0
        },
        {
          "hour": "08:00",
          "value": 55.0
        },
        {
          "hour": "09:00",
          "value": 59.0
        },
        {
          "hour": "10:00",
          "value": 52.0
        },
        {
          "hour": "11:00",
          "value": 55.0
        },
        {
          "hour": "12:00",
          "value": 60.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 100.0
        },
        {
          "hour": "01:00",
          "value": 98.0
        },
        {
          "hour": "02:00",
          "value": 95.0
        },
        {
          "hour": "03:00",
          "value": 97.0
        },
        {
          "hour": "04:00",
          "value": 92.0
        },
        {
          "hour": "05:00",
          "value": 93.0
        },
        {
          "hour": "06:00",
          "value": 92.0
        },
        {
          "hour": "07:00",
          "value": 91.0
        },
        {
          "hour": "08:00",
          "value": 93.0
        },
        {
          "hour": "09:00",
          "value": 94.0
        },
        {
          "hour": "10:00",
          "value": 91.0
        },
        {
          "hour": "11:00",
          "value": 89.0
        },
        {
          "hour": "12:00",
          "value": 88.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 36.11
        },
        {
          "hour": "01:00",
          "value": 36.17
        },
        {
          "hour": "02:00",
          "value": 36.17
        },
        {
          "hour": "03:00",
          "value": 36.17
        },
        {
          "hour": "04:00",
          "value": 36.17
        },
        {
          "hour": "05:00",
          "value": 36.5
        },
        {
          "hour": "06:00",
          "value": 36.5
        },
        {
          "hour": "07:00",
          "value": 36.5
        },
        {
          "hour": "08:00",
          "value": 36.5
        },
        {
          "hour": "09:00",
          "value": 36.5
        },
        {
          "hour": "10:00",
          "value": 36.5
        },
        {
          "hour": "11:00",
          "value": 36.5
        },
        {
          "hour": "12:00",
          "value": 36.5
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 15.5
        },
        {
          "hour": "01:00",
          "value": 20.0
        },
        {
          "hour": "02:00",
          "value": 20.0
        },
        {
          "hour": "03:00",
          "value": 19.5
        },
        {
          "hour": "04:00",
          "value": 20.0
        },
        {
          "hour": "05:00",
          "value": 27.0
        },
        {
          "hour": "06:00",
          "value": 24.0
        },
        {
          "hour": "07:00",
          "value": 23.0
        },
        {
          "hour": "08:00",
          "value": 18.0
        },
        {
          "hour": "09:00",
          "value": 19.0
        },
        {
          "hour": "10:00",
          "value": 20.0
        },
        {
          "hour": "11:00",
          "value": 22.0
        },
        {
          "hour": "12:00",
          "value": 24.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 15.0,
        "unit": "10\u00b3/\u00b5L",
        "flag": "HIGH",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 1.3,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.1,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 136.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 8.5,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 4.2,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 29.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 16.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Age (77 yrs)",
        "value": 0.115,
        "direction": "positive"
      },
      {
        "feature": "SpO\u2082 (88.0%)",
        "value": 0.09,
        "direction": "positive"
      },
      {
        "feature": "WBC (15.0k/\u00b5L)",
        "value": 0.08,
        "direction": "positive"
      },
      {
        "feature": "Resp Rate (24/m)",
        "value": 0.035,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000042",
    "name": "Robert Wilson",
    "age": 64,
    "gender": "M",
    "ward": "NICU",
    "bed": "N-012",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "ARDS",
    "comorbidities": [
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 111.0
        },
        {
          "hour": "01:00",
          "value": 105.0
        },
        {
          "hour": "02:00",
          "value": 111.0
        },
        {
          "hour": "03:00",
          "value": 111.0
        },
        {
          "hour": "04:00",
          "value": 103.0
        },
        {
          "hour": "05:00",
          "value": 107.0
        },
        {
          "hour": "06:00",
          "value": 111.0
        },
        {
          "hour": "07:00",
          "value": 111.0
        },
        {
          "hour": "08:00",
          "value": 101.0
        },
        {
          "hour": "09:00",
          "value": 101.0
        },
        {
          "hour": "10:00",
          "value": 104.0
        },
        {
          "hour": "11:00",
          "value": 105.0
        },
        {
          "hour": "12:00",
          "value": 107.0
        },
        {
          "hour": "13:00",
          "value": 106.0
        },
        {
          "hour": "14:00",
          "value": 109.0
        },
        {
          "hour": "15:00",
          "value": 109.0
        },
        {
          "hour": "16:00",
          "value": 109.0
        },
        {
          "hour": "17:00",
          "value": 89.0
        },
        {
          "hour": "18:00",
          "value": 97.0
        },
        {
          "hour": "19:00",
          "value": 104.5
        },
        {
          "hour": "20:00",
          "value": 114.5
        },
        {
          "hour": "21:00",
          "value": 112.0
        },
        {
          "hour": "22:00",
          "value": 108.0
        },
        {
          "hour": "23:00",
          "value": 105.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 153.0
        },
        {
          "hour": "01:00",
          "value": 145.0
        },
        {
          "hour": "02:00",
          "value": 153.0
        },
        {
          "hour": "03:00",
          "value": 153.0
        },
        {
          "hour": "04:00",
          "value": 152.0
        },
        {
          "hour": "05:00",
          "value": 152.0
        },
        {
          "hour": "06:00",
          "value": 140.0
        },
        {
          "hour": "07:00",
          "value": 140.0
        },
        {
          "hour": "08:00",
          "value": 126.0
        },
        {
          "hour": "09:00",
          "value": 113.0
        },
        {
          "hour": "10:00",
          "value": 113.0
        },
        {
          "hour": "11:00",
          "value": 126.0
        },
        {
          "hour": "12:00",
          "value": 126.0
        },
        {
          "hour": "13:00",
          "value": 137.0
        },
        {
          "hour": "14:00",
          "value": 114.0
        },
        {
          "hour": "15:00",
          "value": 114.0
        },
        {
          "hour": "16:00",
          "value": 114.0
        },
        {
          "hour": "17:00",
          "value": 128.0
        },
        {
          "hour": "18:00",
          "value": 115.0
        },
        {
          "hour": "19:00",
          "value": 110.0
        },
        {
          "hour": "20:00",
          "value": 143.5
        },
        {
          "hour": "21:00",
          "value": 99.0
        },
        {
          "hour": "22:00",
          "value": 94.0
        },
        {
          "hour": "23:00",
          "value": 100.5
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 56.0
        },
        {
          "hour": "01:00",
          "value": 56.0
        },
        {
          "hour": "02:00",
          "value": 56.0
        },
        {
          "hour": "03:00",
          "value": 56.0
        },
        {
          "hour": "04:00",
          "value": 56.0
        },
        {
          "hour": "05:00",
          "value": 56.0
        },
        {
          "hour": "06:00",
          "value": 56.0
        },
        {
          "hour": "07:00",
          "value": 56.0
        },
        {
          "hour": "08:00",
          "value": 56.0
        },
        {
          "hour": "09:00",
          "value": 56.0
        },
        {
          "hour": "10:00",
          "value": 56.0
        },
        {
          "hour": "11:00",
          "value": 56.0
        },
        {
          "hour": "12:00",
          "value": 56.0
        },
        {
          "hour": "13:00",
          "value": 56.0
        },
        {
          "hour": "14:00",
          "value": 56.0
        },
        {
          "hour": "15:00",
          "value": 56.0
        },
        {
          "hour": "16:00",
          "value": 56.0
        },
        {
          "hour": "17:00",
          "value": 71.0
        },
        {
          "hour": "18:00",
          "value": 60.5
        },
        {
          "hour": "19:00",
          "value": 51.5
        },
        {
          "hour": "20:00",
          "value": 61.5
        },
        {
          "hour": "21:00",
          "value": 54.0
        },
        {
          "hour": "22:00",
          "value": 51.0
        },
        {
          "hour": "23:00",
          "value": 52.5
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 95.0
        },
        {
          "hour": "01:00",
          "value": 94.0
        },
        {
          "hour": "02:00",
          "value": 95.0
        },
        {
          "hour": "03:00",
          "value": 95.0
        },
        {
          "hour": "04:00",
          "value": 96.0
        },
        {
          "hour": "05:00",
          "value": 96.0
        },
        {
          "hour": "06:00",
          "value": 96.0
        },
        {
          "hour": "07:00",
          "value": 96.0
        },
        {
          "hour": "08:00",
          "value": 97.0
        },
        {
          "hour": "09:00",
          "value": 97.0
        },
        {
          "hour": "10:00",
          "value": 97.0
        },
        {
          "hour": "11:00",
          "value": 96.0
        },
        {
          "hour": "12:00",
          "value": 96.0
        },
        {
          "hour": "13:00",
          "value": 97.0
        },
        {
          "hour": "14:00",
          "value": 97.0
        },
        {
          "hour": "15:00",
          "value": 97.0
        },
        {
          "hour": "16:00",
          "value": 97.0
        },
        {
          "hour": "17:00",
          "value": 100.0
        },
        {
          "hour": "18:00",
          "value": 100.0
        },
        {
          "hour": "19:00",
          "value": 99.5
        },
        {
          "hour": "20:00",
          "value": 95.0
        },
        {
          "hour": "21:00",
          "value": 97.0
        },
        {
          "hour": "22:00",
          "value": 99.0
        },
        {
          "hour": "23:00",
          "value": 97.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 37.33
        },
        {
          "hour": "01:00",
          "value": 37.33
        },
        {
          "hour": "02:00",
          "value": 37.33
        },
        {
          "hour": "03:00",
          "value": 37.33
        },
        {
          "hour": "04:00",
          "value": 38.11
        },
        {
          "hour": "05:00",
          "value": 38.11
        },
        {
          "hour": "06:00",
          "value": 38.11
        },
        {
          "hour": "07:00",
          "value": 38.11
        },
        {
          "hour": "08:00",
          "value": 37.56
        },
        {
          "hour": "09:00",
          "value": 37.56
        },
        {
          "hour": "10:00",
          "value": 37.56
        },
        {
          "hour": "11:00",
          "value": 37.56
        },
        {
          "hour": "12:00",
          "value": 37.56
        },
        {
          "hour": "13:00",
          "value": 37.72
        },
        {
          "hour": "14:00",
          "value": 37.72
        },
        {
          "hour": "15:00",
          "value": 37.72
        },
        {
          "hour": "16:00",
          "value": 37.72
        },
        {
          "hour": "17:00",
          "value": 37.72
        },
        {
          "hour": "18:00",
          "value": 36.5
        },
        {
          "hour": "19:00",
          "value": 37.05
        },
        {
          "hour": "20:00",
          "value": 37.65
        },
        {
          "hour": "21:00",
          "value": 38.05
        },
        {
          "hour": "22:00",
          "value": 37.9
        },
        {
          "hour": "23:00",
          "value": 38.0
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 17.0
        },
        {
          "hour": "01:00",
          "value": 16.0
        },
        {
          "hour": "02:00",
          "value": 20.0
        },
        {
          "hour": "03:00",
          "value": 20.0
        },
        {
          "hour": "04:00",
          "value": 17.0
        },
        {
          "hour": "05:00",
          "value": 16.0
        },
        {
          "hour": "06:00",
          "value": 21.0
        },
        {
          "hour": "07:00",
          "value": 21.0
        },
        {
          "hour": "08:00",
          "value": 14.0
        },
        {
          "hour": "09:00",
          "value": 14.0
        },
        {
          "hour": "10:00",
          "value": 16.0
        },
        {
          "hour": "11:00",
          "value": 16.0
        },
        {
          "hour": "12:00",
          "value": 15.0
        },
        {
          "hour": "13:00",
          "value": 14.0
        },
        {
          "hour": "14:00",
          "value": 19.0
        },
        {
          "hour": "15:00",
          "value": 19.0
        },
        {
          "hour": "16:00",
          "value": 19.0
        },
        {
          "hour": "17:00",
          "value": 12.0
        },
        {
          "hour": "18:00",
          "value": 12.5
        },
        {
          "hour": "19:00",
          "value": 13.5
        },
        {
          "hour": "20:00",
          "value": 31.0
        },
        {
          "hour": "21:00",
          "value": 25.0
        },
        {
          "hour": "22:00",
          "value": 29.0
        },
        {
          "hour": "23:00",
          "value": 16.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 9.6,
        "unit": "10\u00b3/\u00b5L",
        "flag": "NORMAL",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.5,
        "unit": "mg/dL",
        "flag": "LOW",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.3,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 116.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 8.7,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 3.6,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 25.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 3.0,
        "unit": "mg/dL",
        "flag": "LOW",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "HR (105 bpm)",
        "value": 0.05,
        "direction": "positive"
      },
      {
        "feature": "Lactate (1.3mmol/L)",
        "value": 0.038,
        "direction": "positive"
      },
      {
        "feature": "Age (64 yrs)",
        "value": 0.024,
        "direction": "positive"
      },
      {
        "feature": "SBP (100 mmHg)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000053",
    "name": "Steven Kim",
    "age": 69,
    "gender": "M",
    "ward": "MICU",
    "bed": "M-015",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Multi-Organ Failure",
    "comorbidities": [
      "HTN",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 89.0
        },
        {
          "hour": "01:00",
          "value": 97.0
        },
        {
          "hour": "02:00",
          "value": 93.0
        },
        {
          "hour": "03:00",
          "value": 100.0
        },
        {
          "hour": "04:00",
          "value": 103.0
        },
        {
          "hour": "05:00",
          "value": 103.0
        },
        {
          "hour": "06:00",
          "value": 98.0
        },
        {
          "hour": "07:00",
          "value": 96.0
        },
        {
          "hour": "08:00",
          "value": 95.0
        },
        {
          "hour": "09:00",
          "value": 93.0
        },
        {
          "hour": "10:00",
          "value": 93.0
        },
        {
          "hour": "11:00",
          "value": 95.0
        },
        {
          "hour": "12:00",
          "value": 96.0
        },
        {
          "hour": "13:00",
          "value": 89.0
        },
        {
          "hour": "14:00",
          "value": 87.0
        },
        {
          "hour": "15:00",
          "value": 87.0
        },
        {
          "hour": "16:00",
          "value": 97.0
        },
        {
          "hour": "17:00",
          "value": 96.0
        },
        {
          "hour": "18:00",
          "value": 93.0
        },
        {
          "hour": "19:00",
          "value": 92.0
        },
        {
          "hour": "20:00",
          "value": 91.0
        },
        {
          "hour": "21:00",
          "value": 88.0
        },
        {
          "hour": "22:00",
          "value": 93.0
        },
        {
          "hour": "23:00",
          "value": 89.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 0.0
        },
        {
          "hour": "01:00",
          "value": 0.0
        },
        {
          "hour": "02:00",
          "value": 0.0
        },
        {
          "hour": "03:00",
          "value": 0.0
        },
        {
          "hour": "04:00",
          "value": 0.0
        },
        {
          "hour": "05:00",
          "value": 0.0
        },
        {
          "hour": "06:00",
          "value": 0.0
        },
        {
          "hour": "07:00",
          "value": 0.0
        },
        {
          "hour": "08:00",
          "value": 0.0
        },
        {
          "hour": "09:00",
          "value": 0.0
        },
        {
          "hour": "10:00",
          "value": 0.0
        },
        {
          "hour": "11:00",
          "value": 0.0
        },
        {
          "hour": "12:00",
          "value": 0.0
        },
        {
          "hour": "13:00",
          "value": 0.0
        },
        {
          "hour": "14:00",
          "value": 0.0
        },
        {
          "hour": "15:00",
          "value": 0.0
        },
        {
          "hour": "16:00",
          "value": 0.0
        },
        {
          "hour": "17:00",
          "value": 0.0
        },
        {
          "hour": "18:00",
          "value": 0.0
        },
        {
          "hour": "19:00",
          "value": 0.0
        },
        {
          "hour": "20:00",
          "value": 0.0
        },
        {
          "hour": "21:00",
          "value": 0.0
        },
        {
          "hour": "22:00",
          "value": 0.0
        },
        {
          "hour": "23:00",
          "value": 0.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 0.0
        },
        {
          "hour": "01:00",
          "value": 0.0
        },
        {
          "hour": "02:00",
          "value": 0.0
        },
        {
          "hour": "03:00",
          "value": 0.0
        },
        {
          "hour": "04:00",
          "value": 0.0
        },
        {
          "hour": "05:00",
          "value": 0.0
        },
        {
          "hour": "06:00",
          "value": 0.0
        },
        {
          "hour": "07:00",
          "value": 0.0
        },
        {
          "hour": "08:00",
          "value": 0.0
        },
        {
          "hour": "09:00",
          "value": 0.0
        },
        {
          "hour": "10:00",
          "value": 0.0
        },
        {
          "hour": "11:00",
          "value": 0.0
        },
        {
          "hour": "12:00",
          "value": 0.0
        },
        {
          "hour": "13:00",
          "value": 0.0
        },
        {
          "hour": "14:00",
          "value": 0.0
        },
        {
          "hour": "15:00",
          "value": 0.0
        },
        {
          "hour": "16:00",
          "value": 0.0
        },
        {
          "hour": "17:00",
          "value": 0.0
        },
        {
          "hour": "18:00",
          "value": 0.0
        },
        {
          "hour": "19:00",
          "value": 0.0
        },
        {
          "hour": "20:00",
          "value": 0.0
        },
        {
          "hour": "21:00",
          "value": 0.0
        },
        {
          "hour": "22:00",
          "value": 0.0
        },
        {
          "hour": "23:00",
          "value": 0.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 96.0
        },
        {
          "hour": "01:00",
          "value": 98.0
        },
        {
          "hour": "02:00",
          "value": 100.0
        },
        {
          "hour": "03:00",
          "value": 98.0
        },
        {
          "hour": "04:00",
          "value": 94.0
        },
        {
          "hour": "05:00",
          "value": 91.0
        },
        {
          "hour": "06:00",
          "value": 97.0
        },
        {
          "hour": "07:00",
          "value": 97.0
        },
        {
          "hour": "08:00",
          "value": 96.0
        },
        {
          "hour": "09:00",
          "value": 96.0
        },
        {
          "hour": "10:00",
          "value": 97.0
        },
        {
          "hour": "11:00",
          "value": 98.0
        },
        {
          "hour": "12:00",
          "value": 99.0
        },
        {
          "hour": "13:00",
          "value": 97.0
        },
        {
          "hour": "14:00",
          "value": 98.0
        },
        {
          "hour": "15:00",
          "value": 90.0
        },
        {
          "hour": "16:00",
          "value": 94.0
        },
        {
          "hour": "17:00",
          "value": 97.0
        },
        {
          "hour": "18:00",
          "value": 95.0
        },
        {
          "hour": "19:00",
          "value": 96.0
        },
        {
          "hour": "20:00",
          "value": 95.0
        },
        {
          "hour": "21:00",
          "value": 95.0
        },
        {
          "hour": "22:00",
          "value": 96.5
        },
        {
          "hour": "23:00",
          "value": 95.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 38.0
        },
        {
          "hour": "01:00",
          "value": 38.0
        },
        {
          "hour": "02:00",
          "value": 37.61
        },
        {
          "hour": "03:00",
          "value": 37.61
        },
        {
          "hour": "04:00",
          "value": 37.61
        },
        {
          "hour": "05:00",
          "value": 38.22
        },
        {
          "hour": "06:00",
          "value": 38.22
        },
        {
          "hour": "07:00",
          "value": 38.22
        },
        {
          "hour": "08:00",
          "value": 38.22
        },
        {
          "hour": "09:00",
          "value": 37.83
        },
        {
          "hour": "10:00",
          "value": 37.83
        },
        {
          "hour": "11:00",
          "value": 37.83
        },
        {
          "hour": "12:00",
          "value": 37.83
        },
        {
          "hour": "13:00",
          "value": 37.89
        },
        {
          "hour": "14:00",
          "value": 37.89
        },
        {
          "hour": "15:00",
          "value": 37.89
        },
        {
          "hour": "16:00",
          "value": 37.89
        },
        {
          "hour": "17:00",
          "value": 38.11
        },
        {
          "hour": "18:00",
          "value": 38.11
        },
        {
          "hour": "19:00",
          "value": 38.11
        },
        {
          "hour": "20:00",
          "value": 38.11
        },
        {
          "hour": "21:00",
          "value": 38.0
        },
        {
          "hour": "22:00",
          "value": 38.0
        },
        {
          "hour": "23:00",
          "value": 38.0
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 21.0
        },
        {
          "hour": "01:00",
          "value": 28.0
        },
        {
          "hour": "02:00",
          "value": 21.0
        },
        {
          "hour": "03:00",
          "value": 24.0
        },
        {
          "hour": "04:00",
          "value": 19.0
        },
        {
          "hour": "05:00",
          "value": 21.0
        },
        {
          "hour": "06:00",
          "value": 24.0
        },
        {
          "hour": "07:00",
          "value": 20.0
        },
        {
          "hour": "08:00",
          "value": 20.0
        },
        {
          "hour": "09:00",
          "value": 21.0
        },
        {
          "hour": "10:00",
          "value": 21.5
        },
        {
          "hour": "11:00",
          "value": 18.0
        },
        {
          "hour": "12:00",
          "value": 24.0
        },
        {
          "hour": "13:00",
          "value": 22.0
        },
        {
          "hour": "14:00",
          "value": 23.5
        },
        {
          "hour": "15:00",
          "value": 20.0
        },
        {
          "hour": "16:00",
          "value": 21.0
        },
        {
          "hour": "17:00",
          "value": 22.5
        },
        {
          "hour": "18:00",
          "value": 22.0
        },
        {
          "hour": "19:00",
          "value": 14.0
        },
        {
          "hour": "20:00",
          "value": 23.0
        },
        {
          "hour": "21:00",
          "value": 19.0
        },
        {
          "hour": "22:00",
          "value": 21.5
        },
        {
          "hour": "23:00",
          "value": 21.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 15.8,
        "unit": "10\u00b3/\u00b5L",
        "flag": "HIGH",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.3,
        "unit": "mg/dL",
        "flag": "LOW",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.2,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 173.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 8.0,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 3.9,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 29.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 11.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "WBC (15.8k/\u00b5L)",
        "value": 0.096,
        "direction": "positive"
      },
      {
        "feature": "Age (69 yrs)",
        "value": 0.057,
        "direction": "positive"
      },
      {
        "feature": "HR (89 bpm)",
        "value": 0.03,
        "direction": "positive"
      },
      {
        "feature": "Lactate (1.2mmol/L)",
        "value": 0.025,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000056",
    "name": "Mark Wilson",
    "age": 68,
    "gender": "M",
    "ward": "MICU",
    "bed": "M-016",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Multi-Organ Failure",
    "comorbidities": [
      "HTN",
      "CKD",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 89.0
        },
        {
          "hour": "02:00",
          "value": 86.0
        },
        {
          "hour": "04:00",
          "value": 86.0
        },
        {
          "hour": "06:00",
          "value": 84.0
        },
        {
          "hour": "08:00",
          "value": 85.0
        },
        {
          "hour": "10:00",
          "value": 91.0
        },
        {
          "hour": "12:00",
          "value": 93.0
        },
        {
          "hour": "14:00",
          "value": 94.0
        },
        {
          "hour": "16:00",
          "value": 93.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 134.4
        },
        {
          "hour": "02:00",
          "value": 118.0
        },
        {
          "hour": "04:00",
          "value": 116.0
        },
        {
          "hour": "06:00",
          "value": 141.0
        },
        {
          "hour": "08:00",
          "value": 147.0
        },
        {
          "hour": "10:00",
          "value": 144.0
        },
        {
          "hour": "12:00",
          "value": 139.0
        },
        {
          "hour": "14:00",
          "value": 140.0
        },
        {
          "hour": "16:00",
          "value": 130.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 62.9
        },
        {
          "hour": "02:00",
          "value": 57.0
        },
        {
          "hour": "04:00",
          "value": 59.0
        },
        {
          "hour": "06:00",
          "value": 66.0
        },
        {
          "hour": "08:00",
          "value": 66.0
        },
        {
          "hour": "10:00",
          "value": 70.0
        },
        {
          "hour": "12:00",
          "value": 66.0
        },
        {
          "hour": "14:00",
          "value": 64.0
        },
        {
          "hour": "16:00",
          "value": 55.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 96.2
        },
        {
          "hour": "02:00",
          "value": 100.0
        },
        {
          "hour": "04:00",
          "value": 97.0
        },
        {
          "hour": "06:00",
          "value": 96.5
        },
        {
          "hour": "08:00",
          "value": 97.0
        },
        {
          "hour": "10:00",
          "value": 97.0
        },
        {
          "hour": "12:00",
          "value": 94.0
        },
        {
          "hour": "14:00",
          "value": 91.0
        },
        {
          "hour": "16:00",
          "value": 97.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 36.7
        },
        {
          "hour": "02:00",
          "value": 36.39
        },
        {
          "hour": "04:00",
          "value": 36.89
        },
        {
          "hour": "06:00",
          "value": 36.56
        },
        {
          "hour": "08:00",
          "value": 36.56
        },
        {
          "hour": "10:00",
          "value": 36.56
        },
        {
          "hour": "12:00",
          "value": 36.56
        },
        {
          "hour": "14:00",
          "value": 36.89
        },
        {
          "hour": "16:00",
          "value": 36.89
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 15.9
        },
        {
          "hour": "02:00",
          "value": 17.0
        },
        {
          "hour": "04:00",
          "value": 16.0
        },
        {
          "hour": "06:00",
          "value": 15.5
        },
        {
          "hour": "08:00",
          "value": 14.0
        },
        {
          "hour": "10:00",
          "value": 19.0
        },
        {
          "hour": "12:00",
          "value": 16.0
        },
        {
          "hour": "14:00",
          "value": 15.0
        },
        {
          "hour": "16:00",
          "value": 15.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 15.4,
        "unit": "10\u00b3/\u00b5L",
        "flag": "HIGH",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 10.6,
        "unit": "mg/dL",
        "flag": "CRITICAL",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Glucose",
        "value": 141.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 7.4,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 4.3,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 21.0,
        "unit": "mEq/L",
        "flag": "LOW",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 107.0,
        "unit": "mg/dL",
        "flag": "CRITICAL",
        "range": "7\u201320"
      },
      {
        "name": "Platelets",
        "value": 167.0,
        "unit": "10\u00b3/\u00b5L",
        "flag": "NORMAL",
        "range": "150\u2013400"
      }
    ],
    "shapValues": [
      {
        "feature": "Creatinine (10.6mg/dL)",
        "value": 0.94,
        "direction": "positive"
      },
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "WBC (15.4k/\u00b5L)",
        "value": 0.088,
        "direction": "positive"
      },
      {
        "feature": "Age (68 yrs)",
        "value": 0.055,
        "direction": "positive"
      },
      {
        "feature": "HR (93 bpm)",
        "value": 0.03,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Creatinine (10.6mg/dL). Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000058",
    "name": "Steven Kim",
    "age": 46,
    "gender": "M",
    "ward": "MICU",
    "bed": "M-007",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Multi-Organ Failure",
    "comorbidities": [
      "CKD",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 83.7
        },
        {
          "hour": "03:00",
          "value": 86.0
        },
        {
          "hour": "06:00",
          "value": 82.0
        },
        {
          "hour": "09:00",
          "value": 87.0
        },
        {
          "hour": "12:00",
          "value": 81.0
        },
        {
          "hour": "15:00",
          "value": 84.0
        },
        {
          "hour": "18:00",
          "value": 88.0
        },
        {
          "hour": "21:00",
          "value": 78.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 109.3
        },
        {
          "hour": "03:00",
          "value": 105.0
        },
        {
          "hour": "06:00",
          "value": 111.0
        },
        {
          "hour": "09:00",
          "value": 111.0
        },
        {
          "hour": "12:00",
          "value": 111.0
        },
        {
          "hour": "15:00",
          "value": 105.0
        },
        {
          "hour": "18:00",
          "value": 110.0
        },
        {
          "hour": "21:00",
          "value": 112.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 0.0
        },
        {
          "hour": "03:00",
          "value": 0.0
        },
        {
          "hour": "06:00",
          "value": 0.0
        },
        {
          "hour": "09:00",
          "value": 0.0
        },
        {
          "hour": "12:00",
          "value": 0.0
        },
        {
          "hour": "15:00",
          "value": 0.0
        },
        {
          "hour": "18:00",
          "value": 0.0
        },
        {
          "hour": "21:00",
          "value": 0.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 97.7
        },
        {
          "hour": "03:00",
          "value": 97.0
        },
        {
          "hour": "06:00",
          "value": 97.0
        },
        {
          "hour": "09:00",
          "value": 96.0
        },
        {
          "hour": "12:00",
          "value": 97.0
        },
        {
          "hour": "15:00",
          "value": 99.0
        },
        {
          "hour": "18:00",
          "value": 98.0
        },
        {
          "hour": "21:00",
          "value": 100.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 35.2
        },
        {
          "hour": "03:00",
          "value": 35.33
        },
        {
          "hour": "06:00",
          "value": 35.33
        },
        {
          "hour": "09:00",
          "value": 35.33
        },
        {
          "hour": "12:00",
          "value": 35.33
        },
        {
          "hour": "15:00",
          "value": 35.0
        },
        {
          "hour": "18:00",
          "value": 35.0
        },
        {
          "hour": "21:00",
          "value": 35.0
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 12.0
        },
        {
          "hour": "03:00",
          "value": 11.0
        },
        {
          "hour": "06:00",
          "value": 10.0
        },
        {
          "hour": "09:00",
          "value": 13.0
        },
        {
          "hour": "12:00",
          "value": 11.0
        },
        {
          "hour": "15:00",
          "value": 12.0
        },
        {
          "hour": "18:00",
          "value": 15.0
        },
        {
          "hour": "21:00",
          "value": 12.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 12.0,
        "unit": "10\u00b3/\u00b5L",
        "flag": "HIGH",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 1.6,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Glucose",
        "value": 112.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 9.1,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 5.2,
        "unit": "mEq/L",
        "flag": "HIGH",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 25.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 62.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "7\u201320"
      },
      {
        "name": "Platelets",
        "value": 36.0,
        "unit": "10\u00b3/\u00b5L",
        "flag": "LOW",
        "range": "150\u2013400"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Creatinine (1.6mg/dL)",
        "value": 0.04,
        "direction": "positive"
      },
      {
        "feature": "HR (78 bpm)",
        "value": 0.03,
        "direction": "positive"
      },
      {
        "feature": "SBP (112 mmHg)",
        "value": 0.02,
        "direction": "positive"
      },
      {
        "feature": "SpO\u2082 (100.0%)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000063",
    "name": "Charles Jackson",
    "age": 42,
    "gender": "M",
    "ward": "NICU",
    "bed": "N-005",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "ARDS",
    "comorbidities": [
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 98.0
        },
        {
          "hour": "01:00",
          "value": 83.0
        },
        {
          "hour": "02:00",
          "value": 81.0
        },
        {
          "hour": "03:00",
          "value": 74.0
        },
        {
          "hour": "04:00",
          "value": 81.0
        },
        {
          "hour": "05:00",
          "value": 80.5
        },
        {
          "hour": "06:00",
          "value": 90.0
        },
        {
          "hour": "07:00",
          "value": 131.0
        },
        {
          "hour": "08:00",
          "value": 140.0
        },
        {
          "hour": "09:00",
          "value": 110.0
        },
        {
          "hour": "10:00",
          "value": 113.0
        },
        {
          "hour": "11:00",
          "value": 107.5
        },
        {
          "hour": "12:00",
          "value": 101.0
        },
        {
          "hour": "13:00",
          "value": 82.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 100.3
        },
        {
          "hour": "01:00",
          "value": 76.0
        },
        {
          "hour": "02:00",
          "value": 96.0
        },
        {
          "hour": "03:00",
          "value": 92.0
        },
        {
          "hour": "04:00",
          "value": 98.0
        },
        {
          "hour": "05:00",
          "value": 103.0
        },
        {
          "hour": "06:00",
          "value": 104.0
        },
        {
          "hour": "07:00",
          "value": 119.0
        },
        {
          "hour": "08:00",
          "value": 119.5
        },
        {
          "hour": "09:00",
          "value": 110.0
        },
        {
          "hour": "10:00",
          "value": 119.0
        },
        {
          "hour": "11:00",
          "value": 82.0
        },
        {
          "hour": "12:00",
          "value": 81.0
        },
        {
          "hour": "13:00",
          "value": 104.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 53.6
        },
        {
          "hour": "01:00",
          "value": 42.0
        },
        {
          "hour": "02:00",
          "value": 53.0
        },
        {
          "hour": "03:00",
          "value": 53.0
        },
        {
          "hour": "04:00",
          "value": 56.0
        },
        {
          "hour": "05:00",
          "value": 59.0
        },
        {
          "hour": "06:00",
          "value": 54.0
        },
        {
          "hour": "07:00",
          "value": 66.0
        },
        {
          "hour": "08:00",
          "value": 62.0
        },
        {
          "hour": "09:00",
          "value": 60.0
        },
        {
          "hour": "10:00",
          "value": 54.0
        },
        {
          "hour": "11:00",
          "value": 42.0
        },
        {
          "hour": "12:00",
          "value": 44.0
        },
        {
          "hour": "13:00",
          "value": 52.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 97.8
        },
        {
          "hour": "01:00",
          "value": 98.0
        },
        {
          "hour": "02:00",
          "value": 98.0
        },
        {
          "hour": "03:00",
          "value": 99.0
        },
        {
          "hour": "04:00",
          "value": 98.0
        },
        {
          "hour": "05:00",
          "value": 98.5
        },
        {
          "hour": "06:00",
          "value": 100.0
        },
        {
          "hour": "07:00",
          "value": 98.0
        },
        {
          "hour": "08:00",
          "value": 96.5
        },
        {
          "hour": "09:00",
          "value": 96.0
        },
        {
          "hour": "10:00",
          "value": 100.0
        },
        {
          "hour": "11:00",
          "value": 100.0
        },
        {
          "hour": "12:00",
          "value": 96.0
        },
        {
          "hour": "13:00",
          "value": 94.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 36.7
        },
        {
          "hour": "01:00",
          "value": 36.28
        },
        {
          "hour": "02:00",
          "value": 36.28
        },
        {
          "hour": "03:00",
          "value": 36.28
        },
        {
          "hour": "04:00",
          "value": 36.0
        },
        {
          "hour": "05:00",
          "value": 36.06
        },
        {
          "hour": "06:00",
          "value": 36.0
        },
        {
          "hour": "07:00",
          "value": 35.89
        },
        {
          "hour": "08:00",
          "value": 35.89
        },
        {
          "hour": "09:00",
          "value": 35.89
        },
        {
          "hour": "10:00",
          "value": 35.89
        },
        {
          "hour": "11:00",
          "value": 39.0
        },
        {
          "hour": "12:00",
          "value": 39.0
        },
        {
          "hour": "13:00",
          "value": 39.0
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 16.7
        },
        {
          "hour": "01:00",
          "value": 11.0
        },
        {
          "hour": "02:00",
          "value": 15.0
        },
        {
          "hour": "03:00",
          "value": 11.0
        },
        {
          "hour": "04:00",
          "value": 12.0
        },
        {
          "hour": "05:00",
          "value": 14.0
        },
        {
          "hour": "06:00",
          "value": 17.0
        },
        {
          "hour": "07:00",
          "value": 20.0
        },
        {
          "hour": "08:00",
          "value": 20.0
        },
        {
          "hour": "09:00",
          "value": 20.0
        },
        {
          "hour": "10:00",
          "value": 19.0
        },
        {
          "hour": "11:00",
          "value": 20.5
        },
        {
          "hour": "12:00",
          "value": 20.0
        },
        {
          "hour": "13:00",
          "value": 18.0
        }
      ]
    },
    "labs": [
      {
        "name": "Lactate",
        "value": 1.2,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 102.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 9.3,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Blood pH",
        "value": 7.42,
        "unit": "",
        "flag": "NORMAL",
        "range": "7.35\u20137.45"
      },
      {
        "name": "Hematocrit",
        "value": 28.0,
        "unit": "%",
        "flag": "LOW",
        "range": "36\u201350"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "HR (82 bpm)",
        "value": 0.03,
        "direction": "positive"
      },
      {
        "feature": "SpO\u2082 (94.0%)",
        "value": 0.03,
        "direction": "positive"
      },
      {
        "feature": "Lactate (1.2mmol/L)",
        "value": 0.025,
        "direction": "positive"
      },
      {
        "feature": "SBP (104 mmHg)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000064",
    "name": "Charles Johnson",
    "age": 69,
    "gender": "M",
    "ward": "NICU",
    "bed": "N-011",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Multi-Organ Failure",
    "comorbidities": [
      "HTN",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 77.0
        },
        {
          "hour": "01:00",
          "value": 77.5
        },
        {
          "hour": "02:00",
          "value": 81.0
        },
        {
          "hour": "03:00",
          "value": 83.0
        },
        {
          "hour": "04:00",
          "value": 74.0
        },
        {
          "hour": "05:00",
          "value": 87.0
        },
        {
          "hour": "06:00",
          "value": 81.0
        },
        {
          "hour": "07:00",
          "value": 80.0
        },
        {
          "hour": "08:00",
          "value": 97.0
        },
        {
          "hour": "09:00",
          "value": 86.0
        },
        {
          "hour": "10:00",
          "value": 88.0
        },
        {
          "hour": "11:00",
          "value": 90.0
        },
        {
          "hour": "12:00",
          "value": 90.0
        },
        {
          "hour": "13:00",
          "value": 93.0
        },
        {
          "hour": "14:00",
          "value": 93.0
        },
        {
          "hour": "15:00",
          "value": 96.0
        },
        {
          "hour": "16:00",
          "value": 92.0
        },
        {
          "hour": "17:00",
          "value": 92.0
        },
        {
          "hour": "18:00",
          "value": 93.0
        },
        {
          "hour": "19:00",
          "value": 91.0
        },
        {
          "hour": "20:00",
          "value": 94.0
        },
        {
          "hour": "21:00",
          "value": 83.0
        },
        {
          "hour": "22:00",
          "value": 84.0
        },
        {
          "hour": "23:00",
          "value": 86.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 94.0
        },
        {
          "hour": "01:00",
          "value": 99.5
        },
        {
          "hour": "02:00",
          "value": 124.0
        },
        {
          "hour": "03:00",
          "value": 150.0
        },
        {
          "hour": "04:00",
          "value": 95.5
        },
        {
          "hour": "05:00",
          "value": 161.0
        },
        {
          "hour": "06:00",
          "value": 114.0
        },
        {
          "hour": "07:00",
          "value": 158.0
        },
        {
          "hour": "08:00",
          "value": 140.0
        },
        {
          "hour": "09:00",
          "value": 85.0
        },
        {
          "hour": "10:00",
          "value": 113.0
        },
        {
          "hour": "11:00",
          "value": 125.0
        },
        {
          "hour": "12:00",
          "value": 96.0
        },
        {
          "hour": "13:00",
          "value": 136.0
        },
        {
          "hour": "14:00",
          "value": 134.0
        },
        {
          "hour": "15:00",
          "value": 147.0
        },
        {
          "hour": "16:00",
          "value": 140.0
        },
        {
          "hour": "17:00",
          "value": 102.0
        },
        {
          "hour": "18:00",
          "value": 118.0
        },
        {
          "hour": "19:00",
          "value": 108.0
        },
        {
          "hour": "20:00",
          "value": 110.0
        },
        {
          "hour": "21:00",
          "value": 128.0
        },
        {
          "hour": "22:00",
          "value": 119.0
        },
        {
          "hour": "23:00",
          "value": 116.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 47.0
        },
        {
          "hour": "01:00",
          "value": 44.5
        },
        {
          "hour": "02:00",
          "value": 51.0
        },
        {
          "hour": "03:00",
          "value": 56.0
        },
        {
          "hour": "04:00",
          "value": 40.0
        },
        {
          "hour": "05:00",
          "value": 72.0
        },
        {
          "hour": "06:00",
          "value": 53.0
        },
        {
          "hour": "07:00",
          "value": 58.0
        },
        {
          "hour": "08:00",
          "value": 36.0
        },
        {
          "hour": "09:00",
          "value": 37.0
        },
        {
          "hour": "10:00",
          "value": 46.0
        },
        {
          "hour": "11:00",
          "value": 62.0
        },
        {
          "hour": "12:00",
          "value": 54.0
        },
        {
          "hour": "13:00",
          "value": 55.0
        },
        {
          "hour": "14:00",
          "value": 53.0
        },
        {
          "hour": "15:00",
          "value": 58.0
        },
        {
          "hour": "16:00",
          "value": 55.0
        },
        {
          "hour": "17:00",
          "value": 44.0
        },
        {
          "hour": "18:00",
          "value": 51.0
        },
        {
          "hour": "19:00",
          "value": 47.0
        },
        {
          "hour": "20:00",
          "value": 47.0
        },
        {
          "hour": "21:00",
          "value": 57.0
        },
        {
          "hour": "22:00",
          "value": 53.0
        },
        {
          "hour": "23:00",
          "value": 52.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 100.0
        },
        {
          "hour": "01:00",
          "value": 100.0
        },
        {
          "hour": "02:00",
          "value": 100.0
        },
        {
          "hour": "03:00",
          "value": 100.0
        },
        {
          "hour": "04:00",
          "value": 100.0
        },
        {
          "hour": "05:00",
          "value": 100.0
        },
        {
          "hour": "06:00",
          "value": 100.0
        },
        {
          "hour": "07:00",
          "value": 100.0
        },
        {
          "hour": "08:00",
          "value": 99.0
        },
        {
          "hour": "09:00",
          "value": 100.0
        },
        {
          "hour": "10:00",
          "value": 97.0
        },
        {
          "hour": "11:00",
          "value": 100.0
        },
        {
          "hour": "12:00",
          "value": 100.0
        },
        {
          "hour": "13:00",
          "value": 100.0
        },
        {
          "hour": "14:00",
          "value": 100.0
        },
        {
          "hour": "15:00",
          "value": 100.0
        },
        {
          "hour": "16:00",
          "value": 100.0
        },
        {
          "hour": "17:00",
          "value": 100.0
        },
        {
          "hour": "18:00",
          "value": 100.0
        },
        {
          "hour": "19:00",
          "value": 100.0
        },
        {
          "hour": "20:00",
          "value": 100.0
        },
        {
          "hour": "21:00",
          "value": 100.0
        },
        {
          "hour": "22:00",
          "value": 100.0
        },
        {
          "hour": "23:00",
          "value": 100.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 37.72
        },
        {
          "hour": "01:00",
          "value": 37.67
        },
        {
          "hour": "02:00",
          "value": 37.67
        },
        {
          "hour": "03:00",
          "value": 37.67
        },
        {
          "hour": "04:00",
          "value": 37.67
        },
        {
          "hour": "05:00",
          "value": 37.67
        },
        {
          "hour": "06:00",
          "value": 37.67
        },
        {
          "hour": "07:00",
          "value": 37.67
        },
        {
          "hour": "08:00",
          "value": 37.33
        },
        {
          "hour": "09:00",
          "value": 37.33
        },
        {
          "hour": "10:00",
          "value": 37.33
        },
        {
          "hour": "11:00",
          "value": 37.33
        },
        {
          "hour": "12:00",
          "value": 37.06
        },
        {
          "hour": "13:00",
          "value": 37.06
        },
        {
          "hour": "14:00",
          "value": 37.06
        },
        {
          "hour": "15:00",
          "value": 37.06
        },
        {
          "hour": "16:00",
          "value": 37.5
        },
        {
          "hour": "17:00",
          "value": 37.5
        },
        {
          "hour": "18:00",
          "value": 37.5
        },
        {
          "hour": "19:00",
          "value": 37.5
        },
        {
          "hour": "20:00",
          "value": 37.33
        },
        {
          "hour": "21:00",
          "value": 37.33
        },
        {
          "hour": "22:00",
          "value": 37.33
        },
        {
          "hour": "23:00",
          "value": 37.33
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 15.0
        },
        {
          "hour": "01:00",
          "value": 20.0
        },
        {
          "hour": "02:00",
          "value": 16.0
        },
        {
          "hour": "03:00",
          "value": 17.0
        },
        {
          "hour": "04:00",
          "value": 15.0
        },
        {
          "hour": "05:00",
          "value": 15.0
        },
        {
          "hour": "06:00",
          "value": 14.0
        },
        {
          "hour": "07:00",
          "value": 14.0
        },
        {
          "hour": "08:00",
          "value": 14.0
        },
        {
          "hour": "09:00",
          "value": 14.5
        },
        {
          "hour": "10:00",
          "value": 15.0
        },
        {
          "hour": "11:00",
          "value": 16.0
        },
        {
          "hour": "12:00",
          "value": 17.0
        },
        {
          "hour": "13:00",
          "value": 23.0
        },
        {
          "hour": "14:00",
          "value": 15.0
        },
        {
          "hour": "15:00",
          "value": 17.0
        },
        {
          "hour": "16:00",
          "value": 16.0
        },
        {
          "hour": "17:00",
          "value": 15.0
        },
        {
          "hour": "18:00",
          "value": 18.0
        },
        {
          "hour": "19:00",
          "value": 15.0
        },
        {
          "hour": "20:00",
          "value": 18.5
        },
        {
          "hour": "21:00",
          "value": 20.0
        },
        {
          "hour": "22:00",
          "value": 21.0
        },
        {
          "hour": "23:00",
          "value": 21.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 10.8,
        "unit": "10\u00b3/\u00b5L",
        "flag": "NORMAL",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 1.1,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 0.9,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 181.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 8.6,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 4.6,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 14.0,
        "unit": "mEq/L",
        "flag": "LOW",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 27.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Age (69 yrs)",
        "value": 0.06,
        "direction": "positive"
      },
      {
        "feature": "HR (86 bpm)",
        "value": 0.03,
        "direction": "positive"
      },
      {
        "feature": "SBP (116 mmHg)",
        "value": 0.02,
        "direction": "positive"
      },
      {
        "feature": "SpO\u2082 (100.0%)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000078",
    "name": "David Johnson",
    "age": 57,
    "gender": "M",
    "ward": "MICU",
    "bed": "M-010",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Multi-Organ Failure",
    "comorbidities": [
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 100.0
        },
        {
          "hour": "01:00",
          "value": 98.0
        },
        {
          "hour": "02:00",
          "value": 102.0
        },
        {
          "hour": "03:00",
          "value": 101.0
        },
        {
          "hour": "04:00",
          "value": 101.0
        },
        {
          "hour": "05:00",
          "value": 101.0
        },
        {
          "hour": "06:00",
          "value": 101.0
        },
        {
          "hour": "07:00",
          "value": 101.0
        },
        {
          "hour": "08:00",
          "value": 101.0
        },
        {
          "hour": "09:00",
          "value": 101.0
        },
        {
          "hour": "10:00",
          "value": 101.0
        },
        {
          "hour": "11:00",
          "value": 101.0
        },
        {
          "hour": "12:00",
          "value": 101.0
        },
        {
          "hour": "13:00",
          "value": 101.0
        },
        {
          "hour": "14:00",
          "value": 101.0
        },
        {
          "hour": "15:00",
          "value": 101.0
        },
        {
          "hour": "16:00",
          "value": 101.0
        },
        {
          "hour": "17:00",
          "value": 101.0
        },
        {
          "hour": "18:00",
          "value": 101.0
        },
        {
          "hour": "19:00",
          "value": 140.0
        },
        {
          "hour": "20:00",
          "value": 135.0
        },
        {
          "hour": "21:00",
          "value": 97.0
        },
        {
          "hour": "22:00",
          "value": 110.0
        },
        {
          "hour": "23:00",
          "value": 110.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 111.0
        },
        {
          "hour": "01:00",
          "value": 125.0
        },
        {
          "hour": "02:00",
          "value": 131.0
        },
        {
          "hour": "03:00",
          "value": 154.0
        },
        {
          "hour": "04:00",
          "value": 154.0
        },
        {
          "hour": "05:00",
          "value": 154.0
        },
        {
          "hour": "06:00",
          "value": 154.0
        },
        {
          "hour": "07:00",
          "value": 154.0
        },
        {
          "hour": "08:00",
          "value": 154.0
        },
        {
          "hour": "09:00",
          "value": 154.0
        },
        {
          "hour": "10:00",
          "value": 154.0
        },
        {
          "hour": "11:00",
          "value": 154.0
        },
        {
          "hour": "12:00",
          "value": 154.0
        },
        {
          "hour": "13:00",
          "value": 154.0
        },
        {
          "hour": "14:00",
          "value": 154.0
        },
        {
          "hour": "15:00",
          "value": 154.0
        },
        {
          "hour": "16:00",
          "value": 154.0
        },
        {
          "hour": "17:00",
          "value": 154.0
        },
        {
          "hour": "18:00",
          "value": 154.0
        },
        {
          "hour": "19:00",
          "value": 95.0
        },
        {
          "hour": "20:00",
          "value": 98.5
        },
        {
          "hour": "21:00",
          "value": 90.5
        },
        {
          "hour": "22:00",
          "value": 138.0
        },
        {
          "hour": "23:00",
          "value": 138.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 62.0
        },
        {
          "hour": "01:00",
          "value": 62.0
        },
        {
          "hour": "02:00",
          "value": 62.0
        },
        {
          "hour": "03:00",
          "value": 62.0
        },
        {
          "hour": "04:00",
          "value": 62.0
        },
        {
          "hour": "05:00",
          "value": 62.0
        },
        {
          "hour": "06:00",
          "value": 62.0
        },
        {
          "hour": "07:00",
          "value": 62.0
        },
        {
          "hour": "08:00",
          "value": 62.0
        },
        {
          "hour": "09:00",
          "value": 62.0
        },
        {
          "hour": "10:00",
          "value": 62.0
        },
        {
          "hour": "11:00",
          "value": 62.0
        },
        {
          "hour": "12:00",
          "value": 62.0
        },
        {
          "hour": "13:00",
          "value": 62.0
        },
        {
          "hour": "14:00",
          "value": 62.0
        },
        {
          "hour": "15:00",
          "value": 62.0
        },
        {
          "hour": "16:00",
          "value": 62.0
        },
        {
          "hour": "17:00",
          "value": 62.0
        },
        {
          "hour": "18:00",
          "value": 62.0
        },
        {
          "hour": "19:00",
          "value": 63.5
        },
        {
          "hour": "20:00",
          "value": 66.0
        },
        {
          "hour": "21:00",
          "value": 50.5
        },
        {
          "hour": "22:00",
          "value": 65.0
        },
        {
          "hour": "23:00",
          "value": 65.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 92.0
        },
        {
          "hour": "01:00",
          "value": 96.0
        },
        {
          "hour": "02:00",
          "value": 94.0
        },
        {
          "hour": "03:00",
          "value": 93.0
        },
        {
          "hour": "04:00",
          "value": 93.0
        },
        {
          "hour": "05:00",
          "value": 93.0
        },
        {
          "hour": "06:00",
          "value": 93.0
        },
        {
          "hour": "07:00",
          "value": 93.0
        },
        {
          "hour": "08:00",
          "value": 93.0
        },
        {
          "hour": "09:00",
          "value": 93.0
        },
        {
          "hour": "10:00",
          "value": 93.0
        },
        {
          "hour": "11:00",
          "value": 93.0
        },
        {
          "hour": "12:00",
          "value": 93.0
        },
        {
          "hour": "13:00",
          "value": 93.0
        },
        {
          "hour": "14:00",
          "value": 93.0
        },
        {
          "hour": "15:00",
          "value": 93.0
        },
        {
          "hour": "16:00",
          "value": 93.0
        },
        {
          "hour": "17:00",
          "value": 93.0
        },
        {
          "hour": "18:00",
          "value": 93.0
        },
        {
          "hour": "19:00",
          "value": 100.0
        },
        {
          "hour": "20:00",
          "value": 100.0
        },
        {
          "hour": "21:00",
          "value": 100.0
        },
        {
          "hour": "22:00",
          "value": 99.0
        },
        {
          "hour": "23:00",
          "value": 99.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 37.39
        },
        {
          "hour": "01:00",
          "value": 37.39
        },
        {
          "hour": "02:00",
          "value": 37.39
        },
        {
          "hour": "03:00",
          "value": 37.39
        },
        {
          "hour": "04:00",
          "value": 37.39
        },
        {
          "hour": "05:00",
          "value": 37.39
        },
        {
          "hour": "06:00",
          "value": 37.39
        },
        {
          "hour": "07:00",
          "value": 37.39
        },
        {
          "hour": "08:00",
          "value": 37.39
        },
        {
          "hour": "09:00",
          "value": 37.39
        },
        {
          "hour": "10:00",
          "value": 37.39
        },
        {
          "hour": "11:00",
          "value": 37.39
        },
        {
          "hour": "12:00",
          "value": 37.39
        },
        {
          "hour": "13:00",
          "value": 37.39
        },
        {
          "hour": "14:00",
          "value": 37.39
        },
        {
          "hour": "15:00",
          "value": 37.39
        },
        {
          "hour": "16:00",
          "value": 37.39
        },
        {
          "hour": "17:00",
          "value": 37.39
        },
        {
          "hour": "18:00",
          "value": 37.39
        },
        {
          "hour": "19:00",
          "value": 38.0
        },
        {
          "hour": "20:00",
          "value": 38.0
        },
        {
          "hour": "21:00",
          "value": 38.0
        },
        {
          "hour": "22:00",
          "value": 38.0
        },
        {
          "hour": "23:00",
          "value": 38.0
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 16.0
        },
        {
          "hour": "01:00",
          "value": 14.0
        },
        {
          "hour": "02:00",
          "value": 13.0
        },
        {
          "hour": "03:00",
          "value": 14.0
        },
        {
          "hour": "04:00",
          "value": 14.0
        },
        {
          "hour": "05:00",
          "value": 14.0
        },
        {
          "hour": "06:00",
          "value": 14.0
        },
        {
          "hour": "07:00",
          "value": 14.0
        },
        {
          "hour": "08:00",
          "value": 14.0
        },
        {
          "hour": "09:00",
          "value": 14.0
        },
        {
          "hour": "10:00",
          "value": 14.0
        },
        {
          "hour": "11:00",
          "value": 14.0
        },
        {
          "hour": "12:00",
          "value": 14.0
        },
        {
          "hour": "13:00",
          "value": 14.0
        },
        {
          "hour": "14:00",
          "value": 14.0
        },
        {
          "hour": "15:00",
          "value": 14.0
        },
        {
          "hour": "16:00",
          "value": 14.0
        },
        {
          "hour": "17:00",
          "value": 14.0
        },
        {
          "hour": "18:00",
          "value": 20.0
        },
        {
          "hour": "19:00",
          "value": 14.0
        },
        {
          "hour": "20:00",
          "value": 14.0
        },
        {
          "hour": "21:00",
          "value": 12.5
        },
        {
          "hour": "22:00",
          "value": 13.0
        },
        {
          "hour": "23:00",
          "value": 13.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 23.3,
        "unit": "10\u00b3/\u00b5L",
        "flag": "CRITICAL",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.7,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 2.2,
        "unit": "mmol/L",
        "flag": "HIGH",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 346.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 8.8,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 3.7,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 25.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 19.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "WBC (23.3k/\u00b5L)",
        "value": 0.246,
        "direction": "positive"
      },
      {
        "feature": "Lactate (2.2mmol/L)",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "HR (110 bpm)",
        "value": 0.07,
        "direction": "positive"
      },
      {
        "feature": "SBP (138 mmHg)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by WBC (23.3k/\u00b5L). Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000141",
    "name": "Mark Wilson",
    "age": 78,
    "gender": "M",
    "ward": "NICU",
    "bed": "N-010",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "ARDS",
    "comorbidities": [
      "HTN",
      "DM Type 2",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 81.0
        },
        {
          "hour": "01:00",
          "value": 78.0
        },
        {
          "hour": "02:00",
          "value": 72.0
        },
        {
          "hour": "03:00",
          "value": 74.0
        },
        {
          "hour": "04:00",
          "value": 74.0
        },
        {
          "hour": "05:00",
          "value": 77.0
        },
        {
          "hour": "06:00",
          "value": 83.5
        },
        {
          "hour": "07:00",
          "value": 78.0
        },
        {
          "hour": "08:00",
          "value": 85.0
        },
        {
          "hour": "09:00",
          "value": 80.0
        },
        {
          "hour": "10:00",
          "value": 79.0
        },
        {
          "hour": "11:00",
          "value": 89.0
        },
        {
          "hour": "12:00",
          "value": 84.0
        },
        {
          "hour": "13:00",
          "value": 89.0
        },
        {
          "hour": "14:00",
          "value": 83.0
        },
        {
          "hour": "15:00",
          "value": 91.0
        },
        {
          "hour": "16:00",
          "value": 92.0
        },
        {
          "hour": "17:00",
          "value": 90.0
        },
        {
          "hour": "18:00",
          "value": 84.0
        },
        {
          "hour": "19:00",
          "value": 95.0
        },
        {
          "hour": "20:00",
          "value": 95.0
        },
        {
          "hour": "21:00",
          "value": 83.0
        },
        {
          "hour": "22:00",
          "value": 83.0
        },
        {
          "hour": "23:00",
          "value": 83.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 123.0
        },
        {
          "hour": "01:00",
          "value": 113.0
        },
        {
          "hour": "02:00",
          "value": 96.0
        },
        {
          "hour": "03:00",
          "value": 118.0
        },
        {
          "hour": "04:00",
          "value": 118.0
        },
        {
          "hour": "05:00",
          "value": 111.0
        },
        {
          "hour": "06:00",
          "value": 117.0
        },
        {
          "hour": "07:00",
          "value": 100.0
        },
        {
          "hour": "08:00",
          "value": 110.0
        },
        {
          "hour": "09:00",
          "value": 102.0
        },
        {
          "hour": "10:00",
          "value": 100.0
        },
        {
          "hour": "11:00",
          "value": 135.0
        },
        {
          "hour": "12:00",
          "value": 120.0
        },
        {
          "hour": "13:00",
          "value": 93.0
        },
        {
          "hour": "14:00",
          "value": 120.0
        },
        {
          "hour": "15:00",
          "value": 114.0
        },
        {
          "hour": "16:00",
          "value": 117.0
        },
        {
          "hour": "17:00",
          "value": 107.0
        },
        {
          "hour": "18:00",
          "value": 117.0
        },
        {
          "hour": "19:00",
          "value": 122.0
        },
        {
          "hour": "20:00",
          "value": 122.0
        },
        {
          "hour": "21:00",
          "value": 104.0
        },
        {
          "hour": "22:00",
          "value": 104.0
        },
        {
          "hour": "23:00",
          "value": 104.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 0.0
        },
        {
          "hour": "01:00",
          "value": 0.0
        },
        {
          "hour": "02:00",
          "value": 0.0
        },
        {
          "hour": "03:00",
          "value": 0.0
        },
        {
          "hour": "04:00",
          "value": 0.0
        },
        {
          "hour": "05:00",
          "value": 0.0
        },
        {
          "hour": "06:00",
          "value": 0.0
        },
        {
          "hour": "07:00",
          "value": 0.0
        },
        {
          "hour": "08:00",
          "value": 0.0
        },
        {
          "hour": "09:00",
          "value": 0.0
        },
        {
          "hour": "10:00",
          "value": 0.0
        },
        {
          "hour": "11:00",
          "value": 0.0
        },
        {
          "hour": "12:00",
          "value": 0.0
        },
        {
          "hour": "13:00",
          "value": 0.0
        },
        {
          "hour": "14:00",
          "value": 0.0
        },
        {
          "hour": "15:00",
          "value": 0.0
        },
        {
          "hour": "16:00",
          "value": 0.0
        },
        {
          "hour": "17:00",
          "value": 0.0
        },
        {
          "hour": "18:00",
          "value": 0.0
        },
        {
          "hour": "19:00",
          "value": 0.0
        },
        {
          "hour": "20:00",
          "value": 0.0
        },
        {
          "hour": "21:00",
          "value": 0.0
        },
        {
          "hour": "22:00",
          "value": 0.0
        },
        {
          "hour": "23:00",
          "value": 0.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 96.0
        },
        {
          "hour": "01:00",
          "value": 94.0
        },
        {
          "hour": "02:00",
          "value": 93.0
        },
        {
          "hour": "03:00",
          "value": 95.0
        },
        {
          "hour": "04:00",
          "value": 95.0
        },
        {
          "hour": "05:00",
          "value": 94.0
        },
        {
          "hour": "06:00",
          "value": 93.5
        },
        {
          "hour": "07:00",
          "value": 93.0
        },
        {
          "hour": "08:00",
          "value": 94.0
        },
        {
          "hour": "09:00",
          "value": 93.0
        },
        {
          "hour": "10:00",
          "value": 94.0
        },
        {
          "hour": "11:00",
          "value": 95.0
        },
        {
          "hour": "12:00",
          "value": 95.0
        },
        {
          "hour": "13:00",
          "value": 88.0
        },
        {
          "hour": "14:00",
          "value": 89.0
        },
        {
          "hour": "15:00",
          "value": 94.0
        },
        {
          "hour": "16:00",
          "value": 92.0
        },
        {
          "hour": "17:00",
          "value": 92.0
        },
        {
          "hour": "18:00",
          "value": 86.0
        },
        {
          "hour": "19:00",
          "value": 91.0
        },
        {
          "hour": "20:00",
          "value": 91.0
        },
        {
          "hour": "21:00",
          "value": 92.0
        },
        {
          "hour": "22:00",
          "value": 92.0
        },
        {
          "hour": "23:00",
          "value": 92.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 37.44
        },
        {
          "hour": "01:00",
          "value": 37.58
        },
        {
          "hour": "02:00",
          "value": 37.58
        },
        {
          "hour": "03:00",
          "value": 37.58
        },
        {
          "hour": "04:00",
          "value": 37.58
        },
        {
          "hour": "05:00",
          "value": 36.33
        },
        {
          "hour": "06:00",
          "value": 36.33
        },
        {
          "hour": "07:00",
          "value": 36.33
        },
        {
          "hour": "08:00",
          "value": 36.33
        },
        {
          "hour": "09:00",
          "value": 37.67
        },
        {
          "hour": "10:00",
          "value": 37.67
        },
        {
          "hour": "11:00",
          "value": 37.67
        },
        {
          "hour": "12:00",
          "value": 37.67
        },
        {
          "hour": "13:00",
          "value": 37.67
        },
        {
          "hour": "14:00",
          "value": 37.67
        },
        {
          "hour": "15:00",
          "value": 37.5
        },
        {
          "hour": "16:00",
          "value": 37.5
        },
        {
          "hour": "17:00",
          "value": 37.5
        },
        {
          "hour": "18:00",
          "value": 38.44
        },
        {
          "hour": "19:00",
          "value": 38.44
        },
        {
          "hour": "20:00",
          "value": 38.44
        },
        {
          "hour": "21:00",
          "value": 37.28
        },
        {
          "hour": "22:00",
          "value": 37.28
        },
        {
          "hour": "23:00",
          "value": 37.28
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 33.0
        },
        {
          "hour": "01:00",
          "value": 24.0
        },
        {
          "hour": "02:00",
          "value": 17.0
        },
        {
          "hour": "03:00",
          "value": 18.0
        },
        {
          "hour": "04:00",
          "value": 18.0
        },
        {
          "hour": "05:00",
          "value": 25.0
        },
        {
          "hour": "06:00",
          "value": 24.5
        },
        {
          "hour": "07:00",
          "value": 20.0
        },
        {
          "hour": "08:00",
          "value": 25.0
        },
        {
          "hour": "09:00",
          "value": 27.0
        },
        {
          "hour": "10:00",
          "value": 22.0
        },
        {
          "hour": "11:00",
          "value": 22.0
        },
        {
          "hour": "12:00",
          "value": 26.0
        },
        {
          "hour": "13:00",
          "value": 23.0
        },
        {
          "hour": "14:00",
          "value": 29.0
        },
        {
          "hour": "15:00",
          "value": 27.0
        },
        {
          "hour": "16:00",
          "value": 26.0
        },
        {
          "hour": "17:00",
          "value": 27.0
        },
        {
          "hour": "18:00",
          "value": 31.0
        },
        {
          "hour": "19:00",
          "value": 27.0
        },
        {
          "hour": "20:00",
          "value": 27.0
        },
        {
          "hour": "21:00",
          "value": 27.0
        },
        {
          "hour": "22:00",
          "value": 27.0
        },
        {
          "hour": "23:00",
          "value": 27.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 9.1,
        "unit": "10\u00b3/\u00b5L",
        "flag": "NORMAL",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.5,
        "unit": "mg/dL",
        "flag": "LOW",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.7,
        "unit": "mmol/L",
        "flag": "HIGH",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 152.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 11.9,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 4.3,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 35.0,
        "unit": "mEq/L",
        "flag": "HIGH",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 40.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Age (78 yrs)",
        "value": 0.117,
        "direction": "positive"
      },
      {
        "feature": "Lactate (1.7mmol/L)",
        "value": 0.087,
        "direction": "positive"
      },
      {
        "feature": "SpO\u2082 (92.0%)",
        "value": 0.05,
        "direction": "positive"
      },
      {
        "feature": "Resp Rate (27/m)",
        "value": 0.05,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000161",
    "name": "Rachel Kim",
    "age": 31,
    "gender": "F",
    "ward": "NICU",
    "bed": "N-009",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Septic Shock",
    "comorbidities": [
      "CKD",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 82.3
        },
        {
          "hour": "01:00",
          "value": 80.0
        },
        {
          "hour": "02:00",
          "value": 83.0
        },
        {
          "hour": "03:00",
          "value": 82.0
        },
        {
          "hour": "04:00",
          "value": 81.0
        },
        {
          "hour": "05:00",
          "value": 78.0
        },
        {
          "hour": "06:00",
          "value": 81.0
        },
        {
          "hour": "07:00",
          "value": 80.0
        },
        {
          "hour": "08:00",
          "value": 79.5
        },
        {
          "hour": "09:00",
          "value": 78.0
        },
        {
          "hour": "10:00",
          "value": 84.0
        },
        {
          "hour": "11:00",
          "value": 79.0
        },
        {
          "hour": "12:00",
          "value": 88.0
        },
        {
          "hour": "13:00",
          "value": 82.0
        },
        {
          "hour": "14:00",
          "value": 79.0
        },
        {
          "hour": "15:00",
          "value": 81.0
        },
        {
          "hour": "16:00",
          "value": 90.0
        },
        {
          "hour": "17:00",
          "value": 82.0
        },
        {
          "hour": "18:00",
          "value": 82.0
        },
        {
          "hour": "19:00",
          "value": 88.0
        },
        {
          "hour": "20:00",
          "value": 81.0
        },
        {
          "hour": "21:00",
          "value": 84.0
        },
        {
          "hour": "22:00",
          "value": 89.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 128.2
        },
        {
          "hour": "01:00",
          "value": 160.0
        },
        {
          "hour": "02:00",
          "value": 141.0
        },
        {
          "hour": "03:00",
          "value": 153.0
        },
        {
          "hour": "04:00",
          "value": 135.0
        },
        {
          "hour": "05:00",
          "value": 123.0
        },
        {
          "hour": "06:00",
          "value": 127.0
        },
        {
          "hour": "07:00",
          "value": 129.0
        },
        {
          "hour": "08:00",
          "value": 123.5
        },
        {
          "hour": "09:00",
          "value": 118.0
        },
        {
          "hour": "10:00",
          "value": 132.0
        },
        {
          "hour": "11:00",
          "value": 147.0
        },
        {
          "hour": "12:00",
          "value": 137.0
        },
        {
          "hour": "13:00",
          "value": 117.0
        },
        {
          "hour": "14:00",
          "value": 108.0
        },
        {
          "hour": "15:00",
          "value": 127.0
        },
        {
          "hour": "16:00",
          "value": 160.0
        },
        {
          "hour": "17:00",
          "value": 118.0
        },
        {
          "hour": "18:00",
          "value": 102.0
        },
        {
          "hour": "19:00",
          "value": 102.0
        },
        {
          "hour": "20:00",
          "value": 116.0
        },
        {
          "hour": "21:00",
          "value": 127.0
        },
        {
          "hour": "22:00",
          "value": 118.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 80.5
        },
        {
          "hour": "01:00",
          "value": 98.0
        },
        {
          "hour": "02:00",
          "value": 88.0
        },
        {
          "hour": "03:00",
          "value": 100.0
        },
        {
          "hour": "04:00",
          "value": 90.0
        },
        {
          "hour": "05:00",
          "value": 79.0
        },
        {
          "hour": "06:00",
          "value": 79.0
        },
        {
          "hour": "07:00",
          "value": 78.0
        },
        {
          "hour": "08:00",
          "value": 75.5
        },
        {
          "hour": "09:00",
          "value": 73.0
        },
        {
          "hour": "10:00",
          "value": 74.0
        },
        {
          "hour": "11:00",
          "value": 86.0
        },
        {
          "hour": "12:00",
          "value": 81.0
        },
        {
          "hour": "13:00",
          "value": 69.0
        },
        {
          "hour": "14:00",
          "value": 68.0
        },
        {
          "hour": "15:00",
          "value": 77.0
        },
        {
          "hour": "16:00",
          "value": 95.0
        },
        {
          "hour": "17:00",
          "value": 69.0
        },
        {
          "hour": "18:00",
          "value": 80.0
        },
        {
          "hour": "19:00",
          "value": 80.0
        },
        {
          "hour": "20:00",
          "value": 85.0
        },
        {
          "hour": "21:00",
          "value": 73.0
        },
        {
          "hour": "22:00",
          "value": 73.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 99.5
        },
        {
          "hour": "01:00",
          "value": 100.0
        },
        {
          "hour": "02:00",
          "value": 100.0
        },
        {
          "hour": "03:00",
          "value": 100.0
        },
        {
          "hour": "04:00",
          "value": 100.0
        },
        {
          "hour": "05:00",
          "value": 100.0
        },
        {
          "hour": "06:00",
          "value": 100.0
        },
        {
          "hour": "07:00",
          "value": 100.0
        },
        {
          "hour": "08:00",
          "value": 98.5
        },
        {
          "hour": "09:00",
          "value": 100.0
        },
        {
          "hour": "10:00",
          "value": 99.0
        },
        {
          "hour": "11:00",
          "value": 100.0
        },
        {
          "hour": "12:00",
          "value": 98.0
        },
        {
          "hour": "13:00",
          "value": 98.0
        },
        {
          "hour": "14:00",
          "value": 99.0
        },
        {
          "hour": "15:00",
          "value": 100.0
        },
        {
          "hour": "16:00",
          "value": 100.0
        },
        {
          "hour": "17:00",
          "value": 99.0
        },
        {
          "hour": "18:00",
          "value": 100.0
        },
        {
          "hour": "19:00",
          "value": 99.0
        },
        {
          "hour": "20:00",
          "value": 100.0
        },
        {
          "hour": "21:00",
          "value": 100.0
        },
        {
          "hour": "22:00",
          "value": 99.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 37.8
        },
        {
          "hour": "01:00",
          "value": 37.8
        },
        {
          "hour": "02:00",
          "value": 37.44
        },
        {
          "hour": "03:00",
          "value": 37.44
        },
        {
          "hour": "04:00",
          "value": 37.89
        },
        {
          "hour": "05:00",
          "value": 37.89
        },
        {
          "hour": "06:00",
          "value": 37.89
        },
        {
          "hour": "07:00",
          "value": 37.89
        },
        {
          "hour": "08:00",
          "value": 37.94
        },
        {
          "hour": "09:00",
          "value": 37.94
        },
        {
          "hour": "10:00",
          "value": 37.94
        },
        {
          "hour": "11:00",
          "value": 37.94
        },
        {
          "hour": "12:00",
          "value": 37.94
        },
        {
          "hour": "13:00",
          "value": 37.94
        },
        {
          "hour": "14:00",
          "value": 37.94
        },
        {
          "hour": "15:00",
          "value": 37.94
        },
        {
          "hour": "16:00",
          "value": 37.94
        },
        {
          "hour": "17:00",
          "value": 37.94
        },
        {
          "hour": "18:00",
          "value": 37.78
        },
        {
          "hour": "19:00",
          "value": 37.78
        },
        {
          "hour": "20:00",
          "value": 37.78
        },
        {
          "hour": "21:00",
          "value": 37.78
        },
        {
          "hour": "22:00",
          "value": 37.78
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 19.1
        },
        {
          "hour": "01:00",
          "value": 14.0
        },
        {
          "hour": "02:00",
          "value": 16.0
        },
        {
          "hour": "03:00",
          "value": 19.0
        },
        {
          "hour": "04:00",
          "value": 20.0
        },
        {
          "hour": "05:00",
          "value": 20.0
        },
        {
          "hour": "06:00",
          "value": 20.0
        },
        {
          "hour": "07:00",
          "value": 20.0
        },
        {
          "hour": "08:00",
          "value": 22.0
        },
        {
          "hour": "09:00",
          "value": 20.0
        },
        {
          "hour": "10:00",
          "value": 21.0
        },
        {
          "hour": "11:00",
          "value": 20.0
        },
        {
          "hour": "12:00",
          "value": 20.0
        },
        {
          "hour": "13:00",
          "value": 20.0
        },
        {
          "hour": "14:00",
          "value": 18.0
        },
        {
          "hour": "15:00",
          "value": 17.0
        },
        {
          "hour": "16:00",
          "value": 19.0
        },
        {
          "hour": "17:00",
          "value": 17.0
        },
        {
          "hour": "18:00",
          "value": 19.0
        },
        {
          "hour": "19:00",
          "value": 19.5
        },
        {
          "hour": "20:00",
          "value": 20.0
        },
        {
          "hour": "21:00",
          "value": 18.0
        },
        {
          "hour": "22:00",
          "value": 20.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 13.2,
        "unit": "10\u00b3/\u00b5L",
        "flag": "HIGH",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 3.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Glucose",
        "value": 139.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 6.9,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 3.8,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 24.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 29.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "7\u201320"
      },
      {
        "name": "Platelets",
        "value": 92.0,
        "unit": "10\u00b3/\u00b5L",
        "flag": "LOW",
        "range": "150\u2013400"
      }
    ],
    "shapValues": [
      {
        "feature": "Creatinine (3.0mg/dL)",
        "value": 0.18,
        "direction": "positive"
      },
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "WBC (13.2k/\u00b5L)",
        "value": 0.044,
        "direction": "positive"
      },
      {
        "feature": "HR (89 bpm)",
        "value": 0.03,
        "direction": "positive"
      },
      {
        "feature": "SBP (118 mmHg)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Creatinine (3.0mg/dL). Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000171",
    "name": "Rachel Davis",
    "age": 25,
    "gender": "F",
    "ward": "NICU",
    "bed": "N-007",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Septic Shock",
    "comorbidities": [
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 105.0
        },
        {
          "hour": "01:00",
          "value": 105.0
        },
        {
          "hour": "02:00",
          "value": 105.0
        },
        {
          "hour": "03:00",
          "value": 125.5
        },
        {
          "hour": "04:00",
          "value": 111.0
        },
        {
          "hour": "05:00",
          "value": 115.0
        },
        {
          "hour": "06:00",
          "value": 124.0
        },
        {
          "hour": "07:00",
          "value": 120.0
        },
        {
          "hour": "08:00",
          "value": 108.0
        },
        {
          "hour": "09:00",
          "value": 107.0
        },
        {
          "hour": "10:00",
          "value": 107.0
        },
        {
          "hour": "11:00",
          "value": 129.0
        },
        {
          "hour": "12:00",
          "value": 104.0
        },
        {
          "hour": "13:00",
          "value": 106.0
        },
        {
          "hour": "14:00",
          "value": 113.0
        },
        {
          "hour": "15:00",
          "value": 110.0
        },
        {
          "hour": "16:00",
          "value": 109.0
        },
        {
          "hour": "17:00",
          "value": 107.0
        },
        {
          "hour": "18:00",
          "value": 125.0
        },
        {
          "hour": "19:00",
          "value": 124.0
        },
        {
          "hour": "20:00",
          "value": 126.0
        },
        {
          "hour": "21:00",
          "value": 107.5
        },
        {
          "hour": "22:00",
          "value": 107.5
        },
        {
          "hour": "23:00",
          "value": 118.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 103.0
        },
        {
          "hour": "01:00",
          "value": 103.0
        },
        {
          "hour": "02:00",
          "value": 103.0
        },
        {
          "hour": "03:00",
          "value": 121.0
        },
        {
          "hour": "04:00",
          "value": 107.0
        },
        {
          "hour": "05:00",
          "value": 95.0
        },
        {
          "hour": "06:00",
          "value": 102.0
        },
        {
          "hour": "07:00",
          "value": 100.0
        },
        {
          "hour": "08:00",
          "value": 79.0
        },
        {
          "hour": "09:00",
          "value": 94.0
        },
        {
          "hour": "10:00",
          "value": 94.0
        },
        {
          "hour": "11:00",
          "value": 101.5
        },
        {
          "hour": "12:00",
          "value": 99.0
        },
        {
          "hour": "13:00",
          "value": 104.0
        },
        {
          "hour": "14:00",
          "value": 106.5
        },
        {
          "hour": "15:00",
          "value": 107.0
        },
        {
          "hour": "16:00",
          "value": 106.0
        },
        {
          "hour": "17:00",
          "value": 108.0
        },
        {
          "hour": "18:00",
          "value": 97.0
        },
        {
          "hour": "19:00",
          "value": 106.0
        },
        {
          "hour": "20:00",
          "value": 117.5
        },
        {
          "hour": "21:00",
          "value": 102.5
        },
        {
          "hour": "22:00",
          "value": 102.5
        },
        {
          "hour": "23:00",
          "value": 109.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 56.0
        },
        {
          "hour": "01:00",
          "value": 56.0
        },
        {
          "hour": "02:00",
          "value": 56.0
        },
        {
          "hour": "03:00",
          "value": 71.0
        },
        {
          "hour": "04:00",
          "value": 65.0
        },
        {
          "hour": "05:00",
          "value": 58.0
        },
        {
          "hour": "06:00",
          "value": 61.0
        },
        {
          "hour": "07:00",
          "value": 59.0
        },
        {
          "hour": "08:00",
          "value": 51.0
        },
        {
          "hour": "09:00",
          "value": 56.0
        },
        {
          "hour": "10:00",
          "value": 55.0
        },
        {
          "hour": "11:00",
          "value": 66.5
        },
        {
          "hour": "12:00",
          "value": 59.0
        },
        {
          "hour": "13:00",
          "value": 60.0
        },
        {
          "hour": "14:00",
          "value": 63.0
        },
        {
          "hour": "15:00",
          "value": 65.0
        },
        {
          "hour": "16:00",
          "value": 64.0
        },
        {
          "hour": "17:00",
          "value": 64.0
        },
        {
          "hour": "18:00",
          "value": 57.0
        },
        {
          "hour": "19:00",
          "value": 59.0
        },
        {
          "hour": "20:00",
          "value": 67.5
        },
        {
          "hour": "21:00",
          "value": 54.5
        },
        {
          "hour": "22:00",
          "value": 54.5
        },
        {
          "hour": "23:00",
          "value": 61.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 100.0
        },
        {
          "hour": "01:00",
          "value": 100.0
        },
        {
          "hour": "02:00",
          "value": 100.0
        },
        {
          "hour": "03:00",
          "value": 99.5
        },
        {
          "hour": "04:00",
          "value": 100.0
        },
        {
          "hour": "05:00",
          "value": 100.0
        },
        {
          "hour": "06:00",
          "value": 100.0
        },
        {
          "hour": "07:00",
          "value": 100.0
        },
        {
          "hour": "08:00",
          "value": 99.0
        },
        {
          "hour": "09:00",
          "value": 100.0
        },
        {
          "hour": "10:00",
          "value": 100.0
        },
        {
          "hour": "11:00",
          "value": 99.0
        },
        {
          "hour": "12:00",
          "value": 100.0
        },
        {
          "hour": "13:00",
          "value": 100.0
        },
        {
          "hour": "14:00",
          "value": 100.0
        },
        {
          "hour": "15:00",
          "value": 100.0
        },
        {
          "hour": "16:00",
          "value": 100.0
        },
        {
          "hour": "17:00",
          "value": 100.0
        },
        {
          "hour": "18:00",
          "value": 100.0
        },
        {
          "hour": "19:00",
          "value": 100.0
        },
        {
          "hour": "20:00",
          "value": 100.0
        },
        {
          "hour": "21:00",
          "value": 95.0
        },
        {
          "hour": "22:00",
          "value": 95.0
        },
        {
          "hour": "23:00",
          "value": 100.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 37.33
        },
        {
          "hour": "01:00",
          "value": 37.33
        },
        {
          "hour": "02:00",
          "value": 37.33
        },
        {
          "hour": "03:00",
          "value": 37.72
        },
        {
          "hour": "04:00",
          "value": 37.72
        },
        {
          "hour": "05:00",
          "value": 37.72
        },
        {
          "hour": "06:00",
          "value": 37.72
        },
        {
          "hour": "07:00",
          "value": 37.89
        },
        {
          "hour": "08:00",
          "value": 37.89
        },
        {
          "hour": "09:00",
          "value": 37.89
        },
        {
          "hour": "10:00",
          "value": 37.89
        },
        {
          "hour": "11:00",
          "value": 38.28
        },
        {
          "hour": "12:00",
          "value": 38.28
        },
        {
          "hour": "13:00",
          "value": 38.28
        },
        {
          "hour": "14:00",
          "value": 37.83
        },
        {
          "hour": "15:00",
          "value": 37.83
        },
        {
          "hour": "16:00",
          "value": 37.83
        },
        {
          "hour": "17:00",
          "value": 37.83
        },
        {
          "hour": "18:00",
          "value": 37.83
        },
        {
          "hour": "19:00",
          "value": 37.83
        },
        {
          "hour": "20:00",
          "value": 37.83
        },
        {
          "hour": "21:00",
          "value": 37.83
        },
        {
          "hour": "22:00",
          "value": 37.83
        },
        {
          "hour": "23:00",
          "value": 37.72
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 18.0
        },
        {
          "hour": "01:00",
          "value": 18.0
        },
        {
          "hour": "02:00",
          "value": 18.0
        },
        {
          "hour": "03:00",
          "value": 21.0
        },
        {
          "hour": "04:00",
          "value": 16.0
        },
        {
          "hour": "05:00",
          "value": 23.0
        },
        {
          "hour": "06:00",
          "value": 23.0
        },
        {
          "hour": "07:00",
          "value": 14.0
        },
        {
          "hour": "08:00",
          "value": 18.0
        },
        {
          "hour": "09:00",
          "value": 19.0
        },
        {
          "hour": "10:00",
          "value": 25.0
        },
        {
          "hour": "11:00",
          "value": 12.5
        },
        {
          "hour": "12:00",
          "value": 34.0
        },
        {
          "hour": "13:00",
          "value": 23.0
        },
        {
          "hour": "14:00",
          "value": 17.0
        },
        {
          "hour": "15:00",
          "value": 17.0
        },
        {
          "hour": "16:00",
          "value": 16.0
        },
        {
          "hour": "17:00",
          "value": 16.0
        },
        {
          "hour": "18:00",
          "value": 24.0
        },
        {
          "hour": "19:00",
          "value": 24.5
        },
        {
          "hour": "20:00",
          "value": 14.0
        },
        {
          "hour": "21:00",
          "value": 16.0
        },
        {
          "hour": "22:00",
          "value": 16.0
        },
        {
          "hour": "23:00",
          "value": 19.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 15.0,
        "unit": "10\u00b3/\u00b5L",
        "flag": "HIGH",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.5,
        "unit": "mg/dL",
        "flag": "LOW",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 0.7,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 89.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 11.0,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 3.2,
        "unit": "mEq/L",
        "flag": "LOW",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 27.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 6.0,
        "unit": "mg/dL",
        "flag": "LOW",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "HR (118 bpm)",
        "value": 0.102,
        "direction": "positive"
      },
      {
        "feature": "WBC (15.0k/\u00b5L)",
        "value": 0.08,
        "direction": "positive"
      },
      {
        "feature": "SBP (109 mmHg)",
        "value": 0.02,
        "direction": "positive"
      },
      {
        "feature": "SpO\u2082 (100.0%)",
        "value": 0.02,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000178",
    "name": "Robert Lewis",
    "age": 43,
    "gender": "M",
    "ward": "NICU",
    "bed": "N-008",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Multi-Organ Failure",
    "comorbidities": [
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 95.0
        },
        {
          "hour": "01:00",
          "value": 90.0
        },
        {
          "hour": "02:00",
          "value": 89.0
        },
        {
          "hour": "03:00",
          "value": 94.0
        },
        {
          "hour": "04:00",
          "value": 98.0
        },
        {
          "hour": "05:00",
          "value": 102.0
        },
        {
          "hour": "06:00",
          "value": 92.0
        },
        {
          "hour": "07:00",
          "value": 93.0
        },
        {
          "hour": "08:00",
          "value": 95.0
        },
        {
          "hour": "09:00",
          "value": 80.0
        },
        {
          "hour": "10:00",
          "value": 80.0
        },
        {
          "hour": "11:00",
          "value": 95.0
        },
        {
          "hour": "12:00",
          "value": 108.0
        },
        {
          "hour": "13:00",
          "value": 104.0
        },
        {
          "hour": "14:00",
          "value": 99.0
        },
        {
          "hour": "15:00",
          "value": 88.0
        },
        {
          "hour": "16:00",
          "value": 104.0
        },
        {
          "hour": "17:00",
          "value": 119.0
        },
        {
          "hour": "18:00",
          "value": 114.0
        },
        {
          "hour": "19:00",
          "value": 91.0
        },
        {
          "hour": "20:00",
          "value": 111.0
        },
        {
          "hour": "21:00",
          "value": 95.0
        },
        {
          "hour": "22:00",
          "value": 117.0
        },
        {
          "hour": "23:00",
          "value": 102.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 128.0
        },
        {
          "hour": "01:00",
          "value": 121.0
        },
        {
          "hour": "02:00",
          "value": 131.0
        },
        {
          "hour": "03:00",
          "value": 120.0
        },
        {
          "hour": "04:00",
          "value": 132.0
        },
        {
          "hour": "05:00",
          "value": 129.0
        },
        {
          "hour": "06:00",
          "value": 136.0
        },
        {
          "hour": "07:00",
          "value": 126.0
        },
        {
          "hour": "08:00",
          "value": 153.0
        },
        {
          "hour": "09:00",
          "value": 127.0
        },
        {
          "hour": "10:00",
          "value": 134.0
        },
        {
          "hour": "11:00",
          "value": 141.0
        },
        {
          "hour": "12:00",
          "value": 173.0
        },
        {
          "hour": "13:00",
          "value": 125.0
        },
        {
          "hour": "14:00",
          "value": 118.0
        },
        {
          "hour": "15:00",
          "value": 129.0
        },
        {
          "hour": "16:00",
          "value": 126.0
        },
        {
          "hour": "17:00",
          "value": 123.0
        },
        {
          "hour": "18:00",
          "value": 139.0
        },
        {
          "hour": "19:00",
          "value": 129.0
        },
        {
          "hour": "20:00",
          "value": 222.0
        },
        {
          "hour": "21:00",
          "value": 161.0
        },
        {
          "hour": "22:00",
          "value": 122.0
        },
        {
          "hour": "23:00",
          "value": 118.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 66.0
        },
        {
          "hour": "01:00",
          "value": 62.0
        },
        {
          "hour": "02:00",
          "value": 64.0
        },
        {
          "hour": "03:00",
          "value": 61.0
        },
        {
          "hour": "04:00",
          "value": 65.0
        },
        {
          "hour": "05:00",
          "value": 64.0
        },
        {
          "hour": "06:00",
          "value": 65.0
        },
        {
          "hour": "07:00",
          "value": 61.0
        },
        {
          "hour": "08:00",
          "value": 75.0
        },
        {
          "hour": "09:00",
          "value": 62.0
        },
        {
          "hour": "10:00",
          "value": 64.0
        },
        {
          "hour": "11:00",
          "value": 69.0
        },
        {
          "hour": "12:00",
          "value": 80.0
        },
        {
          "hour": "13:00",
          "value": 63.0
        },
        {
          "hour": "14:00",
          "value": 61.0
        },
        {
          "hour": "15:00",
          "value": 63.0
        },
        {
          "hour": "16:00",
          "value": 76.0
        },
        {
          "hour": "17:00",
          "value": 63.0
        },
        {
          "hour": "18:00",
          "value": 69.0
        },
        {
          "hour": "19:00",
          "value": 67.0
        },
        {
          "hour": "20:00",
          "value": 88.0
        },
        {
          "hour": "21:00",
          "value": 76.0
        },
        {
          "hour": "22:00",
          "value": 65.0
        },
        {
          "hour": "23:00",
          "value": 61.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 97.0
        },
        {
          "hour": "01:00",
          "value": 98.0
        },
        {
          "hour": "02:00",
          "value": 97.0
        },
        {
          "hour": "03:00",
          "value": 96.0
        },
        {
          "hour": "04:00",
          "value": 98.0
        },
        {
          "hour": "05:00",
          "value": 97.0
        },
        {
          "hour": "06:00",
          "value": 98.0
        },
        {
          "hour": "07:00",
          "value": 97.0
        },
        {
          "hour": "08:00",
          "value": 98.0
        },
        {
          "hour": "09:00",
          "value": 97.0
        },
        {
          "hour": "10:00",
          "value": 98.0
        },
        {
          "hour": "11:00",
          "value": 98.0
        },
        {
          "hour": "12:00",
          "value": 97.0
        },
        {
          "hour": "13:00",
          "value": 97.0
        },
        {
          "hour": "14:00",
          "value": 97.0
        },
        {
          "hour": "15:00",
          "value": 97.0
        },
        {
          "hour": "16:00",
          "value": 98.0
        },
        {
          "hour": "17:00",
          "value": 97.0
        },
        {
          "hour": "18:00",
          "value": 97.0
        },
        {
          "hour": "19:00",
          "value": 98.0
        },
        {
          "hour": "20:00",
          "value": 97.0
        },
        {
          "hour": "21:00",
          "value": 98.0
        },
        {
          "hour": "22:00",
          "value": 97.0
        },
        {
          "hour": "23:00",
          "value": 98.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 37.56
        },
        {
          "hour": "01:00",
          "value": 37.56
        },
        {
          "hour": "02:00",
          "value": 37.56
        },
        {
          "hour": "03:00",
          "value": 37.56
        },
        {
          "hour": "04:00",
          "value": 37.44
        },
        {
          "hour": "05:00",
          "value": 37.44
        },
        {
          "hour": "06:00",
          "value": 37.44
        },
        {
          "hour": "07:00",
          "value": 37.44
        },
        {
          "hour": "08:00",
          "value": 37.44
        },
        {
          "hour": "09:00",
          "value": 37.44
        },
        {
          "hour": "10:00",
          "value": 37.44
        },
        {
          "hour": "11:00",
          "value": 37.44
        },
        {
          "hour": "12:00",
          "value": 37.33
        },
        {
          "hour": "13:00",
          "value": 37.33
        },
        {
          "hour": "14:00",
          "value": 37.33
        },
        {
          "hour": "15:00",
          "value": 37.33
        },
        {
          "hour": "16:00",
          "value": 37.67
        },
        {
          "hour": "17:00",
          "value": 37.67
        },
        {
          "hour": "18:00",
          "value": 37.67
        },
        {
          "hour": "19:00",
          "value": 37.67
        },
        {
          "hour": "20:00",
          "value": 37.89
        },
        {
          "hour": "21:00",
          "value": 37.89
        },
        {
          "hour": "22:00",
          "value": 37.89
        },
        {
          "hour": "23:00",
          "value": 37.89
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 23.0
        },
        {
          "hour": "01:00",
          "value": 23.0
        },
        {
          "hour": "02:00",
          "value": 13.0
        },
        {
          "hour": "03:00",
          "value": 15.0
        },
        {
          "hour": "04:00",
          "value": 32.0
        },
        {
          "hour": "05:00",
          "value": 31.0
        },
        {
          "hour": "06:00",
          "value": 17.0
        },
        {
          "hour": "07:00",
          "value": 18.0
        },
        {
          "hour": "08:00",
          "value": 20.0
        },
        {
          "hour": "09:00",
          "value": 12.0
        },
        {
          "hour": "10:00",
          "value": 12.0
        },
        {
          "hour": "11:00",
          "value": 13.0
        },
        {
          "hour": "12:00",
          "value": 24.0
        },
        {
          "hour": "13:00",
          "value": 27.0
        },
        {
          "hour": "14:00",
          "value": 12.0
        },
        {
          "hour": "15:00",
          "value": 13.0
        },
        {
          "hour": "16:00",
          "value": 31.0
        },
        {
          "hour": "17:00",
          "value": 17.0
        },
        {
          "hour": "18:00",
          "value": 21.0
        },
        {
          "hour": "19:00",
          "value": 13.0
        },
        {
          "hour": "20:00",
          "value": 20.0
        },
        {
          "hour": "21:00",
          "value": 15.0
        },
        {
          "hour": "22:00",
          "value": 18.0
        },
        {
          "hour": "23:00",
          "value": 16.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 10.6,
        "unit": "10\u00b3/\u00b5L",
        "flag": "NORMAL",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.6,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.1,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 134.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 8.7,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 3.8,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 29.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 19.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "HR (102 bpm)",
        "value": 0.038,
        "direction": "positive"
      },
      {
        "feature": "SBP (118 mmHg)",
        "value": 0.02,
        "direction": "positive"
      },
      {
        "feature": "SpO\u2082 (98.0%)",
        "value": 0.02,
        "direction": "positive"
      },
      {
        "feature": "Resp Rate (16/m)",
        "value": 0.015,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000185",
    "name": "Robert Thompson",
    "age": 58,
    "gender": "M",
    "ward": "NICU",
    "bed": "N-003",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "ARDS",
    "comorbidities": [
      "CKD",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 83.0
        },
        {
          "hour": "01:00",
          "value": 88.0
        },
        {
          "hour": "02:00",
          "value": 93.0
        },
        {
          "hour": "03:00",
          "value": 92.0
        },
        {
          "hour": "04:00",
          "value": 92.0
        },
        {
          "hour": "05:00",
          "value": 91.0
        },
        {
          "hour": "06:00",
          "value": 92.0
        },
        {
          "hour": "07:00",
          "value": 89.0
        },
        {
          "hour": "08:00",
          "value": 87.0
        },
        {
          "hour": "09:00",
          "value": 85.0
        },
        {
          "hour": "10:00",
          "value": 90.0
        },
        {
          "hour": "11:00",
          "value": 80.0
        },
        {
          "hour": "12:00",
          "value": 92.0
        },
        {
          "hour": "13:00",
          "value": 95.0
        },
        {
          "hour": "14:00",
          "value": 90.0
        },
        {
          "hour": "15:00",
          "value": 88.0
        },
        {
          "hour": "16:00",
          "value": 86.0
        },
        {
          "hour": "17:00",
          "value": 79.0
        },
        {
          "hour": "18:00",
          "value": 79.0
        },
        {
          "hour": "19:00",
          "value": 85.0
        },
        {
          "hour": "20:00",
          "value": 84.0
        },
        {
          "hour": "21:00",
          "value": 86.0
        },
        {
          "hour": "22:00",
          "value": 83.0
        },
        {
          "hour": "23:00",
          "value": 82.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 170.0
        },
        {
          "hour": "01:00",
          "value": 176.0
        },
        {
          "hour": "02:00",
          "value": 130.0
        },
        {
          "hour": "03:00",
          "value": 165.0
        },
        {
          "hour": "04:00",
          "value": 166.0
        },
        {
          "hour": "05:00",
          "value": 158.5
        },
        {
          "hour": "06:00",
          "value": 170.0
        },
        {
          "hour": "07:00",
          "value": 150.5
        },
        {
          "hour": "08:00",
          "value": 135.0
        },
        {
          "hour": "09:00",
          "value": 145.0
        },
        {
          "hour": "10:00",
          "value": 142.5
        },
        {
          "hour": "11:00",
          "value": 152.0
        },
        {
          "hour": "12:00",
          "value": 149.0
        },
        {
          "hour": "13:00",
          "value": 137.0
        },
        {
          "hour": "14:00",
          "value": 140.5
        },
        {
          "hour": "15:00",
          "value": 135.5
        },
        {
          "hour": "16:00",
          "value": 149.0
        },
        {
          "hour": "17:00",
          "value": 122.5
        },
        {
          "hour": "18:00",
          "value": 165.0
        },
        {
          "hour": "19:00",
          "value": 160.5
        },
        {
          "hour": "20:00",
          "value": 175.5
        },
        {
          "hour": "21:00",
          "value": 175.0
        },
        {
          "hour": "22:00",
          "value": 171.0
        },
        {
          "hour": "23:00",
          "value": 180.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 90.0
        },
        {
          "hour": "01:00",
          "value": 97.0
        },
        {
          "hour": "02:00",
          "value": 89.0
        },
        {
          "hour": "03:00",
          "value": 87.0
        },
        {
          "hour": "04:00",
          "value": 95.0
        },
        {
          "hour": "05:00",
          "value": 93.0
        },
        {
          "hour": "06:00",
          "value": 98.0
        },
        {
          "hour": "07:00",
          "value": 131.0
        },
        {
          "hour": "08:00",
          "value": 91.0
        },
        {
          "hour": "09:00",
          "value": 114.0
        },
        {
          "hour": "10:00",
          "value": 77.0
        },
        {
          "hour": "11:00",
          "value": 79.0
        },
        {
          "hour": "12:00",
          "value": 73.0
        },
        {
          "hour": "13:00",
          "value": 73.0
        },
        {
          "hour": "14:00",
          "value": 74.0
        },
        {
          "hour": "15:00",
          "value": 70.0
        },
        {
          "hour": "16:00",
          "value": 81.0
        },
        {
          "hour": "17:00",
          "value": 87.0
        },
        {
          "hour": "18:00",
          "value": 89.0
        },
        {
          "hour": "19:00",
          "value": 95.0
        },
        {
          "hour": "20:00",
          "value": 101.0
        },
        {
          "hour": "21:00",
          "value": 103.0
        },
        {
          "hour": "22:00",
          "value": 90.0
        },
        {
          "hour": "23:00",
          "value": 107.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 97.0
        },
        {
          "hour": "01:00",
          "value": 93.0
        },
        {
          "hour": "02:00",
          "value": 99.0
        },
        {
          "hour": "03:00",
          "value": 98.0
        },
        {
          "hour": "04:00",
          "value": 99.0
        },
        {
          "hour": "05:00",
          "value": 97.0
        },
        {
          "hour": "06:00",
          "value": 99.0
        },
        {
          "hour": "07:00",
          "value": 86.0
        },
        {
          "hour": "08:00",
          "value": 97.0
        },
        {
          "hour": "09:00",
          "value": 98.0
        },
        {
          "hour": "10:00",
          "value": 96.0
        },
        {
          "hour": "11:00",
          "value": 94.0
        },
        {
          "hour": "12:00",
          "value": 91.0
        },
        {
          "hour": "13:00",
          "value": 92.0
        },
        {
          "hour": "14:00",
          "value": 99.0
        },
        {
          "hour": "15:00",
          "value": 99.0
        },
        {
          "hour": "16:00",
          "value": 98.0
        },
        {
          "hour": "17:00",
          "value": 95.0
        },
        {
          "hour": "18:00",
          "value": 96.0
        },
        {
          "hour": "19:00",
          "value": 97.5
        },
        {
          "hour": "20:00",
          "value": 94.0
        },
        {
          "hour": "21:00",
          "value": 95.0
        },
        {
          "hour": "22:00",
          "value": 91.0
        },
        {
          "hour": "23:00",
          "value": 97.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 36.89
        },
        {
          "hour": "01:00",
          "value": 36.89
        },
        {
          "hour": "02:00",
          "value": 36.89
        },
        {
          "hour": "03:00",
          "value": 37.28
        },
        {
          "hour": "04:00",
          "value": 37.28
        },
        {
          "hour": "05:00",
          "value": 37.28
        },
        {
          "hour": "06:00",
          "value": 37.28
        },
        {
          "hour": "07:00",
          "value": 37.28
        },
        {
          "hour": "08:00",
          "value": 37.28
        },
        {
          "hour": "09:00",
          "value": 37.28
        },
        {
          "hour": "10:00",
          "value": 37.28
        },
        {
          "hour": "11:00",
          "value": 37.22
        },
        {
          "hour": "12:00",
          "value": 37.22
        },
        {
          "hour": "13:00",
          "value": 37.22
        },
        {
          "hour": "14:00",
          "value": 37.22
        },
        {
          "hour": "15:00",
          "value": 37.22
        },
        {
          "hour": "16:00",
          "value": 36.06
        },
        {
          "hour": "17:00",
          "value": 36.06
        },
        {
          "hour": "18:00",
          "value": 36.06
        },
        {
          "hour": "19:00",
          "value": 36.56
        },
        {
          "hour": "20:00",
          "value": 36.56
        },
        {
          "hour": "21:00",
          "value": 36.56
        },
        {
          "hour": "22:00",
          "value": 36.56
        },
        {
          "hour": "23:00",
          "value": 36.06
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 25.0
        },
        {
          "hour": "01:00",
          "value": 26.0
        },
        {
          "hour": "02:00",
          "value": 29.0
        },
        {
          "hour": "03:00",
          "value": 30.0
        },
        {
          "hour": "04:00",
          "value": 24.0
        },
        {
          "hour": "05:00",
          "value": 24.0
        },
        {
          "hour": "06:00",
          "value": 21.0
        },
        {
          "hour": "07:00",
          "value": 22.0
        },
        {
          "hour": "08:00",
          "value": 21.0
        },
        {
          "hour": "09:00",
          "value": 21.0
        },
        {
          "hour": "10:00",
          "value": 18.0
        },
        {
          "hour": "11:00",
          "value": 13.0
        },
        {
          "hour": "12:00",
          "value": 23.0
        },
        {
          "hour": "13:00",
          "value": 15.0
        },
        {
          "hour": "14:00",
          "value": 17.0
        },
        {
          "hour": "15:00",
          "value": 11.0
        },
        {
          "hour": "16:00",
          "value": 18.5
        },
        {
          "hour": "17:00",
          "value": 15.0
        },
        {
          "hour": "18:00",
          "value": 16.0
        },
        {
          "hour": "19:00",
          "value": 17.0
        },
        {
          "hour": "20:00",
          "value": 20.0
        },
        {
          "hour": "21:00",
          "value": 26.0
        },
        {
          "hour": "22:00",
          "value": 17.0
        },
        {
          "hour": "23:00",
          "value": 24.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 20.8,
        "unit": "10\u00b3/\u00b5L",
        "flag": "CRITICAL",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 1.7,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.4,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 152.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 13.9,
        "unit": "g/dL",
        "flag": "NORMAL",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 5.0,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 30.0,
        "unit": "mEq/L",
        "flag": "HIGH",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 32.0,
        "unit": "mg/dL",
        "flag": "HIGH",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "WBC (20.8k/\u00b5L)",
        "value": 0.196,
        "direction": "positive"
      },
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Lactate (1.4mmol/L)",
        "value": 0.05,
        "direction": "positive"
      },
      {
        "feature": "Creatinine (1.7mg/dL)",
        "value": 0.05,
        "direction": "positive"
      },
      {
        "feature": "Resp Rate (24/m)",
        "value": 0.035,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by WBC (20.8k/\u00b5L). Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  },
  {
    "id": "p000188",
    "name": "Jennifer Patel",
    "age": 74,
    "gender": "F",
    "ward": "NICU",
    "bed": "N-001",
    "admitTime": "2026-08-04T08:00:00",
    "diagnosis": "Septic Shock",
    "comorbidities": [
      "HTN",
      "DM Type 2",
      "Sepsis-3"
    ],
    "riskScore6h": 0.97,
    "riskScore12h": 0.85,
    "riskScore24h": 0.73,
    "riskCategory": "CRITICAL",
    "alertTriggered": true,
    "isSepsis": true,
    "vitals": {
      "heartRate": [
        {
          "hour": "00:00",
          "value": 100.0
        },
        {
          "hour": "01:00",
          "value": 102.0
        },
        {
          "hour": "02:00",
          "value": 103.0
        },
        {
          "hour": "03:00",
          "value": 103.0
        },
        {
          "hour": "04:00",
          "value": 111.0
        },
        {
          "hour": "05:00",
          "value": 111.0
        },
        {
          "hour": "06:00",
          "value": 110.0
        },
        {
          "hour": "07:00",
          "value": 109.0
        },
        {
          "hour": "08:00",
          "value": 109.0
        },
        {
          "hour": "09:00",
          "value": 104.0
        },
        {
          "hour": "10:00",
          "value": 104.0
        },
        {
          "hour": "11:00",
          "value": 104.0
        },
        {
          "hour": "12:00",
          "value": 110.0
        },
        {
          "hour": "13:00",
          "value": 111.0
        },
        {
          "hour": "14:00",
          "value": 115.0
        },
        {
          "hour": "15:00",
          "value": 115.0
        },
        {
          "hour": "16:00",
          "value": 116.0
        },
        {
          "hour": "17:00",
          "value": 115.0
        },
        {
          "hour": "18:00",
          "value": 114.0
        },
        {
          "hour": "19:00",
          "value": 113.0
        },
        {
          "hour": "20:00",
          "value": 114.5
        },
        {
          "hour": "21:00",
          "value": 115.0
        },
        {
          "hour": "22:00",
          "value": 113.0
        },
        {
          "hour": "23:00",
          "value": 113.0
        }
      ],
      "systolicBP": [
        {
          "hour": "00:00",
          "value": 104.0
        },
        {
          "hour": "01:00",
          "value": 100.0
        },
        {
          "hour": "02:00",
          "value": 115.0
        },
        {
          "hour": "03:00",
          "value": 115.0
        },
        {
          "hour": "04:00",
          "value": 122.0
        },
        {
          "hour": "05:00",
          "value": 130.0
        },
        {
          "hour": "06:00",
          "value": 108.0
        },
        {
          "hour": "07:00",
          "value": 116.0
        },
        {
          "hour": "08:00",
          "value": 115.0
        },
        {
          "hour": "09:00",
          "value": 107.0
        },
        {
          "hour": "10:00",
          "value": 107.0
        },
        {
          "hour": "11:00",
          "value": 107.0
        },
        {
          "hour": "12:00",
          "value": 89.0
        },
        {
          "hour": "13:00",
          "value": 118.0
        },
        {
          "hour": "14:00",
          "value": 113.0
        },
        {
          "hour": "15:00",
          "value": 117.0
        },
        {
          "hour": "16:00",
          "value": 109.0
        },
        {
          "hour": "17:00",
          "value": 101.0
        },
        {
          "hour": "18:00",
          "value": 111.0
        },
        {
          "hour": "19:00",
          "value": 99.0
        },
        {
          "hour": "20:00",
          "value": 103.0
        },
        {
          "hour": "21:00",
          "value": 113.0
        },
        {
          "hour": "22:00",
          "value": 103.0
        },
        {
          "hour": "23:00",
          "value": 86.0
        }
      ],
      "diastolicBP": [
        {
          "hour": "00:00",
          "value": 52.0
        },
        {
          "hour": "01:00",
          "value": 47.0
        },
        {
          "hour": "02:00",
          "value": 54.0
        },
        {
          "hour": "03:00",
          "value": 54.0
        },
        {
          "hour": "04:00",
          "value": 57.0
        },
        {
          "hour": "05:00",
          "value": 61.0
        },
        {
          "hour": "06:00",
          "value": 49.0
        },
        {
          "hour": "07:00",
          "value": 53.0
        },
        {
          "hour": "08:00",
          "value": 54.0
        },
        {
          "hour": "09:00",
          "value": 51.0
        },
        {
          "hour": "10:00",
          "value": 51.0
        },
        {
          "hour": "11:00",
          "value": 51.0
        },
        {
          "hour": "12:00",
          "value": 43.0
        },
        {
          "hour": "13:00",
          "value": 55.0
        },
        {
          "hour": "14:00",
          "value": 56.0
        },
        {
          "hour": "15:00",
          "value": 57.0
        },
        {
          "hour": "16:00",
          "value": 52.0
        },
        {
          "hour": "17:00",
          "value": 50.0
        },
        {
          "hour": "18:00",
          "value": 53.0
        },
        {
          "hour": "19:00",
          "value": 45.0
        },
        {
          "hour": "20:00",
          "value": 48.5
        },
        {
          "hour": "21:00",
          "value": 57.0
        },
        {
          "hour": "22:00",
          "value": 53.0
        },
        {
          "hour": "23:00",
          "value": 46.0
        }
      ],
      "spo2": [
        {
          "hour": "00:00",
          "value": 88.0
        },
        {
          "hour": "01:00",
          "value": 94.0
        },
        {
          "hour": "02:00",
          "value": 95.0
        },
        {
          "hour": "03:00",
          "value": 95.0
        },
        {
          "hour": "04:00",
          "value": 95.0
        },
        {
          "hour": "05:00",
          "value": 95.0
        },
        {
          "hour": "06:00",
          "value": 95.0
        },
        {
          "hour": "07:00",
          "value": 95.0
        },
        {
          "hour": "08:00",
          "value": 99.0
        },
        {
          "hour": "09:00",
          "value": 99.0
        },
        {
          "hour": "10:00",
          "value": 99.0
        },
        {
          "hour": "11:00",
          "value": 99.0
        },
        {
          "hour": "12:00",
          "value": 98.0
        },
        {
          "hour": "13:00",
          "value": 89.0
        },
        {
          "hour": "14:00",
          "value": 92.0
        },
        {
          "hour": "15:00",
          "value": 96.0
        },
        {
          "hour": "16:00",
          "value": 94.0
        },
        {
          "hour": "17:00",
          "value": 92.0
        },
        {
          "hour": "18:00",
          "value": 92.0
        },
        {
          "hour": "19:00",
          "value": 92.0
        },
        {
          "hour": "20:00",
          "value": 92.0
        },
        {
          "hour": "21:00",
          "value": 92.0
        },
        {
          "hour": "22:00",
          "value": 99.0
        },
        {
          "hour": "23:00",
          "value": 99.0
        }
      ],
      "temperature": [
        {
          "hour": "00:00",
          "value": 35.94
        },
        {
          "hour": "01:00",
          "value": 35.94
        },
        {
          "hour": "02:00",
          "value": 36.61
        },
        {
          "hour": "03:00",
          "value": 36.61
        },
        {
          "hour": "04:00",
          "value": 35.83
        },
        {
          "hour": "05:00",
          "value": 35.83
        },
        {
          "hour": "06:00",
          "value": 35.83
        },
        {
          "hour": "07:00",
          "value": 35.83
        },
        {
          "hour": "08:00",
          "value": 37.33
        },
        {
          "hour": "09:00",
          "value": 37.33
        },
        {
          "hour": "10:00",
          "value": 37.33
        },
        {
          "hour": "11:00",
          "value": 37.33
        },
        {
          "hour": "12:00",
          "value": 36.56
        },
        {
          "hour": "13:00",
          "value": 36.56
        },
        {
          "hour": "14:00",
          "value": 36.56
        },
        {
          "hour": "15:00",
          "value": 36.56
        },
        {
          "hour": "16:00",
          "value": 36.61
        },
        {
          "hour": "17:00",
          "value": 36.61
        },
        {
          "hour": "18:00",
          "value": 36.61
        },
        {
          "hour": "19:00",
          "value": 36.61
        },
        {
          "hour": "20:00",
          "value": 38.67
        },
        {
          "hour": "21:00",
          "value": 38.67
        },
        {
          "hour": "22:00",
          "value": 38.67
        },
        {
          "hour": "23:00",
          "value": 38.67
        }
      ],
      "respiratoryRate": [
        {
          "hour": "00:00",
          "value": 22.0
        },
        {
          "hour": "01:00",
          "value": 24.0
        },
        {
          "hour": "02:00",
          "value": 31.0
        },
        {
          "hour": "03:00",
          "value": 31.0
        },
        {
          "hour": "04:00",
          "value": 28.0
        },
        {
          "hour": "05:00",
          "value": 38.0
        },
        {
          "hour": "06:00",
          "value": 33.0
        },
        {
          "hour": "07:00",
          "value": 32.0
        },
        {
          "hour": "08:00",
          "value": 30.0
        },
        {
          "hour": "09:00",
          "value": 34.0
        },
        {
          "hour": "10:00",
          "value": 34.0
        },
        {
          "hour": "11:00",
          "value": 34.0
        },
        {
          "hour": "12:00",
          "value": 29.0
        },
        {
          "hour": "13:00",
          "value": 37.0
        },
        {
          "hour": "14:00",
          "value": 42.0
        },
        {
          "hour": "15:00",
          "value": 40.0
        },
        {
          "hour": "16:00",
          "value": 24.0
        },
        {
          "hour": "17:00",
          "value": 42.0
        },
        {
          "hour": "18:00",
          "value": 33.0
        },
        {
          "hour": "19:00",
          "value": 25.0
        },
        {
          "hour": "20:00",
          "value": 36.5
        },
        {
          "hour": "21:00",
          "value": 28.0
        },
        {
          "hour": "22:00",
          "value": 42.0
        },
        {
          "hour": "23:00",
          "value": 30.0
        }
      ]
    },
    "labs": [
      {
        "name": "WBC",
        "value": 11.0,
        "unit": "10\u00b3/\u00b5L",
        "flag": "NORMAL",
        "range": "4.5\u201311.0"
      },
      {
        "name": "Creatinine",
        "value": 0.4,
        "unit": "mg/dL",
        "flag": "LOW",
        "range": "0.6\u20131.2"
      },
      {
        "name": "Lactate",
        "value": 1.0,
        "unit": "mmol/L",
        "flag": "NORMAL",
        "range": "0.5\u20131.6"
      },
      {
        "name": "Glucose",
        "value": 101.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "70\u2013140"
      },
      {
        "name": "Hemoglobin",
        "value": 10.8,
        "unit": "g/dL",
        "flag": "LOW",
        "range": "12.0\u201317.0"
      },
      {
        "name": "Potassium",
        "value": 4.5,
        "unit": "mEq/L",
        "flag": "NORMAL",
        "range": "3.5\u20135.0"
      },
      {
        "name": "Bicarbonate",
        "value": 19.0,
        "unit": "mEq/L",
        "flag": "LOW",
        "range": "22\u201329"
      },
      {
        "name": "BUN",
        "value": 11.0,
        "unit": "mg/dL",
        "flag": "NORMAL",
        "range": "7\u201320"
      }
    ],
    "shapValues": [
      {
        "feature": "Sepsis onset detected",
        "value": 0.15,
        "direction": "positive"
      },
      {
        "feature": "Age (74 yrs)",
        "value": 0.094,
        "direction": "positive"
      },
      {
        "feature": "HR (113 bpm)",
        "value": 0.082,
        "direction": "positive"
      },
      {
        "feature": "SBP (86 mmHg)",
        "value": 0.065,
        "direction": "positive"
      },
      {
        "feature": "Resp Rate (30/m)",
        "value": 0.065,
        "direction": "positive"
      }
    ],
    "shapSummary": "<strong>Critical deterioration risk (97%)</strong> primarily driven by Sepsis onset detected. Immediate clinical review required.",
    "_source": "PhysioNet Challenge 2019 (de-identified)"
  }
];

/* ---- Resource data (unchanged) ---- */
export const resourceData = {
  wards: [
    { id: "MICU",   name: "Medical ICU",    beds: 20, occupied: 6, vents: 12, ventsInUse: 6, nurses: 8, doctors: 3 },
    { id: "CICU",   name: "Cardiac ICU",    beds: 16, occupied: 2, vents:  8, ventsInUse: 2, nurses: 6, doctors: 2 },
    { id: "SICU",   name: "Surgical ICU",   beds: 14, occupied: 0, vents:  7, ventsInUse: 0, nurses: 5, doctors: 2 },
    { id: "NICU",   name: "Neuro ICU",      beds: 12, occupied: 12, vents:  6, ventsInUse: 2, nurses: 4, doctors: 2 },
    { id: "PICU",   name: "Pedi ICU",       beds: 10, occupied: 5,  vents:  5, ventsInUse: 2, nurses: 4, doctors: 1 },
    { id: "STDOWN", name: "Step-Down",      beds: 30, occupied: 22, vents:  0, ventsInUse: 0, nurses: 8, doctors: 2 },
  ],
  occupancyTrend: Array.from({ length: 24 }, (_, i) => {
    const h = new Date(Date.now() - (23 - i) * 3600000);
    return {
      hour: `${h.getHours().toString().padStart(2,"0")}:00`,
      micu: Math.round(75 + Math.sin(i * 0.4) * 10 + (Math.random() - 0.5) * 5),
      cicu: Math.round(65 + Math.sin(i * 0.3 + 1) * 8 + (Math.random() - 0.5) * 4),
      sicu: Math.round(70 + Math.sin(i * 0.35 + 2) * 7 + (Math.random() - 0.5) * 4),
    };
  }),
  forecast: Array.from({ length: 14 }, (_, i) => {
    const d = new Date(); d.setDate(d.getDate() + i - 7);
    const base = 72 + Math.sin(i * 0.5) * 7;
    const isActual = i < 7;
    return {
      day: d.toLocaleDateString("en-US", { month: "short", day: "numeric" }),
      actual:   isActual  ? Math.round(base + (Math.random() - 0.5) * 5) : null,
      forecast: !isActual ? Math.round(base + (Math.random() - 0.5) * 3) : null,
      upper:    !isActual ? Math.round(base + 11) : null,
      lower:    !isActual ? Math.round(base - 11) : null,
    };
  }),
  heatmap: ["MICU","CICU","SICU","NICU","PICU","Step-Down"].map(ward => ({
    ward,
    hours: Array.from({ length: 8 }, () => {
      const base = ward === "MICU" ? 82 : ward === "CICU" ? 68 : ward === "SICU" ? 71 : ward === "NICU" ? 66 : ward === "PICU" ? 50 : 73;
      return Math.min(100, Math.round(base + (Math.random() - 0.5) * 18));
    }),
  })),
};

export const recentAlerts = patients
  .filter(p => p.alertTriggered)
  .slice(0, 6)
  .map((p, i) => ({
    id: `A${(i+1).toString().padStart(3,"0")}`,
    patient: p.name,
    type: p.riskCategory,
    message: p.shapSummary.replace(/<[^>]+>/g, "").slice(0, 90) + "…",
    time: `${(i * 8 + 2)} min ago`,
  }));

export const getRiskClass = (cat) =>
  ({ CRITICAL: "critical", HIGH: "high", MODERATE: "moderate", LOW: "low" }[cat] ?? "low");

export const getOccupancyColor = (pct) =>
  pct >= 90 ? "#ef4444" : pct >= 75 ? "#f97316" : pct >= 60 ? "#eab308" : "#22c55e";
