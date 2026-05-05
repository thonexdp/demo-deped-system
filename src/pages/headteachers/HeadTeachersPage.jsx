import DashboardLayout from '../../components/DashboardLayout'
import { headNavSections } from './navigation'

const headBadges = [
  { text: 'Head Teacher / Principal', style: { backgroundColor: '#F5F3FF', color: '#5B21B6', border: '1px solid #DDD6FE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Whole School View', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'IPCRF Pending: 6', style: { backgroundColor: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
]

export default function HeadTeachersPage() {
  return (
    <DashboardLayout
      activePath="headteachers/school-overview"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'HT',
        title: 'School Head',
        subtitle: 'Whole-School Monitoring',
        rolePill: 'Head Teacher / Principal',
        securityContext: 'You can approve teacher IPCRF submissions and add remarks.',
      }}
      heading="School Overview"
      subheading="School Operations • Screen 21 / 47"
      topBadges={headBadges}
      contextText="Head Teacher / Principal • School-wide Monitoring"
      contextNotice="You can approve and add remarks but cannot edit teacher records."
    >
      <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>School Overview</h1>
      <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Monitor school-level PIR checklist, grade and attendance overviews, and IPCRF approvals.</p>
      <div className="row">
        {[
          ['131', 'Total enrolment'],
          ['82.7%', 'School avg MPS'],
          ['6', 'Awaiting IPCRF approval'],
          ['2/6', 'PIR pending sections'],
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
