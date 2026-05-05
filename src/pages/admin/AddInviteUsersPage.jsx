import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const inviteBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'User Management', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Bulk Invite', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

const pendingInvites = [
  { id: 1, email: 'new.teacher@deped.edu.ph', role: 'Teacher', school: 'San Juan Elementary School', invited: '2024-10-15 10:30', expires: '2024-10-22', status: 'Pending' },
  { id: 2, email: 'parent.invite@parent.edu.ph', role: 'Parent', school: 'Rizal High School', invited: '2024-10-14 15:45', expires: '2024-10-21', status: 'Pending' },
  { id: 3, email: 'head.teacher@deped.edu.ph', role: 'Head Teacher', school: 'Laguna Integrated School', invited: '2024-10-13 09:20', expires: '2024-10-20', status: 'Expired' },
]

export default function AddInviteUsersPage() {
  return (
    <DashboardLayout
      activePath="/admin/add-invite-users"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'Add / Invite Users',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-wide user invitation and account creation management.',
      }}
      heading="Add / Invite Users"
      subheading="User Management • Screen 54 / 47"
      topBadges={inviteBadges}
      contextText="Admin / SDO • User invitation system"
      contextNotice="Create new user accounts and send invitation emails to teachers, parents, and staff."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Add / Invite Users</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Create new user accounts and send invitation emails to teachers, parents, and administrative staff across the division.</p>
        
        <div className="row">
          {[
            ['12', 'Pending Invites'],
            ['3', 'Expired'],
            ['45', 'Sent This Month'],
            ['89%', 'Acceptance Rate'],
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
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>Single User Invitation</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Email Address *</label>
            <input 
              type="email" 
              className="form-control" 
              placeholder="user@deped.edu.ph"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>User Role *</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="">Select Role</option>
              <option value="teacher">Teacher</option>
              <option value="head-teacher">Head Teacher</option>
              <option value="parent">Parent</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>School *</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="">Select School</option>
              <option value="san-juan">San Juan Elementary School</option>
              <option value="rizal">Rizal High School</option>
              <option value="laguna">Laguna Integrated School</option>
              <option value="quezon">Quezon National High School</option>
              <option value="makati">Makati Science High School</option>
              <option value="pasay">Pasay Central Elementary</option>
            </select>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn" style={{ background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, padding: '10px 20px' }}>
            <i className="mdi mdi-email-send" style={{ marginRight: '6px' }}></i>
            Send Invitation
          </button>
          <button className="btn" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '10px 20px' }}>
            <i className="mdi mdi-account-plus" style={{ marginRight: '6px' }}></i>
            Create Account Manually
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>Bulk User Invitation</h2>
        
        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Upload CSV File</label>
          <div style={{ border: '2px dashed #D1D5DB', borderRadius: '8px', padding: '40px', textAlign: 'center', backgroundColor: '#F9FAFB' }}>
            <i className="mdi mdi-file-upload" style={{ fontSize: '48px', color: '#9CA3AF', marginBottom: '12px' }}></i>
            <p style={{ color: '#6B7280', fontSize: '16px', marginBottom: '8px' }}>Drop your CSV file here or click to browse</p>
            <p style={{ color: '#9CA3AF', fontSize: '14px', marginBottom: '16px' }}>File should contain: Email, Role, School, Name (optional)</p>
            <button className="btn" style={{ background: 'white', color: '#4B5563', border: '1px solid #D1D5DB', borderRadius: '6px', fontWeight: 500, padding: '8px 16px' }}>
              Choose File
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <button className="btn btn-sm" style={{ background: 'white', color: '#1E3A8A', border: '1px solid #D1D5DB', borderRadius: '6px', fontWeight: 500, padding: '6px 12px', marginRight: '8px' }}>
              <i className="mdi mdi-download" style={{ marginRight: '4px' }}></i>
              Download Template
            </button>
            <button className="btn btn-sm" style={{ background: 'white', color: '#1E3A8A', border: '1px solid #D1D5DB', borderRadius: '6px', fontWeight: 500, padding: '6px 12px' }}>
              <i className="mdi mdi-help-circle" style={{ marginRight: '4px' }}></i>
              Format Guide
            </button>
          </div>
          <button className="btn" style={{ background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, padding: '10px 20px' }}>
            <i className="mdi mdi-email-send-multiple" style={{ marginRight: '6px' }}></i>
            Send Bulk Invitations
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Pending Invitations</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Status</option>
              <option>Pending</option>
              <option>Expired</option>
              <option>Accepted</option>
            </select>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-refresh" style={{ marginRight: '4px' }}></i>
              Resend All
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Email</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Role</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>School</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Invited</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Expires</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {pendingInvites.map((invite) => (
                <tr key={invite.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{invite.email}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: invite.role === 'Teacher' ? '#DBEAFE' : invite.role === 'Head Teacher' ? '#FEF3C7' : invite.role === 'Parent' ? '#EDE9FE' : '#F3F4F6',
                      color: invite.role === 'Teacher' ? '#1E40AF' : invite.role === 'Head Teacher' ? '#92400E' : invite.role === 'Parent' ? '#5B21B6' : '#6B7280',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {invite.role}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{invite.school}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{invite.invited}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{invite.expires}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: invite.status === 'Pending' ? '#FEF3C7' : invite.status === 'Expired' ? '#FEE2E2' : '#ECFDF5',
                      color: invite.status === 'Pending' ? '#92400E' : invite.status === 'Expired' ? '#991B1B' : '#065F46',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {invite.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '4px 8px', marginRight: '4px' }}>
                      <i className="mdi mdi-refresh" style={{ fontSize: '14px', color: '#6B7280' }}></i>
                    </button>
                    <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '4px 8px' }}>
                      <i className="mdi mdi-cancel" style={{ fontSize: '14px', color: '#EF4444' }}></i>
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
