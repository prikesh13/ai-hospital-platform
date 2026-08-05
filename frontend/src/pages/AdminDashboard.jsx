/**
 * AdminDashboard.jsx
 *
 * Hospital Administrator analytics interface:
 *   - KPI strip (beds, vents, patients, critical alerts)
 *   - 24-hour ICU occupancy trend (area chart)
 *   - Ward capacity status bars
 *   - 7-day ML demand forecast
 *   - Recent AI alerts log
 *   - Ward × hour occupancy heatmap
 *   - Staff allocation table
 *
 * ⚠️ All data is synthetic. Not for clinical use.
 */
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  AreaChart, Area, LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend, ReferenceLine,
} from 'recharts'
import {
  Activity, Bed, Users, Wind, AlertTriangle, TrendingUp, TrendingDown,
  Bell, Settings, Download, Calendar, RefreshCw, BarChart2, Shield,
} from 'lucide-react'
import { resourceData, recentAlerts, patients, getOccupancyColor } from '../data/realData'

/* ---- Shared tooltip ---- */
const ChartTip = ({ active, payload, label, suffix = '%' }) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{
      background: '#0d1f38', border: '1px solid rgba(148,163,184,0.15)',
      borderRadius: 8, padding: '8px 12px', fontSize: '0.75rem',
    }}>
      <div style={{ color: '#64748b', marginBottom: 4 }}>{label}</div>
      {payload.filter(p => p.value != null).map(p => (
        <div key={p.name} style={{ color: p.color ?? '#f1f5f9', display: 'flex', gap: 8, marginBottom: 2 }}>
          <span style={{ color: '#94a3b8' }}>{p.name}:</span>
          <span style={{ fontFamily: 'JetBrains Mono', fontWeight: 700 }}>{p.value}{suffix}</span>
        </div>
      ))}
    </div>
  )
}

