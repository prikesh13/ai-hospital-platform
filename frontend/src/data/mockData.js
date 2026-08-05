/**
 * mockData.js — Synthetic patient and resource data for the MedAI Platform
 *
 * ⚠️  DISCLAIMER: All data is fully synthetic and randomly generated.
 *     No real patient information is used. This is for prototype/research
 *     demonstration only. NOT for clinical use.
 */

const now = new Date();

/** Generate hourly time-series with bounded random walk + optional trend */
function ts(base, variance, hours = 24, trend = 0, decimals = 1) {
  let v = base;
  return Array.from({ length: hours }, (_, i) => {
    const h = new Date(now - (hours - 1 - i) * 3600000);
    const rw = (Math.random() - 0.5) * variance * 0.4;
    const tr = trend * (i / hours);
    v = Math.max(base - variance, Math.min(base + variance, v + rw + tr));
    const rounded = decimals === 0 ? Math.round(v) : Math.round(v * 10 ** decimals) / 10 ** decimals;
    return { hour: `${h.getHours().toString().padStart(2,'0')}:00`, value: rounded };
  });
}

/* ============================================================
   PATIENTS  (8 synthetic ICU patients)
   ============================================================ */
export const patients = [
  {
    id: 'P001',
    name: 'James Wilson',
    age: 67, gender: 'M',
    ward: 'MICU', bed: 'A-204',
    admitTime: '2026-08-03T08:30:00',
    diagnosis: 'Septic Shock',
    comorbidities: ['DM Type 2', 'CKD Stage 3', 'HTN'],
    riskScore6h: 0.87, riskScore12h: 0.72, riskScore24h: 0.61,
    riskCategory: 'CRITICAL', alertTriggered: true,
    vitals: {
      heartRate:       ts(118, 14, 24,  5, 0),
      systolicBP:      ts( 88, 12, 24, -3, 0),
      diastolicBP:     ts( 54,  8, 24, -2, 0),
      spo2:            ts( 90,  3, 24, -2, 1),
      temperature:     ts( 38.9, 0.4, 24, 0.2, 1),
      respiratoryRate: ts( 26,  4, 24,  2, 0),
    },
    labs: [
      { name: 'Lactate',       value: 4.2,  unit: 'mmol/L',  flag: 'CRITICAL', range: '0.5–1.6'   },
      { name: 'WBC',           value: 18.4, unit: '10³/µL',  flag: 'HIGH',     range: '4.5–11'    },
      { name: 'Creatinine',    value: 2.8,  unit: 'mg/dL',   flag: 'HIGH',     range: '0.6–1.2'   },
      { name: 'Procalcitonin', value: 12.4, unit: 'ng/mL',   flag: 'CRITICAL', range: '<0.1'      },
      { name: 'Hemoglobin',    value: 9.2,  unit: 'g/dL',    flag: 'LOW',      range: '13.5–17.5' },
      { name: 'Platelets',     value: 98,   unit: '10³/µL',  flag: 'LOW',      range: '150–400'   },
      { name: 'CRP',           value: 248,  unit: 'mg/L',    flag: 'HIGH',     range: '<10'       },
      { name: 'ALT',           value: 78,   unit: 'U/L',     flag: 'HIGH',     range: '7–40'      },
    ],
    shapValues: [
      { feature: 'Lactate (4.2 mmol/L)',   value: 0.231, direction: 'positive' },
      { feature: 'Heart Rate (118 bpm)',   value: 0.187, direction: 'positive' },
      { feature: 'MAP (58 mmHg)',          value: 0.162, direction: 'positive' },
      { feature: 'SpO₂ (90%)',             value: 0.143, direction: 'positive' },
      { feature: 'Resp. Rate (26 /min)',   value: 0.119, direction: 'positive' },
    ],
    shapSummary: 'Patient shows <strong>critical deterioration risk (87%)</strong> primarily driven by severely elevated lactate (4.2 mmol/L) and persistent hypotension (MAP 58 mmHg), consistent with septic shock physiology. Tachycardia and hypoxemia are compounding risk factors. Immediate vasopressor optimisation and source control are indicated.',
  },
  {
    id: 'P002',
    name: 'Sarah Chen',
    age: 54, gender: 'F',
    ward: 'MICU', bed: 'A-206',
    admitTime: '2026-08-04T14:15:00',
    diagnosis: 'ARDS / Pneumonia',
    comorbidities: ['Asthma', 'Obesity (BMI 38)'],
    riskScore6h: 0.73, riskScore12h: 0.65, riskScore24h: 0.55,
    riskCategory: 'HIGH', alertTriggered: true,
    vitals: {
      heartRate:       ts(105, 10, 24,  2, 0),
      systolicBP:      ts( 98, 10, 24, -1, 0),
      diastolicBP:     ts( 62,  7, 24,  0, 0),
      spo2:            ts( 88,  4, 24, -1, 1),
      temperature:     ts( 39.1, 0.3, 24, 0, 1),
      respiratoryRate: ts( 30,  5, 24,  1, 0),
    },
    labs: [
      { name: 'P/F Ratio',     value: 128,  unit: 'mmHg',   flag: 'CRITICAL', range: '>300'  },
      { name: 'CRP',           value: 186,  unit: 'mg/L',   flag: 'HIGH',     range: '<10'   },
      { name: 'WBC',           value: 14.2, unit: '10³/µL', flag: 'HIGH',     range: '4.5–11'},
      { name: 'Procalcitonin', value: 5.8,  unit: 'ng/mL',  flag: 'HIGH',     range: '<0.1'  },
      { name: 'Albumin',       value: 2.8,  unit: 'g/dL',   flag: 'LOW',      range: '3.5–5' },
      { name: 'D-Dimer',       value: 2.4,  unit: 'mg/L',   flag: 'HIGH',     range: '<0.5'  },
    ],
    shapValues: [
      { feature: 'P/F Ratio (128)',        value: 0.208, direction: 'positive' },
      { feature: 'SpO₂ (88%)',             value: 0.189, direction: 'positive' },
      { feature: 'Resp. Rate (30 /min)',   value: 0.147, direction: 'positive' },
      { feature: 'CRP (186 mg/L)',         value: 0.128, direction: 'positive' },
      { feature: 'Obesity (BMI 38)',       value: 0.091, direction: 'positive' },
    ],
    shapSummary: 'High deterioration risk (73%) driven by <strong>severe hypoxemia</strong> — P/F ratio of 128 satisfies ARDS criteria. Tachypnea (30/min) and elevated inflammatory markers compound the respiratory failure. Protective ventilation strategy and prone positioning should be considered.',
  },
  {
    id: 'P003',
    name: 'Robert Martinez',
    age: 71, gender: 'M',
    ward: 'CICU', bed: 'C-112',
    admitTime: '2026-08-04T06:00:00',
    diagnosis: 'Post-CABG Monitoring',
    comorbidities: ['CAD', 'HTN', 'DM Type 2', 'CKD Stage 2'],
    riskScore6h: 0.62, riskScore12h: 0.48, riskScore24h: 0.39,
    riskCategory: 'HIGH', alertTriggered: false,
    vitals: {
      heartRate:       ts( 88, 12, 24, -3, 0),
      systolicBP:      ts(108, 15, 24,  5, 0),
      diastolicBP:     ts( 66,  8, 24,  2, 0),
      spo2:            ts( 94,  2, 24,  1, 1),
      temperature:     ts( 37.8, 0.3, 24, -0.2, 1),
      respiratoryRate: ts( 18,  3, 24, -1, 0),
    },
    labs: [
      { name: 'Troponin-I',  value: 3.2,  unit: 'ng/mL',  flag: 'HIGH', range: '<0.04'  },
      { name: 'BNP',         value: 645,  unit: 'pg/mL',  flag: 'HIGH', range: '<100'   },
      { name: 'Creatinine',  value: 1.8,  unit: 'mg/dL',  flag: 'HIGH', range: '0.6–1.2'},
      { name: 'Hemoglobin',  value: 10.1, unit: 'g/dL',   flag: 'LOW',  range: '13.5–17.5'},
      { name: 'Potassium',   value: 3.3,  unit: 'mEq/L',  flag: 'LOW',  range: '3.5–5.0'},
      { name: 'INR',         value: 2.8,  unit: '',        flag: 'HIGH', range: '0.8–1.2'},
    ],
    shapValues: [
      { feature: 'Troponin-I (3.2 ng/mL)', value: 0.195, direction: 'positive' },
      { feature: 'BNP (645 pg/mL)',         value: 0.163, direction: 'positive' },
      { feature: 'Post-Surgical State',     value: 0.148, direction: 'positive' },
      { feature: 'Age (71 yrs)',            value: 0.112, direction: 'positive' },
      { feature: 'SpO₂ (94%)',              value: 0.087, direction: 'positive' },
    ],
    shapSummary: 'Elevated risk (62%) <strong>consistent with early post-operative cardiac state</strong>. Troponin and BNP elevation are expected post-CABG but remain clinically significant and should be trended. 12h and 24h projections show improving trajectory if haemodynamics remain stable.',
  },
  {
    id: 'P004',
    name: 'Emily Johnson',
    age: 42, gender: 'F',
    ward: 'MICU', bed: 'A-208',
    admitTime: '2026-08-04T20:45:00',
    diagnosis: 'Diabetic Ketoacidosis',
    comorbidities: ['DM Type 1'],
    riskScore6h: 0.44, riskScore12h: 0.32, riskScore24h: 0.22,
    riskCategory: 'MODERATE', alertTriggered: false,
    vitals: {
      heartRate:       ts(102, 10, 24, -8, 0),
      systolicBP:      ts(104, 10, 24,  8, 0),
      diastolicBP:     ts( 65,  6, 24,  4, 0),
      spo2:            ts( 95,  2, 24,  1, 1),
      temperature:     ts( 37.4, 0.3, 24, -0.1, 1),
      respiratoryRate: ts( 22,  4, 24, -4, 0),
    },
    labs: [
      { name: 'Glucose',   value: 382, unit: 'mg/dL',  flag: 'CRITICAL', range: '70–100' },
      { name: 'pH',        value: 7.18, unit: '',       flag: 'CRITICAL', range: '7.35–7.45'},
      { name: 'HCO₃',      value: 10,  unit: 'mEq/L',  flag: 'CRITICAL', range: '22–29' },
      { name: 'Ketones',   value: 4.8, unit: 'mmol/L', flag: 'HIGH',     range: '<0.6'  },
      { name: 'Potassium', value: 5.8, unit: 'mEq/L',  flag: 'HIGH',     range: '3.5–5.0'},
      { name: 'Creatinine',value: 1.4, unit: 'mg/dL',  flag: 'HIGH',     range: '0.5–1.1'},
    ],
    shapValues: [
      { feature: 'pH (7.18)',         value: 0.178, direction: 'positive' },
      { feature: 'Glucose (382)',      value: 0.153, direction: 'positive' },
      { feature: 'HCO₃ (10 mEq/L)',   value: 0.138, direction: 'positive' },
      { feature: 'Resp. Rate (22)',    value: 0.089, direction: 'positive' },
      { feature: 'Insulin (IV)',       value: -0.074,direction: 'negative' },
    ],
    shapSummary: 'Moderate risk (44%) with <strong>improving trajectory</strong> as insulin and fluid resuscitation progresses. Severe acidosis is the primary driver; insulin therapy is providing meaningful protective effect (SHAP −0.074). Expected to clear DKA within 12–18 hours.',
  },
  {
    id: 'P005',
    name: 'Michael Thompson',
    age: 58, gender: 'M',
    ward: 'MICU', bed: 'A-210',
    admitTime: '2026-08-03T16:00:00',
    diagnosis: 'Acute Kidney Injury',
    comorbidities: ['HTN', 'DM Type 2', 'CHF EF35%'],
    riskScore6h: 0.41, riskScore12h: 0.35, riskScore24h: 0.29,
    riskCategory: 'MODERATE', alertTriggered: false,
    vitals: {
      heartRate:       ts( 88,  8, 24, -2, 0),
      systolicBP:      ts(148, 15, 24, -5, 0),
      diastolicBP:     ts( 92, 10, 24, -3, 0),
      spo2:            ts( 95,  2, 24,  0, 1),
      temperature:     ts( 37.2, 0.2, 24, 0, 1),
      respiratoryRate: ts( 17,  2, 24,  0, 0),
    },
    labs: [
      { name: 'Creatinine',    value: 3.8, unit: 'mg/dL',    flag: 'CRITICAL', range: '0.6–1.2'},
      { name: 'BUN',           value: 82,  unit: 'mg/dL',    flag: 'HIGH',     range: '7–20'  },
      { name: 'Potassium',     value: 5.2, unit: 'mEq/L',    flag: 'HIGH',     range: '3.5–5.0'},
      { name: 'Urine Output',  value: 15,  unit: 'mL/hr',    flag: 'CRITICAL', range: '>0.5mL/kg/h'},
      { name: 'Bicarbonate',   value: 18,  unit: 'mEq/L',    flag: 'LOW',      range: '22–29' },
    ],
    shapValues: [
      { feature: 'Creatinine (3.8 mg/dL)', value: 0.202, direction: 'positive' },
      { feature: 'Urine Output (15 mL/h)', value: 0.168, direction: 'positive' },
      { feature: 'BUN (82 mg/dL)',          value: 0.141, direction: 'positive' },
      { feature: 'CKD/CHF History',         value: 0.098, direction: 'positive' },
      { feature: 'Fluid Balance (+)',        value: -0.054,direction: 'negative' },
    ],
    shapSummary: 'Moderate risk (41%) from AKI Stage 3 (oligo-anuria). Aggressive fluid resuscitation is providing measurable benefit. Renal replacement therapy should be considered if urine output fails to respond within 6 hours.',
  },
  {
    id: 'P006',
    name: 'Lisa Park',
    age: 35, gender: 'F',
    ward: 'SICU', bed: 'S-305',
    admitTime: '2026-08-05T04:00:00',
    diagnosis: 'Post-op Appendectomy',
    comorbidities: [],
    riskScore6h: 0.12, riskScore12h: 0.09, riskScore24h: 0.07,
    riskCategory: 'LOW', alertTriggered: false,
    vitals: {
      heartRate:       ts( 76,  6, 24, -2, 0),
      systolicBP:      ts(118,  8, 24,  2, 0),
      diastolicBP:     ts( 72,  5, 24,  1, 0),
      spo2:            ts( 98,  1, 24,  0, 1),
      temperature:     ts( 37.1, 0.2, 24, 0, 1),
      respiratoryRate: ts( 14,  1, 24,  0, 0),
    },
    labs: [
      { name: 'WBC',       value: 11.2, unit: '10³/µL', flag: 'NORMAL', range: '4.5–11' },
      { name: 'Hemoglobin',value: 11.8, unit: 'g/dL',   flag: 'NORMAL', range: '12–16'  },
      { name: 'CRP',       value: 24,   unit: 'mg/L',   flag: 'HIGH',   range: '<10'    },
      { name: 'Creatinine',value: 0.8,  unit: 'mg/dL',  flag: 'NORMAL', range: '0.5–1.1'},
    ],
    shapValues: [
      { feature: 'Post-Surgical (minor)',value: 0.052, direction: 'positive' },
      { feature: 'CRP (24 mg/L)',        value: 0.034, direction: 'positive' },
      { feature: 'Age (35 yrs)',         value: -0.028,direction: 'negative' },
      { feature: 'No comorbidities',     value: -0.041,direction: 'negative' },
      { feature: 'Stable vitals',        value: -0.058,direction: 'negative' },
    ],
    shapSummary: '<strong>Low risk (12%)</strong>. Uncomplicated post-operative course. Protective factors: young age, no chronic comorbidities, stable haemodynamics. Expected to transfer to general ward within 12–18 hours.',
  },
  {
    id: 'P007',
    name: 'David Kim',
    age: 63, gender: 'M',
    ward: 'CICU', bed: 'C-114',
    admitTime: '2026-08-04T11:20:00',
    diagnosis: 'CHF Exacerbation',
    comorbidities: ['CHF EF30%', 'AF', 'HTN', 'CKD Stage 2'],
    riskScore6h: 0.28, riskScore12h: 0.22, riskScore24h: 0.18,
    riskCategory: 'LOW', alertTriggered: false,
    vitals: {
      heartRate:       ts( 84,  8, 24, -4, 0),
      systolicBP:      ts(132, 12, 24, -3, 0),
      diastolicBP:     ts( 78,  8, 24, -2, 0),
      spo2:            ts( 93,  2, 24,  2, 1),
      temperature:     ts( 36.9, 0.2, 24, 0, 1),
      respiratoryRate: ts( 18,  2, 24, -1, 0),
    },
    labs: [
      { name: 'BNP',       value: 1280, unit: 'pg/mL', flag: 'HIGH', range: '<100'   },
      { name: 'Creatinine',value: 1.6,  unit: 'mg/dL', flag: 'HIGH', range: '0.6–1.2'},
      { name: 'Sodium',    value: 132,  unit: 'mEq/L', flag: 'LOW',  range: '136–145'},
      { name: 'Troponin-I',value: 0.08, unit: 'ng/mL', flag: 'NORMAL',range: '<0.04' },
    ],
    shapValues: [
      { feature: 'BNP (1280 pg/mL)', value: 0.142, direction: 'positive' },
      { feature: 'CHF EF 30%',       value: 0.121, direction: 'positive' },
      { feature: 'SpO₂ (93%)',        value: 0.087, direction: 'positive' },
      { feature: 'Diuresis response', value: -0.082,direction: 'negative' },
      { feature: 'Sinus Rhythm',      value: -0.064,direction: 'negative' },
    ],
    shapSummary: 'Low-moderate risk (28%) with <strong>improving trajectory</strong>. Diuresis is working — BNP trending down, SpO₂ improving. CHF history remains the primary structural risk driver. Continue furosemide optimisation.',
  },
  {
    id: 'P008',
    name: 'Anna Kowalski',
    age: 49, gender: 'F',
    ward: 'MICU', bed: 'A-212',
    admitTime: '2026-08-05T01:30:00',
    diagnosis: 'Upper GI Bleed',
    comorbidities: ['Liver Cirrhosis (Child-Pugh B)', 'ETOH'],
    riskScore6h: 0.55, riskScore12h: 0.47, riskScore24h: 0.38,
    riskCategory: 'MODERATE', alertTriggered: true,
    vitals: {
      heartRate:       ts(112, 12, 24,  3, 0),
      systolicBP:      ts( 94, 14, 24,  4, 0),
      diastolicBP:     ts( 58,  9, 24,  2, 0),
      spo2:            ts( 94,  2, 24,  1, 1),
      temperature:     ts( 37.6, 0.3, 24, 0, 1),
      respiratoryRate: ts( 20,  3, 24, -1, 0),
    },
    labs: [
      { name: 'Hemoglobin', value: 7.2,  unit: 'g/dL',   flag: 'CRITICAL', range: '12–16'  },
      { name: 'INR',        value: 3.4,  unit: '',        flag: 'CRITICAL', range: '0.8–1.2'},
      { name: 'Platelets',  value: 62,   unit: '10³/µL', flag: 'CRITICAL', range: '150–400'},
      { name: 'AST',        value: 298,  unit: 'U/L',    flag: 'CRITICAL', range: '10–40'  },
      { name: 'ALT',        value: 148,  unit: 'U/L',    flag: 'HIGH',     range: '7–35'   },
      { name: 'Albumin',    value: 2.1,  unit: 'g/dL',   flag: 'CRITICAL', range: '3.5–5.0'},
    ],
    shapValues: [
      { feature: 'Hemoglobin (7.2 g/dL)', value: 0.198, direction: 'positive' },
      { feature: 'INR (3.4)',              value: 0.174, direction: 'positive' },
      { feature: 'Liver Cirrhosis',        value: 0.151, direction: 'positive' },
      { feature: 'MAP (68 mmHg)',          value: 0.098, direction: 'positive' },
      { feature: 'Active GI Bleed',        value: 0.087, direction: 'positive' },
    ],
    shapSummary: 'Moderate risk (55%) from <strong>variceal bleed on cirrhotic background</strong>. Severe coagulopathy (INR 3.4) and anaemia (Hgb 7.2) compound the haemodynamic instability. Urgent endoscopy and pRBC transfusion are primary interventions.',
  },
];

