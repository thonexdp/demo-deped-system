import DashboardLayout from '../../components/DashboardLayout'
import { teacherNavSections } from './navigation'

const badges = [
  { text: 'Teacher / Adviser', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Risk View', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

export default function TeacherEarlyWarningPage() {
  return (
    <DashboardLayout
      activePath="/teachers/early-warning"
      roleNavSections={teacherNavSections}
      profile={{
        badgeCode: 'TV',
        title: 'Class Adviser',
        subtitle: 'Assigned Sections',
        rolePill: 'Teacher / Adviser',
        securityContext: 'Teacher risk flags and interventions for assigned classes.',
      }}
      heading="Early Warning Risk Dashboard"
      subheading="Teacher Risk View"
      topBadges={badges}
      contextText="Teacher / Adviser • Early Warning System"
      contextNotice="Interventions require review and policy-compliant notifications."
    >
      <div className="row">
        <div className="col-lg-8">
          <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>
            Classroom Early Warning System
          </h1>
          <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>
            Monitor and manage at-risk students across your advisory and subject classes using the ABC model (Attendance, Behavior, Course Performance).
          </p>

          <div className="row" style={{ marginBottom: '16px' }}>
            <div className="col-md-3 col-6 mb-3">
              <div className="kpi-card" style={{ background: '#FEF2F2', border: '1px solid #FCA5A5' }}>
                <div className="kpi-value" style={{ color: '#DC2626' }}>5</div>
                <div className="kpi-label" style={{ color: '#991B1B' }}>High-Risk Learners</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="kpi-card" style={{ background: '#FEF9C3', border: '1px solid #FDE047' }}>
                <div className="kpi-value" style={{ color: '#B45309' }}>12</div>
                <div className="kpi-label" style={{ color: '#92400E' }}>Moderate Risk</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="kpi-card" style={{ background: '#EFF6FF', border: '1px solid #BFDBFE' }}>
                <div className="kpi-value" style={{ color: '#1D4ED8' }}>8</div>
                <div className="kpi-label" style={{ color: '#1E40AF' }}>Active Interventions</div>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3">
              <div className="kpi-card">
                <div className="kpi-value">3</div>
                <div className="kpi-label">Pending Parent Actions</div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <i className="mdi mdi-alert-circle-outline" style={{ color: '#DC2626' }}></i>
              Critical Student Alerts
            </h3>
            
            <div style={{ padding: '16px', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#FFFFFF', marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FEF2F2', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#DC2626', fontWeight: 'bold' }}>JD</div>
                  <div>
                    <span style={{ fontWeight: 'bold', color: '#111827', fontSize: '15px' }}>Juan Dela Cruz</span>
                    <div style={{ fontSize: '12px', color: '#6B7280' }}>Grade 8 - Mabini (Advisory)</div>
                  </div>
                </div>
                <span className="pill" style={{ backgroundColor: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold' }}>A - Attendance</span>
              </div>
              <p style={{ fontSize: '14px', color: '#4B5563', marginBottom: '16px', marginLeft: '52px' }}>
                Flagged for 4 consecutive absences. Has not submitted the Q3 Math Performance Task. Guardian has not acknowledged the early warning notice sent yesterday.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginLeft: '52px' }}>
                <button className="btn btn-sm btn-pill" style={{ background: '#DC2626', color: '#FFFFFF', border: 'none', padding: '6px 16px', fontWeight: 'bold' }}>Escalate to Guidance</button>
                <button className="btn btn-sm btn-pill" style={{ background: 'transparent', color: '#4B5563', border: '1px solid #D1D5DB', padding: '6px 16px', fontWeight: 'bold' }}>Message Parent</button>
              </div>
            </div>

            <div style={{ padding: '16px', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#FFFFFF' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#FEF9C3', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#B45309', fontWeight: 'bold' }}>MR</div>
                  <div>
                    <span style={{ fontWeight: 'bold', color: '#111827', fontSize: '15px' }}>Miguel Reyes</span>
                    <div style={{ fontSize: '12px', color: '#6B7280' }}>Grade 8 - Bonifacio (Subject)</div>
                  </div>
                </div>
                <span className="pill" style={{ backgroundColor: '#FEF9C3', color: '#B45309', border: '1px solid #FDE047', padding: '4px 12px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold' }}>C - Course Perf.</span>
              </div>
              <p style={{ fontSize: '14px', color: '#4B5563', marginBottom: '16px', marginLeft: '52px' }}>
                Dropped below 75% in the last 2 quizzes. Currently enrolled in the Reading Remediation program but showing minimal improvement.
              </p>
              <div style={{ display: 'flex', gap: '8px', marginLeft: '52px' }}>
                <button className="btn btn-sm btn-pill" style={{ background: '#B45309', color: '#FFFFFF', border: 'none', padding: '6px 16px', fontWeight: 'bold' }}>Log Intervention</button>
                <button className="btn btn-sm btn-pill" style={{ background: 'transparent', color: '#4B5563', border: '1px solid #D1D5DB', padding: '6px 16px', fontWeight: 'bold' }}>Review Grades</button>
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <h3>Class Risk Health</h3>
            <div className="table-responsive">
              <table className="table" style={{ width: '100%', fontSize: '14px' }}>
                <thead>
                  <tr style={{ color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>
                    <th style={{ padding: '12px 8px', textAlign: 'left' }}>Class Section</th>
                    <th style={{ padding: '12px 8px', textAlign: 'center' }}>At Risk (A)</th>
                    <th style={{ padding: '12px 8px', textAlign: 'center' }}>At Risk (B)</th>
                    <th style={{ padding: '12px 8px', textAlign: 'center' }}>At Risk (C)</th>
                    <th style={{ padding: '12px 8px', textAlign: 'right' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                    <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>Grade 8 - Mabini</td>
                    <td style={{ padding: '12px 8px', textAlign: 'center', color: '#DC2626', fontWeight: 'bold' }}>3</td>
                    <td style={{ padding: '12px 8px', textAlign: 'center' }}>0</td>
                    <td style={{ padding: '12px 8px', textAlign: 'center', color: '#B45309', fontWeight: 'bold' }}>2</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right' }}><button className="btn btn-sm btn-pill" style={{ background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE' }}>View Class</button></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                    <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>Grade 8 - Bonifacio</td>
                    <td style={{ padding: '12px 8px', textAlign: 'center' }}>1</td>
                    <td style={{ padding: '12px 8px', textAlign: 'center', color: '#B45309', fontWeight: 'bold' }}>1</td>
                    <td style={{ padding: '12px 8px', textAlign: 'center' }}>0</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right' }}><button className="btn btn-sm btn-pill" style={{ background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE' }}>View Class</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="info-card">
            <h3>ABC Framework Checklist</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <i className="mdi mdi-check-circle" style={{ color: '#10B981', fontSize: '20px', marginTop: '-2px' }}></i>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '13px' }}>Mark daily attendance</div>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>Completed for all sections today.</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <i className="mdi mdi-alert-circle-outline" style={{ color: '#D97706', fontSize: '20px', marginTop: '-2px' }}></i>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#92400E', fontSize: '13px' }}>Record quiz scores</div>
                  <div style={{ fontSize: '12px', color: '#B45309' }}>Grade 8 Math Q3 Quiz 2 pending.</div>
                </div>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
                <i className="mdi mdi-checkbox-blank-circle-outline" style={{ color: '#D1D5DB', fontSize: '20px', marginTop: '-2px' }}></i>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '13px' }}>Log intervention sessions</div>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>2 sessions awaiting your feedback logs.</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="info-card">
            <h3>Automated Workflows</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '12px', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '13px', color: '#111827' }}>Auto-SMS to Parents</span>
                  <div className="form-check form-switch m-0 p-0">
                    <input className="form-check-input" type="checkbox" role="switch" id="smsSwitch" defaultChecked style={{ float: 'right' }}/>
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>Send warning text for 3+ consecutive absences.</div>
              </div>
              
              <div style={{ padding: '12px', background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontWeight: 'bold', fontSize: '13px', color: '#111827' }}>Guidance Escalation</span>
                  <div className="form-check form-switch m-0 p-0">
                    <input className="form-check-input" type="checkbox" role="switch" id="guideSwitch" defaultChecked style={{ float: 'right' }}/>
                  </div>
                </div>
                <div style={{ fontSize: '11px', color: '#6B7280' }}>Auto-escalate cases marked as High Risk.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
