import { useNavigate } from 'react-router-dom'
import {
  Activity, Stethoscope, BarChart3, ChevronRight,
  Shield, Brain, Cpu, Heart, Zap,
} from 'lucide-react'

export default function Login() {
  const navigate = useNavigate()

  return (
    <div className="login-page">
      <div className="login-bg-gradient" />
      <div className="login-bg-grid" />

      <div className="login-content">
        {/* Eyebrow */}
        <div className="login-eyebrow">
          <Activity size={16} />
          AI-Powered Clinical Decision Support
        </div>

        {/* Headline */}
        <div style={{ textAlign: 'center' }}>
          <h1 className="login-title">AI Hospital Intelligence<br />Platform</h1>
          <p className="login-subtitle" style={{ marginTop: '0.875rem' }}>
            Proactive, explainable, data-driven ICU patient care.<br />
            ICU Early Warning · Resource Forecasting · Digital Twin · XAI
          </p>
        </div>

        {/* Role Cards */}
        <div className="role-cards">
          {/* Doctor Card */}
          <div
            id="btn-enter-doctor"
            className="role-card blue"
            onClick={() => navigate('/doctor')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && navigate('/doctor')}
          >
            <div className="role-card-glow" />
            <div className="role-card-icon blue">
              <Stethoscope size={30} />
            </div>
            <div className="role-card-title">Doctor Dashboard</div>
            <p className="role-card-desc">
              Real-time ICU patient monitoring with AI-powered risk alerts,
              SHAP explainability panels, and a digital twin simulator.
            </p>
            <div className="role-features">
              {[
                'ICU Deterioration Risk (6h / 12h / 24h)',
                'Vital Signs Monitor — 24-hour trends',
                'SHAP / LIME Explainability',
                'Digital Twin Simulator',
                'Lab Results with Critical Flags',
              ].map(f => (
                <div key={f} className="role-feature">
                  <div className="feature-dot blue" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="role-card-cta blue">
              Enter Doctor View <ChevronRight size={16} />
            </div>
          </div>

          {/* Admin Card */}
          <div
            id="btn-enter-admin"
            className="role-card purple"
            onClick={() => navigate('/admin')}
            role="button"
            tabIndex={0}
            onKeyDown={e => e.key === 'Enter' && navigate('/admin')}
          >
            <div className="role-card-glow" />
            <div className="role-card-icon purple">
              <BarChart3 size={30} />
            </div>
            <div className="role-card-title">Administrator Dashboard</div>
            <p className="role-card-desc">
              Hospital occupancy analytics, ML-powered resource demand forecasting,
              ward heatmaps, staff allocation, and automated alert logs.
            </p>
            <div className="role-features">
              {[
                'ICU Occupancy Analytics — live',
                'ML Resource Demand Forecast (7-day)',
                'Ward × Hour Heatmap',
                'Staff Allocation Tracker',
                'AI Alert Log',
              ].map(f => (
                <div key={f} className="role-feature">
                  <div className="feature-dot purple" />
                  <span>{f}</span>
                </div>
              ))}
            </div>
            <div className="role-card-cta purple">
              Enter Admin View <ChevronRight size={16} />
            </div>
          </div>
        </div>

        {/* Feature Pills */}
        <div className="login-pills">
          {[
            { icon: <Brain size={13} />,  label: 'XAI-Powered (SHAP + LIME)' },
            { icon: <Cpu size={13} />,    label: 'Digital Twin Simulator' },
            { icon: <Heart size={13} />,  label: 'ICU Early Warning' },
            { icon: <Zap size={13} />,    label: 'Resource Forecasting' },
            { icon: <Activity size={13} />,label: 'Real-time Monitoring' },
          ].map(({ icon, label }) => (
            <div key={label} className="login-pill">
              {icon} {label}
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="login-disclaimer">
          <Shield size={12} />
          Research Prototype — All data is synthetic — Not for clinical use
        </div>
      </div>
    </div>
  )
}
