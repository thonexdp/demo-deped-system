import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const accountsBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: '214 Total', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: '89% Active', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

const accountsData = [
  { id: 1, name: 'Maria Santos', email: 'maria.santos@deped.edu.ph', role: 'Teacher', school: 'San Juan Elementary School', district: 'District I', status: 'Active', lastlogin: '2024-10-15 09:30', created: '2023-06-15' },
  { id: 2, name: 'Juan Cruz', email: 'juan.cruz@deped.edu.ph', role: 'Teacher', school: 'Rizal High School', district: 'District II', status: 'Active', lastlogin: '2024-10-15 08:45', created: '2023-07-20' },
  { id: 3, name: 'Ana Reyes', email: 'ana.reyes@deped.edu.ph', role: 'Head Teacher', school: 'Laguna Integrated School', district: 'District I', status: 'Active', lastlogin: '2024-10-14 15:20', created: '2023-05-10' },
  { id: 4, name: 'Carlos Mendoza', email: 'carlos.mendoza@deped.edu.ph', role: 'Teacher', school: 'Quezon National High School', district: 'District III', status: 'Inactive', lastlogin: '2024-09-28 14:15', created: '2023-08-12' },
  { id: 5, name: 'Sofia Lee', email: 'sofia.lee@deped.edu.ph', role: 'Head Teacher', school: 'Makati Science High School', district: 'District II', status: 'Active', lastlogin: '2024-10-15 10:00', created: '2023-04-08' },
  { id: 6, name: 'Roberto Garcia', email: 'roberto.garcia@deped.edu.ph', role: 'Parent', school: 'San Juan Elementary School', district: 'District I', status: 'Active', lastlogin: '2024-10-14 19:30', created: '2023-09-05' },
  { id: 7, name: 'Elena Rodriguez', email: 'elena.rodriguez@deped.edu.ph', role: 'Teacher', school: 'Pasay Central Elementary', district: 'District III', status: 'Active', lastlogin: '2024-10-15 07:45', created: '2023-10-20' },
  { id: 8, name: 'Miguel Torres', email: 'miguel.torres@deped.edu.ph', role: 'Parent', school: 'Rizal High School', district: 'District II', status: 'Pending', lastlogin: 'Never', created: '2024-10-10' },
]

export default function AllAccountsPage() {
  return (
    <DashboardLayout
      activePath="/admin/all-accounts"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'All Accounts',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-wide user account management, access control, and user administration.',
      }}
      heading="All Accounts"
      subheading="User Management • Screen 51 / 47"
      topBadges={accountsBadges}
      contextText="Admin / SDO • Division user management"
      contextNotice="Comprehensive user account management and access control across all roles and schools."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>All User Accounts</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Manage and monitor all user accounts across the division, including teachers, parents, and administrative staff.</p>
        
        <div className="row">
          {[
            ['214', 'Total Accounts'],
            ['190', 'Active Users'],
            ['18', 'Teachers'],
            ['6', 'Head Teachers'],
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
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Account Overview</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn btn-sm" style={{ background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-account-plus" style={{ marginRight: '4px' }}></i>
              Add User
            </button>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-download" style={{ marginRight: '4px' }}></i>
              Export
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#065F46', marginBottom: '4px' }}>190</div>
            <div style={{ fontSize: '14px', color: '#065F46', fontWeight: 600 }}>Active Users</div>
            <div style={{ fontSize: '12px', color: '#047857' }}>88.8% of total</div>
          </div>
          <div style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#92400E', marginBottom: '4px' }}>18</div>
            <div style={{ fontSize: '14px', color: '#92400E', fontWeight: 600 }}>Teachers</div>
            <div style={{ fontSize: '12px', color: '#B45309' }}>8.4% of total</div>
          </div>
          <div style={{ backgroundColor: '#DBEAFE', border: '1px solid #93C5FD', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#1E40AF', marginBottom: '4px' }}>6</div>
            <div style={{ fontSize: '14px', color: '#1E40AF', fontWeight: 600 }}>Head Teachers</div>
            <div style={{ fontSize: '12px', color: '#2563EB' }}>2.8% of total</div>
          </div>
          <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#991B1B', marginBottom: '4px' }}>1</div>
            <div style={{ fontSize: '14px', color: '#991B1B', fontWeight: 600 }}>Pending</div>
            <div style={{ fontSize: '12px', color: '#B91C1C' }}>Awaiting activation</div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>User Account List</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Roles</option>
              <option>Teacher</option>
              <option>Head Teacher</option>
              <option>Parent</option>
              <option>Admin</option>
            </select>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Status</option>
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
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Name</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Email</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Role</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>School</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>District</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Last Login</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Created</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {accountsData.map((account) => (
                <tr key={account.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px' }}>
                    <div style={{ fontWeight: 600, color: '#111827', fontSize: '14px' }}>{account.name}</div>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{account.email}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: account.role === 'Teacher' ? '#DBEAFE' : account.role === 'Head Teacher' ? '#FEF3C7' : account.role === 'Parent' ? '#EDE9FE' : '#F3F4F6',
                      color: account.role === 'Teacher' ? '#1E40AF' : account.role === 'Head Teacher' ? '#92400E' : account.role === 'Parent' ? '#5B21B6' : '#6B7280',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {account.role}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{account.school}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{account.district}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: account.status === 'Active' ? '#ECFDF5' : account.status === 'Inactive' ? '#FEE2E2' : '#FEF3C7',
                      color: account.status === 'Active' ? '#065F46' : account.status === 'Inactive' ? '#991B1B' : '#92400E',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {account.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{account.lastlogin}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{account.created}</td>
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
