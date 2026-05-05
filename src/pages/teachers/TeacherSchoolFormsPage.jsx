import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { teacherNavSections } from './navigation'

const teacherBadges = [
  { text: 'SY 2025-2026 • Q3', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Status: Draft', style: { backgroundColor: '#DCFCE7', color: '#166534', border: '1px solid #BBF7D0', padding: '6px 12px', fontSize: '12px' } },
  { text: 'For Adviser Sign-off', style: { backgroundColor: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
]

export default function TeacherSchoolFormsPage() {
  const [activeTab, setActiveTab] = useState('sf1')

  return (
    <DashboardLayout
      activePath="/teachers/school-forms"
      roleNavSections={teacherNavSections}
      profile={{
        badgeCode: 'T7',
        title: 'Class Adviser',
        subtitle: 'Assigned Sections',
        rolePill: 'Teacher / Adviser',
        securityContext: 'School forms are controlled and audit-ready (adviser and admin sign-offs).',
      }}
      heading="School Forms"
      subheading="School Operations • Screen 29 / 47"
      topBadges={teacherBadges}
      contextText="Teacher / Adviser • School Operations • Scope: School Forms"
      contextNotice="Notifications, sync, and policy status remain visible in every workspace."
    >
      <style>{`
        .info-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        .info-card h3 { color: #111827; font-size: 16px; font-weight: 800; margin-bottom: 16px; }

        .pill { display: inline-block; padding: 6px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; border: 1px solid #E5E7EB; background: #F9FAFB; color: #4B5563; }
        .pill-blue { background: #EFF6FF; color: #2563EB; border-color: #BFDBFE; }
        .pill-green { background: #DCFCE7; color: #166534; border-color: #BBF7D0; }
        .pill-yellow { background: #FEF3C7; color: #92400E; border-color: #FDE68A; }
        .pill-gray { background: #F9FAFB; color: #4B5563; border-color: #E5E7EB; }

        .table-modern { width: 100%; border-collapse: separate; border-spacing: 0; }
        .table-modern thead th { font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: #6B7280; font-weight: 800; padding: 12px 12px; border-bottom: 1px solid #E5E7EB; text-align: left; }
        .table-modern tbody td { font-size: 13px; color: #111827; padding: 12px 12px; border-bottom: 1px solid #F3F4F6; vertical-align: middle; }
        .table-modern tbody tr:last-child td { border-bottom: none; }

        .tab-labels { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
        .tab-label { cursor: pointer; user-select: none; display: inline-flex; align-items: center; gap: 8px; padding: 10px 12px; border-radius: 12px; border: 1px solid #E5E7EB; background: #FFFFFF; color: #374151; font-weight: 800; font-size: 12px; }
        .tab-label:hover { background: #F9FAFB; }
        .tab-label.active { background: #EFF6FF; border-color: #BFDBFE; color: #1D4ED8; }

        .btn-pill { border-radius: 10px; font-weight: 800; font-size: 12px; padding: 8px 12px; cursor: pointer; border: 1px solid transparent; }
      `}</style>

      <div className="d-flex align-items-center" style={{ gap: '10px', marginBottom: '24px', justifyContent: 'flex-end' }}>
        <button className="btn-pill" style={{ background: '#FFFFFF', borderColor: '#E5E7EB', color: '#111827' }}><i className="mdi mdi-printer" style={{ marginRight: '6px' }}></i>Print</button>
        <button className="btn-pill" style={{ background: '#FFFFFF', borderColor: '#E5E7EB', color: '#111827' }}><i className="mdi mdi-file-export" style={{ marginRight: '6px' }}></i>Export</button>
        <button className="btn-pill" style={{ background: '#1D4ED8', color: '#FFFFFF' }}><i className="mdi mdi-check-circle-outline" style={{ marginRight: '6px' }}></i>Submit</button>
      </div>

      <div className="info-card" style={{ marginBottom: '16px' }}>
        <div className="d-flex justify-content-between align-items-center flex-wrap" style={{ gap: '12px' }}>
          <div>
            <h3 style={{ marginBottom: '6px' }}>DepEd School Forms (SF1–SF10)</h3>
            <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600 }}>Select a form tab to view and prepare the required school records.</div>
          </div>
          <div className="d-flex" style={{ gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
            <span className="pill pill-gray">School ID: 123456</span>
            <span className="pill pill-gray">Section: Grade 8 – Rizal</span>
            <span className="pill pill-gray">Adviser: A. Dela Cruz</span>
          </div>
        </div>
      </div>

      <div className="info-card">
        <div className="tab-labels">
          {['sf1', 'sf2', 'sf3', 'sf4', 'sf5', 'sf6', 'sf7', 'sf8', 'sf9', 'sf10'].map(sf => (
            <div 
              key={sf}
              className={`tab-label ${activeTab === sf ? 'active' : ''}`}
              onClick={() => setActiveTab(sf)}
            >
              {sf.toUpperCase()} – {
                sf === 'sf1' ? 'School Register' :
                sf === 'sf2' ? 'Daily Attendance' :
                sf === 'sf3' ? 'Books Issued' :
                sf === 'sf4' ? 'Learner Movement' :
                sf === 'sf5' ? 'Promotion & Progress' :
                sf === 'sf6' ? 'Summary of Promotion' :
                sf === 'sf7' ? 'Personnel Assignment' :
                sf === 'sf8' ? 'Health & Nutrition' :
                sf === 'sf9' ? 'Report Card' :
                'Permanent Record'
              }
            </div>
          ))}
        </div>

        <div className="tab-panels">
          {activeTab === 'sf1' && (
            <div>
              <h3 style={{ marginBottom: '10px' }}>SF1 – School Register</h3>
              <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>Master list of enrolled learners for the section, including basic profile fields and status.</div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table-modern">
                  <thead>
                    <tr>
                      <th>LRN</th>
                      <th>Learner Name</th>
                      <th>Sex</th>
                      <th>Birthdate</th>
                      <th>Address / Barangay</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1234-5678-9012</td>
                      <td>Reyes, Maria L.</td>
                      <td>F</td>
                      <td>2012-05-19</td>
                      <td>Brgy. San Isidro</td>
                      <td><span className="pill pill-green">Enrolled</span></td>
                    </tr>
                    <tr>
                      <td>2234-5678-9012</td>
                      <td>Santos, Joshua P.</td>
                      <td>M</td>
                      <td>2012-11-03</td>
                      <td>Brgy. Maligaya</td>
                      <td><span className="pill pill-yellow">For Validation</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'sf2' && (
            <div>
              <h3 style={{ marginBottom: '10px' }}>SF2 – Daily Attendance</h3>
              <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>Daily attendance matrix and monthly summary. Use this to support early warning and parent follow-ups.</div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table-modern">
                  <thead>
                    <tr>
                      <th>Learner</th>
                      <th>Week 1</th>
                      <th>Week 2</th>
                      <th>Week 3</th>
                      <th>Week 4</th>
                      <th>Monthly Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reyes, Maria L.</td>
                      <td><span className="pill pill-green">5/5</span></td>
                      <td><span className="pill pill-green">5/5</span></td>
                      <td><span className="pill pill-yellow">4/5</span></td>
                      <td><span className="pill pill-green">5/5</span></td>
                      <td><span className="pill pill-blue">19/20</span></td>
                    </tr>
                    <tr>
                      <td>Santos, Joshua P.</td>
                      <td><span className="pill pill-yellow">4/5</span></td>
                      <td><span className="pill pill-yellow">4/5</span></td>
                      <td><span className="pill pill-yellow">4/5</span></td>
                      <td><span className="pill pill-yellow">4/5</span></td>
                      <td><span className="pill pill-yellow">16/20</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'sf3' && (
            <div>
              <h3 style={{ marginBottom: '10px' }}>SF3 – Books Issued</h3>
              <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>Tracks textbooks and learning resource issuance per learner (ID/condition/return).</div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table-modern">
                  <thead>
                    <tr>
                      <th>Learner</th>
                      <th>Book / Material</th>
                      <th>Property No.</th>
                      <th>Date Issued</th>
                      <th>Condition</th>
                      <th>Return Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reyes, Maria L.</td>
                      <td>Math 8 Textbook</td>
                      <td>TXB-8M-1044</td>
                      <td>2026-01-08</td>
                      <td><span className="pill pill-green">Good</span></td>
                      <td><span className="pill pill-blue">Issued</span></td>
                    </tr>
                    <tr>
                      <td>Santos, Joshua P.</td>
                      <td>Math 8 Textbook</td>
                      <td>TXB-8M-1051</td>
                      <td>2026-01-08</td>
                      <td><span className="pill pill-yellow">Worn</span></td>
                      <td><span className="pill pill-blue">Issued</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'sf4' && (
            <div>
              <h3 style={{ marginBottom: '10px' }}>SF4 – Learner Movement</h3>
              <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>Records transfers in/out, dropouts, and re-admissions for audit and reporting.</div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table-modern">
                  <thead>
                    <tr>
                      <th>Learner</th>
                      <th>Movement</th>
                      <th>Date</th>
                      <th>From / To</th>
                      <th>Reason</th>
                      <th>Validated</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>—</td>
                      <td>—</td>
                      <td>—</td>
                      <td>—</td>
                      <td>—</td>
                      <td><span className="pill">None</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'sf5' && (
            <div>
              <h3 style={{ marginBottom: '10px' }}>SF5 – Promotion &amp; Progress</h3>
              <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>Quarterly/annual progress tracker showing who is promoted, retained, or needs intervention.</div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table-modern">
                  <thead>
                    <tr>
                      <th>Learner</th>
                      <th>Gen. Average</th>
                      <th>Remedial Needed</th>
                      <th>Final Status</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reyes, Maria L.</td>
                      <td><span className="pill pill-green">89</span></td>
                      <td><span className="pill">No</span></td>
                      <td><span className="pill pill-green">Promoted</span></td>
                      <td>Ready for next level</td>
                    </tr>
                    <tr>
                      <td>Santos, Joshua P.</td>
                      <td><span className="pill pill-yellow">75</span></td>
                      <td><span className="pill pill-yellow">Yes</span></td>
                      <td><span className="pill pill-yellow">Conditional</span></td>
                      <td>Needs remediation plan</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'sf6' && (
            <div>
              <h3 style={{ marginBottom: '10px' }}>SF6 – Summary of Promotion</h3>
              <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>Section-level summary counts of promoted/retained/conditional learners for reporting.</div>
              <div className="d-flex" style={{ gap: '10px', flexWrap: 'wrap' }}>
                <span className="pill pill-green">Promoted: 38</span>
                <span className="pill pill-yellow">Conditional: 6</span>
                <span className="pill">Retained: 2</span>
                <span className="pill pill-blue">Total: 46</span>
              </div>
            </div>
          )}

          {activeTab === 'sf7' && (
            <div>
              <h3 style={{ marginBottom: '10px' }}>SF7 – Personnel Assignment</h3>
              <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>Lists teacher/personnel assignments (sections/subjects) and workload coverage.</div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table-modern">
                  <thead>
                    <tr>
                      <th>Personnel</th>
                      <th>Role</th>
                      <th>Assigned Sections</th>
                      <th>Subjects</th>
                      <th>Schedule</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A. Dela Cruz</td>
                      <td>Adviser</td>
                      <td>Grade 8 – Rizal</td>
                      <td>Math 8</td>
                      <td>MWF 8:00–9:00</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'sf8' && (
            <div>
              <h3 style={{ marginBottom: '10px' }}>SF8 – Health &amp; Nutrition</h3>
              <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>Tracks height/weight/BMI screening and nutrition program participation for learners.</div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table-modern">
                  <thead>
                    <tr>
                      <th>Learner</th>
                      <th>Height (cm)</th>
                      <th>Weight (kg)</th>
                      <th>BMI</th>
                      <th>Category</th>
                      <th>Program</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Reyes, Maria L.</td>
                      <td>152</td>
                      <td>46</td>
                      <td>19.9</td>
                      <td><span className="pill pill-green">Normal</span></td>
                      <td><span className="pill">—</span></td>
                    </tr>
                    <tr>
                      <td>Santos, Joshua P.</td>
                      <td>150</td>
                      <td>40</td>
                      <td>17.8</td>
                      <td><span className="pill pill-yellow">At Risk</span></td>
                      <td><span className="pill pill-blue">Feeding</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'sf9' && (
            <div>
              <h3 style={{ marginBottom: '10px' }}>SF9 – Report Card</h3>
              <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>Printable quarterly report card view per learner (summary of subjects and remarks).</div>
              <div className="d-flex justify-content-between align-items-center flex-wrap" style={{ gap: '10px', marginBottom: '12px' }}>
                <div className="d-flex" style={{ gap: '8px', flexWrap: 'wrap' }}>
                  <span className="pill pill-gray">Learner: Reyes, Maria L.</span>
                  <span className="pill pill-gray">Quarter: Q3</span>
                </div>
                <span className="pill pill-blue">Ready to Print</span>
              </div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table-modern">
                  <thead>
                    <tr>
                      <th>Subject</th>
                      <th>Grade</th>
                      <th>Remarks</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Mathematics</td>
                      <td><span className="pill pill-green">90</span></td>
                      <td>Outstanding</td>
                    </tr>
                    <tr>
                      <td>English</td>
                      <td><span className="pill pill-green">88</span></td>
                      <td>Very Satisfactory</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'sf10' && (
            <div>
              <h3 style={{ marginBottom: '10px' }}>SF10 – Permanent Record</h3>
              <div style={{ color: '#6B7280', fontSize: '13px', fontWeight: 600, marginBottom: '14px' }}>Longitudinal learner record for transfers and permanent documentation across grade levels.</div>
              <div style={{ overflowX: 'auto' }}>
                <table className="table-modern">
                  <thead>
                    <tr>
                      <th>School Year</th>
                      <th>Grade Level</th>
                      <th>Gen. Average</th>
                      <th>Status</th>
                      <th>Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>2024-2025</td>
                      <td>Grade 7</td>
                      <td><span className="pill pill-green">87</span></td>
                      <td><span className="pill pill-green">Promoted</span></td>
                      <td>Completed</td>
                    </tr>
                    <tr>
                      <td>2025-2026</td>
                      <td>Grade 8</td>
                      <td><span className="pill pill-yellow">Ongoing</span></td>
                      <td><span className="pill pill-blue">In Progress</span></td>
                      <td>Q3 snapshot</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
