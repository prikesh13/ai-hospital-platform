/**
 * DoctorDashboard.jsx — Enhanced ICU Monitoring Interface
 *
 * Enhancements v2:
 *   - Live stats bar (total patients, alerts, avg risk, improved count)
 *   - Functional sidebar search with reactive filtering
 *   - Enhanced patient header with risk-glow and alert badge
 *   - Vitals: animated ring gauges + chart
 *   - Labs: visual mini-bar gauges + color-coded rows
 *   - SHAP: risk trajectory sparkline + enhanced summary
 *   - Digital Twin: intervention presets + animated risk gauge arc
 *   - New "Clinical Notes" tab
 *   - Collapsible alerts side panel
 *
 * ⚠️ All data is synthetic. Not for clinical use.
 */
import { useState, useEffect, useCallback, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  LineChart, Line, BarChart, Bar, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
  RadialBarChart, RadialBar, PolarAngleAxis,
  AreaChart, Area,
} from 'recharts'
import {
  Activity, AlertTriangle, AlertCircle, Bell, Settings,
  Search, Heart, Thermometer, Wind, Droplets, Brain, Play,
  RefreshCw, ChevronRight, User, Bed, Clock, Shield, Cpu, FlaskConical,
  TrendingUp, TrendingDown, ChevronLeft, X, FileText, Zap,
  Stethoscope, Syringe, Droplet, Wind as WindIcon, CheckCircle,
  PanelRightOpen, PanelRightClose, ArrowRight, Circle,
} from 'lucide-react'
import { patients, getRiskClass } from '../data/realData'

/* ---- Synthetic clinical notes per patient ---- */
const SYNTHETIC_NOTES = (patient) => [
  {
    id: 1,
    time: '08:30',
    author: 'Dr. Smith',
    role: 'Attending',
    note: `Patient ${patient?.name?.split(' ')[0] ?? 'patient'} reviewed on morning rounds. Vitals trending as expected. Continue current management plan.`,
    type: 'general',
  },
  {
    id: 2,
    time: '06:15',
    author: 'RN Chen',
    role: 'Nurse',
    note: `Administered 500mL NS bolus as ordered. Patient responded well. SpO₂ improved by 3% following intervention. Family notified.`,
    type: 'intervention',
  },
  {
    id: 3,
    time: '02:45',
    author: 'Dr. Patel',
    role: 'Resident',
    note: `Night consult: Patient reported discomfort. Pain scale 6/10. Adjusted analgesia per protocol. Will reassess in 2h. Labs ordered for morning.`,
    type: 'consult',
  },
  {
    id: 4,
    time: 'Yesterday 22:00',
    author: 'RN Torres',
    role: 'Nurse',
    note: `Repositioning completed. Pressure area care given. Skin intact. IV site checked — no infiltration noted. Patient resting comfortably.`,
    type: 'nursing',
  },
]

/* ---- Intervention presets for Digital Twin ---- */
const PRESETS = [
  { label: 'O₂ Therapy',   icon: Droplet,   vals: { spo2: 98, respiratoryRate: 15 } },
  { label: 'BP Med',       icon: Syringe,   vals: { systolicBP: 118, heartRate: 78 } },
  { label: 'Fluid Resus',  icon: Droplets,  vals: { systolicBP: 130, heartRate: 90, spo2: 96 } },
  { label: 'Sedation',     icon: WindIcon,  vals: { heartRate: 68, respiratoryRate: 12 } },
]

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
  heartRate:       { label: 'Heart Rate',  unit: ' bpm',  color: '#ef4444', lo: 60,   hi: 100,  min: 40,  max: 180, icon: Heart },
  systolicBP:      { label: 'Systolic BP', unit: ' mmHg', color: '#3b82f6', lo: 90,   hi: 140,  min: 60,  max: 200, icon: Activity },
  spo2:            { label: 'SpO₂',        unit: '%',     color: '#06b6d4', lo: 95,   hi: 100,  min: 70,  max: 100, icon: Droplets },
  respiratoryRate: { label: 'Resp. Rate',  unit: ' /min', color: '#8b5cf6', lo: 12,   hi: 20,   min: 5,   max: 45,  icon: Wind },
  temperature:     { label: 'Temperature', unit: '°C',    color: '#f97316', lo: 36.1, hi: 37.5, min: 34,  max: 42,  icon: Thermometer },
}

