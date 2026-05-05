import DashboardLayout from '../../components/DashboardLayout'
import { parentNavSections } from './navigation'

const badges = [
  { text: 'Parent / Guardian', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Risk View', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

export default function ParentEarlyWarningPage() {
  return (
    <DashboardLayout
      activePath="/parents/early-warning"
      roleNavSections={parentNavSections}
      profile={{
        badgeCode: 'P7',
        title: 'Guardian Account',
        subtitle: 'Linked Learners Only',
        rolePill: 'Parent / Guardian',
        securityContext: 'Parent view is limited to linked learner risk cases.',
      }}
      heading="Early Warning Risk Dashboard"
      subheading="Parent Risk View"
      topBadges={badges}
      contextText="Parent / Guardian • Early Warning System"
      contextNotice="Risk alerts are visible only for linked learners."
    >
      <div className="row">
        <div className="col-lg-8">
          <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>
            Early Warning Risk Dashboard
          </h1>
          <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>
            Monitor risk indicators for your linked learners to provide timely support and intervention.
          </p>

          <div className="row" style={{ marginBottom: '16px' }}>
            <div className="col-md-3 col-6 mb-3">
              <div className="kpi-card" style={{ background: '#FEF2F2', border: '1px solid #FCA5A5' }}>
                <div className="kpi-value" style={{ color: '#DC2626' }}>1</div>
                <div className="kpi-label" style={{ color: '#991B1B' }}>Active Risk Alert</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="kpi-card">
                <div className="kpi-value">92%</div>
                <div className="kpi-label">Overall Attendance</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="kpi-card">
                <div className="kpi-value">0</div>
                <div className="kpi-label">Behavioral Reports</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="kpi-card">
                <div className="kpi-value">1</div>
                <div className="kpi-label">Action Required</div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="mdi mdi-alert-circle-outline" style={{ color: '#DC2626' }}></i>
              Active Risk Alerts
            </h3>
            <div style={{ padding: '16px', border: '1px solid #FCA5A5', borderRadius: '12px', background: '#FEF2F2', marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#991B1B', fontSize: '16px' }}>Academic Risk: Declining Math Scores</span>
                <span className="pill" style={{ backgroundColor: '#DC2626', color: '#FFFFFF', padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold' }}>High Priority</span>
              </div>
              <div style={{ fontSize: '13px', color: '#991B1B', marginBottom: '12px' }}>
                <strong>Learner:</strong> Juan Dela Cruz • Grade 8 Mabini
              </div>
              <p style={{ fontSize: '14px', color: '#7F1D1D', marginBottom: '16px' }}>
                Juan has scored below 75% in the last three Math formative assessments. The system has flagged this as an early academic risk. Please coordinate with the subject teacher for possible intervention strategies.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-sm btn-pill" style={{ background: '#991B1B', color: '#FFFFFF', border: 'none', padding: '6px 16px', fontWeight: 'bold' }}>Schedule Conference</button>
                <button className="btn btn-sm btn-pill" style={{ background: 'transparent', color: '#991B1B', border: '1px solid #991B1B', padding: '6px 16px', fontWeight: 'bold' }}>Acknowledge Alert</button>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Intervention Progress</h3>
            <div style={{ padding: '16px', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#F9FAFB' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#111827', fontSize: '16px' }}>Reading Comprehension Remediation</span>
                <span className="pill" style={{ backgroundColor: '#DCFCE7', color: '#166534', padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold' }}>On Track</span>
              </div>
              <div style={{ fontSize: '13px', color: '#4B5563', marginBottom: '12px' }}>
                <strong>Learner:</strong> Ana Dela Cruz • Grade 5 Rizal
              </div>
              <p style={{ fontSize: '14px', color: '#4B5563', marginBottom: '16px' }}>
                Ana is currently attending the Friday afternoon reading sessions. Her latest evaluation shows a 15% improvement in comprehension speed.
              </p>
              <div className="progress" style={{ height: '8px', marginBottom: '8px', borderRadius: '4px' }}>
                <div className="progress-bar" role="progressbar" style={{ width: '60%', backgroundColor: '#10B981' }} aria-valuenow="60" aria-valuemin="0" aria-valuemax="100"></div>
              </div>
              <div style={{ fontSize: '12px', color: '#6B7280', textAlign: 'right' }}>Week 3 of 5 completed</div>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="info-card">
            <h3>Understanding the ABCs of Risk</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div>
                <div style={{ fontWeight: 'bold', color: '#111827', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#DBEAFE', color: '#1D4ED8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>A</div>
                  Attendance
                </div>
                <p style={{ fontSize: '13px', color: '#4B5563', margin: '4px 0 0 32px' }}>Unexcused absences or chronic tardiness can indicate disengagement.</p>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', color: '#111827', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#FEF3C7', color: '#B45309', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>B</div>
                  Behavior
                </div>
                <p style={{ fontSize: '13px', color: '#4B5563', margin: '4px 0 0 32px' }}>Disciplinary incidents or significant changes in classroom participation.</p>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', color: '#111827', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#D1FAE5', color: '#047857', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>C</div>
                  Course Performance
                </div>
                <p style={{ fontSize: '13px', color: '#4B5563', margin: '4px 0 0 32px' }}>Dropping grades or consistently missed assignments.</p>
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <h3>Support Resources</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <a href="#" style={{ color: '#2563EB', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="mdi mdi-book-open-page-variant"></i> Parenting Tips for Academic Success
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#2563EB', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="mdi mdi-account-supervisor-circle"></i> Contact Guidance Counselor
                </a>
              </li>
              <li>
                <a href="#" style={{ color: '#2563EB', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <i className="mdi mdi-file-document-edit"></i> Request Special Intervention
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}