export default function AdminDashboard() {
  const navigate = useNavigate()
  const [clock, setClock] = useState(new Date())

  useEffect(() => {
    const t = setInterval(() => setClock(new Date()), 1000)
    return () => clearInterval(t)
  }, [])

  /* ---- Aggregate KPIs ---- */
  const totalBeds    = resourceData.wards.reduce((s, w) => s + w.beds,       0)
  const occupiedBeds = resourceData.wards.reduce((s, w) => s + w.occupied,   0)
  const totalVents   = resourceData.wards.reduce((s, w) => s + w.vents,      0)
  const ventsInUse   = resourceData.wards.reduce((s, w) => s + w.ventsInUse, 0)
  const critCount    = patients.filter(p => p.riskCategory === 'CRITICAL').length
  const alertCount   = recentAlerts.length

  /* ---- Last 8 hour labels for heatmap ---- */
  const heatmapHours = Array.from({ length: 8 }, (_, i) => {
    const h = new Date(clock - (7 - i) * 3600000)
    return `${h.getHours().toString().padStart(2,'0')}:00`
  })

  return (
    <div className="dashboard-layout">

      {/* ---- Navbar ---- */}
      <nav className="navbar">
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem' }}>
          <div className="navbar-logo" onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>
            <Activity size={20} className="navbar-logo-icon" />
            <div>
              <div className="navbar-logo-text">MedAI</div>
              <div className="navbar-logo-sub">Admin Dashboard</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem' }}>
          {[
            { id: 'view-overview',   label: 'Overview'   },
            { id: 'view-forecast',   label: 'Forecast'   },
            { id: 'view-resources',  label: 'Resources'  },
          ].map(({ id, label }) => (
            <button key={id} id={id} className="tab" style={{ borderRadius: 'var(--r-md)', padding: '0.375rem 0.875rem' }}>
              {label}
            </button>
          ))}
        </div>

        <div className="navbar-right">
          <div className="navbar-status"><div className="status-dot" />Live Data</div>
          <span className="navbar-time">{clock.toLocaleTimeString('en-US', { hour12: false })}</span>
          <button id="btn-admin-alerts" className="navbar-btn has-alert" title="Alerts"><Bell size={15} /></button>
          <button id="btn-export" className="navbar-btn" title="Export report"><Download size={15} /></button>
          <div id="btn-admin-user" className="navbar-user" onClick={() => navigate('/')}>
            <div className="user-avatar" style={{ background: 'linear-gradient(135deg,#8b5cf6,#6d28d9)' }}>AD</div>
            <span style={{ fontSize: '0.8125rem', fontWeight: 500 }}>Admin</span>
          </div>
        </div>
      </nav>

      {/* ---- Body ---- */}
      <div className="dashboard-body">
        <div className="admin-body">

          {/* ---- KPI Strip ---- */}
          <div className="kpi-grid">

            <div className="kpi-card blue">
              <div className="kpi-card-glow" />
              <div className="kpi-icon blue"><Bed size={18} /></div>
              <div className="kpi-value">
                {occupiedBeds}
                <span className="kpi-value-sub">/{totalBeds}</span>
              </div>
              <div className="kpi-label">ICU Beds Occupied</div>
              <div className="kpi-trend up">
                <TrendingUp size={12} />
                {Math.round(occupiedBeds / totalBeds * 100)}% utilization
              </div>
            </div>

            <div className="kpi-card purple">
              <div className="kpi-card-glow" />
              <div className="kpi-icon purple"><Wind size={18} /></div>
              <div className="kpi-value">
                {ventsInUse}
                <span className="kpi-value-sub">/{totalVents}</span>
              </div>
              <div className="kpi-label">Ventilators In Use</div>
              <div className="kpi-trend up">
                <TrendingUp size={12} />
                {Math.round(ventsInUse / totalVents * 100)}% utilization
              </div>
            </div>

            <div className="kpi-card orange">
              <div className="kpi-card-glow" />
              <div className="kpi-icon orange"><Users size={18} /></div>
              <div className="kpi-value">{patients.length}</div>
              <div className="kpi-label">Active ICU Patients</div>
              <div className="kpi-trend neutral">
                <BarChart2 size={12} />
                Stable vs yesterday
              </div>
            </div>

            <div className="kpi-card red">
              <div className="kpi-card-glow" />
              <div className="kpi-icon red"><AlertTriangle size={18} /></div>
              <div className="kpi-value">{critCount}</div>
              <div className="kpi-label">Critical Risk Patients</div>
              <div className="kpi-trend up">
                <TrendingUp size={12} />
                Requires immediate review
              </div>
            </div>

          </div>{/* end kpi-grid */}

          {/* ---- Row 1: Occupancy Trend + Ward Status ---- */}
          <div className="charts-row-2col">

            {/* 24h Occupancy Trend */}
            <div className="chart-card">
              <div className="chart-card-header">
                <div>
                  <div className="chart-card-title">ICU Occupancy — Last 24 Hours</div>
                  <div className="chart-card-subtitle">Bed utilization by ward (%)</div>
                </div>
                <button id="btn-refresh-occupancy" className="btn btn-ghost" style={{ padding: '0.25rem 0.625rem', fontSize: '0.75rem' }}>
                  <RefreshCw size={12} /> Live
                </button>
              </div>
              <div style={{ height: 210 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={resourceData.occupancyTrend} margin={{ top: 5, right: 8, left: -22, bottom: 5 }}>
                    <defs>
                      <linearGradient id="gMICU"  x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#ef4444" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="gCICU"  x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#3b82f6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="gSICU"  x1="0" y1="0" x2="0" y2="1">
                        <stop offset="10%" stopColor="#8b5cf6" stopOpacity={0.3} />
                        <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.07)" />
                    <XAxis dataKey="hour" tick={{ fontSize: 10, fill: '#64748b' }} interval={4} />
                    <YAxis domain={[40, 100]} tick={{ fontSize: 10, fill: '#64748b' }} unit="%" />
                    <Tooltip content={<ChartTip />} />
                    <ReferenceLine
                      y={85}
                      stroke="rgba(249,115,22,0.45)"
                      strokeDasharray="5 5"
                      label={{ value: '85% alert', fill: '#f97316', fontSize: 10, position: 'right' }}
                    />
                    <Legend iconType="circle" iconSize={7} wrapperStyle={{ fontSize: '0.75rem' }} />
                    <Area type="monotone" dataKey="micu" name="MICU" stroke="#ef4444" fill="url(#gMICU)" strokeWidth={1.5} />
                    <Area type="monotone" dataKey="cicu" name="CICU" stroke="#3b82f6" fill="url(#gCICU)" strokeWidth={1.5} />
                    <Area type="monotone" dataKey="sicu" name="SICU" stroke="#8b5cf6" fill="url(#gSICU)" strokeWidth={1.5} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Ward Capacity Bars */}
            <div className="chart-card">
              <div className="chart-card-header">
                <div>
                  <div className="chart-card-title">Ward Capacity Status</div>
                  <div className="chart-card-subtitle">Current bed utilization</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
                {resourceData.wards.map(ward => {
                  const pct   = Math.round(ward.occupied / ward.beds * 100)
                  const color = getOccupancyColor(pct)
                  return (
                    <div key={ward.id} className="ward-bar-row">
                      <div className="ward-bar-header">
                        <span className="ward-bar-name">{ward.name}</span>
                        <div className="ward-bar-stats">
                          <span>{ward.occupied}/{ward.beds} beds</span>
                          <span className="ward-pct" style={{ color }}>{pct}%</span>
                        </div>
                      </div>
                      <div className="risk-bar">
                        <div style={{
                          height: '100%',
                          width: `${pct}%`,
                          background: color,
                          borderRadius: 'var(--r-full)',
                          transition: 'width 1.2s ease',
                          boxShadow: pct >= 90 ? `0 0 6px ${color}` : 'none',
                        }} />
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>{/* end row1 */}

          {/* ---- Row 2: Forecast + Alerts ---- */}
          <div className="charts-row-equal">

            {/* 7-Day Forecast */}
            <div className="chart-card">
              <div className="chart-card-header">
                <div>
                  <div className="chart-card-title">ICU Demand Forecast — 7 Days</div>
                  <div className="chart-card-subtitle">ML-predicted bed occupancy (%)</div>
                </div>
                <span className="badge badge-moderate" style={{ fontSize: '0.6875rem' }}>
                  <Calendar size={10} /> Forecast
                </span>
              </div>
              <div style={{ height: 210 }}>
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={resourceData.forecast} margin={{ top: 5, right: 8, left: -22, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(148,163,184,0.07)" />
                    <XAxis dataKey="day" tick={{ fontSize: 10, fill: '#64748b' }} interval={1} />
                    <YAxis domain={[50, 100]} tick={{ fontSize: 10, fill: '#64748b' }} unit="%" />
                    <Tooltip content={<ChartTip />} />
                    <ReferenceLine
                      x={resourceData.forecast[6]?.day}
                      stroke="rgba(148,163,184,0.3)"
                      strokeDasharray="4 4"
                      label={{ value: 'Today', fill: '#94a3b8', fontSize: 10 }}
                    />
                    <Legend iconType="line" wrapperStyle={{ fontSize: '0.75rem' }} />
                    <Line
                      type="monotone" dataKey="actual" name="Actual"
                      stroke="#3b82f6" strokeWidth={2} dot={{ r: 2.5 }} connectNulls={false}
                    />
                    <Line
                      type="monotone" dataKey="forecast" name="Forecast"
                      stroke="#8b5cf6" strokeWidth={2} strokeDasharray="5 5"
                      dot={{ r: 2.5 }} connectNulls={false}
                    />
                    <Line
                      type="monotone" dataKey="upper" name="95% Upper"
                      stroke="#8b5cf6" strokeWidth={0.5} strokeDasharray="2 5"
                      dot={false} connectNulls={false}
                    />
                    <Line
                      type="monotone" dataKey="lower" name="95% Lower"
                      stroke="#8b5cf6" strokeWidth={0.5} strokeDasharray="2 5"
                      dot={false} connectNulls={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Alert Log */}
            <div className="chart-card">
              <div className="chart-card-header">
                <div>
                  <div className="chart-card-title">Recent AI Alerts</div>
                  <div className="chart-card-subtitle">{alertCount} alerts in last 24h</div>
                </div>
                <span
                  className="badge badge-critical"
                  style={{ fontSize: '0.6875rem', animation: 'critical-pulse 2s ease-in-out infinite' }}
                >
                  <AlertTriangle size={9} />
                  {recentAlerts.filter(a => a.type === 'CRITICAL').length} Critical
                </span>
              </div>
              <div className="alert-list">
                {recentAlerts.map(alert => (
                  <div key={alert.id} className="alert-item">
                    <div className={`alert-icon ${alert.type.toLowerCase()}`}>
                      <AlertTriangle size={13} />
                    </div>
                    <div className="alert-body">
                      <div className="alert-name">{alert.patient}</div>
                      <div className="alert-msg">{alert.message}</div>
                    </div>
                    <div className="alert-time">{alert.time}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>{/* end row2 */}

          {/* ---- Row 3: Heatmap ---- */}
          <div className="chart-card" style={{ marginBottom: '0.75rem' }}>
            <div className="chart-card-header">
              <div>
                <div className="chart-card-title">Ward Occupancy Heatmap</div>
                <div className="chart-card-subtitle">Bed utilization (%) by ward × hour — last 8 hours</div>
              </div>
              <div className="heatmap-legend">
                {[
                  { label: '<60%', color: '#22c55e' },
                  { label: '60–75%', color: '#eab308' },
                  { label: '75–90%', color: '#f97316' },
                  { label: '>90%', color: '#ef4444' },
                ].map(({ label, color }) => (
                  <div key={label} className="heatmap-legend-item">
                    <div className="heatmap-legend-dot" style={{ background: color }} /> {label}
                  </div>
                ))}
              </div>
            </div>

            <div className="heatmap-wrap">
              {/* Header row */}
              <div className="heatmap-header" />
              {heatmapHours.map(h => (
                <div key={h} className="heatmap-header">{h}</div>
              ))}

              {/* Ward rows */}
              {resourceData.heatmap.flatMap(row => [
                <div key={`${row.ward}-lbl`} className="heatmap-label">{row.ward}</div>,
                ...row.hours.map((pct, i) => {
                  const color = getOccupancyColor(pct)
                  return (
                    <div
                      key={`${row.ward}-${i}`}
                      className="heatmap-cell"
                      style={{
                        background: `${color}20`,
                        border: `1px solid ${color}40`,
                        color,
                      }}
                      title={`${row.ward} at ${heatmapHours[i]}: ${pct}%`}
                    >
                      {pct}%
                    </div>
                  )
                }),
              ])}
            </div>
          </div>

          {/* ---- Row 4: Staff Allocation ---- */}
          <div className="chart-card">
            <div className="chart-card-header">
              <div>
                <div className="chart-card-title">Staff Allocation — Current Shift</div>
                <div className="chart-card-subtitle">Nurse:patient ratios and staffing status</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.6875rem', color: 'var(--text-muted)' }}>
                <Shield size={11} /> Target ratio ≤ 1:2
              </div>
            </div>
            <table className="labs-table">
              <thead>
                <tr>
                  <th>Ward</th>
                  <th>Nurses</th>
                  <th>Doctors</th>
                  <th>Patients</th>
                  <th>Nurse:Patient</th>
                  <th>Ventilators In Use</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {resourceData.wards.map(w => {
                  const ratio  = (w.occupied / Math.max(1, w.nurses)).toFixed(1)
                  const ratioOk = parseFloat(ratio) <= 2
                  return (
                    <tr key={w.id}>
                      <td style={{ fontWeight: 600 }}>{w.name}</td>
                      <td style={{ fontFamily: 'JetBrains Mono' }}>{w.nurses}</td>
                      <td style={{ fontFamily: 'JetBrains Mono' }}>{w.doctors}</td>
                      <td style={{ fontFamily: 'JetBrains Mono' }}>{w.occupied}</td>
                      <td style={{
                        fontFamily: 'JetBrains Mono', fontWeight: 700,
                        color: ratioOk ? 'var(--risk-low)' : 'var(--risk-critical)',
                      }}>
                        1:{ratio}
                      </td>
                      <td style={{ fontFamily: 'JetBrains Mono' }}>
                        {w.ventsInUse > 0 ? `${w.ventsInUse} / ${w.vents}` : '—'}
                      </td>
                      <td>
                        <span className={`lab-flag ${ratioOk ? 'NORMAL' : 'HIGH'}`}>
                          {ratioOk ? 'OK' : 'STRAINED'}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

        </div>{/* end admin-body */}
      </div>
    </div>
  )
}
