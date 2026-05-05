import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const smeapirBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: '18/24 Submitted', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
  { text: '75% Completion', style: { backgroundColor: '#DBEAFE', color: '#1E40AF', border: '1px solid #93C5FD', padding: '6px 12px', fontSize: '12px' } },
]

const submissionData = [
  { id: 1, school: 'San Juan Elementary School', type: 'Elementary', district: 'District I', smeasubmitted: true, pirsubmitted: true, submissiondate: '2024-04-15', status: 'Complete', reviewer: 'Admin Review 1' },
  { id: 2, school: 'Rizal High School', type: 'Secondary', district: 'District II', smeasubmitted: true, pirsubmitted: false, submissiondate: '2024-04-14', status: 'Partial', reviewer: 'Pending' },
  { id: 3, school: 'Laguna Integrated School', type: 'Integrated', district: 'District I', smeasubmitted: true, pirsubmitted: true, submissiondate: '2024-04-13', status: 'Complete', reviewer: 'Admin Review 2' },
  { id: 4, school: 'Quezon National High School', type: 'Secondary', district: 'District III', smeasubmitted: false, pirsubmitted: false, submissiondate: '-', status: 'Not Submitted', reviewer: 'N/A' },
  { id: 5, school: 'Makati Science High School', type: 'Secondary', district: 'District II', smeasubmitted: true, pirsubmitted: true, submissiondate: '2024-04-12', status: 'Complete', reviewer: 'Admin Review 1' },
  { id: 6, school: 'Pasay Central Elementary', type: 'Elementary', district: 'District III', smeasubmitted: false, pirsubmitted: false, submissiondate: '-', status: 'Not Submitted', reviewer: 'N/A' },
  { id: 7, school: 'Manila Science High School', type: 'Secondary', district: 'District I', smeasubmitted: true, pirsubmitted: true, submissiondate: '2024-04-11', status: 'Complete', reviewer: 'Admin Review 3' },
  { id: 8, school: 'Caloocan Elementary School', type: 'Elementary', district: 'District II', smeasubmitted: true, pirsubmitted: false, submissiondate: '2024-04-10', status: 'Partial', reviewer: 'Pending' },
]

export default function SmeaPirDivisionPage() {
  return (
    <DashboardLayout
      activePath="/admin/smea-pir-division"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'SMEA / PIR - Division',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-level SMEA and PIR monitoring, review, and compliance tracking.',
      }}
      heading="SMEA / PIR - Division"
      subheading="Compliance Reporting • Screen 46 / 47"
      topBadges={smeapirBadges}
      contextText="Admin / SDO • Division compliance monitoring"
      contextNotice="School Monitoring, Evaluation, and Adjustment (SMEA) & Performance Improvement Report (PIR) tracking."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>SMEA / PIR Division Overview</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Monitor and review School Monitoring, Evaluation, and Adjustment (SMEA) and Performance Improvement Report (PIR) submissions across all schools in the division.</p>
        
        <div className="row">
          {[
            ['24', 'Total Schools'],
            ['18', 'SMEA Submitted'],
            ['15', 'PIR Submitted'],
            ['75%', 'Overall Completion'],
          ].map(([value, label]) => (
            <div key={label} className="col-md-3 col-sm-6 mb-3">
              <div className="stat-card">
                <div className="stat-kpi">{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Submission Status Summary</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn btn-sm" style={{ background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-bell" style={{ marginRight: '4px' }}></i>
              Send Reminders
            </button>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-download" style={{ marginRight: '4px' }}></i>
              Export Report
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#065F46', marginBottom: '4px' }}>18</div>
            <div style={{ fontSize: '14px', color: '#065F46', fontWeight: 600 }}>SMEA Complete</div>
            <div style={{ fontSize: '12px', color: '#047857' }}>75% submission rate</div>
          </div>
          <div style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#92400E', marginBottom: '4px' }}>15</div>
            <div style={{ fontSize: '14px', color: '#92400E', fontWeight: 600 }}>PIR Complete</div>
            <div style={{ fontSize: '12px', color: '#B45309' }}>62.5% submission rate</div>
          </div>
          <div style={{ backgroundColor: '#DBEAFE', border: '1px solid #93C5FD', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#1E40AF', marginBottom: '4px' }}>15</div>
            <div style={{ fontSize: '14px', color: '#1E40AF', fontWeight: 600 }}>Both Complete</div>
            <div style={{ fontSize: '12px', color: '#2563EB' }}>62.5% fully compliant</div>
          </div>
          <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#991B1B', marginBottom: '4px' }}>6</div>
            <div style={{ fontSize: '14px', color: '#991B1B', fontWeight: 600 }}>Pending</div>
            <div style={{ fontSize: '12px', color: '#B91C1C' }}>25% not submitted</div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>School Submission Details</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Districts</option>
              <option>District I</option>
              <option>District II</option>
              <option>District III</option>
            </select>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Status</option>
              <option>Complete</option>
              <option>Partial</option>
              <option>Not Submitted</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>School Name</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Type</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>District</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>SMEA</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>PIR</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Submission Date</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Reviewer</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {submissionData.map((school) => (
                <tr key={school.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px' }}>
                    <div style={{ fontWeight: 600, color: '#111827', fontSize: '14px' }}>{school.school}</div>
                  </td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: school.type === 'Elementary' ? '#DBEAFE' : school.type === 'Secondary' ? '#FEF3C7' : '#EDE9FE',
                      color: school.type === 'Elementary' ? '#1E40AF' : school.type === 'Secondary' ? '#92400E' : '#5B21B6',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {school.type}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{school.district}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <i className={`mdi ${school.smeasubmitted ? 'mdi-check-circle' : 'mdi-close-circle'}`} 
                       style={{ fontSize: '18px', color: school.smeasubmitted ? '#10B981' : '#EF4444' }}></i>
                  </td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <i className={`mdi ${school.pirsubmitted ? 'mdi-check-circle' : 'mdi-close-circle'}`} 
                       style={{ fontSize: '18px', color: school.pirsubmitted ? '#10B981' : '#EF4444' }}></i>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{school.submissiondate}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: school.status === 'Complete' ? '#ECFDF5' : school.status === 'Partial' ? '#FEF3C7' : '#FEE2E2',
                      color: school.status === 'Complete' ? '#065F46' : school.status === 'Partial' ? '#92400E' : '#991B1B',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {school.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{school.reviewer}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '4px 8px', marginRight: '4px' }}>
                      <i className="mdi mdi-eye" style={{ fontSize: '14px', color: '#6B7280' }}></i>
                    </button>
                    <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '4px 8px' }}>
                      <i className="mdi mdi-download" style={{ fontSize: '14px', color: '#6B7280' }}></i>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  )
}
