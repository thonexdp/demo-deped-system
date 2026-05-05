import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { teacherNavSections } from './navigation'

const teacherBadges = [
  { text: 'Teacher / Adviser', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
]

export default function TeacherAttendancePage() {
  return (
    <DashboardLayout
      activePath="/teachers/attendance"
      roleNavSections={teacherNavSections}
      profile={{
        badgeCode: 'TV',
        title: 'Class Adviser',
        subtitle: 'Assigned Sections',
        rolePill: 'Teacher / Adviser',
        securityContext: 'Teacher approvals are required for high-stakes grade actions.',
      }}
      heading="Attendance"
      subheading="Class Management • Daily Records"
      topBadges={teacherBadges}
      contextText="Teacher / Adviser • Class Management • Scope: Attendance Monitoring"
      contextNotice="MFA and audit trails apply to record and section changes."
    >
      <style>{`
        .info-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        .info-card h3 { color: #111827; font-size: 16px; font-weight: 800; margin-bottom: 16px; }
        
        .stat-card { border: 1px solid #E5E7EB; border-radius: 12px; padding: 16px; display: flex; flex-direction: column; justify-content: center; height: 100%; box-shadow: 0 2px 4px rgba(0,0,0,0.02); }
        .stat-card h2 { font-size: 32px; font-weight: 800; color: #111827; margin-bottom: 8px; }
        .stat-card p { font-size: 12px; color: #4B5563; line-height: 1.4; margin: 0; }
        
        .alert-box { border-radius: 12px; padding: 16px; margin-bottom: 12px; }
        .alert-box.red { background-color: #FEF2F2; border: 1px solid #FECACA; }
        .alert-box.red h4 { color: #991B1B; font-size: 13px; font-weight: 700; margin-bottom: 6px; }
        .alert-box.red p { color: #B91C1C; font-size: 12px; margin: 0; }
        .alert-box.yellow { background-color: #FFFBEB; border: 1px solid #FDE68A; }
        .alert-box.yellow h4 { color: #92400E; font-size: 13px; font-weight: 700; margin-bottom: 6px; }
        .alert-box.yellow p { color: #B45309; font-size: 12px; margin: 0; }
        .alert-box.green { background-color: #F0FDF4; border: 1px solid #BBF7D0; }
        .alert-box.green h4 { color: #166534; font-size: 13px; font-weight: 700; margin-bottom: 6px; }
        .alert-box.green p { color: #15803D; font-size: 12px; margin: 0; }

        .rule-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px dashed #E5E7EB; font-size: 13px; }
        .rule-row:last-child { border-bottom: none; padding-bottom: 0; }
        .rule-label { color: #111827; font-weight: 700; }
        .rule-action { color: #4B5563; font-weight: 500; text-align: right; }
        
        .bar-chart-container { display: flex; align-items: flex-end; justify-content: space-between; height: 120px; padding-top: 20px; gap: 12px; }
        .bar-col { flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; }
        .bar { width: 100%; border-radius: 6px; }
        .bar.blue { background-color: #2563EB; }
        .bar.yellow { background-color: #EAB308; }
        .bar-label { font-size: 12px; color: #4B5563; font-weight: 600; margin-top: 12px; text-align: center; }

        .table-custom { width: 100%; border-collapse: collapse; }
        .table-custom th { font-size: 11px; font-weight: 700; color: #6B7280; text-transform: uppercase; border-bottom: 1px solid #E5E7EB; padding-bottom: 12px; text-align: left; }
        .table-custom td { font-size: 13px; font-weight: 500; color: #111827; padding: 16px 0; border-bottom: 1px dashed #E5E7EB; }
        .table-custom tr:last-child td { border-bottom: none; }
        
        .pill-status { padding: 4px 12px; border-radius: 12px; font-size: 11px; font-weight: 700; text-align: center; display: inline-block; }
        .pill-status.monitor { background-color: #FEF3C7; color: #92400E; border: 1px solid #FDE68A; }
        .pill-status.ontrack { background-color: #DCFCE7; color: #166534; border: 1px solid #BBF7D0; }
        .pill-status.escalate { background-color: #FEE2E2; color: #991B1B; border: 1px solid #FECACA; }
        .pill-status.intervene { background-color: #FEF3C7; color: #92400E; border: 1px solid #FDE68A; }
        
        @media (max-width: 767.98px) {
          .stat-card h2 { font-size: 24px; }
          .d-flex.mb-4 { flex-wrap: wrap; }
          .info-card { padding: 14px; }
        }
      `}</style>

      <div className="row">
        <div className="col-lg-8">
          <h1 style={{ color: '#111827', fontSize: '32px', fontWeight: 800, marginBottom: '12px' }}>Attendance Monitoring System</h1>
          <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '24px' }}>Track attendance quality across sections, detect chronic absence trends early, and trigger policy-aligned intervention workflows.</p>
          
          <div className="d-flex mb-4" style={{ gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>Scope: School 0472</span>
            <span style={{ background: '#FFFFFF', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>Week of Feb 17-21, 2026</span>
            <span style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>Sync healthy</span>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 col-6 mb-3 mb-md-0">
              <div className="stat-card">
                <h2>95.8%</h2>
                <p>School attendance completion this week</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3 mb-md-0">
              <div className="stat-card">
                <h2>18</h2>
                <p>Learners with 3+ absences (30-day window)</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-0 mb-md-0">
              <div className="stat-card">
                <h2>7</h2>
                <p>Sections with late-marking spikes</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-0 mb-md-0">
              <div className="stat-card">
                <h2>2</h2>
                <p>Unsynced attendance batches pending</p>
              </div>
            </div>
          </div>

          <div className="info-card mb-4">
            <h3>Daily Attendance Pulse</h3>
            <div className="bar-chart-container">
              <div className="bar-col">
                <div className="bar blue" style={{ height: '96%' }}></div>
                <div className="bar-label">Mon 96%</div>
              </div>
              <div className="bar-col">
                <div className="bar blue" style={{ height: '94%' }}></div>
                <div className="bar-label">Tue 94%</div>
              </div>
              <div className="bar-col">
                <div className="bar yellow" style={{ height: '60%' }}></div>
                <div className="bar-label">Wed 82%</div>
              </div>
              <div className="bar-col">
                <div className="bar blue" style={{ height: '95%' }}></div>
                <div className="bar-label">Thu 95%</div>
              </div>
              <div className="bar-col">
                <div className="bar blue" style={{ height: '93%' }}></div>
                <div className="bar-label">Fri 93%</div>
              </div>
            </div>
          </div>

          <div className="info-card mb-4 mb-lg-0">
            <h3>Section Monitoring Queue</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="table-custom" style={{ marginTop: '16px', minWidth: '600px' }}>
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>SECTION</th>
                    <th style={{ width: '15%' }}>PRESENT %</th>
                    <th style={{ width: '20%' }}>CHRONIC ABSENCE</th>
                    <th style={{ width: '15%' }}>LATE TREND</th>
                    <th style={{ width: '15%' }}>LAST SYNC</th>
                    <th style={{ width: '10%' }}>PRIORITY</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Grade 8 - Mabini</td>
                    <td>91%</td>
                    <td>6 learners</td>
                    <td>Up +3 this week</td>
                    <td>10:41 AM</td>
                    <td><span className="pill-status monitor">Monitor</span></td>
                  </tr>
                  <tr>
                    <td>Grade 8 - Luna</td>
                    <td>98%</td>
                    <td>1 learner</td>
                    <td>Stable</td>
                    <td>10:43 AM</td>
                    <td><span className="pill-status ontrack">On Track</span></td>
                  </tr>
                  <tr>
                    <td>Grade 8 - Bonifacio</td>
                    <td>84%</td>
                    <td>9 learners</td>
                    <td>Up +5 this week</td>
                    <td>10:39 AM</td>
                    <td><span className="pill-status escalate">Escalate</span></td>
                  </tr>
                  <tr>
                    <td>Grade 9 - Rizal</td>
                    <td>93%</td>
                    <td>4 learners</td>
                    <td>Up +1 this week</td>
                    <td>10:40 AM</td>
                    <td><span className="pill-status intervene">Intervene</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="info-card mb-4">
            <h3>Real-time Alerts</h3>
            
            <div className="alert-box red">
              <h4>Grade 8 - Bonifacio crossed absence threshold</h4>
              <p>3 learners moved from moderate to high-risk within 48 hours. Counselor notification required.</p>
            </div>
            
            <div className="alert-box yellow">
              <h4>Offline conflict detected</h4>
              <p>Section `8-Mabini` has 1 record mismatch between teacher tablet and server snapshot.</p>
            </div>
            
            <div className="alert-box green">
              <h4>Parent acknowledgment received</h4>
              <p>4/5 flagged absence notices were acknowledged in Parent Dashboard.</p>
            </div>
          </div>

          <div className="info-card mb-4">
            <h3>Automated Rules</h3>
            <div className="rule-row">
              <span className="rule-label">3 consecutive absences</span>
              <span className="rule-action">Open EWS case draft</span>
            </div>
            <div className="rule-row">
              <span className="rule-label">5 late marks/week</span>
              <span className="rule-action">Send adviser reminder</span>
            </div>
            <div className="rule-row">
              <span className="rule-label">Unsubmitted by 10:30 AM</span>
              <span className="rule-action">Escalate to school admin</span>
            </div>
          </div>

          <div className="info-card">
            <h3>Intervention Actions</h3>
            <div className="row" style={{ margin: '0 -6px' }}>
              <div className="col-6" style={{ padding: '0 6px', marginBottom: '12px' }}>
                <button style={{ width: '100%', background: '#FFFFFF', color: '#111827', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>Export Risk List</button>
              </div>
              <div className="col-6" style={{ padding: '0 6px', marginBottom: '12px' }}>
                <button style={{ width: '100%', background: '#FFFFFF', color: '#111827', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>Notify Advisers</button>
              </div>
              <div className="col-6" style={{ padding: '0 6px' }}>
                <button style={{ width: '100%', background: '#FFFFFF', color: '#111827', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: 700, height: '100%', cursor: 'pointer' }}>Open Conflict Resolver</button>
              </div>
              <div className="col-6" style={{ padding: '0 6px' }}>
                <button style={{ width: '100%', background: '#1E3A8A', color: '#FFFFFF', border: 'none', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: 700, height: '100%', cursor: 'pointer' }}>Create Intervention Batch</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