/* ============================================================
   RESOURCE DATA  (Admin dashboard)
   ============================================================ */
export const resourceData = {
  wards: [
    { id: 'MICU',   name: 'Medical ICU',    beds: 20, occupied: 17, vents: 12, ventsInUse: 9,  nurses: 8, doctors: 3 },
    { id: 'CICU',   name: 'Cardiac ICU',    beds: 16, occupied: 11, vents:  8, ventsInUse: 5,  nurses: 6, doctors: 2 },
    { id: 'SICU',   name: 'Surgical ICU',   beds: 14, occupied: 10, vents:  7, ventsInUse: 4,  nurses: 5, doctors: 2 },
    { id: 'NICU',   name: 'Neuro ICU',      beds: 12, occupied:  8, vents:  6, ventsInUse: 3,  nurses: 4, doctors: 2 },
    { id: 'PICU',   name: 'Pedi ICU',       beds: 10, occupied:  5, vents:  5, ventsInUse: 2,  nurses: 4, doctors: 1 },
    { id: 'STDOWN', name: 'Step-Down',      beds: 30, occupied: 22, vents:  0, ventsInUse: 0,  nurses: 8, doctors: 2 },
  ],

  // 24-hour occupancy trend
  occupancyTrend: Array.from({ length: 24 }, (_, i) => {
    const h = new Date(now - (23 - i) * 3600000);
    const label = `${h.getHours().toString().padStart(2,'0')}:00`;
    return {
      hour: label,
      micu: Math.round(75 + Math.sin(i * 0.4) * 10 + (Math.random() - 0.5) * 5),
      cicu: Math.round(65 + Math.sin(i * 0.3 + 1) * 8 + (Math.random() - 0.5) * 4),
      sicu: Math.round(70 + Math.sin(i * 0.35 + 2) * 7 + (Math.random() - 0.5) * 4),
    };
  }),

  // 14-day window: 7 actual + 7 forecast
  forecast: Array.from({ length: 14 }, (_, i) => {
    const d = new Date(now);
    d.setDate(d.getDate() + i - 7);
    const base = 72 + Math.sin(i * 0.5) * 7;
    const isActual = i < 7;
    return {
      day: d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }),
      actual:   isActual  ? Math.round(base + (Math.random() - 0.5) * 5) : null,
      forecast: !isActual ? Math.round(base + (Math.random() - 0.5) * 3) : null,
      upper:    !isActual ? Math.round(base + 11) : null,
      lower:    !isActual ? Math.round(base - 11) : null,
    };
  }),

  // Ward × last-8-hour heatmap (%)
  heatmap: ['MICU', 'CICU', 'SICU', 'NICU', 'PICU', 'Step-Down'].map(ward => ({
    ward,
    hours: Array.from({ length: 8 }, (_, i) => {
      const base = ward === 'MICU' ? 82 : ward === 'CICU' ? 68 : ward === 'SICU' ? 71 : ward === 'NICU' ? 66 : ward === 'PICU' ? 50 : 73;
      return Math.min(100, Math.round(base + (Math.random() - 0.5) * 18));
    }),
  })),
};

