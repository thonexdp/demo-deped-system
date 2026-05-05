import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { teacherNavSections } from './navigation'

const teacherBadges = [
  { text: 'Teacher / Adviser', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Assigned Sections', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'SY 2025-2026 • Q3', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Sync: Pending', style: { backgroundColor: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
]

export default function TeacherGradebookPage() {
  return (
    <DashboardLayout
      activePath="/teachers/gradebook"
      roleNavSections={teacherNavSections}
      profile={{
        badgeCode: 'T7',
        title: 'Class Adviser',
        subtitle: 'Assigned Sections',
        rolePill: 'Teacher / Adviser',
        securityContext: 'Teacher approvals are required for high-stakes grade actions.',
      }}
      heading="Gradebook"
      subheading="Classroom Operations • Screen 15 / 47"
      topBadges={teacherBadges}
      contextText="Teacher / Adviser • Classroom Operations • Scope: Assigned Sections"
      contextNotice="Teacher approvals are required for high-stakes grade actions."
    >
      <style>{`
        .info-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        .info-card h3 { color: #111827; font-size: 16px; font-weight: 800; margin-bottom: 16px; }

        .pill { display: inline-flex; align-items: center; padding: 6px 12px; border-radius: 999px; font-size: 12px; font-weight: 700; border: 1px solid #E5E7EB; background: #F9FAFB; color: #4B5563; }
        .pill-blue { background: #EFF6FF; color: #2563EB; border-color: #BFDBFE; }
        .pill-yellow { background: #FEF3C7; color: #92400E; border-color: #FDE68A; }
        .pill-green { background: #DCFCE7; color: #166534; border-color: #BBF7D0; }
        .pill-gray { background: #F9FAFB; color: #4B5563; border-color: #E5E7EB; }

        .table-modern { width: 100%; border-collapse: separate; border-spacing: 0; }
        .table-modern thead th { font-size: 11px; letter-spacing: 0.06em; text-transform: uppercase; color: #6B7280; font-weight: 800; padding: 12px 12px; border-bottom: 1px solid #E5E7EB; text-align: left; }
        .table-modern tbody td { font-size: 13px; color: #111827; padding: 12px 12px; border-bottom: 1px solid #F3F4F6; vertical-align: middle; }
        .table-modern tbody tr:last-child td { border-bottom: none; }

        .score-chip { display: inline-flex; align-items: center; justify-content: center; min-width: 42px; height: 26px; padding: 0 10px; border-radius: 8px; background: #F9FAFB; border: 1px solid #E5E7EB; font-size: 12px; font-weight: 800; color: #111827; }
        .score-chip.editable { background: #FFFFFF; }
        .score-input { width: 64px; height: 30px; border: 1px solid #E5E7EB; border-radius: 10px; padding: 0 10px; font-size: 12px; font-weight: 700; color: #111827; outline: none; }
        .score-input:focus { border-color: #BFDBFE; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }

        .btn-pill { border-radius: 10px; font-weight: 800; font-size: 12px; padding: 8px 12px; cursor: pointer; }
      `}</style>

      <div className="row">
        <div className="col-lg-8">
          <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Gradebook</h1>
          <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Configure weighted assessment categories, post grades, and keep immutable edit history for compliance.</p>

          <div className="info-card">
            <div className="d-flex flex-wrap align-items-center" style={{ gap: '10px', marginBottom: '14px' }}>
              <span className="pill pill-gray"><i className="mdi mdi-school" style={{ marginRight: '6px' }}></i>Class: Grade 8 - Mabini</span>
              <span className="pill pill-gray"><i className="mdi mdi-calendar" style={{ marginRight: '6px' }}></i>Quarter: Q3</span>
              <span className="pill pill-blue"><i className="mdi mdi-lock" style={{ marginRight: '6px' }}></i>Audit Trail Active</span>
              <span className="pill pill-yellow"><i className="mdi mdi-alert-circle-outline" style={{ marginRight: '6px' }}></i>1 policy gate</span>
            </div>

            <div className="d-flex flex-wrap" style={{ gap: '10px', marginBottom: '14px' }}>
              <span className="pill pill-gray">Written Work: 30%</span>
              <span className="pill pill-gray">Performance Tasks: 50%</span>
              <span className="pill pill-gray">Quarter Exam: 20%</span>
            </div>

            <div style={{ overflowX: 'auto' }}>
              <table className="table-modern">
                <thead>
                  <tr>
                    <th style={{ minWidth: '180px' }}>Learner</th>
                    <th>WW1</th>
                    <th>WW2</th>
                    <th>PT1</th>
                    <th>Exam</th>
                    <th>Final Grade</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div style={{ fontWeight: 800, color: '#111827' }}>Juan Dela Cruz</div>
                      <div style={{ fontSize: '12px', color: '#6B7280' }}>LRN: 123-456-789-001</div>
                    </td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="88" aria-label="Juan Dela Cruz WW1" /></td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="86" aria-label="Juan Dela Cruz WW2" /></td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="90" aria-label="Juan Dela Cruz PT1" /></td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="87" aria-label="Juan Dela Cruz Exam" /></td>
                    <td><span className="score-chip">88.6</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ fontWeight: 800, color: '#111827' }}>Ana Reyes</div>
                      <div style={{ fontSize: '12px', color: '#6B7280' }}>LRN: 123-456-789-002</div>
                    </td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="92" aria-label="Ana Reyes WW1" /></td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="94" aria-label="Ana Reyes WW2" /></td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="91" aria-label="Ana Reyes PT1" /></td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="90" aria-label="Ana Reyes Exam" /></td>
                    <td><span className="score-chip">91.7</span></td>
                  </tr>
                  <tr>
                    <td>
                      <div style={{ fontWeight: 800, color: '#111827' }}>Paolo Mendoza</div>
                      <div style={{ fontSize: '12px', color: '#6B7280' }}>LRN: 123-456-789-003</div>
                    </td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="79" aria-label="Paolo Mendoza WW1" /></td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="81" aria-label="Paolo Mendoza WW2" /></td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="78" aria-label="Paolo Mendoza PT1" /></td>
                    <td><input className="score-input" type="number" min="0" max="100" defaultValue="76" aria-label="Paolo Mendoza Exam" /></td>
                    <td><span className="score-chip">78.4</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="info-card">
            <h3>Grade Edit Audit Trail</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <div style={{ padding: '12px', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#FFFFFF' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#111827' }}>10:41 AM • Maria Santos</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>Changed WW2 for Juan Dela Cruz: 84 → 86 (reason: verified answer key correction)</div>
              </div>
              <div style={{ padding: '12px', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#FFFFFF' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#111827' }}>10:28 AM • Maria Santos</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>Posted PT1 batch scores for 42 learners</div>
              </div>
              <div style={{ padding: '12px', border: '1px solid #E5E7EB', borderRadius: '12px', background: '#FFFFFF' }}>
                <div style={{ fontSize: '12px', fontWeight: 800, color: '#111827' }}>09:50 AM • System</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>Generated grade calculation snapshot for Quarter 3</div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>Policy Gate</h3>
            <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '12px', padding: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: 800, color: '#92400E', marginBottom: '6px' }}><i className="mdi mdi-shield-alert-outline" style={{ marginRight: '6px' }}></i>Step-up auth required</div>
              <div style={{ fontSize: '12px', color: '#92400E' }}>Finalizing grade changes requires step-up authentication and a mandatory reason code.</div>
            </div>
          </div>

          <div className="info-card">
            <h3>Actions</h3>
            <div className="d-flex flex-wrap" style={{ gap: '10px' }}>
              <button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827' }}>Save Draft Scores</button>
              <button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827' }}>Validate Weight Rules</button>
              <button className="btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#111827' }}>Export Grade Sheet</button>
              <button className="btn-pill" style={{ background: '#1E3A8A', border: 'none', color: '#FFFFFF' }}>Publish Grades</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
