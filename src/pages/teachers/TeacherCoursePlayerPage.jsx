import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { teacherNavSections } from './navigation'

const teacherBadges = [
  { text: 'Student', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '4px 10px', fontSize: '11px' } },
  { text: 'Offline-Ready', icon: 'mdi mdi-wifi-off', style: { backgroundColor: '#DCFCE7', color: '#166534', border: '1px solid #BBF7D0', padding: '4px 10px', fontSize: '11px' } },
  { text: '38% complete', style: { backgroundColor: '#F3F4F6', color: '#374151', border: '1px solid #E5E7EB', padding: '4px 10px', fontSize: '11px' } },
]

export default function TeacherCoursePlayerPage() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [audioWidth, setAudioWidth] = useState(42)
  const [feedback, setFeedback] = useState(null)
  const [isAnswered, setIsAnswered] = useState(false)
  const [activeTab, setActiveTab] = useState('scenes')

  const handlePlay = () => setIsPlaying(!isPlaying)
  
  const handleRewind = () => {
    setAudioWidth(Math.max(0, audioWidth - 5))
  }

  const checkAnswer = (isCorrect) => {
    if (isAnswered) return
    setIsAnswered(true)

    if (isCorrect) {
      setFeedback({
        correct: true,
        text: 'Correct! Subtracting 5 from both sides removes the constant and leaves 3x = 15. Now you can divide by 3 to find x = 5.'
      })
    } else {
      setFeedback({
        correct: false,
        text: 'Not quite. Think about which operation undoes the +5. We need to remove it from the left side first — try the other options.'
      })
      setTimeout(() => {
        setIsAnswered(false)
        setFeedback(null)
      }, 2200)
    }
  }

  return (
    <DashboardLayout
      activePath="/teachers/course-player"
      roleNavSections={teacherNavSections}
      profile={{
        badgeCode: 'ST',
        title: 'Learner Session',
        subtitle: 'Mathematics 10',
        rolePill: 'Student'
      }}
      heading="Mathematics 10 — Lesson 3: Linear Equations"
      subheading="Scene 5 of 12 • Practice Mode • SY 2025-2026 Q3"
      topBadges={teacherBadges}
      hideContext={true}
    >
      <style>{`
        /* Minimal custom styles, using inline for specifics */
        .instructor-panel { width: 272px; min-width: 272px; background: linear-gradient(180deg, #1E3A8A 0%, #172a6b 100%); display: flex; flex-direction: column; overflow-y: auto; padding: 24px 20px; flex-shrink: 0; border-radius: 12px; margin-right: 16px; }
        .instructor-avatar { width: 64px; height: 64px; border-radius: 16px; background: rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; font-size: 22px; font-weight: 800; color: white; margin-bottom: 12px; border: 2px solid rgba(255,255,255,0.3); }
        .narration-box { background: rgba(0,0,0,0.2); border: 1px solid rgba(255,255,255,0.12); border-radius: 12px; padding: 14px 16px; margin-top: 16px; }
        
        .teaching-board { flex: 1; overflow-y: auto; background: #FFFFFF; padding: 28px 32px; border: 1px solid #E5E7EB; border-radius: 12px; }
        .scene-label { display: inline-flex; align-items: center; gap: 6px; background: #EFF6FF; color: #2563EB; border: 1px solid #BFDBFE; border-radius: 20px; padding: 4px 14px; font-size: 12px; font-weight: 700; margin-bottom: 14px; }
        .concept-box { background: #FFF7ED; border-left: 4px solid #F59E0B; border-radius: 0 12px 12px 0; padding: 14px 18px; margin-bottom: 24px; }
        .step-block { border: 1px solid #E5E7EB; border-radius: 12px; padding: 16px 20px; margin-bottom: 16px; position: relative; }
        .step-number { position: absolute; top: -12px; left: 16px; background: #1E3A8A; color: white; font-size: 11px; font-weight: 700; padding: 2px 10px; border-radius: 10px; }
        .formula-box { background: #F1F5F9; border: 1px solid #CBD5E1; border-radius: 8px; padding: 12px 16px; font-family: 'Courier New', monospace; font-size: 15px; font-weight: 600; color: #0F172A; margin: 10px 0; line-height: 1.8; }
        
        .choice-btn { display: block; width: 100%; text-align: left; background: white; border: 1.5px solid #E5E7EB; border-radius: 10px; padding: 11px 16px; margin-bottom: 8px; font-size: 14px; cursor: pointer; font-weight: 500; color: #374151; transition: all 0.15s; }
        .choice-btn:hover { border-color: #93C5FD; background: #EFF6FF; color: #1E3A8A; }
        .choice-btn.correct { border-color: #22C55E; background: #DCFCE7; color: #166534; font-weight: 700; }
        .choice-btn.wrong { border-color: #EF4444; background: #FEF2F2; color: #991B1B; }

        .right-panel { width: 288px; min-width: 288px; border: 1px solid #E5E7EB; background: #F9FAFB; display: flex; flex-direction: column; overflow: hidden; flex-shrink: 0; border-radius: 12px; margin-left: 16px; }
        .scene-item { display: flex; align-items: center; gap: 10px; padding: 10px 16px; border-bottom: 1px solid #E5E7EB; font-size: 13px; cursor: pointer; background: white; }
        .scene-item.current { background: #EFF6FF; border-left: 3px solid #2563EB; font-weight: 700; color: #1E3A8A; }
        .scene-dot { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 10px; font-weight: 700; flex-shrink: 0; }
        .scene-dot.done { background: #DCFCE7; color: #166534; }
        .scene-dot.current { background: #2563EB; color: white; }
        .scene-dot.locked { background: #F3F4F6; color: #9CA3AF; }
      `}</style>

      <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }}>
        
        {/* INSTRUCTOR PANEL */}
        <div className="instructor-panel">
          <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', marginBottom: '14px' }}>INSTRUCTOR</div>
          <div className="instructor-avatar">AR</div>
          <div style={{ color: 'white', fontWeight: 700, fontSize: '15px', marginBottom: '2px' }}>Ms. Ana Reyes</div>
          <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '12px', marginBottom: '4px' }}>Mathematics Teacher</div>
          <div style={{ display: 'flex', gap: '6px', marginBottom: '20px' }}>
            <span style={{ background: 'rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.9)', padding: '3px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: 700 }}>Math 10</span>
            <span style={{ background: 'rgba(37,99,235,0.4)', color: '#93C5FD', padding: '3px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: 700 }}>Q3</span>
          </div>

          <div style={{ fontSize: '10px', fontWeight: 700, color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em', marginBottom: '8px' }}>NOW NARRATING</div>
          <div className="narration-box">
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '13px', lineHeight: 1.65, margin: 0 }}>
              "We will now solve a one-variable linear equation step by step. Each step must <strong style={{ color: '#93C5FD' }}>preserve equality</strong> — whatever we do to one side, we must do to the other side."
            </p>
          </div>

          <div style={{ marginTop: '16px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
              <span>0:24</span><span>3:47</span>
            </div>
            <div style={{ background: 'rgba(255,255,255,0.1)', borderRadius: '8px', height: '4px', margin: '10px 0 6px', overflow: 'hidden' }}>
              <div style={{ background: '#60A5FA', height: '100%', width: `${audioWidth}%`, borderRadius: '8px' }}></div>
            </div>
            <div className="d-flex justify-content-center" style={{ gap: '12px', marginTop: '10px' }}>
              <button onClick={handleRewind} style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '50%', width: '34px', height: '34px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="mdi mdi-rewind-10"></i>
              </button>
              <button onClick={handlePlay} style={{ background: 'white', border: 'none', color: '#1E3A8A', borderRadius: '50%', width: '44px', height: '44px', cursor: 'pointer', fontSize: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className={isPlaying ? 'mdi mdi-pause' : 'mdi mdi-play'}></i>
              </button>
              <button style={{ background: 'rgba(255,255,255,0.1)', border: '1px solid rgba(255,255,255,0.2)', color: 'white', borderRadius: '20px', padding: '0 10px', height: '34px', cursor: 'pointer', fontSize: '12px', fontWeight: 700 }}>1×</button>
            </div>
          </div>
        </div>

        {/* TEACHING BOARD */}
        <div className="teaching-board">
          <div className="scene-label">
            <i className="mdi mdi-layers-outline"></i> Scene 5 of 12
          </div>
          <h1 style={{ color: '#111827', fontSize: '26px', fontWeight: 800, marginBottom: '6px' }}>Solving One-Variable Linear Equations</h1>
          <div style={{ display: 'flex', gap: '8px', marginBottom: '24px' }}>
            <span style={{ background: '#F3F4F6', color: '#374151', padding: '3px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: 600 }}>Mathematics 10</span>
            <span style={{ background: '#F3F4F6', color: '#374151', padding: '3px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: 600 }}>Algebra</span>
            <span style={{ background: '#EFF6FF', color: '#2563EB', padding: '3px 10px', borderRadius: '8px', fontSize: '12px', fontWeight: 600 }}>Q3 — Week 5</span>
          </div>

          <div className="concept-box">
            <div style={{ fontSize: '11px', fontWeight: 700, color: '#92400E', letterSpacing: '0.05em', marginBottom: '6px' }}>KEY CONCEPT</div>
            <p style={{ color: '#374151', fontSize: '14px', lineHeight: 1.7, margin: 0 }}>
              A <strong style={{ color: '#1E3A8A' }}>linear equation</strong> is an equation where the variable has an exponent of 1.
              Our goal is to <strong style={{ color: '#1E3A8A' }}>isolate</strong> the variable on one side using <strong style={{ color: '#1E3A8A' }}>inverse operations</strong>.
            </p>
          </div>

          <div style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.05em', marginBottom: '10px' }}>WORKED EXAMPLE — SOLVE FOR x</div>
          <div style={{ background: '#1E3A8A', color: 'white', borderRadius: '12px', padding: '16px 24px', marginBottom: '20px', fontSize: '22px', fontWeight: 800, textAlign: 'center' }}>
            3x + 5 = 20
          </div>

          <div className="step-block">
            <div className="step-number">STEP 1</div>
            <p style={{ color: '#4B5563', fontSize: '13px', paddingTop: '8px' }}>Identify the variable, its coefficient, and the constant term.</p>
            <div className="formula-box">3x + 5 = 20</div>
          </div>

          <div style={{ background: '#FAFAFA', border: '2px solid #E5E7EB', borderRadius: '16px', padding: '20px 24px', marginTop: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '12px' }}>
              <div style={{ background: '#F59E0B', color: 'white', borderRadius: '8px', padding: '4px 10px', fontSize: '11px', fontWeight: 700 }}>CHECKPOINT</div>
              <span style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Select the correct answer to continue</span>
            </div>
            <h4 style={{ color: '#111827', fontSize: '15px', fontWeight: 700, marginBottom: '16px' }}>What is the correct first step to solve the equation <code>3x + 5 = 20</code>?</h4>
            
            <button className={`choice-btn ${feedback?.correct === false ? 'wrong' : ''}`} style={{ opacity: isAnswered && !feedback?.correct ? 0.5 : 1 }} onClick={() => checkAnswer(false)}>A &nbsp; Divide both sides by 3 first</button>
            <button className={`choice-btn ${feedback?.correct ? 'correct' : ''}`} style={{ opacity: isAnswered && !feedback?.correct ? 0.5 : 1 }} onClick={() => checkAnswer(true)}>B &nbsp; Subtract 5 from both sides</button>
            <button className="choice-btn" style={{ opacity: isAnswered && !feedback?.correct ? 0.5 : 1 }} onClick={() => checkAnswer(false)}>C &nbsp; Add 5 to both sides</button>
            
            {feedback && (
              <div style={{ marginTop: '12px', padding: '12px 16px', borderRadius: '10px', fontSize: '13px', fontWeight: 600, background: feedback.correct ? '#DCFCE7' : '#FEF2F2', color: feedback.correct ? '#166534' : '#991B1B', border: `1px solid ${feedback.correct ? '#BBF7D0' : '#FECACA'}` }}>
                {feedback.correct ? <i className="mdi mdi-check-circle"></i> : <i className="mdi mdi-close-circle"></i>} {feedback.text}
              </div>
            )}
          </div>

        </div>

        {/* RIGHT PANEL */}
        <div className="right-panel">
          <div style={{ display: 'flex', borderBottom: '1px solid #E5E7EB' }}>
            <button className="right-tab active" style={{ flex: 1, padding: '12px', background: 'white', border: 'none', borderBottom: '2px solid #1E3A8A', color: '#1E3A8A', fontWeight: 700 }}>Scenes</button>
            <button className="right-tab" style={{ flex: 1, padding: '12px', background: 'transparent', border: 'none', color: '#6B7280', fontWeight: 700 }}>AI Tutor</button>
          </div>
          <div style={{ padding: '12px 16px', borderBottom: '1px solid #E5E7EB', background: 'white' }}>
            <div style={{ fontSize: '12px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>Lesson 3: Linear Equations</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ flex: 1, background: '#F3F4F6', borderRadius: '6px', height: '5px' }}>
                <div style={{ background: '#2563EB', width: '38%', height: '100%', borderRadius: '6px' }}></div>
              </div>
              <span style={{ fontSize: '11px', fontWeight: 700, color: '#2563EB' }}>38%</span>
            </div>
          </div>
          <div style={{ flex: 1, overflowY: 'auto' }}>
            <div className="scene-item" style={{ color: '#6B7280' }}><div className="scene-dot done"><i className="mdi mdi-check"></i></div><span>What is Algebra?</span></div>
            <div className="scene-item current"><div className="scene-dot current">5</div><span>Solving One-Variable Eq.</span></div>
            <div className="scene-item"><div className="scene-dot locked">6</div><span style={{ color: '#9CA3AF' }}>Negative Numbers</span></div>
            <div className="scene-item"><div className="scene-dot locked">7</div><span style={{ color: '#9CA3AF' }}>Two-Step Equations</span></div>
          </div>
        </div>

      </div>
    </DashboardLayout>
  )
}
