import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const gradeBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Q2 2024', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: '81.9% Avg MPS', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

const gradeData = [
  { id: 1, school: 'San Juan Elementary School', type: 'Elementary', district: 'District I', totalstudents: 456, average: '85.2', passingrate: '92.3%', honors: 23, status: 'Above Average', trend: 'improving' },
  { id: 2, school: 'Rizal High School', type: 'Secondary', district: 'District II', totalstudents: 892, average: '79.8', passingrate: '88.1%', honors: 45, status: 'Average', trend: 'stable' },
  { id: 3, school: 'Laguna Integrated School', type: 'Integrated', district: 'District I', totalstudents: 623, average: '83.7', passingrate: '91.2%', honors: 31, status: 'Above Average', trend: 'improving' },
  { id: 4, school: 'Quezon National High School', type: 'Secondary', district: 'District III', totalstudents: 734, average: '76.4', passingrate: '84.7%', honors: 28, status: 'Below Average', trend: 'declining' },
  { id: 5, school: 'Makati Science High School', type: 'Secondary', district: 'District II', totalstudents: 512, average: '88.9', passingrate: '95.1%', honors: 67, status: 'Excellent', trend: 'improving' },
  { id: 6, school: 'Pasay Central Elementary', type: 'Elementary', district: 'District III', totalstudents: 0, average: '0', passingrate: '0%', honors: 0, status: 'Inactive', trend: 'stable' },
]

const subjectData = [
  { subject: 'Mathematics', average: '82.3', passingrate: '89.7%', highest: '94.2', lowest: '71.8', status: 'Good' },
  { subject: 'English', average: '84.7', passingrate: '91.2%', highest: '96.1', lowest: '74.3', status: 'Excellent' },
  { subject: 'Science', average: '79.8', passingrate: '86.4%', highest: '91.5', lowest: '68.2', status: 'Good' },
  { subject: 'Filipino', average: '86.2', passingrate: '93.1%', highest: '97.3', lowest: '76.9', status: 'Excellent' },
  { subject: 'Araling Panlipunan', average: '81.5', passingrate: '88.9%', highest: '92.8', lowest: '70.1', status: 'Good' },
  { subject: 'MAPEH', average: '88.4', passingrate: '94.6%', highest: '98.2', lowest: '79.3', status: 'Excellent' },
]

export default function GradeAnalyticsPage() {
  return (
    <DashboardLayout
      activePath="/admin/grade-analytics"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'Grade Analytics',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-wide grade monitoring, academic performance analysis, and intervention planning.',
      }}
      heading="Grade Analytics"
      subheading="Academic Performance • Screen 49 / 47"
      topBadges={gradeBadges}
      contextText="Admin / SDO • Division grade monitoring"
      contextNotice="Comprehensive grade analytics and academic performance monitoring across all schools."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Grade Analytics Overview</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Monitor academic performance, grade distributions, and subject-wise achievement rates across all schools in the division for Q2 2024.</p>
        
        <div className="row">
          {[
            ['3,217', 'Total Students'],
            ['81.9%', 'Division Average'],
            ['89.5%', 'Passing Rate'],
            ['194', 'With Honors'],
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
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Subject Performance Summary</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>Q2 2024</option>
              <option>Q1 2024</option>
              <option>Q4 2023</option>
            </select>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-download" style={{ marginRight: '4px' }}></i>
              Export Report
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#065F46', marginBottom: '4px' }}>81.9%</div>
            <div style={{ fontSize: '14px', color: '#065F46', fontWeight: 600 }}>Division Average</div>
            <div style={{ fontSize: '12px', color: '#047857' }}>+2.3% from Q1</div>
          </div>
          <div style={{ backgroundColor: '#DBEAFE', border: '1px solid #93C5FD', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#1E40AF', marginBottom: '4px' }}>89.5%</div>
            <div style={{ fontSize: '14px', color: '#1E40AF', fontWeight: 600 }}>Passing Rate</div>
            <div style={{ fontSize: '12px', color: '#2563EB' }}>Above target</div>
          </div>
          <div style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#92400E', marginBottom: '4px' }}>194</div>
            <div style={{ fontSize: '14px', color: '#92400E', fontWeight: 600 }}>With Honors</div>
            <div style={{ fontSize: '12px', color: '#B45309' }}>6.0% of students</div>
          </div>
          <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#991B1B', marginBottom: '4px' }}>338</div>
            <div style={{ fontSize: '14px', color: '#991B1B', fontWeight: 600 }}>Need Support</div>
            <div style={{ fontSize: '12px', color: '#B91C1C' }}>10.5% of students</div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>Subject-wise Performance</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Subject</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Average</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Passing Rate</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Highest</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Lowest</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {subjectData.map((subject) => (
                <tr key={subject.subject} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{subject.subject}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{subject.average}%</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{subject.passingrate}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{subject.highest}%</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{subject.lowest}%</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: subject.status === 'Excellent' ? '#ECFDF5' : '#DBEAFE',
                      color: subject.status === 'Excellent' ? '#065F46' : '#1E40AF',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {subject.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>School Grade Performance</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Districts</option>
              <option>District I</option>
              <option>District II</option>
              <option>District III</option>
            </select>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Types</option>
              <option>Elementary</option>
              <option>Secondary</option>
              <option>Integrated</option>
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
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Total Students</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Average</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Passing Rate</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>With Honors</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Trend</th>
              </tr>
            </thead>
            <tbody>
              {gradeData.map((school) => (
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
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.totalstudents.toLocaleString()}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{school.average}%</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.passingrate}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.honors}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: school.status === 'Excellent' ? '#ECFDF5' : school.status === 'Above Average' ? '#DBEAFE' : school.status === 'Average' ? '#FEF3C7' : school.status === 'Below Average' ? '#FEE2E2' : '#F3F4F6',
                      color: school.status === 'Excellent' ? '#065F46' : school.status === 'Above Average' ? '#1E40AF' : school.status === 'Average' ? '#92400E' : school.status === 'Below Average' ? '#991B1B' : '#6B7280',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {school.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <i className={`mdi mdi-trending-${school.trend}`} 
                       style={{ fontSize: '18px', color: school.trend === 'improving' ? '#10B981' : school.trend === 'declining' ? '#EF4444' : '#6B7280' }}></i>
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
