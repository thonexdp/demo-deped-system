import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const divisionBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: '24 Schools', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Accounts: 214', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

export default function DivisionHeadPage() {
  return (
    <DashboardLayout
      activePath="/admin/division-head"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'All Schools',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-level analytics, user management, exports, and audit controls.',
      }}
      heading="Division Admin Dashboard"
      subheading="Division Analytics • Screen 44 / 47"
      topBadges={divisionBadges}
      contextText="Admin / SDO • Division-wide access"
      contextNotice="Back-office role with analytics, accounts, exports, and audit logs."
    >
      <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Division Overview</h1>
      <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Track all 24 schools, PIR submission status, and manage system-wide accounts and data workflows.</p>
      <div className="row">
        {[
          ['24', 'Schools in division'],
          ['81.9%', 'Division avg MPS'],
          ['214', 'Total accounts'],
          ['18/24', 'PIR submissions'],
        ].map(([value, label]) => (
          <div key={label} className="col-md-3 col-sm-6 mb-3">
            <div className="stat-card">
              <div className="stat-kpi">{value}</div>
              <div className="stat-label">{label}</div>
            </div>
          </div>
        ))}
      </div>
    </DashboardLayout>
  )
}
