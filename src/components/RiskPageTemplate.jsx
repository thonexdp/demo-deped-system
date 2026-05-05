import DashboardLayout from '../components/DashboardLayout'

function RiskContent() {
  return (
    <div className="row">
      <div className="col-lg-8">
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>
          Early Warning Risk Dashboard
        </h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>
          ABC model risk view with explainable signals, severity routing, and intervention SLA tracking.
        </p>

        <div className="row" style={{ marginBottom: '16px' }}>
          {[
            ['42', 'Active risk cases'],
            ['11', 'High severity cases'],
            ['79%', 'Interventions within SLA'],
            ['6', 'Escalation pending'],
          ].map(([value, label]) => (
            <div key={label} className="col-md-3 col-6 mb-3">
              <div className="stat-card">
                <div className="stat-kpi">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="info-card">
          <h3>At-Risk Learner Queue</h3>
          <div className="priority-item">
            <div className="priority-title">Juan Dela Cruz - Grade 8 Mabini</div>
            <div className="priority-desc">4 absences / 10 days, declining quiz trend, intervention overdue.</div>
          </div>
        </div>
      </div>

      <div className="col-lg-4">
        <div className="info-card">
          <h3>Rule and Alert Health</h3>
          <div className="priority-item">
            <div className="priority-title">Model version</div>
            <div className="priority-desc">v2.4 policy-approved, alerts generated today: 18, delivery rate: 96%.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function RiskPageTemplate({
  activePath,
  roleNavSections,
  profile,
  heading,
  subheading,
  topBadges,
  contextText,
  contextNotice,
}) {
  return (
    <DashboardLayout
      activePath={activePath}
      roleNavSections={roleNavSections}
      profile={profile}
      heading={heading}
      subheading={subheading}
      topBadges={topBadges}
      contextText={contextText}
      contextNotice={contextNotice}
    >
      <RiskContent />
    </DashboardLayout>
  )
}
