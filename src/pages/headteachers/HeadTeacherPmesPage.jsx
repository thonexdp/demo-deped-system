import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { headNavSections } from './navigation'

const headBadges = []

export default function HeadTeacherPmesPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [activeTeacher, setActiveTeacher] = useState(null)

  return (
    <DashboardLayout
      activePath="/headteachers/pmes-all-teachers"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'HT',
        title: 'School Head',
        subtitle: 'Whole-School Monitoring',
        rolePill: 'Head Teacher / Principal',
        securityContext: 'You can approve teacher IPCRF submissions and add remarks.',
      }}
      heading="PMES - All Teachers"
      subheading="School Management • Performance Evaluation"
      topBadges={headBadges}
      contextText="Head Teacher / Principal • School Management • Scope: PMES/OPCRF"
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
          <div className="pmes-nav-logo">DepEd PMES · School-Wide</div>
          <div className="pmes-nav-tabs">
            <div className={`pmes-nav-tab ${activeTab === 'overview' ? 'active' : ''}`} onClick={() => { setActiveTab('overview'); setActiveTeacher(null); }}>Dashboard Summary</div>
            <div className={`pmes-nav-tab ${activeTab === 'teachers' ? 'active' : ''}`} onClick={() => setActiveTab('teachers')}>Teachers List <span className="pmes-badge pmes-bg">All</span></div>
            <div className={`pmes-nav-tab ${activeTab === 'reviews' ? 'active' : ''}`} onClick={() => { setActiveTab('reviews'); setActiveTeacher(null); }}>Pending Reviews <span className="pmes-badge pmes-ba">6 Pending</span></div>
          </div>
        </div>

        <div className="pmes-content">
          {activeTab === 'overview' && (
            <div>
              <div className="pmes-ph">
                <div>
                  <div className="pmes-pt">PMES — School Performance Management</div>
                  <div className="pmes-ps">SY 2024–2025 · Mid-year Review Phase</div>
                </div>
                <button className="pmes-btn pmes-btn-g" onClick={() => setActiveTab('reviews')}>Review pending submissions ↗</button>
              </div>

              <div className="pmes-cg">
                <div className="pmes-mc"><div className="pmes-ml">School Overall Rating</div><div className="pmes-mv">4.1</div><div className="pmes-mt pmes-tu">Very Satisfactory</div></div>
                <div className="pmes-mc"><div className="pmes-ml">Teachers Evaluated</div><div className="pmes-mv">18/24</div><div className="pmes-mt pmes-tn">75% completion</div></div>
                <div className="pmes-mc"><div className="pmes-ml">Pending My Review</div><div className="pmes-mv">6</div><div className="pmes-mt pmes-td">Requires action</div></div>
                <div className="pmes-mc"><div className="pmes-ml">Not Yet Submitted</div><div className="pmes-mv" style={{ fontSize: '14px', marginTop: '4px' }}><span className="pmes-rating-pill pmes-r3">None</span></div></div>
              </div>

              <div className="pmes-two">
                <div className="pmes-sc">
                  <div className="pmes-st">PMES cycle timeline</div>
                  <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-done"></div><div><div className="pmes-tl-label">Performance planning</div><div className="pmes-tl-sub">June 2024 — completed</div></div></div>
                  <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-done"></div><div><div className="pmes-tl-label">Performance monitoring</div><div className="pmes-tl-sub">Jul–Nov 2024 — completed</div></div></div>
                  <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-now"></div><div><div className="pmes-tl-label">Mid-year review</div><div className="pmes-tl-sub">Dec 2024 — in progress (Deadline: Dec 15)</div></div></div>
                  <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-next"></div><div><div className="pmes-tl-label">Year-end assessment</div><div className="pmes-tl-sub">May 2025 — upcoming</div></div></div>
                  <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-next"></div><div><div className="pmes-tl-label">Final rating &amp; submission</div><div className="pmes-tl-sub">June 2025 — upcoming</div></div></div>
                </div>
                <div className="pmes-sc">
                  <div className="pmes-st">Quick actions</div>
                  <button className="pmes-btn" style={{ width: '100%', marginBottom: '7px', fontSize: '12px', textAlign: 'left' }} onClick={() => setActiveTab('reviews')}>Evaluate 6 pending submissions →</button>
                  <button className="pmes-btn" style={{ width: '100%', marginBottom: '7px', fontSize: '12px', textAlign: 'left' }} onClick={() => setActiveTab('teachers')}>View all teacher IPCRF records →</button>
                  <button className="pmes-btn" style={{ width: '100%', fontSize: '12px', textAlign: 'left' }}>Send reminder to all teachers →</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'teachers' && (
            <div>
              <div className="pmes-ph">
                <div>
                  <div className="pmes-pt">Teacher PMES Roster</div>
                  <div className="pmes-ps">Overview of all teachers&apos; IPCRF statuses</div>
                </div>
                <select className="pmes-fi" style={{ fontSize: '12px' }}><option>All Departments</option><option>Math</option><option>Science</option></select>
              </div>

              <div className="pmes-sc">
                <table className="pmes-dt">
                  <thead><tr>
                    <th style={{ width: '30%' }}>Teacher Name</th>
                    <th style={{ width: '20%' }}>Position</th>
                    <th style={{ width: '20%' }}>Status</th>
                    <th style={{ width: '15%' }}>Self-Rating</th>
                    <th style={{ width: '15%' }}>Action</th>
                  </tr></thead>
                  <tbody>
                    <tr>
                      <td><b>Maria Santos</b></td>
                      <td>Teacher III</td>
                      <td><span className="pmes-rating-pill pmes-r3">Pending Review</span></td>
                      <td>4.2</td>
                      <td><button className="pmes-fab" onClick={() => { setActiveTeacher('Maria Santos'); setActiveTab('reviews'); }}>Review</button></td>
                    </tr>
                    <tr>
                      <td><b>Juan Dela Cruz</b></td>
                      <td>Teacher I</td>
                      <td><span className="pmes-rating-pill pmes-r5">Approved</span></td>
                      <td>4.5</td>
                      <td><button className="pmes-fab">View</button></td>
                    </tr>
                    <tr>
                      <td><b>Ana Reyes</b></td>
                      <td>Master Teacher I</td>
                      <td><span className="pmes-rating-pill pmes-r3">Pending Review</span></td>
                      <td>4.8</td>
                      <td><button className="pmes-fab" onClick={() => { setActiveTeacher('Ana Reyes'); setActiveTab('reviews'); }}>Review</button></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && !activeTeacher && (
            <div>
              <div className="pmes-ph">
                <div>
                  <div className="pmes-pt">Pending IPCRF Reviews</div>
                  <div className="pmes-ps">6 teachers await your evaluation and approval</div>
                </div>
              </div>

              <div className="pmes-sc">
                <div className="pmes-file-row">
                  <div className="pmes-file-info">
                    <div className="pmes-file-icon pmes-fi-doc">REV</div>
                    <div><div className="pmes-file-name">Maria Santos — Teacher III</div><div className="pmes-file-meta">Submitted Dec 1 · 14 MOVs attached</div></div>
                  </div>
                  <div className="pmes-file-actions">
                    <button className="pmes-btn pmes-btn-g" onClick={() => setActiveTeacher('Maria Santos')}>Review Now</button>
                  </div>
                </div>
                <div className="pmes-file-row">
                  <div className="pmes-file-info">
                    <div className="pmes-file-icon pmes-fi-doc">REV</div>
                    <div><div className="pmes-file-name">Ana Reyes — Master Teacher I</div><div className="pmes-file-meta">Submitted Dec 2 · 18 MOVs attached</div></div>
                  </div>
                  <div className="pmes-file-actions">
                    <button className="pmes-btn pmes-btn-g" onClick={() => setActiveTeacher('Ana Reyes')}>Review Now</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'reviews' && activeTeacher && (
             <div>
               <div className="pmes-ph">
                 <div>
                   <div className="pmes-pt">Reviewing: {activeTeacher}&apos;s IPCRF</div>
                   <div className="pmes-ps">Evaluate KRAs and provide your appraiser rating</div>
                 </div>
                 <button className="pmes-btn" onClick={() => setActiveTeacher(null)}>← Back to List</button>
               </div>

               <div className="pmes-alert pmes-ai">Review the teacher&apos;s self-rating and MOVs. Provide your final rating and observation remarks.</div>

               <div className="pmes-sc">
                 <div className="pmes-st">KRA 1 — Content knowledge and pedagogy <span className="pmes-tag pmes-bg">15%</span></div>
                 <div className="pmes-kra-row">
                   <div className="pmes-kra-head">
                     <div className="pmes-kra-title">1.1 Applied knowledge of content within and across curriculum areas</div>
                     <div><span className="pmes-rating-pill pmes-r5">Teacher Self-Rating: 5.0</span></div>
                   </div>
                   <div className="pmes-kra-bar-wrap"><div className="pmes-kra-bar" style={{ width: '100%', background: '#3B6D11' }}></div></div>
                   <div className="pmes-kra-score" style={{ marginBottom: '8px' }}>
                     <span>MOV attached: 2 files <a href="#view" style={{ color: '#185FA5', marginLeft: '6px' }}>View Files</a></span>
                   </div>
                   
                   <div style={{ background: '#F9FAFB', padding: '10px', borderRadius: '8px', border: '1px solid #E5E7EB' }}>
                     <div className="pmes-fr" style={{ marginBottom: 0 }}>
                       <div className="pmes-fg">
                         <label className="pmes-fl">Appraiser Rating (1-5)</label>
                         <select className="pmes-fi" defaultValue="5">
                           <option value="5">5 - Outstanding</option>
                           <option value="4">4 - Very Satisfactory</option>
                           <option value="3">3 - Satisfactory</option>
                           <option value="2">2 - Unsatisfactory</option>
                           <option value="1">1 - Poor</option>
                         </select>
                       </div>
                       <div className="pmes-fg">
                         <label className="pmes-fl">Observation Remarks</label>
                         <input className="pmes-fi" placeholder="Add remarks..." defaultValue="Consistently demonstrates excellent content knowledge." />
                       </div>
                     </div>
                   </div>
                 </div>
               </div>
               
               <div className="pmes-two">
                 <div className="pmes-sc">
                   <div className="pmes-st">Final Decision</div>
                   <div className="pmes-fg" style={{ marginBottom: '10px' }}>
                     <label className="pmes-fl">General Comments</label>
                     <textarea className="pmes-fi" rows="3" placeholder="Overall feedback for this review period..."></textarea>
                   </div>
                   <div style={{ display: 'flex', gap: '8px' }}>
                     <button className="pmes-btn pmes-btn-b" style={{ flex: 1 }}>Approve &amp; Forward to PSDS</button>
                     <button className="pmes-btn" style={{ flex: 1, color: '#A32D2D' }}>Return for Revision</button>
                   </div>
                 </div>
                 <div className="pmes-sc">
                   <div className="pmes-st">Routing History</div>
                   <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-done"></div><div><div className="pmes-tl-label">Submitted by Teacher</div><div className="pmes-tl-sub">Dec 1, 2024</div></div></div>
                   <div className="pmes-timeline-row"><div className="pmes-tl-dot pmes-tl-now"></div><div><div className="pmes-tl-label">School Head Review</div><div className="pmes-tl-sub">In progress</div></div></div>
                 </div>
               </div>

             </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
