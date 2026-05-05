import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const attendanceBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'October 2024', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: '94.2% Rate', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

const attendanceData = [
  { id: 1, school: 'San Juan Elementary School', type: 'Elementary', district: 'District I', totalstudents: 456, present: 435, absent: 21, rate: '95.4%', tardy: 8, status: 'Excellent', trend: 'stable' },
  { id: 2, school: 'Rizal High School', type: 'Secondary', district: 'District II', totalstudents: 892, present: 823, absent: 69, rate: '92.3%', tardy: 34, status: 'Good', trend: 'improving' },
  { id: 3, school: 'Laguna Integrated School', type: 'Integrated', district: 'District I', totalstudents: 623, present: 598, absent: 25, rate: '96.0%', tardy: 12, status: 'Excellent', trend: 'stable' },
  { id: 4, school: 'Quezon National High School', type: 'Secondary', district: 'District III', totalstudents: 734, present: 671, absent: 63, rate: '91.4%', tardy: 28, status: 'Good', trend: 'declining' },
  { id: 5, school: 'Makati Science High School', type: 'Secondary', district: 'District II', totalstudents: 512, present: 498, absent: 14, rate: '97.3%', tardy: 6, status: 'Excellent', trend: 'improving' },
  { id: 6, school: 'Pasay Central Elementary', type: 'Elementary', district: 'District III', totalstudents: 0, present: 0, absent: 0, rate: '0%', tardy: 0, status: 'Inactive', trend: 'stable' },
]

const weeklyData = [
  { week: 'Week 1', attendance: '95.2%', tardy: 156, absent: 89, trend: 'stable' },
  { week: 'Week 2', attendance: '94.8%', tardy: 142, absent: 97, trend: 'stable' },
  { week: 'Week 3', attendance: '93.7%', tardy: 168, absent: 112, trend: 'declining' },
  { week: 'Week 4', attendance: '94.2%', tardy: 134, absent: 98, trend: 'improving' },
]

const districtData = [
  { district: 'District I', schools: 8, totalstudents: 1278, attendance: '95.8%', tardy: 67, absent: 42, status: 'Excellent' },
  { district: 'District II', schools: 9, totalstudents: 1456, attendance: '93.9%', tardy: 89, absent: 78, status: 'Good' },
  { district: 'District III', schools: 7, totalstudents: 983, attendance: '92.7%', tardy: 72, absent: 68, status: 'Good' },
]

export default function AttendanceAnalyticsPage() {
  return (
    <DashboardLayout
      activePath="/admin/attendance-analytics"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'Attendance Analytics',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-wide attendance monitoring, trend analysis, and intervention tracking.',
      }}
      heading="Attendance Analytics"
      subheading="Student Attendance • Screen 50 / 47"
      topBadges={attendanceBadges}
      contextText="Admin / SDO • Division attendance monitoring"
      contextNotice="Comprehensive attendance analytics and monitoring across all schools in the division."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Attendance Analytics Overview</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Monitor student attendance patterns, tardiness rates, and absenteeism trends across all schools in the division for October 2024.</p>
        
        <div className="row">
          {[
            ['3,717', 'Total Students'],
            ['94.2%', 'Attendance Rate'],
            ['228', 'Total Absent'],
            ['89.4%', 'Target Achievement'],
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
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Monthly Attendance Summary</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>October 2024</option>
              <option>September 2024</option>
              <option>August 2024</option>
            </select>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-download" style={{ marginRight: '4px' }}></i>
              Export Report
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#065F46', marginBottom: '4px' }}>94.2%</div>
            <div style={{ fontSize: '14px', color: '#065F46', fontWeight: 600 }}>Attendance Rate</div>
            <div style={{ fontSize: '12px', color: '#047857' }}>Above target (95%)</div>
          </div>
          <div style={{ backgroundColor: '#DBEAFE', border: '1px solid #93C5FD', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#1E40AF', marginBottom: '4px' }}>3,489</div>
            <div style={{ fontSize: '14px', color: '#1E40AF', fontWeight: 600 }}>Present</div>
            <div style={{ fontSize: '12px', color: '#2563EB' }}>93.8% of total</div>
          </div>
          <div style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#92400E', marginBottom: '4px' }}>228</div>
            <div style={{ fontSize: '14px', color: '#92400E', fontWeight: 600 }}>Absent</div>
            <div style={{ fontSize: '12px', color: '#B45309' }}>6.1% of total</div>
          </div>
          <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#991B1B', marginBottom: '4px' }}>600</div>
            <div style={{ fontSize: '14px', color: '#991B1B', fontWeight: 600 }}>Tardy Cases</div>
            <div style={{ fontSize: '12px', color: '#B91C1C' }}>16.1% of total</div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>Weekly Attendance Trends</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Week</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Attendance Rate</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Tardy Cases</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Absent</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Trend</th>
              </tr>
            </thead>
            <tbody>
              {weeklyData.map((week) => (
                <tr key={week.week} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{week.week}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{week.attendance}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{week.tardy}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{week.absent}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: week.trend === 'stable' ? '#F3F4F6' : week.trend === 'improving' ? '#ECFDF5' : '#FEE2E2',
                      color: week.trend === 'stable' ? '#6B7280' : week.trend === 'improving' ? '#065F46' : '#991B1B',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {week.trend}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>District Performance</h2>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>District</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Schools</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Total Students</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Attendance Rate</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Tardy</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Absent</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {districtData.map((district) => (
                <tr key={district.district} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{district.district}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{district.schools}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{district.totalstudents.toLocaleString()}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{district.attendance}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{district.tardy}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{district.absent}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: district.status === 'Excellent' ? '#ECFDF5' : '#DBEAFE',
                      color: district.status === 'Excellent' ? '#065F46' : '#1E40AF',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {district.status}
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
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>School Attendance Details</h2>
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
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Present</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Absent</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Attendance Rate</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Tardy</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Trend</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((school) => (
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
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.present.toLocaleString()}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.absent}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{school.rate}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.tardy}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: school.status === 'Excellent' ? '#ECFDF5' : school.status === 'Good' ? '#DBEAFE' : '#FEE2E2',
                      color: school.status === 'Excellent' ? '#065F46' : school.status === 'Good' ? '#1E40AF' : '#991B1B',
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
