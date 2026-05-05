import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { headNavSections } from './navigation'

const headBadges = []

export default function HeadTeacherSubmittedIpcrfPage() {
  return (
    <DashboardLayout
      activePath="/headteachers/submitted-ipcrf"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'HT',
        title: 'School Head',
        subtitle: 'Whole-School Monitoring',
        rolePill: 'Head Teacher / Principal',
        securityContext: 'You can view historical and forwarded IPCRF records.',
      }}
      heading="Submitted IPCRF"
      subheading="IPCRF Approvals • Historical Records"
      topBadges={headBadges}
      contextText="Head Teacher / Principal • IPCRF Workflow • Scope: Submitted Records"
      contextNotice="These records have been processed and forwarded to the PSDS/Division."
    >
      <style>{`
        .pmes-content{padding:16px;border:1px solid #E5E7EB;border-radius:12px;background:#FAFAFA}
        .pmes-ph{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
        .pmes-pt{font-size:16px;font-weight:500;color:#111827}
        .pmes-ps{font-size:12px;color:#6B7280;margin-top:2px}
        .pmes-btn{padding:7px 14px;font-size:12px;border-radius:8px;border:0.5px solid #D1D5DB;background:#FFFFFF;cursor:pointer;color:#111827}
        .pmes-btn:hover{background:#F9FAFB}
        .pmes-sc{background:#FFFFFF;border:0.5px solid #E5E7EB;border-radius:12px;padding:14px;margin-bottom:12px}
        .pmes-st{font-size:13px;font-weight:500;margin-bottom:10px;display:flex;align-items:center;gap:8px;color:#111827}
        table.pmes-dt{width:100%;font-size:12px;border-collapse:collapse;table-layout:fixed}
        table.pmes-dt th{text-align:left;color:#6B7280;font-weight:400;padding:5px 8px;border-bottom:0.5px solid #E5E7EB;font-size:11px}
        table.pmes-dt td{padding:10px 8px;border-bottom:0.5px dashed #E5E7EB;color:#111827}
        table.pmes-dt tr:last-child td{border-bottom:none}
        .pmes-rating-pill{display:inline-block;padding:3px 9px;border-radius:10px;font-size:11px;font-weight:500}
        .pmes-r5{background:#EAF3DE;color:#27500A}
        .pmes-fi{padding:7px 10px;font-size:12px;border:0.5px solid #D1D5DB;border-radius:8px;background:#FFFFFF;color:#111827;cursor:pointer}
      `}</style>

      <div style={{ margin: '0 auto', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius: '12px' }}>
        <div className="pmes-content">
          <div className="pmes-ph">
            <div>
              <div className="pmes-pt">Submitted IPCRF Records</div>
              <div className="pmes-ps">Log of all teacher IPCRFs forwarded to the division level</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <select className="pmes-fi"><option>SY 2024-2025</option><option>SY 2023-2024</option></select>
              <select className="pmes-fi"><option>Mid-Year</option><option>Year-End</option></select>
            </div>
          </div>

          <div className="pmes-sc">
            <div className="pmes-st">Forwarded Records</div>
            <table className="pmes-dt">
              <thead><tr>
                <th style={{ width: '25%' }}>Teacher Name</th>
                <th style={{ width: '20%' }}>Position</th>
                <th style={{ width: '15%' }}>Final Rating</th>
                <th style={{ width: '20%' }}>Date Forwarded</th>
                <th style={{ width: '20%' }}>Action</th>
              </tr></thead>
              <tbody>
                <tr>
                  <td><b>Jose Rizal</b></td>
                  <td>Teacher II</td>
                  <td><span className="pmes-rating-pill pmes-r5">4.6 (VS)</span></td>
                  <td>Dec 12, 2024</td>
                  <td><button className="pmes-btn">View Record</button></td>
                </tr>
                <tr>
                  <td><b>Andres Bonifacio</b></td>
                  <td>Master Teacher I</td>
                  <td><span className="pmes-rating-pill pmes-r5">4.8 (O)</span></td>
                  <td>Dec 10, 2024</td>
                  <td><button className="pmes-btn">View Record</button></td>
                </tr>
                <tr>
                  <td><b>Emilio Aguinaldo</b></td>
                  <td>Teacher I</td>
                  <td><span className="pmes-rating-pill pmes-r5">4.1 (VS)</span></td>
                  <td>Dec 09, 2024</td>
                  <td><button className="pmes-btn">View Record</button></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
