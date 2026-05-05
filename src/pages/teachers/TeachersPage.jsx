import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import InfoModal from '../../components/InfoModal'
import { teacherNavSections } from './navigation'


const teacherBadges = [
  { text: 'Teacher / Adviser', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Assigned Sections', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'SY 2025-2026 • Q3', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Sync: Pending', style: { backgroundColor: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Alerts (9)', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]


export default function TeachersPage() {
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
        activePath="/teachers"
        roleNavSections={teacherNavSections}
        profile={{
          badgeCode: 'TV',
          title: 'Class Adviser',
          subtitle: 'Assigned Sections',
          rolePill: 'Teacher / Adviser',
          securityContext: 'Teacher approvals are required for high-stakes grade actions.',
        }}
        heading="Teacher Dashboard"
        subheading="Classroom Operations • Screen 13 / 47"
        topBadges={teacherBadges}
        contextText="Teacher / Adviser • Classroom Operations • Scope: Assigned Sections"
        contextNotice="Teacher approvals are required for high-stakes grade actions."
      >
        <div className="row">
          <div className="col-lg-8">
            <div className="d-flex align-items-start justify-content-between" style={{ gap: '16px' }}>
              <div>
                <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Teacher Dashboard</h1>
                <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Daily classroom operations overview: attendance completeness, grade updates, progress concerns, and pending reports.</p>
              </div>
            </div>

            <div className="d-flex flex-wrap" style={{ gap: '10px', marginBottom: '18px' }}>
              <span className="pill pill-green">Online</span>
              <span className="pill pill-gray">Last refresh: 10:44 AM</span>
              <span className="pill pill-gray">Active classes: 3</span>
            </div>

            <div className="row" style={{ marginBottom: '20px' }}>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="stat-card">
                  <div className="stat-kpi">97%</div>
                  <div className="stat-label">Attendance submitted</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="stat-card">
                  <div className="stat-kpi">14</div>
                  <div className="stat-label">Ungraded activities</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="stat-card">
                  <div className="stat-kpi">5</div>
                  <div className="stat-label">At-risk learners flagged</div>
                </div>
              </div>
              <div className="col-md-3 col-sm-6 mb-3">
                <div className="stat-card">
                  <div className="stat-kpi">3</div>
                  <div className="stat-label">Pending parent responses</div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="mdi mdi-google-classroom" style={{ color: '#2563EB' }}></i>
                Today&apos;s Class Operations
              </h3>
              <div className="table-responsive" style={{ border: '1px solid #E5E7EB', borderRadius: '12px', overflow: 'hidden' }}>
                <table className="table" style={{ margin: 0, fontSize: '14px' }}>
                  <thead style={{ background: '#F9FAFB' }}>
                    <tr style={{ color: '#4B5563', borderBottom: '1px solid #E5E7EB' }}>
                      <th style={{ padding: '16px', fontWeight: 'bold' }}>Class</th>
                      <th style={{ padding: '16px', fontWeight: 'bold' }}>Attendance</th>
                      <th style={{ padding: '16px', fontWeight: 'bold' }}>Grade Tasks</th>
                      <th style={{ padding: '16px', fontWeight: 'bold' }}>Risk Signals</th>
                      <th style={{ padding: '16px', fontWeight: 'bold' }}>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid #E5E7EB', background: '#FFFFFF' }}>
                      <td style={{ padding: '16px', fontWeight: 'bold', color: '#111827' }}>Grade 8 - Mabini</td>
                      <td style={{ padding: '16px', color: '#4B5563' }}><i className="mdi mdi-account-check-outline text-success me-1"></i> 41 / 42 marked</td>
                      <td style={{ padding: '16px', color: '#4B5563' }}>Quiz 3 pending scoring</td>
                      <td style={{ padding: '16px', color: '#DC2626' }}><i className="mdi mdi-alert-circle-outline me-1"></i> 2 chronic absence alerts</td>
                      <td style={{ padding: '16px' }}><span className="pill" style={{ backgroundColor: '#FEF9C3', color: '#854D0E', padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold', display: 'inline-block' }}>Needs follow-up</span></td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid #E5E7EB', background: '#FFFFFF' }}>
                      <td style={{ padding: '16px', fontWeight: 'bold', color: '#111827' }}>Grade 9 - Luna</td>
                      <td style={{ padding: '16px', color: '#4B5563' }}><i className="mdi mdi-account-check-outline text-success me-1"></i> 39 / 39 marked</td>
                      <td style={{ padding: '16px', color: '#4B5563' }}><i className="mdi mdi-check text-success me-1"></i> No active tasks</td>
                      <td style={{ padding: '16px', color: '#059669' }}><i className="mdi mdi-check-circle-outline me-1"></i> All posted</td>
                      <td style={{ padding: '16px' }}><span className="pill" style={{ backgroundColor: '#DCFCE7', color: '#166534', padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold', display: 'inline-block' }}>On track</span></td>
                    </tr>
                    <tr style={{ background: '#FFFFFF' }}>
                      <td style={{ padding: '16px', fontWeight: 'bold', color: '#111827' }}>Grade 8 - Bonifacio</td>
                      <td style={{ padding: '16px', color: '#4B5563' }}><i className="mdi mdi-account-check-outline text-success me-1"></i> 40 / 40 marked</td>
                      <td style={{ padding: '16px', color: '#B45309' }}><i className="mdi mdi-file-document-edit-outline me-1"></i> Performance task due</td>
                      <td style={{ padding: '16px', color: '#D97706' }}><i className="mdi mdi-alert-outline me-1"></i> 1 behavior incident</td>
                      <td style={{ padding: '16px' }}><span className="pill" style={{ backgroundColor: '#EFF6FF', color: '#1D4ED8', padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold', display: 'inline-block' }}>Monitor</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="info-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className="mdi mdi-format-list-checks" style={{ color: '#2563EB' }}></i>
                Priority Queue
              </h3>
              <div className="d-flex flex-column" style={{ gap: '12px' }}>
                <div style={{ padding: '12px', border: '1px solid #FCA5A5', borderRadius: '12px', background: '#FEF2F2', borderLeft: '4px solid #DC2626' }}>
                  <div style={{ fontWeight: 'bold', color: '#991B1B', fontSize: '14px', marginBottom: '4px' }}>Resolve attendance conflict</div>
                  <div style={{ fontSize: '13px', color: '#7F1D1D' }}>3 records for Grade 8-Mabini need final reconciliation before day-end lock.</div>
                </div>
                <div style={{ padding: '12px', border: '1px solid #FDE047', borderRadius: '12px', background: '#FEF9C3', borderLeft: '4px solid #D97706' }}>
                  <div style={{ fontWeight: 'bold', color: '#92400E', fontSize: '14px', marginBottom: '4px' }}>Grade edit awaiting auth</div>
                  <div style={{ fontSize: '13px', color: '#B45309' }}>Attempted change on Math Q3 requires MFA due to follow-up policy.</div>
                </div>
                <div style={{ padding: '12px', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#F9FAFB', borderLeft: '4px solid #6B7280' }}>
                  <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px', marginBottom: '4px' }}>Parent follow-up intervention</div>
                  <div style={{ fontSize: '13px', color: '#4B5563' }}>Case &ldquo;EWS-7782&rdquo; requires guardian acknowledgement.</div>
                </div>
                <div style={{ padding: '12px', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#F9FAFB', borderLeft: '4px solid #6B7280' }}>
                  <div style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px', marginBottom: '4px' }}>Generate weekly SF export</div>
                  <div style={{ fontSize: '13px', color: '#4B5563' }}>School form batch due by 4:00 PM for division reporting.</div>
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
        title="Teacher Dashboard"
      >
        <p style={{ margin: '8px 0', color: '#374151' }}>Ito ang main workspace ng teacher para sa efficient na classroom management:</p>
        <ul style={{ margin: '12px 0', paddingLeft: '20px', color: '#4B5563', lineHeight: 1.6 }}>
          <li style={{ marginBottom: '6px' }}><strong>Class Health Monitoring:</strong> Real-time visibility sa attendance, grades, at student engagement</li>
          <li style={{ marginBottom: '6px' }}><strong>Priority Alerts:</strong> Automatic notifications para sa at-risk learners at urgent actions</li>
          <li style={{ marginBottom: '6px' }}><strong>Quick Actions:</strong> One-click access sa attendance follow-ups at interventions</li>
          <li style={{ marginBottom: '6px' }}><strong>Lesson Readiness:</strong> Track teaching progress at upcoming activities</li>
          <li style={{ marginBottom: '6px' }}><strong>Daily Operations:</strong> Centralized hub para sa lahat ng teaching workflows</li>
        </ul>
        <p style={{ margin: '8px 0 0', color: '#6B7280', fontStyle: 'italic' }}>Parang &ldquo;command center&rdquo; para mabilis ang decision-making at smooth daily teaching flow.</p>
      </InfoModal>
    </>
  )
}
