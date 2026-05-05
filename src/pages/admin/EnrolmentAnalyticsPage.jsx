import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const enrolmentBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'SY 2024-2025', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: '3,217 Students', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

const enrolmentData = [
  { id: 1, school: 'San Juan Elementary School', type: 'Elementary', district: 'District I', target: 480, enrolled: 456, rate: '95.0%', capacity: '95%', status: 'Optimal', trend: 'stable' },
  { id: 2, school: 'Rizal High School', type: 'Secondary', district: 'District II', target: 900, enrolled: 892, rate: '99.1%', capacity: '98.9%', status: 'Optimal', trend: 'increasing' },
  { id: 3, school: 'Laguna Integrated School', type: 'Integrated', district: 'District I', target: 650, enrolled: 623, rate: '95.8%', capacity: '95.8%', status: 'Optimal', trend: 'stable' },
  { id: 4, school: 'Quezon National High School', type: 'Secondary', district: 'District III', target: 750, enrolled: 734, rate: '97.9%', capacity: '97.9%', status: 'Optimal', trend: 'increasing' },
  { id: 5, school: 'Makati Science High School', type: 'Secondary', district: 'District II', target: 500, enrolled: 512, rate: '102.4%', capacity: '102.4%', status: 'Over Capacity', trend: 'increasing' },
  { id: 6, school: 'Pasay Central Elementary', type: 'Elementary', district: 'District III', target: 400, enrolled: 0, rate: '0%', capacity: '0%', status: 'Inactive', trend: 'stable' },
]

const gradeLevelData = [
  { grade: 'Grade 1', students: 285, capacity: 300, utilization: '95%' },
  { grade: 'Grade 2', students: 292, capacity: 300, utilization: '97.3%' },
  { grade: 'Grade 3', students: 278, capacity: 300, utilization: '92.7%' },
  { grade: 'Grade 4', students: 267, capacity: 300, utilization: '89%' },
  { grade: 'Grade 5', students: 254, capacity: 300, utilization: '84.7%' },
  { grade: 'Grade 6', students: 241, capacity: 300, utilization: '80.3%' },
  { grade: 'Grade 7', students: 412, capacity: 450, utilization: '91.6%' },
  { grade: 'Grade 8', students: 389, capacity: 450, utilization: '86.4%' },
  { grade: 'Grade 9', students: 376, capacity: 450, utilization: '83.6%' },
  { grade: 'Grade 10', students: 368, capacity: 450, utilization: '81.8%' },
]

export default function EnrolmentAnalyticsPage() {
  return (
    <DashboardLayout
      activePath="/admin/enrolment-analytics"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'Enrolment Analytics',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-wide enrolment monitoring, capacity planning, and demographic analysis.',
      }}
      heading="Enrolment Analytics"
      subheading="Student Analytics • Screen 48 / 47"
      topBadges={enrolmentBadges}
      contextText="Admin / SDO • Division enrolment monitoring"
      contextNotice="Comprehensive enrolment analytics and capacity planning for all schools in the division."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Enrolment Analytics Overview</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Monitor student enrolment trends, capacity utilization, and demographic distribution across all schools in the division for School Year 2024-2025.</p>
        
        <div className="row">
          {[
            ['3,217', 'Total Students'],
            ['24', 'Active Schools'],
            ['95.8%', 'Avg Enrolment Rate'],
            ['96.2%', 'Avg Capacity Util'],
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
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Enrolment Summary</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>SY 2024-2025</option>
              <option>SY 2023-2024</option>
              <option>SY 2022-2023</option>
            </select>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-download" style={{ marginRight: '4px' }}></i>
              Export Report
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#065F46', marginBottom: '4px' }}>3,217</div>
            <div style={{ fontSize: '14px', color: '#065F46', fontWeight: 600 }}>Total Enrolled</div>
            <div style={{ fontSize: '12px', color: '#047857' }}>+2.3% from last year</div>
          </div>
          <div style={{ backgroundColor: '#DBEAFE', border: '1px solid #93C5FD', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#1E40AF', marginBottom: '4px' }}>95.8%</div>
            <div style={{ fontSize: '14px', color: '#1E40AF', fontWeight: 600 }}>Target Achievement</div>
            <div style={{ fontSize: '12px', color: '#2563EB' }}>Above division target</div>
          </div>
          <div style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#92400E', marginBottom: '4px' }}>1</div>
            <div style={{ fontSize: '14px', color: '#92400E', fontWeight: 600 }}>Over Capacity</div>
            <div style={{ fontSize: '12px', color: '#B45309' }}>Needs attention</div>
          </div>
          <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#991B1B', marginBottom: '4px' }}>1</div>
            <div style={{ fontSize: '14px', color: '#991B1B', fontWeight: 600 }}>Inactive</div>
            <div style={{ fontSize: '12px', color: '#B91C1C' }}>Under investigation</div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>Grade Level Distribution</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Grade Level</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Students</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Capacity</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Utilization</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {gradeLevelData.map((grade) => (
                <tr key={grade.grade} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{grade.grade}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{grade.students.toLocaleString()}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{grade.capacity.toLocaleString()}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                      <div style={{ 
                        width: '60px', 
                        height: '8px', 
                        backgroundColor: '#E5E7EB', 
                        borderRadius: '4px', 
                        overflow: 'hidden',
                        position: 'relative'
                      }}>
                        <div style={{ 
                          width: `${parseFloat(grade.utilization)}%`, 
                          height: '100%', 
                          backgroundColor: parseFloat(grade.utilization) > 95 ? '#EF4444' : parseFloat(grade.utilization) > 85 ? '#F59E0B' : '#10B981',
                          borderRadius: '4px'
                        }}></div>
                      </div>
                      <span style={{ fontSize: '14px', fontWeight: 600, color: '#111827' }}>{grade.utilization}</span>
                    </div>
                  </td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: parseFloat(grade.utilization) > 95 ? '#FEE2E2' : parseFloat(grade.utilization) > 85 ? '#FEF3C7' : '#ECFDF5',
                      color: parseFloat(grade.utilization) > 95 ? '#991B1B' : parseFloat(grade.utilization) > 85 ? '#92400E' : '#065F46',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {parseFloat(grade.utilization) > 95 ? 'High' : parseFloat(grade.utilization) > 85 ? 'Moderate' : 'Optimal'}
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
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>School Enrolment Details</h2>
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
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Target</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Enrolled</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Achievement Rate</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Capacity Util</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Trend</th>
              </tr>
            </thead>
            <tbody>
              {enrolmentData.map((school) => (
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
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.target.toLocaleString()}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.enrolled.toLocaleString()}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{school.rate}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{school.capacity}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: school.status === 'Optimal' ? '#ECFDF5' : school.status === 'Over Capacity' ? '#FEE2E2' : '#F3F4F6',
                      color: school.status === 'Optimal' ? '#065F46' : school.status === 'Over Capacity' ? '#991B1B' : '#6B7280',
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
                       style={{ fontSize: '18px', color: school.trend === 'increasing' ? '#10B981' : school.trend === 'decreasing' ? '#EF4444' : '#6B7280' }}></i>
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
