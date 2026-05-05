import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { teacherNavSections } from './navigation'

const teacherBadges = []

export default function TeacherPmesOpcrfPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activePhase, setActivePhase] = useState('planning')

  return (
    <DashboardLayout
      activePath="/teachers/pmes-opcrf"
      roleNavSections={teacherNavSections}
      profile={{
        badgeCode: 'TV',
        title: 'Class Adviser',
        subtitle: 'Assigned Sections',
        rolePill: 'Teacher / Adviser',
        securityContext: 'Teacher approvals are required for high-stakes grade actions.',
      }}
      heading="PMES/OPCRF"
      subheading="Class Management • Performance Evaluation"
      topBadges={teacherBadges}
      contextText="Teacher / Adviser • Class Management • Scope: PMES/OPCRF"
      contextNotice="Notifications, sync, and policy status remain visible in every workspace."
    >
      <style>{`
        .pmes-nav{display:flex;align-items:center;gap:0;border-bottom:0.5px solid #E5E7EB;background:#FFFFFF;border-radius:12px 12px 0 0}
        .pmes-nav-logo{padding:12px 16px;font-weight:500;font-size:13px;border-right:0.5px solid #E5E7EB;color:#3B6D11}
        .pmes-nav-tabs{display:flex;flex:1;overflow-x:auto}
        .pmes-nav-tab{padding:12px 13px;font-size:12px;cursor:pointer;white-space:nowrap;border-bottom:2px solid transparent;color:#6B7280;transition:all 0.15s}
        .pmes-nav-tab.active{border-bottom-color:#3B6D11;color:#3B6D11;font-weight:500}
        .pmes-nav-tab:hover:not(.active){color:#111827;background:#F9FAFB}
        .pmes-badge{font-size:10px;padding:2px 6px;border-radius:10px;margin-left:4px;display:inline-block}
        .pmes-bg{background:#F9FAFB;color:#3B6D11}
        .pmes-bb{background:#E6F1FB;color:#185FA5}
        .pmes-ba{background:#FAEEDA;color:#854F0B}
        .pmes-br{background:#FCEBEB;color:#A32D2D}
        .pmes-bp{background:#EEEDFE;color:#3C3489}
        .pmes-content{padding:16px;border:1px solid #E5E7EB;border-top:none;border-radius:0 0 12px 12px;background:#FAFAFA}
        .pmes-ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
        .pmes-pt{font-size:16px;font-weight:500;color:#111827}
        .pmes-ps{font-size:12px;color:#6B7280;margin-top:2px}
        .pmes-btn{padding:7px 14px;font-size:12px;border-radius:8px;border:0.5px solid #D1D5DB;background:#FFFFFF;cursor:pointer;color:#111827}
        .pmes-btn:hover{background:#F9FAFB}
        .pmes-btn-g{background:#3B6D11;color:#fff;border-color:#3B6D11}
        .pmes-btn-g:hover{background:#27500A}
        .pmes-btn-b{background:#185FA5;color:#fff;border-color:#185FA5}
        .pmes-btn-b:hover{background:#0C447C}
        .pmes-cg{display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:10px;margin-bottom:16px}
        .pmes-mc{background:#FFFFFF;border:1px solid #E5E7EB;border-radius:8px;padding:12px 14px}
        .pmes-ml{font-size:11px;color:#6B7280;margin-bottom:4px}
        .pmes-mv{font-size:22px;font-weight:500;color:#111827}
        .pmes-mt{font-size:11px;margin-top:3px}
        .pmes-tu{color:#3B6D11}
        .pmes-td{color:#A32D2D}
        .pmes-tn{color:#6B7280}
        .pmes-sc{background:#FFFFFF;border:0.5px solid #E5E7EB;border-radius:12px;padding:14px;margin-bottom:12px}
        .pmes-st{font-size:13px;font-weight:500;margin-bottom:10px;display:flex;align-items:center;gap:8px;flex-wrap:wrap;color:#111827}
        .pmes-tag{font-size:10px;padding:2px 7px;border-radius:10px}
        table.pmes-dt{width:100%;font-size:12px;border-collapse:collapse;table-layout:fixed}
        table.pmes-dt th{text-align:left;color:#6B7280;font-weight:400;padding:5px 8px;border-bottom:0.5px solid #E5E7EB;font-size:11px}
        table.pmes-dt td{padding:6px 8px;border-bottom:0.5px solid #E5E7EB;word-wrap:break-word;color:#111827}
        table.pmes-dt tr:last-child td{border-bottom:none}
        .pmes-kra-row{border:0.5px solid #E5E7EB;border-radius:8px;padding:10px 12px;margin-bottom:8px}
        .pmes-kra-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
        .pmes-kra-title{font-size:12px;font-weight:500;color:#111827}
        .pmes-kra-bar-wrap{height:6px;border-radius:3px;background:#F9FAFB;overflow:hidden;margin-bottom:4px}
        .pmes-kra-bar{height:100%;border-radius:3px}
        .pmes-kra-score{font-size:11px;color:#6B7280;display:flex;justify-content:space-between}
        .pmes-file-row{display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid #E5E7EB}
        .pmes-file-row:last-child{border-bottom:none}
        .pmes-file-info{display:flex;align-items:center;gap:8px}
        .pmes-file-icon{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:500}
        .pmes-fi-pdf{background:#FCEBEB;color:#A32D2D}
        .pmes-fi-doc{background:#E6F1FB;color:#185FA5}
        .pmes-fi-img{background:#EAF3DE;color:#3B6D11}
        .pmes-file-name{font-size:12px;font-weight:500;color:#111827}
        .pmes-file-meta{font-size:11px;color:#6B7280}
        .pmes-file-actions{display:flex;gap:6px;align-items:center}
        .pmes-fab{padding:4px 10px;font-size:11px;border-radius:8px;border:0.5px solid #D1D5DB;background:#FFFFFF;cursor:pointer;color:#111827}
        .pmes-upload-zone{border:0.5px dashed #D1D5DB;border-radius:8px;padding:20px;text-align:center;margin-bottom:12px;cursor:pointer;background:#FFFFFF}
        .pmes-uz-label{font-size:12px;font-weight:500;margin-bottom:4px;color:#111827}
        .pmes-uz-sub{font-size:11px;color:#6B7280}
        .pmes-fr{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
        .pmes-fg{display:flex;flex-direction:column;gap:4px}
        .pmes-fl{font-size:11px;color:#6B7280}
        .pmes-fi{padding:7px 10px;font-size:12px;border:0.5px solid #D1D5DB;border-radius:8px;background:#FFFFFF;color:#111827}
        select.pmes-fi{cursor:pointer}
        .pmes-phase-strip{display:flex;gap:0;margin-bottom:14px;border:0.5px solid #E5E7EB;border-radius:8px;overflow:hidden}
        .pmes-phase{flex:1;padding:8px 6px;text-align:center;font-size:11px;cursor:pointer;background:#FFFFFF;transition:background 0.12s;color:#6B7280}
        .pmes-phase.active{background:#EAF3DE;color:#27500A;font-weight:500}
        .pmes-phase+.pmes-phase{border-left:0.5px solid #E5E7EB}
        .pmes-alert{padding:9px 12px;border-radius:8px;font-size:12px;margin-bottom:10px;display:flex;align-items:center;gap:8px}
        .pmes-ai{background:#E6F1FB;color:#185FA5;border:0.5px solid #B5D4F4}
        .pmes-aw{background:#FAEEDA;color:#854F0B;border:0.5px solid #FAC775}
        .pmes-as{background:#EAF3DE;color:#27500A;border:0.5px solid #C0DD97}
        .pmes-two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .pmes-rating-pill{display:inline-block;padding:3px 9px;border-radius:10px;font-size:11px;font-weight:500}
        .pmes-r5{background:#EAF3DE;color:#27500A}
        .pmes-r4{background:#EAF3DE;color:#3B6D11;opacity:.8}
        .pmes-r3{background:#FAEEDA;color:#854F0B}
        .pmes-r2{background:#FCEBEB;color:#A32D2D}
        .pmes-r1{background:#F1EFE8;color:#5F5E5A}
        .pmes-timeline-row{display:flex;align-items:flex-start;gap:10px;margin-bottom:12px}
        .pmes-tl-dot{width:10px;height:10px;border-radius:50%;margin-top:4px;flex-shrink:0}
        .pmes-tl-done{background:#3B6D11}
        .pmes-tl-now{background:#185FA5}
        .pmes-tl-next{background:#D3D1C7}
        .pmes-tl-label{font-size:12px;font-weight:500;color:#111827}
        .pmes-tl-sub{font-size:11px;color:#6B7280}
        @media (max-width: 767.98px) {
          .pmes-two{grid-template-columns:1fr}
          .pmes-fr{grid-template-columns:1fr}
        }
      `}</style>

      <div style={{ margin: '0 auto', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius: '12px' }}>
        <div className="pmes-nav">
          <div className="pmes-nav-logo">DepEd PMES · OPCRF</div>
          <div className="pmes-nav-tabs">
            <div className={`pmes-nav-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => setActiveTab('overview')}>Overview</div>
            <div className={`pmes-nav-tab ${activeTab === 'opcrf' ? 'active' : ''}`} onClick={() => setActiveTab('opcrf')}>OPCRF / KRA <span className="pmes-badge pmes-bg">Rating</span></div>
            <div className={`pmes-nav-tab ${activeTab === 'ipcrf' ? 'active' : ''}`} onClick={() => setActiveTab('ipcrf')}>IPCRF — Teacher <span className="pmes-badge pmes-bb">Portfolio</span></div>
            <div className={`pmes-nav-tab ${activeTab === 'files' ? 'active' : ''}`} onClick={() => setActiveTab('files')}>Evidence files <span className="pmes-badge pmes-ba">Upload</span></div>
            <div className={`pmes-nav-tab ${activeTab === 'workflow' ? 'active' : ''}`} onClick={() => setActiveTab('workflow')}>Approval flow <span className="pmes-badge pmes-bp">Workflow</span></div>
          </div>
        </div>

        <div className="pmes-content">
          {activeTab === 'overview' && (
            <div>
              <div className="pmes-ph">
                <div>
                  <div className="pmes-pt">PMES — Performance Management System</div>
                  <div className="pmes-ps">SY 2024–2025 · Mid-year Review Phase</div>
                </div>
                <button className="pmes-btn pmes-btn-g" onClick={() => setActiveTab('ipcrf')}>My IPCRF portfolio ↗</button>
              </div>

              <div className="pmes-cg">
                <div className="pmes-mc"><div className="pmes-ml">My overall rating</div><div className="pmes-mv">4.2</div><div className="pmes-mt pmes-tu">Outstanding (target: 4.0)</div></div>
                <div className="pmes-mc"><div className="pmes-ml">KRAs completed</div><div className="pmes-mv">3/5</div><div className="pmes-mt pmes-tn">2 pending mid-year</div></div>
                <div className="pmes-mc"><div className="pmes-ml">Evidence uploaded</div><div className="pmes-mv">14</div><div className="pmes-mt pmes-tu">files attached</div></div>
                <div className="pmes-mc"><div className="pmes-ml">Approver status</div><div className="pmes-mv" style={{ fontSize: '14px', marginTop: '4px' }}><span className="pmes-rating-pill pmes-r3">Awaiting SH review</span></div></div>
              </div>

              <div className="pmes-two">
                <div className="pmes-sc">
                  <div className="pmes-st">PMES cycle timeline</div>
                  <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-done"></div><div><div className="pmes-tl-label">Performance planning</div><div className="pmes-tl-sub">June 2024 — completed</div></div></div>
                  <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-done"></div><div><div className="pmes-tl-label">Performance monitoring</div><div className="pmes-tl-sub">Jul–Nov 2024 — completed</div></div></div>
                  <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-now"></div><div><div className="pmes-tl-label">Mid-year review</div><div className="pmes-tl-sub">Dec 2024 — in progress</div></div></div>
                  <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-next"></div><div><div className="pmes-tl-label">Year-end assessment</div><div className="pmes-tl-sub">May 2025 — upcoming</div></div></div>
                  <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-next"></div><div><div className="pmes-tl-label">Final rating &amp; submission</div><div className="pmes-tl-sub">June 2025 — upcoming</div></div></div>
                </div>
                <div className="pmes-sc">
                  <div className="pmes-st">Quick actions</div>
                  <button className="pmes-btn" style={{ width: '100%', marginBottom: '7px', fontSize: '12px', textAlign: 'left' }} onClick={() => setActiveTab('opcrf')}>Encode KRA self-rating →</button>
                  <button className="pmes-btn" style={{ width: '100%', marginBottom: '7px', fontSize: '12px', textAlign: 'left' }} onClick={() => setActiveTab('files')}>Upload evidence files →</button>
                  <button className="pmes-btn" style={{ width: '100%', marginBottom: '7px', fontSize: '12px', textAlign: 'left' }} onClick={() => setActiveTab('ipcrf')}>View IPCRF portfolio →</button>
                  <button className="pmes-btn" style={{ width: '100%', fontSize: '12px', textAlign: 'left' }} onClick={() => setActiveTab('workflow')}>Check approval status →</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'opcrf' && (
            <div>
              <div className="pmes-ph">
                <div>
                  <div className="pmes-pt">OPCRF — Office Performance Commitment</div>
                  <div className="pmes-ps">Key Result Areas (KRAs) · Self-rating · Mid-year</div>
                </div>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <select className="pmes-fi" style={{ fontSize: '12px' }}><option>Mid-year review</option><option>Year-end assessment</option></select>
                  <select className="pmes-fi" style={{ fontSize: '12px' }}><option>SY 2024–2025</option><option>SY 2023–2024</option></select>
                </div>
              </div>

              <div className="pmes-alert pmes-ai">Rate yourself per KRA using the RPMS 5-point scale. Attach at least 1 MOV (means of verification) per indicator.</div>

              <div className="pmes-sc">
                <div className="pmes-st">KRA 1 — Content knowledge and pedagogy <span className="pmes-tag pmes-bg">15%</span></div>
                <div className="pmes-kra-row">
                  <div className="pmes-kra-head"><div className="pmes-kra-title">1.1 Applied knowledge of content within and across curriculum areas</div><div><span className="pmes-rating-pill pmes-r5">5 — Outstanding</span></div></div>
                  <div className="pmes-kra-bar-wrap"><div className="pmes-kra-bar" style={{ width: '100%', background: '#3B6D11' }}></div></div>
                  <div className="pmes-kra-score"><span>Self-rating: 5.0</span><span>MOV attached: 2 files</span></div>
                </div>
                <div className="pmes-kra-row">
                  <div className="pmes-kra-head"><div className="pmes-kra-title">1.2 Used research-based knowledge to inform teaching practice</div><div><span className="pmes-rating-pill pmes-r4">4 — Very Satisfactory</span></div></div>
                  <div className="pmes-kra-bar-wrap"><div className="pmes-kra-bar" style={{ width: '80%', background: '#639922' }}></div></div>
                  <div className="pmes-kra-score"><span>Self-rating: 4.0</span><span>MOV attached: 1 file</span></div>
                </div>
              </div>

              <div className="pmes-sc">
                <div className="pmes-st">KRA 2 — Learning environment and diversity <span className="pmes-tag pmes-bg">15%</span></div>
                <div className="pmes-kra-row">
                  <div className="pmes-kra-head"><div className="pmes-kra-title">2.1 Managed classroom structure for purposeful learning</div><div><span className="pmes-rating-pill pmes-r5">5 — Outstanding</span></div></div>
                  <div className="pmes-kra-bar-wrap"><div className="pmes-kra-bar" style={{ width: '100%', background: '#3B6D11' }}></div></div>
                  <div className="pmes-kra-score"><span>Self-rating: 5.0</span><span>MOV attached: 3 files</span></div>
                </div>
                <div className="pmes-kra-row">
                  <div className="pmes-kra-head"><div className="pmes-kra-title">2.2 Used differentiated, developmentally appropriate strategies</div><div><span className="pmes-rating-pill pmes-r3">3 — Satisfactory</span></div></div>
                  <div className="pmes-kra-bar-wrap"><div className="pmes-kra-bar" style={{ width: '60%', background: '#854F0B' }}></div></div>
                  <div className="pmes-kra-score"><span>Self-rating: 3.0</span><span style={{ color: '#A32D2D' }}>No MOV — required</span></div>
                </div>
              </div>

              <div className="pmes-sc">
                <div className="pmes-st">KRA 3–5 <span className="pmes-tag pmes-ba">Pending</span></div>
                <div className="pmes-alert pmes-aw">KRA 3 (Curriculum planning), KRA 4 (Assessment), and KRA 5 (Community linkages) still need self-rating and MOV.</div>
                <button className="pmes-btn pmes-btn-g" style={{ fontSize: '12px' }}>What MOV to prepare for KRA 3–5 ↗</button>
              </div>
            </div>
          )}

          {activeTab === 'ipcrf' && (
            <div>
              <div className="pmes-ph">
                <div>
                  <div className="pmes-pt">IPCRF — Individual Teacher Portfolio</div>
                  <div className="pmes-ps">Individual Performance Commitment and Review Form</div>
                </div>
                <button className="pmes-btn pmes-btn-g" onClick={() => setActiveTab('files')}>Upload MOV ↗</button>
              </div>

              <div className="pmes-phase-strip">
                <div className={`pmes-phase ${activePhase === 'planning' ? 'active' : ''}`} onClick={() => setActivePhase('planning')}>Planning</div>
                <div className={`pmes-phase ${activePhase === 'monitoring' ? 'active' : ''}`} onClick={() => setActivePhase('monitoring')}>Monitoring</div>
                <div className={`pmes-phase ${activePhase === 'mid-year' ? 'active' : ''}`} onClick={() => setActivePhase('mid-year')}>Mid-year</div>
                <div className={`pmes-phase ${activePhase === 'year-end' ? 'active' : ''}`} onClick={() => setActivePhase('year-end')}>Year-end</div>
              </div>

              <div className="pmes-fr">
                <div className="pmes-fg"><label className="pmes-fl">Teacher name</label><input className="pmes-fi" defaultValue="Maria Santos" readOnly /></div>
                <div className="pmes-fg"><label className="pmes-fl">Position / item no.</label><input className="pmes-fi" defaultValue="Teacher III" readOnly /></div>
              </div>
              <div className="pmes-fr">
                <div className="pmes-fg"><label className="pmes-fl">School</label><input className="pmes-fi" defaultValue="Palo Central Elementary School" readOnly /></div>
                <div className="pmes-fg"><label className="pmes-fl">Division</label><input className="pmes-fi" defaultValue="Leyte" readOnly /></div>
              </div>

              <div className="pmes-sc" style={{ marginTop: '12px' }}>
                <div className="pmes-st">Performance indicators summary</div>
                <table className="pmes-dt">
                  <thead><tr><th style={{ width: '40%' }}>KRA</th><th style={{ width: '12%' }}>Weight</th><th style={{ width: '18%' }}>Self-rating</th><th style={{ width: '18%' }}>Appraiser</th><th style={{ width: '12%' }}>Final</th></tr></thead>
                  <tbody>
                    <tr><td>1. Content knowledge &amp; pedagogy</td><td>15%</td><td><span className="pmes-rating-pill pmes-r5">4.5</span></td><td><span className="pmes-rating-pill pmes-r4">4.0</span></td><td><span className="pmes-rating-pill pmes-r4">4.0</span></td></tr>
                    <tr><td>2. Learning environment &amp; diversity</td><td>15%</td><td><span className="pmes-rating-pill pmes-r4">4.0</span></td><td>—</td><td>—</td></tr>
                    <tr><td>3. Curriculum planning &amp; development</td><td>20%</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td>4. Assessment &amp; reporting</td><td>20%</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td>5. Community linkages &amp; professionalism</td><td>15%</td><td>—</td><td>—</td><td>—</td></tr>
                    <tr><td>6. Plus factors (LAC, research, etc.)</td><td>15%</td><td><span className="pmes-rating-pill pmes-r5">5.0</span></td><td>—</td><td>—</td></tr>
                    <tr style={{ background: '#F9FAFB' }}><td><b>Overall computed rating</b></td><td></td><td><b>4.2</b></td><td>—</td><td>—</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="pmes-sc">
                <div className="pmes-st">Developmental needs &amp; professional goals</div>
                <div className="pmes-fg" style={{ marginBottom: '10px' }}><label className="pmes-fl">Identified development area</label><input className="pmes-fi" placeholder="e.g. Differentiated instruction strategies" /></div>
                <div className="pmes-fg" style={{ marginBottom: '10px' }}><label className="pmes-fl">Action / intervention</label><input className="pmes-fi" placeholder="e.g. Attend LAC session, apply in class observation" /></div>
                <div className="pmes-fr">
                  <div className="pmes-fg"><label className="pmes-fl">Timeline</label><select className="pmes-fi"><option>Q1</option><option>Q2</option><option>Q3</option><option>Q4</option><option>Full year</option></select></div>
                  <div className="pmes-fg"><label className="pmes-fl">Resources needed</label><input className="pmes-fi" placeholder="e.g. Training materials, internet" /></div>
                </div>
                <button className="pmes-btn pmes-btn-g" style={{ fontSize: '12px', marginTop: '4px' }}>Save development plan</button>
              </div>
            </div>
          )}

          {activeTab === 'files' && (
            <div>
              <div className="pmes-ph">
                <div>
                  <div className="pmes-pt">Evidence files — Means of Verification (MOV)</div>
                  <div className="pmes-ps">Attach supporting documents per KRA indicator</div>
                </div>
                <select className="pmes-fi" style={{ fontSize: '12px' }}><option>All KRAs</option><option>KRA 1</option><option>KRA 2</option><option>KRA 3</option><option>KRA 4</option><option>KRA 5</option><option>Plus factors</option></select>
              </div>

              <div className="pmes-upload-zone">
                <div className="pmes-uz-label">Drop files here or click to browse</div>
                <div className="pmes-uz-sub">Accepted: PDF, DOCX, JPEG, PNG · Max 10MB per file · Lesson plans, class photos, certificates, SLO reports, LAC docs</div>
              </div>

              <div className="pmes-sc">
                <div className="pmes-st">Uploaded MOV files <span className="pmes-tag pmes-bg">14 files</span></div>
                <div className="pmes-file-row">
                  <div className="pmes-file-info">
                    <div className="pmes-file-icon pmes-fi-pdf">PDF</div>
                    <div><div className="pmes-file-name">Lesson_Plan_Q3_Grade4_Math.pdf</div><div className="pmes-file-meta">KRA 3 · Uploaded Nov 12 · 1.2 MB</div></div>
                  </div>
                  <div className="pmes-file-actions">
                    <span className="pmes-rating-pill pmes-r5" style={{ fontSize: '10px' }}>Verified</span>
                    <button className="pmes-fab">View</button>
                  </div>
                </div>
                <div className="pmes-file-row">
                  <div className="pmes-file-info">
                    <div className="pmes-file-icon pmes-fi-img">IMG</div>
                    <div><div className="pmes-file-name">Class_observation_photo_Oct.jpg</div><div className="pmes-file-meta">KRA 2 · Uploaded Oct 28 · 3.4 MB</div></div>
                  </div>
                  <div className="pmes-file-actions">
                    <span className="pmes-rating-pill pmes-r5" style={{ fontSize: '10px' }}>Verified</span>
                    <button className="pmes-fab">View</button>
                  </div>
                </div>
                <div className="pmes-file-row">
                  <div className="pmes-file-info">
                    <div className="pmes-file-icon pmes-fi-doc">DOC</div>
                    <div><div className="pmes-file-name">LAC_session_attendance_Nov.docx</div><div className="pmes-file-meta">Plus factors · Uploaded Nov 20 · 0.5 MB</div></div>
                  </div>
                  <div className="pmes-file-actions">
                    <span className="pmes-rating-pill pmes-r3" style={{ fontSize: '10px' }}>Pending</span>
                    <button className="pmes-fab">View</button>
                    <button className="pmes-fab">Delete</button>
                  </div>
                </div>
              </div>

              <div className="pmes-sc">
                <div className="pmes-st">MOV checklist per KRA <span className="pmes-tag pmes-ba">Required</span></div>
                <table className="pmes-dt">
                  <thead><tr><th style={{ width: '40%' }}>KRA</th><th style={{ width: '30%' }}>Suggested MOV</th><th style={{ width: '15%' }}>Required</th><th style={{ width: '15%' }}>Uploaded</th></tr></thead>
                  <tbody>
                    <tr><td>KRA 1 — Content &amp; pedagogy</td><td>Lesson plans, rubrics</td><td>2</td><td><span className="pmes-rating-pill pmes-r5">2</span></td></tr>
                    <tr><td>KRA 2 — Learning environment</td><td>Observation photos, DLL</td><td>2</td><td><span className="pmes-rating-pill pmes-r5">3</span></td></tr>
                    <tr><td>KRA 3 — Curriculum planning</td><td>Weekly home learning plan</td><td>2</td><td><span className="pmes-rating-pill pmes-r5">2</span></td></tr>
                    <tr><td>KRA 4 — Assessment</td><td>SF10, test results, anecdotal</td><td>2</td><td><span className="pmes-rating-pill pmes-r2">0</span></td></tr>
                    <tr><td>KRA 5 — Community linkages</td><td>Certificates, letters</td><td>1</td><td><span className="pmes-rating-pill pmes-r2">0</span></td></tr>
                    <tr><td>Plus factors</td><td>LAC docs, research output</td><td>1</td><td><span className="pmes-rating-pill pmes-r5">2</span></td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'workflow' && (
            <div>
              <div className="pmes-ph">
                <div>
                  <div className="pmes-pt">Approval workflow — IPCRF routing</div>
                  <div className="pmes-ps">Teacher → School Head → PSDS → SDO HR</div>
                </div>
              </div>

              <div className="pmes-alert pmes-as">Your mid-year IPCRF has been submitted to the School Head for review.</div>

              <div className="pmes-sc">
                <div className="pmes-st">Current routing status</div>
                <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-done"></div><div><div className="pmes-tl-label">Teacher self-rating submitted</div><div className="pmes-tl-sub">Maria Santos · Dec 1, 2024 · IPCRF + 14 MOV files</div></div></div>
                <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-now"></div><div><div className="pmes-tl-label">School Head review</div><div className="pmes-tl-sub">Pending — Principal Juan Dela Cruz · Assigned Dec 2, 2024</div></div></div>
                <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-next"></div><div><div className="pmes-tl-label">PSDS / District validation</div><div className="pmes-tl-sub">Not yet started</div></div></div>
                <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-next"></div><div><div className="pmes-tl-label">SDO HR final encoding</div><div className="pmes-tl-sub">Not yet started</div></div></div>
                <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-next"></div><div><div className="pmes-tl-label">Official rating released</div><div className="pmes-tl-sub">Target: January 2025</div></div></div>
              </div>

              <div className="pmes-two">
                <div className="pmes-sc">
                  <div className="pmes-st">School Head actions <span className="pmes-tag pmes-ba">Pending</span></div>
                  <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>Principal can do the following after logging in:</div>
                  <button className="pmes-btn" style={{ width: '100%', marginBottom: '6px', fontSize: '12px', textAlign: 'left' }}>Review self-rating per KRA →</button>
                  <button className="pmes-btn" style={{ width: '100%', marginBottom: '6px', fontSize: '12px', textAlign: 'left' }}>Encode appraiser rating →</button>
                  <button className="pmes-btn" style={{ width: '100%', marginBottom: '6px', fontSize: '12px', textAlign: 'left' }}>Add observation remarks →</button>
                  <button className="pmes-btn pmes-btn-b" style={{ width: '100%', fontSize: '12px' }}>Approve &amp; forward to PSDS →</button>
                </div>
                <div className="pmes-sc">
                  <div className="pmes-st">Notification log</div>
                  <div className="pmes-file-row">
                    <div><div className="pmes-file-name" style={{ fontSize: '12px' }}>IPCRF submitted</div><div className="pmes-file-meta">Dec 1, 2024 · 9:14 AM</div></div>
                    <span className="pmes-rating-pill pmes-r5" style={{ fontSize: '10px' }}>Sent</span>
                  </div>
                  <div className="pmes-file-row">
                    <div><div className="pmes-file-name" style={{ fontSize: '12px' }}>Email to School Head</div><div className="pmes-file-meta">Dec 1, 2024 · 9:15 AM</div></div>
                    <span className="pmes-rating-pill pmes-r5" style={{ fontSize: '10px' }}>Sent</span>
                  </div>
                  <div className="pmes-file-row">
                    <div><div className="pmes-file-name" style={{ fontSize: '12px' }}>Reminder — SH not yet reviewed</div><div className="pmes-file-meta">Dec 5, 2024 · 8:00 AM</div></div>
                    <span className="pmes-rating-pill pmes-r3" style={{ fontSize: '10px' }}>Pending</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
