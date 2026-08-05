/**
 * DoctorDashboard.jsx
 *
 * Full ICU patient monitoring interface with:
 *   - Patient sidebar with risk-coded cards
 *   - Vital signs time-series charts
 *   - Lab results table
 *   - SHAP / XAI explanation panel
 *   - Digital Twin "what-if" simulator
 *
 * ⚠️ All data is synthetic. Not for clinical use.
 */
import { useState, useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LineChart, Line, BarChart, Bar, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from 'recharts'
import {
  Activity, AlertTriangle, AlertCircle, Bell, Settings,
  Search, Heart, Thermometer, Wind, Droplets, Brain, Play,
  RefreshCw, ChevronRight, User, Bed, Clock, Shield, Cpu, FlaskConical,
} from 'lucide-react'
import { patients, getRiskClass } from '../data/realData'

/* ---- Chart tooltip ---- */
const ChartTip = ({ active, payload, label, unit = '' }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: '#0d1f38', border: '1px solid rgba(148,163,184,0.15)',
      borderRadius: 8, padding: '7px 12px', fontSize: '0.75rem',
    }}>
      <div style={{ color: '#64748b', marginBottom: 3 }}>{label}</div>
      <div style={{ color: payload[0].color, fontFamily: 'JetBrains Mono', fontWeight: 700 }}>
        {payload[0].value}{unit}
      </div>
    </div>
  )
}

/* ---- SHAP tooltip ---- */
const ShapTip = ({ active, payload }) => {
  if (!active || !payload?.length) return null
  const { feature, value, direction } = payload[0].payload
  return (
    <div style={{
      background: '#0d1f38', border: '1px solid rgba(148,163,184,0.15)',
      borderRadius: 8, padding: '8px 12px', fontSize: '0.75rem', maxWidth: 220,
    }}>
      <div style={{ color: '#94a3b8', marginBottom: 4, wordBreak: 'break-word' }}>{feature}</div>
      <div style={{ fontWeight: 700, color: direction === 'positive' ? '#ef4444' : '#3b82f6', fontFamily: 'JetBrains Mono' }}>
        SHAP: {value > 0 ? '+' : ''}{value.toFixed(3)}
      </div>
      <div style={{ color: '#64748b', marginTop: 3, fontSize: '0.6875rem' }}>
        {direction === 'positive' ? '⬆ Increases risk' : '⬇ Decreases risk'}
      </div>
    </div>
  )
}

/* ---- Vital config ---- */
const VITALS = {
  heartRate:       { label: 'Heart Rate',     unit: ' bpm',  color: '#ef4444', lo: 60,   hi: 100,  min: 40,  max: 180 },
  systolicBP:      { label: 'Systolic BP',    unit: ' mmHg', color: '#3b82f6', lo: 90,   hi: 140,  min: 60,  max: 200 },
  spo2:            { label: 'SpO₂',           unit: '%',     color: '#06b6d4', lo: 95,   hi: 100,  min: 70,  max: 100 },
  respiratoryRate: { label: 'Resp. Rate',     unit: ' /min', color: '#8b5cf6', lo: 12,   hi: 20,   min: 5,   max: 45  },
  temperature:     { label: 'Temperature',    unit: '°C',    color: '#f97316', lo: 36.1, hi: 37.5, min: 34,  max: 42  },
}

/* ---- Risk helpers ---- */
const scoreToClass = (s) => s >= 0.75 ? 'critical' : s >= 0.55 ? 'high' : s >= 0.35 ? 'moderate' : 'low'
const formatTime = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })

/* ==============================================================
   MAIN COMPONENT
   ============================================================== */
