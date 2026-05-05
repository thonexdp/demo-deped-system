import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const pmesBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: '214 Teachers', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: '89% Completed', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

const pmesData = [
  { id: 1, school: 'San Juan Elementary School', district: 'District I', totalteachers: 18, completed: 16, pending: 2, rate: '88.9%', status: 'On Track', lastupdated: '2024-04-15' },
  { id: 2, school: 'Rizal High School', district: 'District II', totalteachers: 32, completed: 30, pending: 2, rate: '93.8%', status: 'On Track', lastupdated: '2024-04-14' },
  { id: 3, school: 'Laguna Integrated School', district: 'District I', totalteachers: 25, completed: 22, pending: 3, rate: '88.0%', status: 'On Track', lastupdated: '2024-04-13' },
  { id: 4, school: 'Quezon National High School', district: 'District III', totalteachers: 28, completed: 24, pending: 4, rate: '85.7%', status: 'Needs Attention', lastupdated: '2024-04-12' },
  { id: 5, school: 'Makati Science High School', district: 'District II', totalteachers: 22, completed: 20, pending: 2, rate: '90.9%', status: 'On Track', lastupdated: '2024-04-11' },
  { id: 6, school: 'Pasay Central Elementary', district: 'District III', totalteachers: 19, completed: 15, pending: 4, rate: '78.9%', status: 'Needs Attention', lastupdated: '2024-04-10' },
  { id: 7, school: 'Manila Science High School', district: 'District I', totalteachers: 26, completed: 25, pending: 1, rate: '96.2%', status: 'Excellent', lastupdated: '2024-04-09' },
  { id: 8, school: 'Caloocan Elementary School', district: 'District II', totalteachers: 21, completed: 18, pending: 3, rate: '85.7%', status: 'Needs Attention', lastupdated: '2024-04-08' },
]

export default function PmesDivisionViewPage() {
  return (
    <DashboardLayout
      activePath="/admin/pmes-division"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'PMES - Division View',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-level Performance Management and Evaluation System (PMES) oversight and reporting.',
      }}
      heading="PMES - Division View"
      subheading="Performance Management • Screen 47 / 47"
      topBadges={pmesBadges}
      contextText="Admin / SDO • Division PMES monitoring"
      contextNotice="Performance Management and Evaluation System (PMES) tracking for all teachers in the division."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>PMES Division Overview</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Monitor and track the Performance Management and Evaluation System (PMES) completion rates across all schools and teachers in the division.</p>
        
        <div className="row">
          {[
            ['24', 'Schools'],
            ['214', 'Total Teachers'],
            ['190', 'Completed'],
            ['89%', 'Completion Rate'],
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
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>PMES Completion Summary</h2>
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
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#065F46', marginBottom: '4px' }}>190</div>
            <div style={{ fontSize: '14px', color: '#065F46', fontWeight: 600 }}>Completed</div>
            <div style={{ fontSize: '12px', color: '#047857' }}>88.8% of teachers</div>
          </div>
          <div style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#92400E', marginBottom: '4px' }}>24</div>
            <div style={{ fontSize: '14px', color: '#92400E', fontWeight: 600 }}>In Progress</div>
            <div style={{ fontSize: '12px', color: '#B45309' }}>11.2% of teachers</div>
          </div>
          <div style={{ backgroundColor: '#DBEAFE', border: '1px solid #93C5FD', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#1E40AF', marginBottom: '4px' }}>5</div>
            <div style={{ fontSize: '14px', color: '#1E40AF', fontWeight: 600 }}>Schools On Track</div>
            <div style={{ fontSize: '12px', color: '#2563EB' }}>20.8% of schools</div>
          </div>
          <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#991B1B', marginBottom: '4px' }}>3</div>
            <div style={{ fontSize: '14px', color: '#991B1B', fontWeight: 600 }}>Need Attention</div>
            <div style={{ fontSize: '12px', color: '#B91C1C' }}>12.5% of schools</div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>School PMES Details</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Districts</option>
              <option>District I</option>
              <option>District II</option>
              <option>District III</option>
            </select>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Status</option>
              <option>Excellent</option>
              <option>On Track</option>
              <option>Needs Attention</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>School Name</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>District</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Total Teachers</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Completed</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Pending</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Completion Rate</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Last Updated</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pmesData.map((school) => (
                <tr key={school.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px' }}>
                    <div style={{ fontWeight: 600, color: '#111827', fontSize: '14px' }}>{school.school}</div>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{school.district}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.totalteachers}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.completed}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center', color: '#4B5563', fontSize: '14px' }}>{school.pending}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <div style={{ fontWeight: 600, color: '#111827', fontSize: '14px' }}>{school.rate}</div>
                  </td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: school.status === 'Excellent' ? '#ECFDF5' : school.status === 'On Track' ? '#DBEAFE' : '#FEE2E2',
                      color: school.status === 'Excellent' ? '#065F46' : school.status === 'On Track' ? '#1E40AF' : '#991B1B',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {school.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{school.lastupdated}</td>
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
