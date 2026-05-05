import { useEffect, useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import InfoModal from '../../components/InfoModal'
import { parentNavSections } from './navigation'

const parentBadges = [
  { text: 'Parent / Guardian', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Linked Learners Only', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'SY 2025-2026 • Q3', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Sync: Synced', style: { backgroundColor: '#DCFCE7', color: '#166534', border: '1px solid #BBF7D0', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Alerts (5)', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

export default function ParentsPage() {
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
        activePath="/parents"
        roleNavSections={parentNavSections}
        profile={{
          badgeCode: 'P7',
          title: 'Guardian Account',
          subtitle: 'Linked Learners Only',
          rolePill: 'Parent / Guardian',
          securityContext: 'Guardian-student linkage and consent policies are active.',
        }}
        heading="Parent Dashboard"
        subheading="Parent Experience • Screen 39 / 47"
        topBadges={parentBadges}
        contextText="Parent / Guardian • Parent Experience • Scope: Linked Learners Only"
        contextNotice="Guardian-student linkage and consent policies are active."
      >
        <div className="row">
          <div className="col-lg-3">
            <div className="info-card" style={{ padding: '16px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#6B7280', marginBottom: '6px' }}>Guardian Account</div>
              <div style={{ fontSize: '14px', fontWeight: 800, color: '#111827', marginBottom: '2px' }}>Maria Dela Cruz</div>
              <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>Division NCR-Q • School 0472</div>
              <div className="d-flex flex-wrap" style={{ gap: '8px' }}>
                <span className="pill pill-blue">Guardian-Link Verified</span>
              </div>
            </div>

            <div className="info-card" style={{ padding: '12px' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button className="btn btn-sm btn-pill" style={{ textAlign: 'left', background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#2563EB' }}>Dashboard</button>
                <button className="btn btn-sm btn-pill" style={{ textAlign: 'left', background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#4B5563' }}>Messages</button>
                <button className="btn btn-sm btn-pill" style={{ textAlign: 'left', background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#4B5563' }}>Critical Alerts</button>
                <button className="btn btn-sm btn-pill" style={{ textAlign: 'left', background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#4B5563' }}>Consent Controls</button>
                <button className="btn btn-sm btn-pill" style={{ textAlign: 'left', background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#4B5563' }}>Language & Accessibility</button>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Parent Dashboard</h1>
            <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Track attendance, learning progress, and intervention updates for linked learners with actionable notifications.</p>

            <div className="row" style={{ marginBottom: '16px' }}>
              <div className="col-md-3 col-6 mb-3">
                <div className="kpi-card">
                  <div className="kpi-value">2</div>
                  <div className="kpi-label">Linked learners</div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="kpi-card">
                  <div className="kpi-value">95%</div>
                  <div className="kpi-label">Attendance this week</div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="kpi-card">
                  <div className="kpi-value">3</div>
                  <div className="kpi-label">Unread school messages</div>
                </div>
              </div>
              <div className="col-md-3 col-6 mb-3">
                <div className="kpi-card">
                  <div className="kpi-value">1</div>
                  <div className="kpi-label">Critical alert to acknowledge</div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="mdi mdi-account-child-outline" style={{ color: '#2563EB' }}></i>Linked Learner Snapshot</h3>
              <div className="list-row" style={{ padding: '16px', border: '1px solid #E5E7EB', borderRadius: '12px', marginBottom: '12px', background: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', width: '100%' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#DBEAFE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#1D4ED8', fontWeight: 'bold' }}>JD</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <div className="list-title" style={{ fontSize: '15px', fontWeight: 'bold', color: '#111827' }}>Juan Dela Cruz</div>
                      <span className="pill" style={{ backgroundColor: '#FEF9C3', color: '#854D0E', padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold' }}>Needs follow-up</span>
                    </div>
                    <div style={{ fontSize: '13px', color: '#4B5563', marginBottom: '4px' }}>Grade 8-Mabini • Adviser: Mr. Santos</div>
                    <div className="list-sub" style={{ fontSize: '13px', color: '#DC2626', display: 'flex', alignItems: 'center', gap: '4px' }}><i className="mdi mdi-alert-circle-outline"></i>Attendance trend: 1 absence this week.</div>
                  </div>
                </div>
              </div>
              
              <div className="list-row" style={{ padding: '16px', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#FFFFFF' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', width: '100%' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#D1FAE5', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#047857', fontWeight: 'bold' }}>AD</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <div className="list-title" style={{ fontSize: '15px', fontWeight: 'bold', color: '#111827' }}>Ana Dela Cruz</div>
                      <span className="pill" style={{ backgroundColor: '#DCFCE7', color: '#166534', padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold' }}>On track</span>
                    </div>
                    <div style={{ fontSize: '13px', color: '#4B5563', marginBottom: '4px' }}>Grade 5-Rizal • Adviser: Ms. Reyes</div>
                    <div className="list-sub" style={{ fontSize: '13px', color: '#059669', display: 'flex', alignItems: 'center', gap: '4px' }}><i className="mdi mdi-check-circle-outline"></i>All assignments on time; no active intervention case.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="mdi mdi-bullhorn-outline" style={{ color: '#2563EB' }}></i>Latest School Communications</h3>
              <div className="list-row" style={{ padding: '12px 0', borderBottom: '1px solid #F3F4F6' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <div className="list-title" style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px' }}>Class Adviser Message</div>
                    <span className="pill" style={{ backgroundColor: '#DBEAFE', color: '#1D4ED8', padding: '2px 8px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold' }}>Today</span>
                  </div>
                  <div className="list-sub" style={{ fontSize: '13px', color: '#4B5563' }}>Quarter 3 grading schedule reminder.</div>
                </div>
              </div>
              <div className="list-row" style={{ padding: '12px 0', borderBottom: '1px solid #F3F4F6' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <div className="list-title" style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px' }}>Registrar Advisory</div>
                    <span className="pill" style={{ backgroundColor: '#F3F4F6', color: '#4B5563', padding: '2px 8px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold' }}>2 days ago</span>
                  </div>
                  <div className="list-sub" style={{ fontSize: '13px', color: '#4B5563' }}>Enrollment record now finalized for SY 2026.</div>
                </div>
              </div>
              <div className="list-row" style={{ padding: '12px 0' }}>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                    <div className="list-title" style={{ fontWeight: 'bold', color: '#111827', fontSize: '14px' }}>Guidance Office Notice</div>
                    <span className="pill" style={{ backgroundColor: '#F3F4F6', color: '#4B5563', padding: '2px 8px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold' }}>This week</span>
                  </div>
                  <div className="list-sub" style={{ fontSize: '13px', color: '#4B5563' }}>Parent orientation invite for intervention policy updates.</div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="info-card">
              <h3 style={{ display: 'flex', alignItems: 'center', gap: '8px' }}><i className="mdi mdi-bell-alert-outline" style={{ color: '#D97706' }}></i>Actionable Alerts</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div style={{ padding: '12px', border: '1px solid #FDE047', borderRadius: '12px', background: '#FEF9C3' }}>
                  <div className="list-title" style={{ fontWeight: 'bold', color: '#92400E', fontSize: '14px' }}>Unexplained absence (Juan)</div>
                  <div className="list-sub" style={{ fontSize: '13px', color: '#B45309', margin: '4px 0 8px 0' }}>Acknowledge and provide reason to class adviser.</div>
                  <div><span className="pill" style={{ backgroundColor: '#CA8A04', color: '#FFFFFF', padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-block' }}>Action required</span></div>
                </div>
                <div style={{ padding: '12px', border: '1px solid #BFDBFE', borderRadius: '12px', background: '#EFF6FF' }}>
                  <div className="list-title" style={{ fontWeight: 'bold', color: '#1E40AF', fontSize: '14px' }}>Math remediation session</div>
                  <div className="list-sub" style={{ fontSize: '13px', color: '#1D4ED8', margin: '4px 0 8px 0' }}>Confirm attendance for Saturday support class.</div>
                  <div><span className="pill" style={{ backgroundColor: '#2563EB', color: '#FFFFFF', padding: '4px 10px', borderRadius: '999px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer', display: 'inline-block' }}>Respond soon</span></div>
                </div>
              </div>
            </div>

            <div className="info-card">
              <h3>Quick Actions</h3>
              <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
                <button className="btn btn-sm btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827' }}>Open Messages</button>
                <button className="btn btn-sm btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827' }}>Acknowledge Alerts</button>
                <button className="btn btn-sm btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827' }}>Update Preferences</button>
                <button className="btn btn-sm btn-pill" style={{ background: '#1E3A8A', border: 'none', color: '#FFFFFF' }}>Confirm Intervention Plan</button>
              </div>
            </div>
          </div>
        </div>
      </DashboardLayout>

      <InfoModal
        isOpen={isInfoModalOpen}
        onToggle={() => setIsInfoModalOpen((value) => !value)}
        onClose={() => setIsInfoModalOpen(false)}
        iconClass="mdi mdi-account-group"
        title="Parent Dashboard"
      >
        <p style={{ margin: '8px 0', color: '#374151' }}>This page helps parents/guardians monitor learner progress, attendance, at important notices in one place:</p>
        <ul style={{ margin: '12px 0', paddingLeft: '20px', color: '#4B5563', lineHeight: 1.6 }}>
          <li style={{ marginBottom: '6px' }}><strong>Progress Monitoring:</strong> Makikita dito ang summary ng grades/behavior signals ng learner</li>
          <li style={{ marginBottom: '6px' }}><strong>Attendance Tracking:</strong> Real-time updates sa attendance at absences ng anak</li>
          <li style={{ marginBottom: '6px' }}><strong>Important Notices:</strong> Centralized view para sa lahat ng school announcements</li>
          <li style={{ marginBottom: '6px' }}><strong>Follow-up Needs:</strong> Quick identification kung may kailangan i-follow up sa adviser</li>
          <li style={{ marginBottom: '6px' }}><strong>Transparency Portal:</strong> Updated si parent kahit wala sa school premises</li>
        </ul>
        <p style={{ margin: '8px 0 0', color: '#6B7280', fontStyle: 'italic' }}>Purpose nito ay transparency para maging proactive ang parent involvement sa learning journey ng anak.</p>
      </InfoModal>
    </>
  )
}
