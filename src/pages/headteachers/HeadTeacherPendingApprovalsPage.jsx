import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { headNavSections } from './navigation'

const headBadges = []

export default function HeadTeacherPendingApprovalsPage() {
  const [activeTeacher, setActiveTeacher] = useState(null)

  return (
    <DashboardLayout
      activePath="/headteachers/pending-approvals"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'HT',
        title: 'School Head',
        subtitle: 'Whole-School Monitoring',
        rolePill: 'Head Teacher / Principal',
        securityContext: 'You can approve teacher IPCRF submissions and add remarks.',
      }}
      heading="Pending Approvals"
      subheading="IPCRF Approvals • Action Required"
      topBadges={headBadges}
      contextText="Head Teacher / Principal • IPCRF Workflow • Scope: Pending Reviews"
      contextNotice="Review teacher self-ratings, check MOVs, and provide appraiser ratings."
    >
      <style>{`
        .pmes-content{padding:16px;border:1px solid #E5E7EB;border-radius:12px;background:#FAFAFA}
        .pmes-ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
        .pmes-pt{font-size:16px;font-weight:500;color:#111827}
        .pmes-ps{font-size:12px;color:#6B7280;margin-top:2px}
        .pmes-btn{padding:7px 14px;font-size:12px;border-radius:8px;border:0.5px solid #D1D5DB;background:#FFFFFF;cursor:pointer;color:#111827}
        .pmes-btn:hover{background:#F9FAFB}
        .pmes-btn-g{background:#3B6D11;color:#fff;border-color:#3B6D11}
        .pmes-btn-g:hover{background:#27500A}
        .pmes-btn-b{background:#185FA5;color:#fff;border-color:#185FA5}
        .pmes-sc{background:#FFFFFF;border:0.5px solid #E5E7EB;border-radius:12px;padding:14px;margin-bottom:12px}
        .pmes-st{font-size:13px;font-weight:500;margin-bottom:10px;display:flex;align-items:center;gap:8px;color:#111827}
        .pmes-file-row{display:flex;align-items:center;justify-content:space-between;padding:7px 0;border-bottom:0.5px solid #E5E7EB}
        .pmes-file-row:last-child{border-bottom:none}
        .pmes-file-info{display:flex;align-items:center;gap:8px}
        .pmes-file-icon{width:28px;height:28px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:500;background:#E6F1FB;color:#185FA5}
        .pmes-file-name{font-size:12px;font-weight:500;color:#111827}
        .pmes-file-meta{font-size:11px;color:#6B7280}
        .pmes-file-actions{display:flex;gap:6px;align-items:center}
        .pmes-alert{padding:9px 12px;border-radius:8px;font-size:12px;margin-bottom:10px;display:flex;align-items:center;gap:8px;background:#E6F1FB;color:#185FA5;border:0.5px solid #B5D4F4}
        .pmes-two{display:grid;grid-template-columns:1fr 1fr;gap:10px}
        .pmes-rating-pill{display:inline-block;padding:3px 9px;border-radius:10px;font-size:11px;font-weight:500;background:#EAF3DE;color:#27500A}
        .pmes-tag{font-size:10px;padding:2px 7px;border-radius:10px;background:#F9FAFB;color:#3B6D11}
        .pmes-kra-row{border:0.5px solid #E5E7EB;border-radius:8px;padding:10px 12px;margin-bottom:8px}
        .pmes-kra-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}
        .pmes-kra-title{font-size:12px;font-weight:500;color:#111827}
        .pmes-kra-bar-wrap{height:6px;border-radius:3px;background:#F9FAFB;overflow:hidden;margin-bottom:4px}
        .pmes-kra-bar{height:100%;border-radius:3px;background:#3B6D11}
        .pmes-kra-score{font-size:11px;color:#6B7280;display:flex;justify-content:space-between}
        .pmes-fr{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
        .pmes-fg{display:flex;flex-direction:column;gap:4px}
        .pmes-fl{font-size:11px;color:#6B7280}
        .pmes-fi{padding:7px 10px;font-size:12px;border:0.5px solid #D1D5DB;border-radius:8px;background:#FFFFFF;color:#111827}
      `}</style>

      <div style={{ margin: '0 auto', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius: '12px' }}>
        <div className="pmes-content">
          {!activeTeacher ? (
            <div>
              <div className="pmes-ph">
                <div>
                  <div className="pmes-pt">Pending IPCRF Reviews</div>
                  <div className="pmes-ps">6 teachers await your evaluation and approval for Mid-Year 2024-2025</div>
                </div>
              </div>

              <div className="pmes-sc">
                <div className="pmes-file-row">
                  <div className="pmes-file-info">
                    <div className="pmes-file-icon">REV</div>
                    <div><div className="pmes-file-name">Maria Santos — Teacher III</div><div className="pmes-file-meta">Submitted Dec 1 · 14 MOVs attached · Self-Rating: 4.2</div></div>
                  </div>
                  <div className="pmes-file-actions">
                    <button className="pmes-btn pmes-btn-g" onClick={() => setActiveTeacher('Maria Santos')}>Review Now</button>
                  </div>
                </div>
                <div className="pmes-file-row">
                  <div className="pmes-file-info">
                    <div className="pmes-file-icon">REV</div>
                    <div><div className="pmes-file-name">Ana Reyes — Master Teacher I</div><div className="pmes-file-meta">Submitted Dec 2 · 18 MOVs attached · Self-Rating: 4.8</div></div>
                  </div>
                  <div className="pmes-file-actions">
                    <button className="pmes-btn pmes-btn-g" onClick={() => setActiveTeacher('Ana Reyes')}>Review Now</button>
                  </div>
                </div>
                <div className="pmes-file-row">
                  <div className="pmes-file-info">
                    <div className="pmes-file-icon">REV</div>
                    <div><div className="pmes-file-name">Juan Dela Cruz — Teacher I</div><div className="pmes-file-meta">Submitted Dec 3 · 12 MOVs attached · Self-Rating: 3.9</div></div>
                  </div>
                  <div className="pmes-file-actions">
                    <button className="pmes-btn pmes-btn-g" onClick={() => setActiveTeacher('Juan Dela Cruz')}>Review Now</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="pmes-ph">
                <div>
                  <div className="pmes-pt">Reviewing: {activeTeacher}&apos;s IPCRF</div>
                  <div className="pmes-ps">Evaluate KRAs and provide your appraiser rating</div>
                </div>
                <button className="pmes-btn" onClick={() => setActiveTeacher(null)}>← Back to List</button>
              </div>

              <div className="pmes-alert">Review the teacher&apos;s self-rating and MOVs. Provide your final rating and observation remarks.</div>

              <div className="pmes-sc">
                <div className="pmes-st">KRA 1 — Content knowledge and pedagogy <span className="pmes-tag">15%</span></div>
                <div className="pmes-kra-row">
                  <div className="pmes-kra-head">
                    <div className="pmes-kra-title">1.1 Applied knowledge of content within and across curriculum areas</div>
                    <div><span className="pmes-rating-pill">Self-Rating: 5.0</span></div>
                  </div>
                  <div className="pmes-kra-bar-wrap"><div className="pmes-kra-bar"></div></div>
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
                        <input className="pmes-fi" placeholder="Add remarks..." defaultValue="Excellent content delivery." />
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
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