/* ============================================================
   RECENT ALERTS
   ============================================================ */
export const recentAlerts = [
  { id: 'A001', patient: 'James Wilson',    type: 'CRITICAL', message: 'Lactate 4.2 mmol/L — Septic shock risk 87% in 6h.',          time: '02 min ago' },
  { id: 'A002', patient: 'Sarah Chen',      type: 'HIGH',     message: 'SpO₂ dropped to 87%. P/F ratio deteriorating.',              time: '08 min ago' },
  { id: 'A003', patient: 'Anna Kowalski',   type: 'HIGH',     message: 'HR 112 + Hgb 7.2 — active haemorrhage indicators.',         time: '15 min ago' },
  { id: 'A004', patient: 'James Wilson',    type: 'CRITICAL', message: 'MAP below 65 mmHg for 20+ min. Vasopressors recommended.',  time: '22 min ago' },
  { id: 'A005', patient: 'Robert Martinez', type: 'MODERATE', message: 'Post-CABG troponin trend monitoring initiated.',             time: '35 min ago' },
  { id: 'A006', patient: 'Michael Thompson',type: 'MODERATE', message: 'AKI Stage 3: urine output 15 mL/hr (<0.5 mL/kg/hr).',       time: '48 min ago' },
];

/* ============================================================
   HELPERS
   ============================================================ */
export const getRiskClass = (category) =>
  ({ CRITICAL: 'critical', HIGH: 'high', MODERATE: 'moderate', LOW: 'low' }[category] ?? 'low');

export const getOccupancyColor = (pct) => {
  if (pct >= 90) return '#ef4444';
  if (pct >= 75) return '#f97316';
  if (pct >= 60) return '#eab308';
  return '#22c55e';
};
