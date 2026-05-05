import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import InfoModal from '../../components/InfoModal'
import { headNavSections } from './navigation'

const headBadges = [
  { text: 'Head Teacher / Principal', style: { backgroundColor: '#F5F3FF', color: '#5B21B6', border: '1px solid #DDD6FE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Whole School View', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'SY 2025-2026 • Q3', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'IPCRF Pending: 6', style: { backgroundColor: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Alerts (12)', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

export default function HeadTeacherDashboardPage() {
  const [isInfoModalOpen, setIsInfoModalOpen] = useState(false)

  useEffect(() => {
    const onEscape = (event) => {
      if (event.key === 'Escape') {
        setIsInfoModalOpen(false)
      }
    }
    document.addEventListener('keydown', onEscape)
    return () => document.removeEventListener('keydown', onEscape)
  }, [])

  return (
    <>
      <DashboardLayout
        activePath="/headteachers"
        roleNavSections={headNavSections}
        profile={{
          badgeCode: 'HT',
          title: 'School Head',
          subtitle: 'Whole-School Monitoring',
          rolePill: 'Head Teacher / Principal',
          securityContext: 'You can approve teacher IPCRF submissions and add remarks.',
        }}
        heading="Head-Teacher Dashboard"
        subheading="School Operations • Screen 20 / 47"
        topBadges={headBadges}
        contextText="Head Teacher / Principal • School-wide Monitoring"
        contextNotice="You can approve and add remarks but cannot edit teacher records."
      >
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex align-items-start justify-content-between" style={{ gap: '16px' }}>
              <div>
                <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Head-Teacher Dashboard</h1>
                <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Whole-school overview: daily attendance, teacher compliance, early warning signals, and administrative priorities.</p>
              </div>
            </div>

            <div className="d-flex flex-wrap" style={{ gap: '10px', marginBottom: '18px' }}>
              <span className="pill pill-green">Online</span>
              <span className="pill pill-gray">Last refresh: 10:44 AM</span>
              <span className="pill pill-gray">Active Teachers: 24</span>
            </div>

            <div className="row" style={{ marginBottom: '20px' }}>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="stat-card">
                  <div className="stat-kpi">92%</div>
                  <div className="stat-label">School Attendance</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="stat-card">
                  <div className="stat-kpi">4</div>
                  <div className="stat-label">Classes Missing Logs</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="stat-card">
                  <div className="stat-kpi">12</div>
                  <div className="stat-label">High-Risk Learners</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="stat-card">
                  <div className="stat-kpi">6</div>
                  <div className="stat-label">Pending IPCRF</div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="mdi mdi-teach" style={{ color: '#5B21B6' }}></i>
                Today&apos;s School Operations
              </h3>
              <div className="table-responsive" style={{ border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
                <table className="table" style={{ margin: 0, fontSize: '14px' }}>
                  <thead style={{ background: '#F9FAFB' }}>
                    <tr style={{ color: '#4B5563', borderBottom: '1px solid #E5E7EB' }}>
                      <th style={{ padding: '16px', fontWeight: 'bold' }}>Department/Grade</th>
                      <th style={{ padding: '16px', fontWeight: 'bold' }}>Attendance Rate</th>
                      <th style={{ padding: '16px', fontWeight: 'bold' }}>Teacher Compliance</th>
                      <th style={{ padding: '16px', fontWeight: 'bold' }}>Risk Signals</th>
                      <th style={{ padding: '16px', fontWeight: 'bold' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #E5E7EB', background: '#FFFFFF' }}>
                      <td style={{ padding: '16px', fontWeight: 'bold', color: '#111827' }}>Grade 7</td>
                      <td style={{ padding: '16px', color: '#4B5563' }}><i className="mdi mdi-account-group text-success me-1"></i> 95%</td>
                      <td style={{ padding: '16px', color: '#4B5563' }}>All logs submitted</td>
                      <td style={{ padding: '16px', color: '#DC2626' }}><i className="mdi mdi-alert-circle-outline me-1"></i> 3 at-risk flagged</td>
                      <td style={{ padding: '16px' }}><span className="pill" style={{ backgroundColor: '#FEF9C3', color: '#854D0E', padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold', display: 'inline-block' }}>Monitor</span></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E5E7EB', background: '#FFFFFF' }}>
                      <td style={{ padding: '16px', fontWeight: 'bold', color: '#111827' }}>Grade 8</td>
                      <td style={{ padding: '16px', color: '#4B5563' }}><i className="mdi mdi-account-group text-warning me-1"></i> 88%</td>
                      <td style={{ padding: '16px', color: '#B45309' }}><i className="mdi mdi-clock-outline me-1"></i> 2 teachers pending logs</td>
                      <td style={{ padding: '16px', color: '#059669' }}><i className="mdi mdi-check-circle-outline me-1"></i> Stable</td>
                      <td style={{ padding: '16px' }}><span className="pill" style={{ backgroundColor: '#FEF9C3', color: '#854D0E', padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold', display: 'inline-block' }}>Follow-up</span></td>
                    </tr>
                    <tr style={{ background: '#FFFFFF' }}>
                      <td style={{ padding: '16px', fontWeight: 'bold', color: '#111827' }}>Grade 9</td>
                      <td style={{ padding: '16px', color: '#4B5563' }}><i className="mdi mdi-account-group text-success me-1"></i> 96%</td>
                      <td style={{ padding: '16px', color: '#059669' }}><i className="mdi mdi-check-circle-outline me-1"></i> Up to date</td>
                      <td style={{ padding: '16px', color: '#D97706' }}><i className="mdi mdi-alert-outline me-1"></i> 5 behavior incidents</td>
                      <td style={{ padding: '16px' }}><span className="pill" style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold', display: 'inline-block' }}>Action Needed</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="info-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="mdi mdi-format-list-checks" style={{ color: '#5B21B6' }}></i>
                Administrative Queue
              </h3>
              <div className="d-flex flex-column" style={{ gap: '12px' }}>
                <div style={{ padding: '12px', border: '1px solid #FCA5A5', borderRadius: '12px', background: '#FEF2F2', borderLeft: '4px solid #DC2626' }}>
                  <div style={{ fontWeight: 'bold', color: '#991B1B', fontSize: '14px', marginBottom: '4px' }}>Submit SMEA/PIR to SDO</div>
                  <div style={{ fontSize: '13px', color: '#7F1D1D' }}>Q3 PIR requires your review. 2 sections still pending data from teachers.</div>
                </div>
                <div style={{ padding: '12px', border: '1px solid #FDE047', borderRadius: '12px', background: '#FEF9C3', borderLeft: '4px solid #D97706' }}>
                  <div style={{ fontWeight: 'bold', color: '#92400E', fontSize: '14px', marginBottom: '4px' }}>Review Teacher IPCRF</div>
                  <div style={{ fontSize: '13px', color: '#B45309' }}>6 teachers have submitted their IPCRF documents for your final approval.</div>
                </div>
                <div style={{ padding: '12px', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#F9FAFB', borderLeft: '4px solid #6B7280' }}>
                  <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px', marginBottom: '4px' }}>Address Chronic Absenteeism</div>
                  <div style={{ fontSize: '13px', color: '#4B5563' }}>Review cases for 12 students flagged across Grade 7 and Grade 9.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

      <InfoModal
        isOpen={isInfoModalOpen}
        onToggle={() => setIsInfoModalOpen((value) => !value)}
        onClose={() => setIsInfoModalOpen(false)}
        iconClass="mdi mdi-view-dashboard"
        title="Head-Teacher Dashboard"
      >
        <p style={{ margin: '8px 0', color: '#374151' }}>This is the main workspace for the School Head to monitor daily operations:</p>
        <ul style={{ margin: '12px 0', paddingLeft: '20px', color: '#4B5563', lineHeight: 1.6 }}>
          <li style={{ marginBottom: '6px' }}><strong>School Compliance:</strong> Monitor teacher attendance logging and report submissions.</li>
          <li style={{ marginBottom: '6px' }}><strong>Administrative Queue:</strong> Prioritize high-stakes approvals like IPCRF and PIR.</li>
          <li style={{ marginBottom: '6px' }}><strong>Early Warning System:</strong> Get a bird&apos;s-eye view of at-risk students across all grades.</li>
        </ul>
      </InfoModal>
    </>
  )
}