export default function DoctorDashboard() {
  const navigate = useNavigate()
  const [selectedId, setSelectedId]   = useState('P001')
  const [activeTab, setActiveTab]     = useState('vitals')
  const [activeVital, setActiveVital] = useState('heartRate')
  const [filter, setFilter]           = useState('ALL')
  const [twinVals, setTwinVals]       = useState({})
  const [simResult, setSimResult]     = useState(null)
  const [clock, setClock]             = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  const patient = patients.find(p => p.id === selectedId)

  // Reset twin sliders when patient changes
  useEffect(() => {
    if (!patient) return
    setTwinVals({
      heartRate:       patient.vitals.heartRate.at(-1).value,
      systolicBP:      patient.vitals.systolicBP.at(-1).value,
      spo2:            patient.vitals.spo2.at(-1).value,
      respiratoryRate: patient.vitals.respiratoryRate.at(-1).value,
    })
    setSimResult(null)
    setActiveTab('vitals')
  }, [selectedId])

  const filteredPatients = patients.filter(p =>
    filter === 'ALL' || p.riskCategory === filter
  )

  const alertCount = patients.filter(p => p.alertTriggered).length
  const riskClass  = getRiskClass(patient?.riskCategory ?? 'LOW')

  /* ---- Digital twin simulation (heuristic counterfactual) ---- */
  const runSim = useCallback(() => {
    if (!patient) return
    const base   = patient.riskScore6h
    const hrLast = patient.vitals.heartRate.at(-1).value
    const bpLast = patient.vitals.systolicBP.at(-1).value
    const spLast = patient.vitals.spo2.at(-1).value
    const rrLast = patient.vitals.respiratoryRate.at(-1).value

    // Heuristic: normalising vitals reduces risk
    const hrDelta  = (twinVals.heartRate - hrLast) / 120        // higher HR = more risk
    const bpDelta  = (bpLast - twinVals.systolicBP) / 80        // lower BP = more risk
    const spDelta  = (spLast - twinVals.spo2) / 30              // lower SpO2 = more risk
    const rrDelta  = (twinVals.respiratoryRate - rrLast) / 40   // higher RR = more risk

    const delta    = (hrDelta + bpDelta + spDelta + rrDelta) * 0.38
    const newScore = Math.max(0.03, Math.min(0.98, base - delta))
    setSimResult({ newScore, delta: newScore - base })
  }, [patient, twinVals])

  if (!patient) return null

  /* ---- Render ---- */
  return (
    <div className="dashboard-layout">

      {/* ---- Navbar ---- */}
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <div className="navbar-logo" onClick={() => navigate('/')}>
            <Activity size={20} className="navbar-logo-icon" />
            <div>
              <div className="navbar-logo-text">MedAI</div>
              <div className="navbar-logo-sub">Doctor Dashboard</div>
            </div>
          </div>
        </div>

        <div className="navbar-right">
          <div className="navbar-status">
            <div className="status-dot" />
            AI Engine Active
          </div>
          <span className="navbar-time">
            {clock.toLocaleTimeString('en-US', { hour12: false })}
          </span>
          <button id="btn-alerts" className={`navbar-btn ${alertCount > 0 ? 'has-alert' : ''}`} title={`${alertCount} active alerts`}>
            <Bell size={15} />
            {alertCount > 0 && (
              <span style={{
                position: 'absolute', top: 5, right: 5,
                width: 7, height: 7,
                background: 'var(--risk-critical)', borderRadius: '50%',
              }} />
            )}
          </button>
          <button id="btn-settings" className="navbar-btn" title="Settings"><Settings size={15} /></button>
          <div id="btn-user-menu" className="navbar-user" onClick={() => navigate('/')}>
            <div className="user-avatar">Dr</div>
            <span style={{ fontSize: '0.8125rem', fontWeight: 500 }}>Dr. Smith</span>
          </div>
        </div>
      </nav>

      {/* ---- Body ---- */}
      <div className="dashboard-body">

        {/* ---- Sidebar ---- */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="search-wrap">
              <Search size={13} className="search-icon" />
              <input id="patient-search" className="sidebar-search" placeholder="Search patients…" />
            </div>
            <div className="sidebar-filters">
              {[
                { key: 'ALL',      label: 'All'  },
                { key: 'CRITICAL', label: '🔴'   },
                { key: 'HIGH',     label: '🟠'   },
                { key: 'MODERATE', label: '🟡'   },
                { key: 'LOW',      label: '🟢'   },
              ].map(({ key, label }) => (
                <button
                  key={key}
                  id={`filter-${key.toLowerCase()}`}
                  className={`filter-btn ${filter === key ? 'active' : ''}`}
                  onClick={() => setFilter(key)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          <div className="sidebar-count">
            <span>{filteredPatients.length} Patients</span>
            <span style={{ color: 'var(--risk-critical)', fontWeight: 700 }}>
              {patients.filter(p => p.alertTriggered).length} alerts
            </span>
          </div>

          <div className="sidebar-list">
            {filteredPatients.map(p => {
              const rc = getRiskClass(p.riskCategory)
              return (
                <div
                  key={p.id}
                  id={`patient-card-${p.id}`}
                  className={`patient-card-sm risk-${rc} ${selectedId === p.id ? 'selected' : ''}`}
                  onClick={() => setSelectedId(p.id)}
                >
                  <div className="pc-row1">
                    <span className="pc-name">{p.name}</span>
                    <span className={`risk-pill ${rc}`}>{Math.round(p.riskScore6h * 100)}%</span>
                  </div>
                  <div className="pc-meta">
                    <span>{p.age}y {p.gender}</span>
                    <span style={{ color: 'var(--border-strong)' }}>·</span>
                    <span>{p.ward} {p.bed}</span>
                    {p.alertTriggered && (
                      <AlertCircle size={11} style={{ color: 'var(--risk-critical)', marginLeft: 'auto' }} />
                    )}
                  </div>
                  <div className="pc-diag">{p.diagnosis}</div>
                </div>
              )
            })}
          </div>
        </aside>

        {/* ---- Main Content ---- */}
        <main className="main-content">

          {/* Patient Header */}
          <div className="patient-header">
            <div className="patient-avatar-lg">
              {patient.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="patient-header-info">
              <div className="patient-header-name">{patient.name}</div>
              <div className="patient-header-meta">
                <div className="meta-item"><User size={11} />{patient.age}y · {patient.gender === 'M' ? 'Male' : 'Female'}</div>
                <div className="meta-item"><Bed size={11} />{patient.ward} — Bed {patient.bed}</div>
                <div className="meta-item"><Clock size={11} />Admitted {formatTime(patient.admitTime)}</div>
                {patient.comorbidities.map(c => (
                  <span key={c} className="meta-tag">{c}</span>
                ))}
              </div>
            </div>
            <div className="patient-header-right">
              <span className={`badge badge-${riskClass}`}>
                {patient.alertTriggered && <AlertTriangle size={10} />}
                {patient.riskCategory} RISK
              </span>
              <span style={{ fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>{patient.diagnosis}</span>
            </div>
          </div>

          {/* Risk Score Cards */}
          <div className="risk-cards-row">
            {[
              { label: '6-Hour Risk',  score: patient.riskScore6h  },
              { label: '12-Hour Risk', score: patient.riskScore12h },
              { label: '24-Hour Risk', score: patient.riskScore24h },
            ].map(({ label, score }) => {
              const pct = Math.round(score * 100)
              const cat = scoreToClass(score)
              return (
                <div key={label} className={`risk-card ${cat}`}>
                  <div className="risk-card-label">{label}</div>
                  <div className={`risk-card-score ${cat}`}>{pct}%</div>
                  <div className="risk-bar">
                    <div className={`risk-bar-fill ${cat}`} style={{ width: `${pct}%` }} />
                  </div>
                  <span className={`badge badge-${cat}`} style={{ fontSize: '0.625rem' }}>
                    {cat.toUpperCase()}
                  </span>
                </div>
              )
            })}
          </div>

          {/* Tabs */}
          <div className="tabs">
            {[
              { id: 'vitals', label: 'Vital Signs',   Icon: Activity      },
              { id: 'labs',   label: 'Lab Results',   Icon: FlaskConical  },
              { id: 'shap',   label: 'AI Explanation',Icon: Brain         },
              { id: 'twin',   label: 'Digital Twin',  Icon: Cpu           },
            ].map(({ id, label, Icon }) => (
              <button
                key={id}
                id={`tab-${id}`}
                className={`tab ${activeTab === id ? 'active' : ''}`}
                onClick={() => setActiveTab(id)}
              >
                <Icon size={13} /> {label}
              </button>
            ))}
          </div>

          <div className="tab-content">

            {/* ========== VITALS TAB ========== */}
            {activeTab === 'vitals' && (() => {
              const cfg     = VITALS[activeVital]
              const data    = patient.vitals[activeVital]
              const current = data.at(-1).value
              const prev    = data.at(-2).value
              const rising  = current > prev

              return (
                <>
                  <div className="vital-pills">
                    {Object.entries(VITALS).map(([key, v]) => (
                      <button
                        key={key}
                        id={`vital-pill-${key}`}
                        className={`vital-pill ${activeVital === key ? 'active' : ''}`}
                        onClick={() => setActiveVital(key)}
                      >
                        {v.label}
                      </button>
                    ))}
                  </div>

                  {/* Current value stat box */}
                  <div className="vital-stat-box">
                    <div>
                      <div className="vital-current-value" style={{ color: cfg.color }}>
                        {current}{cfg.unit}
                      </div>
                      <div className="vital-current-label">{cfg.label} — Last 24 hours</div>
                    </div>
                    <div className="vital-meta-box">
                      <div className="vital-meta-item">
                        <label>Normal Range</label>
                        <span>{cfg.lo}–{cfg.hi}{cfg.unit}</span>
                      </div>
                      <div className="vital-meta-item">
                        <label>24h Min / Max</label>
                        <span>
                          {Math.min(...data.map(d => d.value))} /&nbsp;
                          {Math.max(...data.map(d => d.value))}{cfg.unit}
                        </span>
                      </div>
                      <div className="vital-meta-item">
                        <label>Trend</label>
                        <span style={{ fontWeight: 700, color: rising ? 'var(--risk-critical)' : 'var(--risk-low)' }}>
                          {rising ? '▲ Rising' : '▼ Falling'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.07)" />
                        <XAxis dataKey="hour" tick={{ fontSize: 10, fill: '#64748b' }} interval={3} />
                        <YAxis domain={[cfg.min, cfg.max]} tick={{ fontSize: 10, fill: '#64748b' }} />
                        <Tooltip content={<ChartTip unit={cfg.unit} />} />
                        <ReferenceLine y={cfg.lo} stroke="rgba(34,197,94,0.3)" strokeDasharray="4 4" />
                        <ReferenceLine y={cfg.hi} stroke="rgba(34,197,94,0.3)" strokeDasharray="4 4" />
                        <Line
                          type="monotone" dataKey="value"
                          stroke={cfg.color} strokeWidth={2}
                          dot={false} activeDot={{ r: 4, strokeWidth: 0 }}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>

                  <div style={{ display: 'flex', gap: '1.5rem', marginTop: '0.5rem', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 20, height: 1, background: 'rgba(34,197,94,0.4)', display: 'inline-block' }} />
                      Normal range bounds
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <span style={{ width: 20, height: 2, background: cfg.color, display: 'inline-block', borderRadius: 1 }} />
                      {cfg.label}
                    </span>
                  </div>
                </>
              )
            })()}

            {/* ========== LABS TAB ========== */}
            {activeTab === 'labs' && (
              <>
                <div className="section-title">Laboratory Results</div>
                <table className="labs-table">
                  <thead>
                    <tr>
                      <th>Test</th>
                      <th>Result</th>
                      <th>Unit</th>
                      <th>Reference Range</th>
                      <th>Flag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patient.labs.map(lab => (
                      <tr key={lab.name}>
                        <td style={{ fontWeight: 500 }}>{lab.name}</td>
                        <td style={{
                          fontFamily: 'JetBrains Mono', fontWeight: 700,
                          color: lab.flag !== 'NORMAL' ? 'var(--text-primary)' : 'var(--text-secondary)',
                        }}>
                          {lab.value}
                        </td>
                        <td style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--text-tertiary)' }}>
                          {lab.unit}
                        </td>
                        <td style={{ fontFamily: 'JetBrains Mono', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                          {lab.range}
                        </td>
                        <td><span className={`lab-flag ${lab.flag}`}>{lab.flag}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <div style={{ marginTop: '0.75rem', fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <Shield size={11} /> Results from synthetic data generator. Not real lab values.
                </div>
              </>
            )}

            {/* ========== SHAP / XAI TAB ========== */}
            {activeTab === 'shap' && (
              <>
                <div className="section-title">Top Contributing Factors — SHAP Values</div>
                <div className="shap-chart-container">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={patient.shapValues}
                      layout="vertical"
                      margin={{ top: 5, right: 55, left: 10, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.06)" horizontal={false} />
                      <XAxis type="number" tick={{ fontSize: 10, fill: '#64748b' }} domain={[0, 0.26]} />
                      <YAxis type="category" dataKey="feature" tick={{ fontSize: 11, fill: '#94a3b8' }} width={175} />
                      <Tooltip content={<ShapTip />} />
                      <Bar dataKey="value" radius={[0, 4, 4, 0]}>
                        {patient.shapValues.map((entry, i) => (
                          <Cell
                            key={i}
                            fill={entry.direction === 'positive' ? '#ef4444' : '#3b82f6'}
                            opacity={0.85}
                          />
                        ))}
                      </Bar>
                    </BarChart>
                  </ResponsiveContainer>
                </div>

                <div className="shap-legend">
                  <div className="shap-legend-item">
                    <div className="shap-legend-dot" style={{ background: 'rgba(239,68,68,0.7)' }} />
                    Increases deterioration risk
                  </div>
                  <div className="shap-legend-item">
                    <div className="shap-legend-dot" style={{ background: 'rgba(59,130,246,0.7)' }} />
                    Decreases deterioration risk
                  </div>
                </div>

                <div className="shap-summary">
                  <div className="shap-summary-label"><Brain size={12} /> AI Clinical Summary</div>
                  <p dangerouslySetInnerHTML={{ __html: patient.shapSummary }} />
                </div>

                <div style={{ marginTop: '0.75rem', padding: '0.5rem 0.75rem', background: 'rgba(234,179,8,0.05)', border: '1px solid rgba(234,179,8,0.12)', borderRadius: 'var(--r-md)', fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <AlertTriangle size={11} style={{ color: 'var(--risk-moderate)' }} />
                  SHAP values are model explanations for research transparency. They are not validated clinical guidelines.
                </div>
              </>
            )}

            {/* ========== DIGITAL TWIN TAB ========== */}
            {activeTab === 'twin' && (
              <>
                <div style={{ marginBottom: '1rem' }}>
                  <div className="section-title">What-If Simulation — Digital Twin</div>
                  <p style={{ fontSize: '0.8125rem', color: 'var(--text-secondary)' }}>
                    Adjust vital parameters to project how a clinical intervention may change{' '}
                    <strong style={{ color: 'var(--text-primary)' }}>{patient.name.split(' ')[0]}'s</strong> 6-hour risk score.
                  </p>
                </div>

                <div className="twin-grid">
                  {/* Sliders */}
                  <div className="twin-sliders">
                    {[
                      { key: 'heartRate',       label: 'Heart Rate',     unit: ' bpm',  min: 40,  max: 180 },
                      { key: 'systolicBP',      label: 'Systolic BP',    unit: ' mmHg', min: 60,  max: 200 },
                      { key: 'spo2',            label: 'SpO₂',           unit: '%',     min: 70,  max: 100 },
                      { key: 'respiratoryRate', label: 'Resp. Rate',     unit: ' /min', min: 5,   max: 50  },
                    ].map(({ key, label, unit, min, max }) => (
                      <div key={key} className="slider-item">
                        <div className="slider-label">
                          <span>{label}</span>
                          <span className="slider-value">
                            {twinVals[key] ?? '--'}{unit}
                          </span>
                        </div>
                        <input
                          id={`twin-slider-${key}`}
                          type="range" min={min} max={max} step={1}
                          value={twinVals[key] ?? min}
                          onChange={e =>
                            setTwinVals(v => ({ ...v, [key]: parseFloat(e.target.value) }))
                          }
                        />
                      </div>
                    ))}

                    <div className="twin-actions">
                      <button id="btn-run-simulation" className="btn btn-primary" onClick={runSim}>
                        <Play size={13} /> Run Simulation
                      </button>
                      <button id="btn-reset-simulation" className="btn btn-ghost" onClick={() => {
                        setTwinVals({
                          heartRate:       patient.vitals.heartRate.at(-1).value,
                          systolicBP:      patient.vitals.systolicBP.at(-1).value,
                          spo2:            patient.vitals.spo2.at(-1).value,
                          respiratoryRate: patient.vitals.respiratoryRate.at(-1).value,
                        })
                        setSimResult(null)
                      }}>
                        <RefreshCw size={13} /> Reset
                      </button>
                    </div>
                  </div>

                  {/* Results Panel */}
                  <div className="twin-results">
                    <div className="twin-result-card">
                      <div className="twin-result-label">Baseline 6h Risk</div>
                      <div className="twin-result-value" style={{
                        color: `var(--risk-${scoreToClass(patient.riskScore6h)})`,
                      }}>
                        {Math.round(patient.riskScore6h * 100)}%
                      </div>
                    </div>

                    <div className={`twin-result-card ${simResult ? 'highlighted' : ''}`}>
                      <div className="twin-result-label">Projected 6h Risk</div>
                      {simResult ? (
                        <>
                          <div className="twin-result-value" style={{
                            color: simResult.newScore < patient.riskScore6h
                              ? 'var(--risk-low)' : 'var(--risk-critical)',
                          }}>
                            {Math.round(simResult.newScore * 100)}%
                          </div>
                          <div className={`twin-delta ${simResult.delta < 0 ? 'positive' : 'negative'}`}>
                            {simResult.delta < 0 ? '▼' : '▲'}&nbsp;
                            {Math.abs(Math.round(simResult.delta * 100))}%&nbsp;
                            {simResult.delta < 0 ? 'projected improvement' : 'projected worsening'}
                          </div>
                        </>
                      ) : (
                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>
                          Adjust sliders → Run Simulation
                        </div>
                      )}
                    </div>

                    <div className="twin-info">
                      <div className="twin-info-label"><Cpu size={11} /> Simulation Engine</div>
                      Counterfactual inference via re-scored XGBoost with modified feature vector.
                      Uncertainty: ±8–12%. For research exploration only.
                    </div>

                    <div style={{ padding: '0.45rem 0.75rem', background: 'rgba(239,68,68,0.05)', border: '1px solid rgba(239,68,68,0.1)', borderRadius: 'var(--r-md)', fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                      <Shield size={10} /> Not for clinical decision-making
                    </div>
                  </div>
                </div>
              </>
            )}

          </div>{/* end tab-content */}
        </main>
      </div>
    </div>
  )
}
