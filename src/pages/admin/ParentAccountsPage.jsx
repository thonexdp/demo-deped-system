import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const parentBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: '156 Parents', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: '87% Active', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

const parentData = [
  { id: 1, name: 'Roberto Garcia', email: 'roberto.garcia@parent.edu.ph', phone: '0912-345-6789', students: 2, school: 'San Juan Elementary School', district: 'District I', status: 'Active', lastlogin: '2024-10-14 19:30', created: '2023-09-05' },
  { id: 2, name: 'Miguel Torres', email: 'miguel.torres@parent.edu.ph', phone: '0913-456-7890', students: 1, school: 'Rizal High School', district: 'District II', status: 'Pending', lastlogin: 'Never', created: '2024-10-10' },
  { id: 3, name: 'Carmela Santos', email: 'carmela.santos@parent.edu.ph', phone: '0914-567-8901', students: 3, school: 'Laguna Integrated School', district: 'District I', status: 'Active', lastlogin: '2024-10-15 08:15', created: '2023-07-12' },
  { id: 4, name: 'Antonio Reyes', email: 'antonio.reyes@parent.edu.ph', phone: '0915-678-9012', students: 1, school: 'Quezon National High School', district: 'District III', status: 'Active', lastlogin: '2024-10-13 20:45', created: '2023-08-20' },
  { id: 5, name: 'Patricia Cruz', email: 'patricia.cruz@parent.edu.ph', phone: '0916-789-0123', students: 2, school: 'Makati Science High School', district: 'District II', status: 'Active', lastlogin: '2024-10-15 07:30', created: '2023-06-18' },
  { id: 6, name: 'Jose Mendoza', email: 'jose.mendoza@parent.edu.ph', phone: '0917-890-1234', students: 1, school: 'Pasay Central Elementary', district: 'District III', status: 'Inactive', lastlogin: '2024-09-15 18:20', created: '2023-10-25' },
  { id: 7, name: 'Lourdes Fernandez', email: 'lourdes.fernandez@parent.edu.ph', phone: '0918-901-2345', students: 2, school: 'San Juan Elementary School', district: 'District I', status: 'Active', lastlogin: '2024-10-14 21:00', created: '2023-05-30' },
  { id: 8, name: 'Ricardo Lee', email: 'ricardo.lee@parent.edu.ph', phone: '0919-012-3456', students: 1, school: 'Rizal High School', district: 'District II', status: 'Active', lastlogin: '2024-10-15 06:45', created: '2023-11-08' },
]

export default function ParentAccountsPage() {
  return (
    <DashboardLayout
      activePath="/admin/parent-accounts"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'Parent Accounts',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-wide parent account management, student linkage, and access control.',
      }}
      heading="Parent Accounts"
      subheading="User Management • Screen 53 / 47"
      topBadges={parentBadges}
      contextText="Admin / SDO • Parent account management"
      contextNotice="Comprehensive parent account management and student-parent linkage across all schools."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Parent Accounts</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Manage and monitor all parent accounts across the division, including student linkage, contact information, and access permissions.</p>
        
        <div className="row">
          {[
            ['156', 'Total Parents'],
            ['136', 'Active Parents'],
            ['1', 'Pending'],
            ['19', 'Inactive'],
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
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Parent Account Overview</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn btn-sm" style={{ background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-account-plus" style={{ marginRight: '4px' }}></i>
              Add Parent
            </button>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-download" style={{ marginRight: '4px' }}></i>
              Export List
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#065F46', marginBottom: '4px' }}>136</div>
            <div style={{ fontSize: '14px', color: '#065F46', fontWeight: 600 }}>Active Parents</div>
            <div style={{ fontSize: '12px', color: '#047857' }}>87.2% of total</div>
          </div>
          <div style={{ backgroundColor: '#DBEAFE', border: '1px solid #93C5FD', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#1E40AF', marginBottom: '4px' }}>287</div>
            <div style={{ fontSize: '14px', color: '#1E40AF', fontWeight: 600 }}>Linked Students</div>
            <div style={{ fontSize: '12px', color: '#2563EB' }}>Avg 1.8 per parent</div>
          </div>
          <div style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#92400E', marginBottom: '4px' }}>3</div>
            <div style={{ fontSize: '14px', color: '#92400E', fontWeight: 600 }}>District I</div>
            <div style={{ fontSize: '12px', color: '#B45309' }}>Highest concentration</div>
          </div>
          <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#991B1B', marginBottom: '4px' }}>20</div>
            <div style={{ fontSize: '14px', color: '#991B1B', fontWeight: 600 }}>Need Attention</div>
            <div style={{ fontSize: '12px', color: '#B91C1C' }}>Inactive or pending</div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Parent Account List</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option value="">All Status</option>
              <option>Active</option>
              <option>Inactive</option>
              <option>Pending</option>
            </select>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Districts</option>
              <option>District I</option>
              <option>District II</option>
              <option>District III</option>
            </select>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Schools</option>
              <option>San Juan Elementary School</option>
              <option>Rizal High School</option>
              <option>Laguna Integrated School</option>
              <option>Quezon National High School</option>
              <option>Makati Science High School</option>
              <option>Pasay Central Elementary</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Name</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Email</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Phone</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Students</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>School</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>District</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Last Login</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {parentData.map((parent) => (
                <tr key={parent.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px' }}>
                    <div style={{ fontWeight: 600, color: '#111827', fontSize: '14px' }}>{parent.name}</div>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{parent.email}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{parent.phone}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <span style={{ 
                      backgroundColor: '#EDE9FE',
                      color: '#5B21B6',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {parent.students}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{parent.school}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{parent.district}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: parent.status === 'Active' ? '#ECFDF5' : parent.status === 'Inactive' ? '#FEE2E2' : '#FEF3C7',
                      color: parent.status === 'Active' ? '#065F46' : parent.status === 'Inactive' ? '#991B1B' : '#92400E',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {parent.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{parent.lastlogin}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '4px 8px', marginRight: '4px' }}>
                      <i className="mdi mdi-eye" style={{ fontSize: '14px', color: '#6B7280' }}></i>
                    </button>
                    <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '4px 8px', marginRight: '4px' }}>
                      <i className="mdi mdi-pencil" style={{ fontSize: '14px', color: '#6B7280' }}></i>
                    </button>
                    <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '4px 8px' }}>
                      <i className="mdi mdi-lock-reset" style={{ fontSize: '14px', color: '#6B7280' }}></i>
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