/* ---- Risk helpers ---- */
const scoreToClass = (s) => s >= 0.75 ? 'critical' : s >= 0.55 ? 'high' : s >= 0.35 ? 'moderate' : 'low'
const scoreToColor = (s) => s >= 0.75 ? '#ef4444' : s >= 0.55 ? '#f97316' : s >= 0.35 ? '#eab308' : '#22c55e'
const formatTime = (iso) =>
  new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' })

/* ---- Animated ring gauge for each vital ---- */
const VitalRing = ({ value, min, max, lo, hi, color, label, unit }) => {
  const normalized = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100))
  const inRange = value >= lo && value <= hi
  const ringColor = inRange ? color : '#ef4444'
  const data = [{ value: normalized, fill: ringColor }]

  return (
    <div className="vital-ring-card">
      <div className="vital-ring-chart">
        <ResponsiveContainer width={88} height={88}>
          <RadialBarChart
            innerRadius="68%" outerRadius="100%"
            data={data} startAngle={225} endAngle={-45}
            barSize={8}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar
              dataKey="value"
              cornerRadius={4}
              background={{ fill: 'rgba(148,163,184,0.06)' }}
            />
          </RadialBarChart>
        </ResponsiveContainer>
        <div className="vital-ring-value" style={{ color: ringColor }}>
          <span className="vital-ring-num">{value}</span>
          <span className="vital-ring-unit">{unit.trim()}</span>
        </div>
      </div>
      <div className="vital-ring-label">{label}</div>
      <div className={`vital-ring-status ${inRange ? 'normal' : 'abnormal'}`}>
        {inRange ? '● Normal' : '● Abnormal'}
      </div>
    </div>
  )
}

/* ---- Lab mini-bar gauge ---- */
const LabBar = ({ value, range }) => {
  const match = range?.match(/([\d.]+)[–\-]([\d.]+)/)
  if (!match) return null
  const lo = parseFloat(match[1]), hi = parseFloat(match[2])
  const span = hi - lo
  if (span <= 0) return null
  const pct = Math.max(0, Math.min(100, ((value - lo) / span) * 100))
  const inRange = value >= lo && value <= hi
  return (
    <div className="lab-mini-bar-wrap">
      <div className="lab-mini-bar-track">
        <div
          className="lab-mini-bar-fill"
          style={{ width: `${pct}%`, background: inRange ? '#22c55e' : value > hi ? '#ef4444' : '#3b82f6' }}
        />
        <div className="lab-mini-bar-marker" style={{ left: '0%' }} />
        <div className="lab-mini-bar-marker" style={{ left: '100%' }} />
      </div>
    </div>
  )
}

/* ---- Risk arc gauge ---- */
const RiskGauge = ({ score, label, size = 120 }) => {
  const pct = Math.round((score ?? 0) * 100)
  const color = scoreToColor(score ?? 0)
  const data = [{ value: pct, fill: color }]
  return (
    <div className="risk-gauge-wrap" style={{ width: size, height: size * 0.6 + 28 }}>
      <div style={{ position: 'relative', width: size, height: size * 0.6 }}>
        <ResponsiveContainer width="100%" height="100%">
          <RadialBarChart
            innerRadius="65%" outerRadius="100%"
            data={data} startAngle={180} endAngle={0}
            barSize={10}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
            <RadialBar dataKey="value" cornerRadius={5}
              background={{ fill: 'rgba(148,163,184,0.07)' }} />
          </RadialBarChart>
        </ResponsiveContainer>
        <div style={{
          position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
          textAlign: 'center',
        }}>
          <div style={{ fontFamily: 'JetBrains Mono', fontWeight: 900, fontSize: size * 0.18, color, lineHeight: 1 }}>{pct}%</div>
        </div>
      </div>
      <div style={{ textAlign: 'center', fontSize: '0.6875rem', color: 'var(--text-tertiary)', marginTop: 4 }}>{label}</div>
    </div>
  )
}

