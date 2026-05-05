import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { teacherNavSections } from './navigation'

export default function TeacherAiLessonPlanPage() {
  const [selectedSource, setSelectedSource] = useState('math-10')
  const [isGenerating, setIsGenerating] = useState(false)
  const [showDraft, setShowDraft] = useState(true)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleGenerate = () => {
    setIsGenerating(true)
    setShowDraft(false)
    setTimeout(() => {
      setIsGenerating(false)
      setShowDraft(true)
    }, 2800)
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      if (window.confirm('Draft submitted for review. View review queue?')) {
        // Handle navigation to review queue if needed
      }
    }, 600)
  }

  return (
    <DashboardLayout
      activePath="/teachers/ai-lesson-plan"
      roleNavSections={teacherNavSections}
      profile={{
        name: 'Ms. Ana Reyes',
        role: 'Mathematics Teacher'
      }}
      heading="AI Lesson Builder"
      subheading=""
    >
      <style>{`
        .step-badge {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; border-radius: 50%;
          background: #1E3A8A; color: #fff; font-weight: 700; font-size: 13px;
          margin-right: 10px; flex-shrink: 0;
        }
        .step-header { display: flex; align-items: center; font-size: 15px; font-weight: 700; margin-bottom: 14px; }
        .competency-select, .source-select {
          width: 100%; padding: 8px 12px; border: 1px solid #E5E7EB; border-radius: 8px;
          font-size: 14px; background: #fff; color: #1f2937;
        }
        .scene-card {
          border: 1px solid #E5E7EB; border-radius: 10px; margin-bottom: 12px; overflow: hidden; background: white;
        }
        .scene-card-header {
          display: flex; align-items: center; justify-content: space-between;
          padding: 10px 16px; background: #F9FAFB; border-bottom: 1px solid #E5E7EB;
        }
        .scene-type-pill {
          display: inline-block; padding: 2px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; text-transform: uppercase;
        }
        .type-concept    { background: #EFF6FF; color: #1D4ED8; }
        .type-example    { background: #F0FDF4; color: #15803D; }
        .type-guided     { background: #FFF7ED; color: #C2410C; }
        .type-check      { background: #FAF5FF; color: #7E22CE; }
        .type-summary    { background: #F0F9FF; color: #0369A1; }
        .type-quiz       { background: #FFF1F2; color: #BE123C; }
        .scene-body { padding: 14px 16px; }
        .scene-script { font-size: 13px; color: #374151; font-style: italic; margin-bottom: 10px; }
        .citation-ref {
          display: inline-flex; align-items: center; gap: 6px; font-size: 11px;
          background: #EFF6FF; color: #1E40AF; border-radius: 6px; padding: 3px 8px;
        }
        .check-row { display: flex; align-items: center; gap: 10px; font-size: 13px; color: #374151; margin-top: 6px; }
        .check-icon-ok  { color: #16A34A; font-size: 17px; }
        .check-icon-fail { color: #DC2626; font-size: 17px; }
        .check-icon-wait { color: #D97706; font-size: 17px; }
        .gen-status-bar {
          background: #F0F9FF; border: 1px solid #BAE6FD; border-radius: 10px;
          padding: 14px 18px; margin-bottom: 20px;
          display: flex; align-items: center; gap: 14px;
        }
        .gen-spinner { width: 22px; height: 22px; border: 3px solid #BAE6FD; border-top-color: #1E3A8A;
          border-radius: 50%; animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        .source-card {
          display: flex; align-items: flex-start; gap: 12px; padding: 12px 14px;
          border: 1.5px solid #E5E7EB; border-radius: 10px; margin-bottom: 8px; cursor: pointer;
          transition: border-color 0.15s; background: white;
        }
        .source-card.selected { border-color: #1E3A8A; background: #EFF6FF; }
        .source-card-check { width: 18px; height: 18px; border-radius: 4px; border: 2px solid #9CA3AF; margin-top: 2px; flex-shrink: 0; }
        .source-card.selected .source-card-check { background: #1E3A8A; border-color: #1E3A8A; }
        .quality-badge { font-size: 11px; font-weight: 600; padding: 2px 8px; border-radius: 12px; }
        .q-approved { background: #D1FAE5; color: #065F46; }
        .q-published { background: #DBEAFE; color: #1E40AF; }
        .duration-badge { font-size: 11px; color: #6B7280; margin-left: auto; }
        .edit-field {
          width: 100%; border: 1px solid #E5E7EB; border-radius: 6px; padding: 6px 10px;
          font-size: 13px; color: #1f2937; resize: vertical;
        }
        .action-row { display: flex; gap: 10px; margin-top: 20px; flex-wrap: wrap; }
        .ai-field-label { font-size: 12px; color: #6B7280; font-weight: 600; margin-bottom: 4px; display: block; }
        .ai-input {
          width: 100%; padding: 8px 12px; border: 1px solid #E5E7EB; border-radius: 8px;
          font-size: 14px; background: #fff; color: #1f2937; outline: none;
        }
        .ai-input:focus { border-color: #BFDBFE; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
        .ai-textarea {
          width: 100%; padding: 10px 12px; border: 1px solid #E5E7EB; border-radius: 10px;
          font-size: 13px; color: #1f2937; resize: vertical; outline: none; min-height: 92px;
        }
        .ai-textarea:focus { border-color: #BFDBFE; box-shadow: 0 0 0 3px rgba(37,99,235,0.12); }
        .pill-mini {
          display: inline-flex; align-items: center; gap: 6px; padding: 4px 10px; border-radius: 999px;
          font-size: 11px; font-weight: 700; border: 1px solid #E5E7EB; background: #F9FAFB; color: #4B5563;
        }
        .pill-mini.blue { background: #EFF6FF; color: #1D4ED8; border-color: #BFDBFE; }
        .pill-mini.green { background: #DCFCE7; color: #166534; border-color: #BBF7D0; }
        .pill-mini.yellow { background: #FEF3C7; color: #92400E; border-color: #FDE68A; }
        .img-drop {
          border: 1px dashed #CBD5E1; border-radius: 10px; padding: 12px;
          background: #F8FAFC; color: #475569; font-size: 12px;
        }
        .img-thumbs { display: flex; gap: 8px; flex-wrap: wrap; margin-top: 10px; }
        .img-thumb {
          width: 64px; height: 44px; border-radius: 8px; border: 1px solid #E5E7EB;
          background: linear-gradient(135deg, #E2E8F0 0%, #F8FAFC 100%);
          display: flex; align-items: center; justify-content: center; color: #64748B;
          font-weight: 800; font-size: 11px;
        }
        .btn { padding: 8px 16px; border-radius: 8px; font-weight: 600; cursor: pointer; border: 1px solid transparent; }
        .btn-primary { background-color: #2563EB; color: white; }
        .btn-primary:hover { background-color: #1D4ED8; }
        .btn-success { background-color: #16A34A; color: white; }
        .btn-outline-secondary { background: white; border-color: #E5E7EB; color: #374151; }
      `}</style>

      <div style={{ background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '10px', padding: '10px 18px', marginBottom: '18px', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
        <span style={{ fontSize: '13px', color: '#1E40AF' }}><i className="mdi mdi-information-outline"></i> AI-generated lessons require teacher review and approval before students can access them.</span>
        <span style={{ marginLeft: 'auto', fontSize: '12px', color: '#6B7280' }}>Draft job ID: <code>job_9f2a3c8b</code></span>
      </div>

      <div className="row">
        {/* LEFT: Builder Steps */}
        <div className="col-lg-5">

          {/* Step 1: Select Competency */}
          <div className="card" style={{ borderRadius: '12px', marginBottom: '16px' }}>
            <div className="card-body" style={{ padding: '20px' }}>
              <div className="step-header"><span className="step-badge">1</span>Select Curriculum Competency</div>
              <div style={{ marginBottom: '10px' }}>
                <label className="ai-field-label">Grade Level</label>
                <select className="competency-select" defaultValue="Grade 10">
                  <option>Grade 10</option>
                  <option>Grade 9</option>
                  <option>Grade 8</option>
                </select>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label className="ai-field-label">Learning Area</label>
                <select className="competency-select" defaultValue="Mathematics">
                  <option>Mathematics</option>
                  <option>Science</option>
                  <option>English</option>
                  <option>Filipino</option>
                </select>
              </div>
              <div style={{ marginBottom: '10px' }}>
                <label className="ai-field-label">Competency Code</label>
                <select className="competency-select" defaultValue="M10AL-Ib-2">
                  <option value="M10AL-Ia-1">M10AL-Ia-1 — Generates patterns from sequences</option>
                  <option value="M10AL-Ib-2">M10AL-Ib-2 — Solves linear equations in one variable</option>
                  <option value="M10GE-IIa-1">M10GE-IIa-1 — Describes geometric relationships</option>
                </select>
              </div>
              <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '8px', padding: '10px 12px', fontSize: '12px', color: '#15803D' }}>
                <i className="mdi mdi-check-circle"></i> Competency confirmed in curriculum map (Quarter 1, Week 2)
              </div>
            </div>
          </div>

          {/* Step 2: Select Source */}
          <div className="card" style={{ borderRadius: '12px', marginBottom: '16px' }}>
            <div className="card-body" style={{ padding: '20px' }}>
              <div className="step-header"><span className="step-badge">2</span>Choose Approved Source</div>
              <p style={{ fontSize: '12px', color: '#6B7280', marginBottom: '12px' }}>Only approved and published resources are available for generation.</p>

              <div className={`source-card ${selectedSource === 'math-10' ? 'selected' : ''}`} onClick={() => setSelectedSource('math-10')}>
                <div className="source-card-check"></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937' }}>Math 10 SLM — Quarter 1</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>DepEd · resource_version_id: rv_7a8b9c</div>
                  <div style={{ marginTop: '4px' }}><span className="quality-badge q-published">published</span></div>
                </div>
                <span className="duration-badge">PDF · 142p</span>
              </div>

              <div className={`source-card ${selectedSource === 'khan' ? 'selected' : ''}`} onClick={() => setSelectedSource('khan')}>
                <div className="source-card-check"></div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937' }}>Linear Equations — Khan Academy Aligned</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>DepEd Approved · resource_version_id: rv_3d4e5f</div>
                  <div style={{ marginTop: '4px' }}><span className="quality-badge q-approved">approved</span></div>
                </div>
                <span className="duration-badge">Video · 18m</span>
              </div>

              <div style={{ background: '#FFFBEB', border: '1px solid #FDE68A', borderRadius: '8px', padding: '8px 12px', fontSize: '12px', color: '#92400E', marginTop: '8px' }}>
                <i className="mdi mdi-lock-outline"></i> Draft resources and unapproved content cannot be used for generation.
              </div>
            </div>
          </div>

          {/* Step 3: Generate */}
          <div className="card" style={{ borderRadius: '12px', marginBottom: '16px' }}>
            <div className="card-body" style={{ padding: '20px' }}>
              <div className="step-header"><span className="step-badge">3</span>Generate Lesson Draft</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '12px' }}>
                <div>
                  <label className="ai-field-label">Lesson format</label>
                  <select className="ai-input" defaultValue="Interactive Lesson (Scenes)">
                    <option>Interactive Lesson (Scenes)</option>
                    <option>DLL (Daily Lesson Log)</option>
                    <option>DLP (Detailed Lesson Plan)</option>
                  </select>
                </div>
                <div>
                  <label className="ai-field-label">Target language / translation</label>
                  <select className="ai-input" defaultValue="English (No translation)">
                    <option>English (No translation)</option>
                    <option>Filipino</option>
                    <option>Cebuano</option>
                    <option>Ilocano</option>
                  </select>
                </div>
                <div>
                  <label className="ai-field-label">Subject</label>
                  <input className="ai-input" type="text" defaultValue="Mathematics" />
                </div>
                <div>
                  <label className="ai-field-label">Level</label>
                  <select className="ai-input" defaultValue="Grade 10">
                    <option>Grade 7</option>
                    <option>Grade 8</option>
                    <option>Grade 9</option>
                    <option>Grade 10</option>
                    <option>Grade 11</option>
                    <option>Grade 12</option>
                  </select>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label className="ai-field-label">Objectives (teacher-provided)</label>
                <textarea className="ai-textarea" defaultValue="At the end of the lesson, learners should be able to solve linear equations in one variable and explain each step using correct mathematical reasoning."></textarea>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '8px' }}>
                  <span className="pill-mini blue"><i className="mdi mdi-shield-check" style={{ fontSize: '13px' }}></i>Policy-aware</span>
                  <span className="pill-mini green"><i className="mdi mdi-bookmark-outline" style={{ fontSize: '13px' }}></i>Citation-ready</span>
                  <span className="pill-mini yellow"><i className="mdi mdi-translate" style={{ fontSize: '13px' }}></i>Optional translation</span>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label className="ai-field-label">Reference image / picture (optional)</label>
                <div className="img-drop">
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <i className="mdi mdi-image-outline" style={{ fontSize: '18px', color: '#1E3A8A' }}></i>
                      <div>
                        <div style={{ fontWeight: 800, color: '#0F172A' }}>Add a visual reference</div>
                        <div style={{ fontSize: '11px', color: '#64748B' }}>Charts, word problems, diagrams, or contextual photos for lesson localization.</div>
                      </div>
                    </div>
                    <input className="ai-input" type="file" accept="image/*" style={{ maxWidth: '220px', padding: '6px 10px' }} />
                  </div>
                  <div className="img-thumbs">
                    <div className="img-thumb">IMG</div>
                    <div className="img-thumb">REF</div>
                    <div className="img-thumb">MAP</div>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: '12px' }}>
                <label className="ai-field-label">Scene types to generate</label>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><input type="checkbox" defaultChecked /> Concept</label>
                  <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><input type="checkbox" defaultChecked /> Example</label>
                  <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><input type="checkbox" defaultChecked /> Guided Practice</label>
                  <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><input type="checkbox" defaultChecked /> Check Understanding</label>
                  <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><input type="checkbox" /> Summary</label>
                  <label style={{ fontSize: '12px', display: 'flex', alignItems: 'center', gap: '4px' }}><input type="checkbox" /> Quiz</label>
                </div>
              </div>
              <button className="btn btn-primary" style={{ width: '100%', fontWeight: 700 }} onClick={handleGenerate}>
                <i className="mdi mdi-creation"></i> Generate Lesson Draft
              </button>
              <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '8px', marginBottom: 0 }}>Generation prompt and model version will be audited. · Model: claude-sonnet-4-6</p>
            </div>
          </div>

        </div>

        {/* RIGHT: Draft + Review */}
        <div className="col-lg-7">

          <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '14px 16px', marginBottom: '14px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)' }}>
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 800, color: '#111827' }}>Auto-Generated Package Preview</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>Lesson plan output + visuals, generated from approved sources and your objectives.</div>
              </div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <span className="pill-mini blue"><i className="mdi mdi-notebook-outline" style={{ fontSize: '13px' }}></i>Format: Interactive</span>
                <span className="pill-mini"><i className="mdi mdi-translate" style={{ fontSize: '13px' }}></i>Language: EN</span>
                <span className="pill-mini green"><i className="mdi mdi-check" style={{ fontSize: '13px' }}></i>Draft v1</span>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '12px', marginTop: '12px' }}>
              <div style={{ border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px', background: '#F9FAFB' }}>
                <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Lesson plan snippet</div>
                <div style={{ fontSize: '13px', color: '#111827', fontWeight: 800, marginBottom: '6px' }}>Topic: Solving Linear Equations</div>
                <div style={{ fontSize: '12px', color: '#374151', lineHeight: 1.6 }}>Objective: Solve linear equations in one variable and explain each step. Key idea: Maintain equality by performing the same operation on both sides. Include guided practice and quick checks aligned to the selected competency.</div>
                <div style={{ marginTop: '10px', display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <span className="pill-mini"><i className="mdi mdi-bookmark-outline" style={{ fontSize: '13px' }}></i>Sources: 2</span>
                  <span className="pill-mini"><i className="mdi mdi-file-document-outline" style={{ fontSize: '13px' }}></i>DLL/DLP export ready</span>
                  <span className="pill-mini"><i className="mdi mdi-image-outline" style={{ fontSize: '13px' }}></i>Visuals: 3</span>
                </div>
              </div>
              <div style={{ border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px' }}>
                <div style={{ fontSize: '11px', color: '#6B7280', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: '8px' }}>Visuals</div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  <div className="img-thumb" style={{ width: '100%', height: '96px' }}>DIAGRAM</div>
                  <div className="img-thumb" style={{ flex: 1, minWidth: '90px' }}>CHART</div>
                  <div className="img-thumb" style={{ flex: 1, minWidth: '90px' }}>PHOTO</div>
                </div>
                <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '8px' }}>Images are attached for teacher review; student delivery uses approved assets only.</div>
              </div>
            </div>
          </div>

          {/* Generation status */}
          {isGenerating && (
            <div className="gen-status-bar">
              <div className="gen-spinner"></div>
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: '#0C4A6E' }}>Generating lesson draft…</div>
                <div style={{ fontSize: '12px', color: '#0369A1' }}>job_9f2a3c8b · M10AL-Ib-2 · rv_7a8b9c · Scene extraction in progress</div>
              </div>
            </div>
          )}

          {/* Draft scenes */}
          {showDraft && (
            <div style={{ opacity: isGenerating ? 0.4 : 1, transition: 'opacity 0.3s' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
                <div>
                  <h4 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Lesson Draft — Linear Equations (Grade 10)</h4>
                  <div style={{ fontSize: '12px', color: '#6B7280' }}>Competency: M10AL-Ib-2 · 5 scenes · ~18 min · draft_v1</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span style={{ fontSize: '11px', background: '#FEF3C7', color: '#92400E', borderRadius: '20px', padding: '3px 10px', fontWeight: 600 }}>Draft</span>
                </div>
              </div>

              {/* Citation & Safety checks */}
              <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '10px', padding: '12px 16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '12px', fontWeight: 700, color: '#374151', marginBottom: '8px' }}>Pre-submission Checks</div>
                <div className="check-row"><i className="mdi mdi-check-circle check-icon-ok"></i> Citation check passed — 5/5 scenes cite approved sources</div>
                <div className="check-row"><i className="mdi mdi-check-circle check-icon-ok"></i> Safety check passed — no unsafe content detected</div>
                <div className="check-row"><i className="mdi mdi-check-circle check-icon-ok"></i> Curriculum alignment — M10AL-Ib-2 confirmed</div>
                <div className="check-row"><i className="mdi mdi-clock-outline check-icon-wait"></i> Student suitability — awaiting teacher confirmation</div>
              </div>

              {/* Scene 1 */}
              <div className="scene-card">
                <div className="scene-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 600 }}>Scene 1</span>
                    <span className="scene-type-pill type-concept">Concept</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937' }}>What is a Linear Equation?</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#9CA3AF' }}>~3 min</span>
                </div>
                <div className="scene-body">
                  <div className="scene-script">"A linear equation is an equation where the highest power of the variable is 1. Let's explore what that means."</div>
                  <div style={{ marginBottom: '8px' }}><span className="citation-ref"><i className="mdi mdi-bookmark-outline" style={{ fontSize: '12px' }}></i> Math 10 SLM p.14 · rv_7a8b9c</span></div>
                  <label style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Edit instructor script:</label>
                  <textarea className="edit-field" rows="2" defaultValue="&quot;A linear equation is an equation where the highest power of the variable is 1. Let's explore what that means.&quot;"></textarea>
                </div>
              </div>

              {/* Scene 2 */}
              <div className="scene-card">
                <div className="scene-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 600 }}>Scene 2</span>
                    <span className="scene-type-pill type-example">Example</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937' }}>Solving 2x + 3 = 7</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#9CA3AF' }}>~4 min</span>
                </div>
                <div className="scene-body">
                  <div className="scene-script">"Let's solve our first example step by step. Subtract 3 from both sides, then divide by 2."</div>
                  <div style={{ marginBottom: '8px' }}><span className="citation-ref"><i className="mdi mdi-bookmark-outline" style={{ fontSize: '12px' }}></i> Math 10 SLM p.17 · rv_7a8b9c</span></div>
                  <label style={{ fontSize: '11px', color: '#6B7280', fontWeight: 600 }}>Edit instructor script:</label>
                  <textarea className="edit-field" rows="2" defaultValue="&quot;Let's solve our first example step by step. Subtract 3 from both sides, then divide by 2.&quot;"></textarea>
                </div>
              </div>

              {/* Scene 3 */}
              <div className="scene-card">
                <div className="scene-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 600 }}>Scene 3</span>
                    <span className="scene-type-pill type-guided">Guided Practice</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937' }}>Try: 3x − 5 = 10</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#9CA3AF' }}>~4 min</span>
                </div>
                <div className="scene-body">
                  <div className="scene-script">"Now it's your turn. I'll guide you through solving 3x − 5 = 10. What's the first step?"</div>
                  <div style={{ marginBottom: '8px' }}><span className="citation-ref"><i className="mdi mdi-bookmark-outline" style={{ fontSize: '12px' }}></i> Math 10 SLM p.21 · rv_7a8b9c</span></div>
                  <div style={{ fontSize: '11px', color: '#6B7280', marginTop: '4px' }}>Interactive block: <code>step_by_step_solution</code> · tutor_enabled: true</div>
                </div>
              </div>

              {/* Scene 4 */}
              <div className="scene-card">
                <div className="scene-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 600 }}>Scene 4</span>
                    <span className="scene-type-pill type-check">Check Understanding</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937' }}>Quick Check</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#9CA3AF' }}>~3 min</span>
                </div>
                <div className="scene-body">
                  <div className="scene-script">"Let's check if you understood the concept. Answer the following question."</div>
                  <div style={{ fontSize: '12px', color: '#374151', margin: '8px 0' }}><strong>Q:</strong> Solve for x: 5x + 2 = 17</div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>Interactive block: <code>multiple_choice_check</code> · Answer key hidden from students</div>
                  <div style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '4px' }}><i className="mdi mdi-lock-outline"></i> Quiz answer key is hidden from students per policy</div>
                </div>
              </div>

              {/* Scene 5 */}
              <div className="scene-card">
                <div className="scene-card-header">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontSize: '12px', color: '#9CA3AF', fontWeight: 600 }}>Scene 5</span>
                    <span className="scene-type-pill type-summary">Summary</span>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: '#1f2937' }}>What We Learned</span>
                  </div>
                  <span style={{ fontSize: '11px', color: '#9CA3AF' }}>~4 min</span>
                </div>
                <div className="scene-body">
                  <div className="scene-script">"Great work! Today we learned how to identify and solve linear equations in one variable."</div>
                  <div style={{ marginBottom: '8px' }}><span className="citation-ref"><i className="mdi mdi-bookmark-outline" style={{ fontSize: '12px' }}></i> Math 10 SLM p.24 · rv_7a8b9c</span></div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>Interactive block: <code>summary_card</code></div>
                </div>
              </div>

              {/* Actions */}
              <div className="action-row">
                <button className="btn btn-outline-secondary" style={{ fontSize: '13px' }}>
                  <i className="mdi mdi-refresh"></i> Regenerate Section
                </button>
                <button 
                  className={`btn ${isSubmitted ? 'btn-success' : 'btn-primary'}`} 
                  style={{ fontSize: '13px', fontWeight: 700 }} 
                  onClick={handleSubmit}
                  disabled={isSubmitted}
                >
                  {isSubmitted ? <><i className="mdi mdi-check"></i> Submitted for Review</> : <><i className="mdi mdi-send"></i> Submit for Review</>}
                </button>
              </div>
              <p style={{ fontSize: '11px', color: '#9CA3AF', marginTop: '10px' }}>Lesson cannot be published until reviewer approves. All edits are versioned and audited.</p>
            </div>
          )}

        </div>
      </div>
    </DashboardLayout>
  )
}
