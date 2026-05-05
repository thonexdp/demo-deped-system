import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { headNavSections } from './navigation'

const headBadges = []

export default function HeadTeacherPerformanceSummaryPage() {
  return (
    <DashboardLayout
      activePath="/headteachers/performance-summary"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'HT',
        title: 'School Head',
        subtitle: 'Whole-School Monitoring',
        rolePill: 'Head Teacher / Principal',
        securityContext: 'You can view aggregate performance analytics.',
      }}
      heading="Performance Summary"
      subheading="IPCRF Approvals • Analytics"
      topBadges={headBadges}
      contextText="Head Teacher / Principal • IPCRF Workflow • Scope: School-Wide Analytics"
      contextNotice="Data reflects approved mid-year and year-end evaluations."
    >
      <style>{`
        .pmes-content{padding:16px;border:1px solid #E5E7EB;border-radius:12px;background:#FAFAFA}
        .pmes-ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
        .pmes-pt{font-size:16px;font-weight:500;color:#111827}
        .pmes-ps{font-size:12px;color:#6B7280;margin-top:2px}
        .pmes-sc{background:#FFFFFF;border:0.5px solid #E5E7EB;border-radius:12px;padding:14px;margin-bottom:12px}
        .pmes-st{font-size:13px;font-weight:500;margin-bottom:10px;color:#111827}
        .pmes-cg{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:16px}
        .pmes-mc{background:#FFFFFF;border:1px solid #E5E7EB;border-radius:8px;padding:12px 14px}
        .pmes-ml{font-size:11px;color:#6B7280;margin-bottom:4px}
        .pmes-mv{font-size:22px;font-weight:500;color:#111827}
        .pmes-mt{font-size:11px;margin-top:3px}
        .pmes-tu{color:#3B6D11}
        .pmes-tn{color:#6B7280}
        .pmes-progress-row {display:flex;align-items:center;gap:8px;margin-bottom:7px}
        .pmes-progress-label {font-size:12px;min-width:180px;color:#111827}
        .pmes-progress-bar-wrap {flex:1;height:10px;border-radius:5px;background:#F9FAFB;overflow:hidden}
        .pmes-progress-bar {height:100%;border-radius:5px;background:#3B6D11}
        .pmes-progress-pct {font-size:11px;color:#6B7280;min-width:32px;text-align:right}
      `}</style>

      <div style={{ margin: '0 auto', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius: '12px' }}>
        <div className="pmes-content">
          <div className="pmes-ph">
            <div>
              <div className="pmes-pt">School Performance Analytics</div>
              <div className="pmes-ps">Aggregate teacher evaluation scores for SY 2024-2025</div>
            </div>
          </div>

          <div className="pmes-cg">
            <div className="pmes-mc"><div className="pmes-ml">School Average Rating</div><div className="pmes-mv">4.21</div><div className="pmes-mt pmes-tu">Very Satisfactory</div></div>
            <div className="pmes-mc"><div className="pmes-ml">Highest KRA</div><div className="pmes-mv">KRA 1</div><div className="pmes-mt pmes-tn">Content Knowledge</div></div>
            <div className="pmes-mc"><div className="pmes-ml">Outstanding Teachers</div><div className="pmes-mv">8</div><div className="pmes-mt pmes-tu">Top 20% of staff</div></div>
          </div>

          <div className="pmes-sc">
            <div className="pmes-st">Average Score by Key Result Area (KRA)</div>
            <div className="pmes-progress-row"><div className="pmes-progress-label">1. Content Knowledge & Pedagogy</div><div className="pmes-progress-bar-wrap"><div className="pmes-progress-bar" style={{width:'90%'}}></div></div><div className="pmes-progress-pct">4.5</div></div>
            <div className="pmes-progress-row"><div className="pmes-progress-label">2. Learning Environment</div><div className="pmes-progress-bar-wrap"><div className="pmes-progress-bar" style={{width:'86%'}}></div></div><div className="pmes-progress-pct">4.3</div></div>
            <div className="pmes-progress-row"><div className="pmes-progress-label">3. Curriculum Planning</div><div className="pmes-progress-bar-wrap"><div className="pmes-progress-bar" style={{width:'80%'}}></div></div><div className="pmes-progress-pct">4.0</div></div>
            <div className="pmes-progress-row"><div className="pmes-progress-label">4. Assessment & Reporting</div><div className="pmes-progress-bar-wrap"><div className="pmes-progress-bar" style={{width:'82%'}}></div></div><div className="pmes-progress-pct">4.1</div></div>
            <div className="pmes-progress-row"><div className="pmes-progress-label">5. Community Linkages</div><div className="pmes-progress-bar-wrap"><div className="pmes-progress-bar" style={{width:'76%'}}></div></div><div className="pmes-progress-pct">3.8</div></div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