/* ==============================================================
   MAIN COMPONENT
   ============================================================== */
const fillSeries = (value) => Array.from({ length: 24 }, (_, i) => ({ hour: `${String(i).padStart(2, '0')}:00`, value }))

const normalizePatient = (patient) => ({
  ...patient,
  comorbidities: Array.isArray(patient.comorbidities) ? patient.comorbidities : [],
  riskScore6h: Number(patient.riskScore6h ?? 0.1),
  riskScore12h: Number(patient.riskScore12h ?? 0.05),
  riskScore24h: Number(patient.riskScore24h ?? 0.02),
  riskCategory: patient.riskCategory || 'LOW',
  alertTriggered: Boolean(patient.alertTriggered),
  vitals: {
    heartRate: Array.isArray(patient.vitals?.heartRate) && patient.vitals.heartRate.length ? patient.vitals.heartRate : fillSeries(80),
    systolicBP: Array.isArray(patient.vitals?.systolicBP) && patient.vitals.systolicBP.length ? patient.vitals.systolicBP : fillSeries(120),
    spo2: Array.isArray(patient.vitals?.spo2) && patient.vitals.spo2.length ? patient.vitals.spo2 : fillSeries(96),
    respiratoryRate: Array.isArray(patient.vitals?.respiratoryRate) && patient.vitals.respiratoryRate.length ? patient.vitals.respiratoryRate : fillSeries(18),
    temperature: Array.isArray(patient.vitals?.temperature) && patient.vitals.temperature.length ? patient.vitals.temperature : fillSeries(37),
  },
})

