import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { headNavSections } from './navigation'

const headBadges = [
  { text: 'Head Teacher / Principal', style: { backgroundColor: '#F5F3FF', color: '#5B21B6', border: '1px solid #DDD6FE', padding: '6px 12px', fontSize: '12px' } },
]

export default function HeadTeacherGradeMonitoringPage() {
  return (
    <DashboardLayout
      activePath="/headteachers/grade-monitoring"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'HT',
        title: 'School Head',
        subtitle: 'Whole-School Monitoring',
        rolePill: 'Head Teacher / Principal',
        securityContext: 'You can monitor grade submissions and finalize changes.',
      }}
      heading="Grade Monitoring"
      subheading="School Management • Academic Records"
      topBadges={headBadges}
      contextText="Head Teacher / Principal • School Management • Scope: Grade Monitoring"
      contextNotice="Monitor teacher compliance for posting quarterly grades."
    >
      <style>{`
        .info-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        .info-card h3 { color: #111827; font-size: 16px; font-weight: 800; margin-bottom: 16px; }

        .pill { display: inline-flex; align-items: center; padding: 6px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; border: 1px solid #E5E7EB; background: #F9FAFB; color: #4B5563; }
        .pill-blue { background: #EFF6FF; color: #2563EB; border-color: #BFDBFE; }
        .pill-yellow { background: #FEF3C7; color: #92400E; border-color: #FDE68A; }
        .pill-green { background: #DCFCE7; color: #166534; border-color: #BBF7D0; }
        .pill-gray { background: #F9FAFB; color: #4B5563; border-color: #E5E7EB; }
        .pill-red { background: #FEF2F2; color: #991B1B; border-color: #FECACA; }

        .table-modern { width: 100%; border-collapse: separate; border-spacing: 0; }
        .table-modern thead th { font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: #6B7280; font-weight: 800; padding: 12px 12px; border-bottom: 1px solid #E5E7EB; text-align: left; }
        .table-modern tbody td { font-size: 13px; color: #111827; padding: 12px 12px; border-bottom: 1px solid #F3F4F6; vertical-align: middle; }
        .table-modern tbody tr:last-child td { border-bottom: none; }

        .btn-pill { border-radius: 10px; font-weight: 800; font-size: 12px; padding: 8px 12px; cursor: pointer; }
      `}</style>

      <div className="row">
        <div className="col-lg-8">
          <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Grade Monitoring</h1>
          <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Oversee school-wide grade submissions, monitor teacher posting compliance, and review pending grade changes.</p>

          <div className="info-card">
            <div className="d-flex flex-wrap align-items-center" style={{ gap: '10px', marginBottom: '14px' }}>
              <span className="pill pill-gray"><i className="mdi mdi-school" style={{ marginRight: '6px' }}></i>Scope: School 0472</span>
              <span className="pill pill-gray"><i className="mdi mdi-calendar" style={{ marginRight: '6px' }}></i>Quarter: Q3</span>
              <span className="pill pill-blue"><i className="mdi mdi-lock" style={{ marginRight: '6px' }}></i>Audit Trail Active</span>
              <span className="pill pill-yellow"><i className="mdi mdi-alert-circle-outline" style={{ marginRight: '6px' }}></i>12 Sections Pending</span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className="table-modern">
                <thead>
                  <tr>
                    <th style={{ minWidth: '160px' }}>Department / Grade</th>
                    <th>Teacher Compliance</th>
                    <th>Pending Changes</th>
                    <th>Overall Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div style={{ fontWeight: 800, color: '#111827' }}>Grade 7</div>
                      <div style={{ fontSize: '12px', color: '#6B7280' }}>8 Sections</div>
                    </td>
                    <td>100% Posted</td>
                    <td>0</td>
                    <td><span className="pill pill-green">Finalized</span></td>
                    <td><button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827' }}>View</button></td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ fontWeight: 800, color: '#111827' }}>Grade 8</div>
                      <div style={{ fontSize: '12px', color: '#6B7280' }}>8 Sections</div>
                    </td>
                    <td>6/8 Posted</td>
                    <td>2 requests</td>
                    <td><span className="pill pill-yellow">Awaiting Teachers</span></td>
                    <td><button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827' }}>Follow-up</button></td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ fontWeight: 800, color: '#111827' }}>Grade 9</div>
                      <div style={{ fontSize: '12px', color: '#6B7280' }}>8 Sections</div>
                    </td>
                    <td>2/8 Posted</td>
                    <td>0</td>
                    <td><span className="pill pill-red">Needs Action</span></td>
                    <td><button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827' }}>Follow-up</button></td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ fontWeight: 800, color: '#111827' }}>Grade 10</div>
                      <div style={{ fontSize: '12px', color: '#6B7280' }}>8 Sections</div>
                    </td>
                    <td>8/8 Posted</td>
                    <td>1 request</td>
                    <td><span className="pill pill-blue">Review Requested</span></td>
                    <td><button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827' }}>Review</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="info-card">
            <h3>Grade Change Requests</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '12px', border: '1px solid #FDE68A', borderRadius: '12px', background: '#FFFBEB' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#92400E' }}>Grade 10 - Rizal • Maria Santos</div>
                <div style={{ fontSize: '12px', color: '#B45309' }}>Requested to unlock Quarter 2 grades for 2 students due to late submission of requirements.</div>
                <button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827', marginTop: '8px', padding: '4px 10px' }}>Review Request</button>
              </div>
              <div style={{ padding: '12px', border: '1px solid #FDE68A', borderRadius: '12px', background: '#FFFBEB' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#92400E' }}>Grade 8 - Bonifacio • Juan Dela Cruz</div>
                <div style={{ fontSize: '12px', color: '#B45309' }}>Needs to override grade for 1 student.</div>
                <button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827', marginTop: '8px', padding: '4px 10px' }}>Review Request</button>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Policy & Compliance</h3>
            <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#111827', marginBottom: '6px' }}><i className="mdi mdi-shield-alert-outline" style={{ marginRight: '6px' }}></i>Deadline approaching</div>
              <div style={{ fontSize: '12px', color: '#4B5563' }}>Quarter 3 grades must be finalized and submitted to SDO by end of the week. 12 sections remaining.</div>
            </div>
          </div>

          <div className="info-card">
            <h3>Actions</h3>
            <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
              <button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827', width: '100%' }}>Send School-Wide Reminder</button>
              <button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827', width: '100%' }}>Export Missing Submissions</button>
              <button className="btn-pill" style={{ background: '#5B21B6', border: 'none', color: '#FFFFFF', width: '100%' }}>Finalize & Publish to SDO</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
