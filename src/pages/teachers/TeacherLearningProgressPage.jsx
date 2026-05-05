import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { teacherNavSections } from './navigation'

const teacherBadges = [
  { text: 'Student', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'SY 2025-2026 • Q3', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'On Track', style: { backgroundColor: '#DCFCE7', color: '#166534', border: '1px solid #BBF7D0', padding: '6px 12px', fontSize: '12px' } },
]

export default function TeacherLearningProgressPage() {
  return (
    <DashboardLayout
      activePath="/teachers/learning-progress"
      roleNavSections={teacherNavSections}
      profile={{
        badgeCode: 'ST',
        title: 'Learner Session',
        subtitle: 'My Learning Progress',
        rolePill: 'Student'
      }}
      heading="Learning Progress"
      subheading="SY 2025-2026 • Q3 • Juan Dela Cruz"
      topBadges={teacherBadges}
      contextText="Student • Learning Progress • Scope: Assigned Classes and Lessons"
      contextNotice="Progress is computed from completed scenes and checkpoint scores."
    >
      <style>{`
        .stat-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        .stat-value { font-size: 32px; font-weight: 800; color: #111827; line-height: 1; margin-bottom: 4px; }
        .stat-label { font-size: 12px; color: #6B7280; font-weight: 500; }
        .stat-change { font-size: 11px; font-weight: 700; margin-top: 6px; }

        .progress-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        .progress-card h3 { color: #111827; font-size: 15px; font-weight: 700; margin-bottom: 16px; }
        .subject-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid #F3F4F6; }
        .subject-row:last-child { border-bottom: none; padding-bottom: 0; }
        .subject-icon { width: 36px; height: 36px; border-radius: 10px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .bar-track { flex: 1; background: #F3F4F6; border-radius: 6px; height: 8px; overflow: hidden; }
        .bar-fill { height: 100%; border-radius: 6px; }

        .activity-row { display: flex; align-items: center; gap: 12px; padding: 12px 0; border-bottom: 1px solid #F3F4F6; }
        .activity-row:last-child { border-bottom: none; }
        .activity-icon { width: 34px; height: 34px; border-radius: 10px; display: flex; align-items: center; justify-content: center; font-size: 16px; flex-shrink: 0; }
        .pill { padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: 700; }
        .pill-green { background: #DCFCE7; color: #166534; }
        .pill-blue { background: #EFF6FF; color: #2563EB; }
        .pill-yellow { background: #FEF3C7; color: #92400E; }
        .pill-gray { background: #F3F4F6; color: #4B5563; }

        .competency-item { display: flex; justify-content: space-between; align-items: center; padding: 10px 0; border-bottom: 1px dashed #E5E7EB; font-size: 13px; }
        .competency-item:last-child { border-bottom: none; }
      `}</style>

      <h1 style={{ color: '#111827', fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>My Learning Progress</h1>
      <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '24px' }}>Track your lesson completion, checkpoint scores, and competency coverage across all assigned subjects.</p>

      {/* Stats row */}
      <div className="row mb-4">
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <div className="stat-card">
            <div className="stat-value" style={{ color: '#2563EB' }}>38%</div>
            <div className="stat-label">Overall Completion</div>
            <div className="stat-change" style={{ color: '#16A34A' }}><i className="mdi mdi-trending-up"></i> +12% this week</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <div className="stat-card">
            <div className="stat-value">47</div>
            <div className="stat-label">Scenes Completed</div>
            <div className="stat-change" style={{ color: '#16A34A' }}><i className="mdi mdi-trending-up"></i> +8 since last week</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <div className="stat-card">
            <div className="stat-value" style={{ color: '#16A34A' }}>84%</div>
            <div className="stat-label">Avg. Checkpoint Score</div>
            <div className="stat-change" style={{ color: '#D97706' }}><i className="mdi mdi-minus"></i> Same as last week</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="stat-card">
            <div className="stat-value">6h 42m</div>
            <div className="stat-label">Time on Platform</div>
            <div className="stat-change" style={{ color: '#16A34A' }}><i className="mdi mdi-trending-up"></i> +1h 20m this week</div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Left column */}
        <div className="col-lg-7 mb-4">
          <div className="progress-card">
            <h3>Progress by Subject</h3>
            <div className="subject-row">
              <div className="subject-icon" style={{ background: '#EFF6FF' }}><i className="mdi mdi-calculator" style={{ color: '#2563EB', fontSize: '18px' }}></i></div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600, color: '#111827', marginBottom: '6px' }}>
                  <span>Mathematics 10</span><span style={{ color: '#2563EB' }}>52%</span>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{ width: '52%', background: '#2563EB' }}></div></div>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '4px' }}>6 / 12 scenes — Lesson 3 in progress</div>
              </div>
            </div>
            <div className="subject-row">
              <div className="subject-icon" style={{ background: '#F0FDFA' }}><i className="mdi mdi-earth" style={{ color: '#0891B2', fontSize: '18px' }}></i></div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600, color: '#111827', marginBottom: '6px' }}>
                  <span>Araling Panlipunan 10</span><span style={{ color: '#0891B2' }}>33%</span>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{ width: '33%', background: '#0891B2' }}></div></div>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '4px' }}>4 / 12 scenes — Lesson 2 in progress</div>
              </div>
            </div>
            <div className="subject-row">
              <div className="subject-icon" style={{ background: '#F0FDF4' }}><i className="mdi mdi-flask" style={{ color: '#059669', fontSize: '18px' }}></i></div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600, color: '#111827', marginBottom: '6px' }}>
                  <span>Science 10</span><span style={{ color: '#059669' }}>25%</span>
                </div>
                <div className="bar-track"><div className="bar-fill" style={{ width: '25%', background: '#059669' }}></div></div>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '4px' }}>3 / 12 scenes — Lesson 1 completed</div>
              </div>
            </div>
          </div>

          <div className="progress-card">
            <h3>Recent Activity</h3>
            <div className="activity-row">
              <div className="activity-icon" style={{ background: '#EFF6FF' }}><i className="mdi mdi-play-circle" style={{ color: '#2563EB' }}></i></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>Completed Scene 5 — Solving One-Variable Eq.</div>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>Mathematics 10 — Lesson 3 — Today, 10:35 AM</div>
              </div>
              <span className="pill pill-green">Passed</span>
            </div>
            <div className="activity-row">
              <div className="activity-icon" style={{ background: '#DCFCE7' }}><i className="mdi mdi-check-circle" style={{ color: '#16A34A' }}></i></div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '13px', fontWeight: 600, color: '#111827' }}>Checkpoint: Properties of Equality — 90%</div>
                <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '2px' }}>Mathematics 10 — Scene 4 — Yesterday, 3:12 PM</div>
              </div>
              <span className="pill pill-green">90%</span>
            </div>
          </div>
        </div>

        {/* Right column */}
        <div className="col-lg-5">
          <div className="progress-card mb-4">
            <h3>Checkpoint Scores</h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '12px 0 16px' }}>
              <div style={{ fontSize: '48px', fontWeight: 800, color: '#2563EB' }}>84%</div>
              <div style={{ fontSize: '13px', color: '#6B7280', fontWeight: 500 }}>Average across 12 checkpoints</div>
              <div style={{ marginTop: '12px', display: 'flex', gap: '16px' }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#16A34A' }}>9</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>Passed</div>
                </div>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '18px', fontWeight: 800, color: '#D97706' }}>2</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>Retried</div>
                </div>
              </div>
            </div>
            <div style={{ background: '#F3F4F6', borderRadius: '8px', height: '8px', overflow: 'hidden', marginBottom: '8px' }}>
              <div style={{ background: 'linear-gradient(90deg,#2563EB,#3B82F6)', width: '84%', height: '100%', borderRadius: '8px' }}></div>
            </div>
          </div>

          <div className="progress-card mb-4">
            <h3>Competency Coverage — Mathematics 10</h3>
            <div className="competency-item">
              <span style={{ color: '#374151', fontWeight: 500 }}>Patterns and Algebra</span>
              <span className="pill pill-green">Covered</span>
            </div>
            <div className="competency-item">
              <span style={{ color: '#374151', fontWeight: 500 }}>Linear Equations</span>
              <span className="pill pill-blue">In Progress</span>
            </div>
            <div className="competency-item">
              <span style={{ color: '#374151', fontWeight: 500 }}>Quadratic Equations</span>
              <span className="pill pill-gray">Not Started</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