export default function DoctorDashboard() {
  const navigate = useNavigate()
  const [selectedId, setSelectedId]     = useState(null)
  const [activeTab, setActiveTab]       = useState('vitals')
  const [activeVital, setActiveVital]   = useState('heartRate')
  const [filter, setFilter]             = useState('ALL')
  const [searchQuery, setSearchQuery]   = useState('')
  const [twinVals, setTwinVals]         = useState({})
  const [simResult, setSimResult]       = useState(null)
  const [clock, setClock]               = useState(new Date())
  const [alertsOpen, setAlertsOpen]     = useState(false)
  const [ackedAlerts, setAckedAlerts]   = useState(new Set())
  const [remotePatients, setRemotePatients] = useState([])
  const [simAnimating, setSimAnimating] = useState(false)

  const refreshRemotePatients = async () => {
    try {
      const res = await fetch('/api/patients')
      if (!res.ok) throw new Error('failed to fetch')
      const data = await res.json()
      setRemotePatients(Array.isArray(data) ? data : [])
    } catch (err) {
      console.warn('Doctor dashboard patient refresh failed', err)
      setRemotePatients([])
    }
  }

  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  // Set default selected patient (first critical or first overall)
  const allPatients = useMemo(() => {
    const map = new Map()
    patients.forEach(p => map.set(p.id, p))
    remotePatients.forEach(p => map.set(p.id, normalizePatient(p)))
    return Array.from(map.values())
  }, [remotePatients])

  useEffect(() => {
    if (!selectedId && allPatients.length > 0) {
      const firstCritical = allPatients.find(p => p.riskCategory === 'CRITICAL')
      setSelectedId(firstCritical?.id ?? allPatients[0].id)
    }
  }, [selectedId, allPatients])

  useEffect(() => {
    refreshRemotePatients()
    const interval = setInterval(refreshRemotePatients, 20000)
    return () => clearInterval(interval)
  }, [])

  const patient = allPatients.find(p => p.id === selectedId)

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

  /* ---- Filtered + searched patients ---- */
  const filteredPatients = useMemo(() =>
    allPatients.filter(p => {
      const matchFilter = filter === 'ALL' || p.riskCategory === filter
      const q = searchQuery.toLowerCase().trim()
      const matchSearch = !q ||
        p.name.toLowerCase().includes(q) ||
        p.diagnosis.toLowerCase().includes(q) ||
        p.ward.toLowerCase().includes(q) ||
        p.bed.toLowerCase().includes(q)
      return matchFilter && matchSearch
    }), [allPatients, filter, searchQuery])

  /* ---- Stats ---- */
  const alertCount     = allPatients.filter(p => p.alertTriggered).length
  const avgRisk        = allPatients.reduce((s, p) => s + p.riskScore6h, 0) / Math.max(1, allPatients.length)
  const improvedCount  = allPatients.filter(p => p.riskScore6h < p.riskScore24h).length
  const activeAlerts   = allPatients.filter(p => p.alertTriggered && !ackedAlerts.has(p.id))

  const riskClass = getRiskClass(patient?.riskCategory ?? 'LOW')
  const notes     = SYNTHETIC_NOTES(patient)

  /* ---- Digital twin simulation ---- */
  const runSim = useCallback(() => {
    if (!patient) return
    setSimAnimating(true)
    setTimeout(() => {
      const base   = patient.riskScore6h
      const hrLast = patient.vitals.heartRate.at(-1).value
      const bpLast = patient.vitals.systolicBP.at(-1).value
      const spLast = patient.vitals.spo2.at(-1).value
      const rrLast = patient.vitals.respiratoryRate.at(-1).value
      const hrDelta  = (twinVals.heartRate - hrLast) / 120
      const bpDelta  = (bpLast - twinVals.systolicBP) / 80
      const spDelta  = (spLast - twinVals.spo2) / 30
      const rrDelta  = (twinVals.respiratoryRate - rrLast) / 40
      const delta    = (hrDelta + bpDelta + spDelta + rrDelta) * 0.38
      const newScore = Math.max(0.03, Math.min(0.98, base - delta))
      setSimResult({ newScore, delta: newScore - base })
      setSimAnimating(false)
    }, 900)
  }, [patient, twinVals])

  const applyPreset = (preset) => {
    setTwinVals(v => ({ ...v, ...preset.vals }))
    setSimResult(null)
  }

  if (!patient) return null

  const riskTrajectory = [
    { label: '24h', value: Math.round(patient.riskScore24h * 100) },
    { label: '12h', value: Math.round(patient.riskScore12h * 100) },
    { label: '6h',  value: Math.round(patient.riskScore6h  * 100) },
    { label: 'Now', value: Math.round(patient.riskScore6h  * 100) },
  ]

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
          <button
            id="btn-alerts"
            className={`navbar-btn ${activeAlerts.length > 0 ? 'has-alert' : ''}`}
            title={`${activeAlerts.length} active alerts`}
            onClick={() => setAlertsOpen(v => !v)}
          >
            <Bell size={15} />
            {activeAlerts.length > 0 && (
              <span className="navbar-alert-badge">{activeAlerts.length}</span>
            )}
          </button>
          <button id="btn-settings" className="navbar-btn" title="Settings"><Settings size={15} /></button>
          <div id="btn-user-menu" className="navbar-user" onClick={() => navigate('/')}>
            <div className="user-avatar">Dr</div>
            <span style={{ fontSize: '0.8125rem', fontWeight: 500 }}>Dr. Smith</span>
          </div>
        </div>
      </nav>

      {/* ---- Stats Bar ---- */}
      <div className="stats-bar">
        {[
          { label: 'Total Patients',  value: patients.length,              icon: User,         color: 'var(--brand-blue)' },
          { label: 'Critical Alerts', value: activeAlerts.length,          icon: AlertTriangle, color: 'var(--risk-critical)' },
          { label: 'Avg Risk Score',  value: `${Math.round(avgRisk * 100)}%`, icon: TrendingUp,    color: 'var(--risk-moderate)' },
          { label: 'Improving',       value: improvedCount,                icon: TrendingDown,  color: 'var(--risk-low)' },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="stats-bar-item">
            <div className="stats-bar-icon" style={{ color }}>
              <Icon size={14} />
            </div>
            <div>
              <div className="stats-bar-value" style={{ color }}>{value}</div>
              <div className="stats-bar-label">{label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ---- Body ---- */}
      <div className="dashboard-body">

        {/* ---- Sidebar ---- */}
        <aside className="sidebar">
          <div className="sidebar-header">
            <div className="search-wrap">
              <Search size={13} className="search-icon" />
              <input
                id="patient-search"
                className="sidebar-search"
                placeholder="Search patients…"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
              />
              {searchQuery && (
                <button
                  className="search-clear"
                  onClick={() => setSearchQuery('')}
                  style={{ position: 'absolute', right: 8, background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)', display: 'flex' }}
                >
                  <X size={12} />
                </button>
              )}
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
              {activeAlerts.length} alerts
            </span>
          </div>

          <div className="sidebar-list">
            {filteredPatients.length === 0 ? (
              <div style={{ padding: '1.5rem', textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8125rem' }}>
                No patients match
              </div>
            ) : filteredPatients.map(p => {
              const rc = getRiskClass(p.riskCategory)
              const lastHR = p.vitals.heartRate.at(-1).value
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
                    {p.alertTriggered && !ackedAlerts.has(p.id) && (
                      <AlertCircle size={11} style={{ color: 'var(--risk-critical)', marginLeft: 'auto' }} />
                    )}
                  </div>
                  <div className="pc-diag">{p.diagnosis}</div>
                  <div className="pc-hr-bar">
                    <span style={{ color: 'var(--text-muted)', fontSize: '0.625rem' }}>HR</span>
                    <div className="pc-hr-track">
                      <div
                        className="pc-hr-fill"
                        style={{
                          width: `${Math.max(5, Math.min(100, ((lastHR - 40) / 140) * 100))}%`,
                          background: lastHR > 100 || lastHR < 60 ? 'var(--risk-critical)' : 'var(--risk-low)',
                        }}
                      />
                    </div>
                    <span style={{ fontFamily: 'JetBrains Mono', fontSize: '0.625rem', color: 'var(--text-muted)' }}>{lastHR}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>

        {/* ---- Main Content ---- */}
        <main className="main-content">

          {/* Patient Header */}
          <div className={`patient-header patient-header-${riskClass}`}>
            <div className="patient-avatar-lg">
              {patient.name.split(' ').map(n => n[0]).join('')}
            </div>
            <div className="patient-header-info">
              <div className="patient-header-name">
                {patient.name}
                {patient.alertTriggered && !ackedAlerts.has(patient.id) && (
                  <span className="header-alert-badge">
                    <AlertTriangle size={10} /> Action Required
                  </span>
                )}
              </div>
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
              <div className="header-vital-pills">
                {['heartRate', 'spo2', 'systolicBP'].map(key => {
                  const cfg = VITALS[key]
                  const val = patient.vitals[key].at(-1).value
                  const ok = val >= cfg.lo && val <= cfg.hi
                  return (
                    <div key={key} className="header-vital-chip" style={{ borderColor: ok ? 'rgba(34,197,94,0.2)' : 'rgba(239,68,68,0.3)' }}>
                      <span style={{ color: cfg.color, fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: '0.75rem' }}>{val}</span>
                      <span style={{ fontSize: '0.5625rem', color: 'var(--text-muted)' }}>{cfg.unit.trim()}</span>
                    </div>
                  )
                })}
              </div>
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
              { id: 'vitals', label: 'Vital Signs',     Icon: Activity      },
              { id: 'labs',   label: 'Lab Results',     Icon: FlaskConical  },
              { id: 'shap',   label: 'AI Explanation',  Icon: Brain         },
              { id: 'twin',   label: 'Digital Twin',    Icon: Cpu           },
              { id: 'notes',  label: 'Clinical Notes',  Icon: FileText      },
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
                  {/* Ring gauges row */}
                  <div className="vital-rings-row">
                    {Object.entries(VITALS).map(([key, v]) => {
                      const lastVal = patient.vitals[key].at(-1).value
                      return (
                        <div
                          key={key}
                          className={`vital-ring-wrapper ${activeVital === key ? 'active' : ''}`}
                          onClick={() => setActiveVital(key)}
                        >
                          <VitalRing
                            value={lastVal}
                            min={v.min} max={v.max}
                            lo={v.lo} hi={v.hi}
                            color={v.color}
                            label={v.label}
                            unit={v.unit}
                          />
                        </div>
                      )
                    })}
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
                        <span style={{ fontWeight: 700, color: rising ? 'var(--risk-critical)' : 'var(--risk-low)', display: 'flex', alignItems: 'center', gap: 4 }}>
                          {rising ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
                          {rising ? 'Rising' : 'Falling'}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Chart */}
                  <div className="chart-container">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 5 }}>
                        <defs>
                          <linearGradient id={`grad-${activeVital}`} x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%"  stopColor={cfg.color} stopOpacity={0.18} />
                            <stop offset="95%" stopColor={cfg.color} stopOpacity={0.01} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.07)" />
                        <XAxis dataKey="hour" tick={{ fontSize: 10, fill: '#64748b' }} interval={3} />
                        <YAxis domain={[cfg.min, cfg.max]} tick={{ fontSize: 10, fill: '#64748b' }} />
                        <Tooltip content={<ChartTip unit={cfg.unit} />} />
                        <ReferenceLine y={cfg.lo} stroke="rgba(34,197,94,0.3)" strokeDasharray="4 4" />
                        <ReferenceLine y={cfg.hi} stroke="rgba(34,197,94,0.3)" strokeDasharray="4 4" />
                        <Area
                          type="monotone" dataKey="value"
                          stroke={cfg.color} strokeWidth={2}
                          fill={`url(#grad-${activeVital})`}
                          dot={false} activeDot={{ r: 4, strokeWidth: 0 }}
                        />
                      </AreaChart>
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
                      <th>Range Gauge</th>
                      <th>Flag</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patient.labs.map(lab => (
                      <tr key={lab.name} className={`lab-row-${lab.flag.toLowerCase()}`}>
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
                        <td style={{ minWidth: 80 }}>
                          <LabBar value={parseFloat(lab.value)} range={lab.range} />
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
                {/* Risk trajectory */}
                <div className="shap-top-row">
                  <div style={{ flex: 1 }}>
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
                  </div>

                  {/* Risk trajectory mini panel */}
                  <div className="risk-trajectory-panel">
                    <div className="section-title" style={{ marginBottom: '0.5rem' }}>Risk Trajectory</div>
                    <div className="trajectory-chart">
                      <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={riskTrajectory} margin={{ top: 5, right: 8, left: -30, bottom: 0 }}>
                          <defs>
                            <linearGradient id="trajGrad" x1="0" y1="0" x2="0" y2="1">
                              <stop offset="5%"  stopColor={scoreToColor(patient.riskScore6h)} stopOpacity={0.3} />
                              <stop offset="95%" stopColor={scoreToColor(patient.riskScore6h)} stopOpacity={0.02} />
                            </linearGradient>
                          </defs>
                          <XAxis dataKey="label" tick={{ fontSize: 9, fill: '#64748b' }} />
                          <YAxis domain={[0, 100]} tick={{ fontSize: 9, fill: '#64748b' }} />
                          <Tooltip
                            contentStyle={{ background: '#0d1f38', border: '1px solid rgba(148,163,184,0.15)', borderRadius: 6, fontSize: '0.75rem' }}
                            formatter={(v) => [`${v}%`, 'Risk']}
                          />
                          <Area
                            type="monotone" dataKey="value"
                            stroke={scoreToColor(patient.riskScore6h)} strokeWidth={2}
                            fill="url(#trajGrad)" dot={{ r: 3, fill: scoreToColor(patient.riskScore6h), strokeWidth: 0 }}
                          />
                        </AreaChart>
                      </ResponsiveContainer>
                    </div>
                    <div className="trajectory-values">
                      {riskTrajectory.map((t, i) => (
                        <div key={i} className="traj-val">
                          <span style={{ color: 'var(--text-muted)', fontSize: '0.625rem' }}>{t.label}</span>
                          <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 700, fontSize: '0.875rem', color: scoreToColor(t.value / 100) }}>{t.value}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
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

                {/* Intervention Presets */}
                <div className="presets-row">
                  <span className="presets-label"><Zap size={11} /> Quick Presets:</span>
                  {PRESETS.map(preset => (
                    <button
                      key={preset.label}
                      className="preset-btn"
                      onClick={() => applyPreset(preset)}
                    >
                      <preset.icon size={12} /> {preset.label}
                    </button>
                  ))}
                </div>

                <div className="twin-grid">
                  {/* Sliders */}
                  <div className="twin-sliders">
                    {[
                      { key: 'heartRate',       label: 'Heart Rate',  unit: ' bpm',  min: 40,  max: 180 },
                      { key: 'systolicBP',      label: 'Systolic BP', unit: ' mmHg', min: 60,  max: 200 },
                      { key: 'spo2',            label: 'SpO₂',        unit: '%',     min: 70,  max: 100 },
                      { key: 'respiratoryRate', label: 'Resp. Rate',  unit: ' /min', min: 5,   max: 50  },
                    ].map(({ key, label, unit, min, max }) => {
                      const baseline = patient.vitals[key].at(-1).value
                      const cur = twinVals[key] ?? baseline
                      const changed = Math.abs(cur - baseline) > 0.5
                      return (
                        <div key={key} className="slider-item">
                          <div className="slider-label">
                            <span>{label}</span>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                              {changed && (
                                <span style={{ fontSize: '0.625rem', color: 'var(--text-muted)' }}>
                                  was {baseline}{unit}
                                </span>
                              )}
                              <span className="slider-value" style={{ color: changed ? 'var(--brand-cyan)' : 'var(--brand-blue)' }}>
                                {cur ?? '--'}{unit}
                              </span>
                            </div>
                          </div>
                          <input
                            id={`twin-slider-${key}`}
                            type="range" min={min} max={max} step={1}
                            value={cur ?? min}
                            onChange={e =>
                              setTwinVals(v => ({ ...v, [key]: parseFloat(e.target.value) }))
                            }
                          />
                        </div>
                      )
                    })}

                    <div className="twin-actions">
                      <button
                        id="btn-run-simulation"
                        className={`btn btn-primary ${simAnimating ? 'btn-loading' : ''}`}
                        onClick={runSim}
                        disabled={simAnimating}
                      >
                        {simAnimating ? <RefreshCw size={13} className="spin" /> : <Play size={13} />}
                        {simAnimating ? 'Simulating…' : 'Run Simulation'}
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
                    {/* Risk gauges */}
                    <div className="twin-gauges-row">
                      <RiskGauge score={patient.riskScore6h} label="Baseline 6h Risk" size={108} />
                      <div className="twin-gauge-arrow">
                        <ArrowRight size={20} style={{ color: simResult ? (simResult.delta < 0 ? 'var(--risk-low)' : 'var(--risk-critical)') : 'var(--border-strong)' }} />
                      </div>
                      <RiskGauge
                        score={simResult ? simResult.newScore : patient.riskScore6h}
                        label="Projected 6h Risk"
                        size={108}
                      />
                    </div>

                    {simResult && (
                      <div className={`twin-delta-banner ${simResult.delta < 0 ? 'positive' : 'negative'}`}>
                        {simResult.delta < 0
                          ? <><TrendingDown size={14} /> {Math.abs(Math.round(simResult.delta * 100))}% projected improvement</>
                          : <><TrendingUp size={14} /> {Math.abs(Math.round(simResult.delta * 100))}% projected worsening</>
                        }
                      </div>
                    )}

                    {!simResult && (
                      <div style={{ textAlign: 'center', fontSize: '0.8125rem', color: 'var(--text-muted)', padding: '0.5rem 0' }}>
                        Adjust sliders or pick a preset → Run Simulation
                      </div>
                    )}

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

            {/* ========== CLINICAL NOTES TAB ========== */}
            {activeTab === 'notes' && (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.875rem' }}>
                  <div className="section-title" style={{ marginBottom: 0 }}>Clinical Notes — {patient.name}</div>
                  <button className="btn btn-primary" style={{ fontSize: '0.75rem', padding: '0.35rem 0.75rem' }}>
                    <FileText size={12} /> Add Note
                  </button>
                </div>

                <div className="notes-list">
                  {notes.map(note => (
                    <div key={note.id} className={`note-card note-${note.type}`}>
                      <div className="note-header">
                        <div className="note-author-info">
                          <div className="note-author-avatar">
                            {note.author.split(' ').map(n => n[0]).join('').slice(0, 2)}
                          </div>
                          <div>
                            <div className="note-author">{note.author}</div>
                            <div className="note-role">{note.role}</div>
                          </div>
                        </div>
                        <div className="note-meta-right">
                          <span className={`note-type-badge note-type-${note.type}`}>{note.type}</span>
                          <span className="note-time"><Clock size={10} /> {note.time}</span>
                        </div>
                      </div>
                      <p className="note-body">{note.note}</p>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '0.75rem', fontSize: '0.6875rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
                  <Shield size={11} /> Clinical notes are synthetic. Not real patient data.
                </div>
              </>
            )}

          </div>{/* end tab-content */}
        </main>

        {/* ---- Alerts Panel ---- */}
        <aside className={`alerts-panel ${alertsOpen ? 'open' : ''}`}>
          <div className="alerts-panel-header">
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Bell size={14} style={{ color: 'var(--risk-critical)' }} />
              <span style={{ fontWeight: 700, fontSize: '0.875rem' }}>Active Alerts</span>
              <span className="alerts-count-badge">{activeAlerts.length}</span>
            </div>
            <button className="alerts-close-btn" onClick={() => setAlertsOpen(false)}>
              <X size={14} />
            </button>
          </div>
          <div className="alerts-panel-list">
            {activeAlerts.length === 0 ? (
              <div className="alerts-empty">
                <CheckCircle size={24} style={{ color: 'var(--risk-low)', marginBottom: 8 }} />
                <div>No active alerts</div>
              </div>
            ) : activeAlerts.map(p => {
              const rc = getRiskClass(p.riskCategory)
              return (
                <div key={p.id} className={`alert-panel-item risk-${rc}`}>
                  <div className="alert-panel-row1">
                    <span className="alert-panel-name">{p.name}</span>
                    <span className={`risk-pill ${rc}`} style={{ fontSize: '0.625rem' }}>{Math.round(p.riskScore6h * 100)}%</span>
                  </div>
                  <div className="alert-panel-diag">{p.diagnosis} · {p.ward} {p.bed}</div>
                  <div className="alert-panel-footer">
                    <button
                      className="btn btn-ghost"
                      style={{ fontSize: '0.6875rem', padding: '0.25rem 0.6rem' }}
                      onClick={() => { setSelectedId(p.id); setAlertsOpen(false) }}
                    >
                      View <ArrowRight size={10} />
                    </button>
                    <button
                      className="btn"
                      style={{ fontSize: '0.6875rem', padding: '0.25rem 0.6rem', background: 'var(--risk-low-bg)', color: 'var(--risk-low)', border: '1px solid var(--risk-low-glow)' }}
                      onClick={() => setAckedAlerts(s => new Set([...s, p.id]))}
                    >
                      <CheckCircle size={10} /> Ack
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
        </aside>

      </div>
    </div>
  )
}
