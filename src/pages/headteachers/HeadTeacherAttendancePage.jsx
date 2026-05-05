import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { headNavSections } from './navigation'

const headBadges = [
  { text: 'Head Teacher / Principal', style: { backgroundColor: '#F5F3FF', color: '#5B21B6', border: '1px solid #DDD6FE', padding: '6px 12px', fontSize: '12px' } },
]

export default function HeadTeacherAttendancePage() {
  return (
    <DashboardLayout
      activePath="/headteachers/attendance-overview"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'HT',
        title: 'School Head',
        subtitle: 'Whole-School Monitoring',
        rolePill: 'Head Teacher / Principal',
        securityContext: 'You can monitor and intervene in attendance patterns.',
      }}
      heading="Attendance Overview"
      subheading="School Management • Daily Records"
      topBadges={headBadges}
      contextText="Head Teacher / Principal • School Management • Scope: Attendance Overview"
      contextNotice="Monitor daily attendance compliance across all classes."
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
        .bar.blue { background-color: #5B21B6; }
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
          <h1 style={{ color: '#111827', fontSize: '32px', fontWeight: 800, marginBottom: '12px' }}>Attendance Monitoring</h1>
          <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '24px' }}>Monitor daily school-wide attendance patterns, teacher submission compliance, and at-risk student thresholds.</p>
          
          <div className="d-flex mb-4" style={{ gap: '12px', flexWrap: 'wrap' }}>
            <span style={{ background: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>Scope: School 0472</span>
            <span style={{ background: '#FFFFFF', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 600 }}>Week of Feb 17-21, 2026</span>
            <span style={{ background: '#F0FDF4', color: '#166534', border: '1px solid #BBF7D0', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700 }}>98% Logs Submitted</span>
          </div>

          <div className="row mb-4">
            <div className="col-md-3 col-6 mb-3 mb-md-0">
              <div className="stat-card">
                <h2>94.2%</h2>
                <p>School Average Daily Attendance</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-3 mb-md-0">
              <div className="stat-card">
                <h2>2</h2>
                <p>Teachers missing logs today</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-0 mb-md-0">
              <div className="stat-card">
                <h2>24</h2>
                <p>Students hitting chronic absence</p>
              </div>
            </div>
            <div className="col-md-3 col-6 mb-0 mb-md-0">
              <div className="stat-card">
                <h2>12</h2>
                <p>Active Early Warning Cases</p>
              </div>
            </div>
          </div>

          <div className="info-card mb-4">
            <h3>School-Wide Attendance Pulse</h3>
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
                <div className="bar yellow" style={{ height: '82%' }}></div>
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
            <h3>Department / Section Queue</h3>
            <div style={{ overflowX: 'auto' }}>
              <table className="table-custom" style={{ marginTop: '16px', minWidth: '600px' }}>
                <thead>
                  <tr>
                    <th style={{ width: '25%' }}>DEPARTMENT / GRADE</th>
                    <th style={{ width: '15%' }}>PRESENT %</th>
                    <th style={{ width: '20%' }}>LOGS COMPLIANCE</th>
                    <th style={{ width: '15%' }}>AT-RISK</th>
                    <th style={{ width: '15%' }}>ADVISERS</th>
                    <th style={{ width: '10%' }}>STATUS</th>
                  </tr>
                 </thead>
                 <tbody>
                   <tr>
                     <td>Grade 7</td>
                     <td>91%</td>
                     <td>100% Submitted</td>
                     <td>12 learners</td>
                     <td>All cleared</td>
                     <td><span className="pill-status monitor">Monitor</span></td>
                   </tr>
                   <tr>
                     <td>Grade 8</td>
                     <td>96%</td>
                     <td>85% Submitted</td>
                     <td>5 learners</td>
                     <td>2 missing</td>
                     <td><span className="pill-status intervene">Follow-up</span></td>
                   </tr>
                   <tr>
                     <td>Grade 9</td>
                     <td>88%</td>
                     <td>100% Submitted</td>
                     <td>15 learners</td>
                     <td>All cleared</td>
                     <td><span className="pill-status escalate">Escalate</span></td>
                   </tr>
                   <tr>
                     <td>Grade 10</td>
                     <td>98%</td>
                     <td>100% Submitted</td>
                     <td>2 learners</td>
                     <td>All cleared</td>
                     <td><span className="pill-status ontrack">On Track</span></td>
                   </tr>
                 </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="info-card mb-4">
            <h3>Administrative Alerts</h3>
            
            <div className="alert-box red">
              <h4>Grade 9 Drop in Attendance</h4>
              <p>Attendance fell to 88% today across 4 sections. Consider triggering a local health or intervention check.</p>
            </div>
            
            <div className="alert-box yellow">
              <h4>Teacher Compliance Missing</h4>
              <p>Advisers for 8-Mabini and 8-Bonifacio have not synced logs since 10:30 AM.</p>
            </div>
            
            <div className="alert-box green">
              <h4>Early Warning Resolved</h4>
              <p>5 active EWS cases have been closed successfully this week.</p>
            </div>
          </div>

          <div className="info-card mb-4">
            <h3>School Policy Automations</h3>
            <div className="rule-row">
              <span className="rule-label">Unsubmitted by 11:00 AM</span>
              <span className="rule-action">Auto-remind Teachers</span>
            </div>
            <div className="rule-row">
              <span className="rule-label">Section drops below 90%</span>
              <span className="rule-action">Flag for Principal</span>
            </div>
            <div className="rule-row">
              <span className="rule-label">15+ Absences in month</span>
              <span className="rule-action">Refer to Guidance</span>
            </div>
          </div>

          <div className="info-card">
            <h3>Intervention Actions</h3>
            <div className="row" style={{ margin: '0 -6px' }}>
              <div className="col-6" style={{ padding: '0 6px', marginBottom: '12px' }}>
                <button style={{ width: '100%', background: '#FFFFFF', color: '#111827', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>Ping Advisers</button>
              </div>
              <div className="col-6" style={{ padding: '0 6px', marginBottom: '12px' }}>
                <button style={{ width: '100%', background: '#FFFFFF', color: '#111827', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>EWS Dashboard</button>
              </div>
              <div className="col-12" style={{ padding: '0 6px' }}>
                <button style={{ width: '100%', background: '#5B21B6', color: '#FFFFFF', border: 'none', borderRadius: '8px', padding: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>Export Division Report</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
