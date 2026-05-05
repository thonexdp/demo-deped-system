import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const auditBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Security Logs', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Last 24 Hours', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

const auditData = [
  { id: 1, timestamp: '2024-10-15 10:30:15', user: 'Admin User', action: 'LOGIN', module: 'Authentication', details: 'Successful login from IP 192.168.1.100', severity: 'info', status: 'Success' },
  { id: 2, timestamp: '2024-10-15 10:28:42', user: 'Maria Santos', action: 'GRADE_UPDATE', module: 'Academic', details: 'Updated grades for Grade 5 Mathematics - Section A', severity: 'info', status: 'Success' },
  { id: 3, timestamp: '2024-10-15 10:25:18', user: 'Juan Cruz', action: 'EXPORT_DATA', module: 'Reports', details: 'Exported student attendance report for October 2024', severity: 'info', status: 'Success' },
  { id: 4, timestamp: '2024-10-15 10:22:33', user: 'Unknown', action: 'LOGIN_FAILED', module: 'Authentication', details: 'Failed login attempt for user admin@deped.edu.ph', severity: 'warning', status: 'Failed' },
  { id: 5, timestamp: '2024-10-15 10:18:47', user: 'Admin User', action: 'USER_CREATE', module: 'User Management', details: 'Created new teacher account for carlos.mendoza@deped.edu.ph', severity: 'info', status: 'Success' },
  { id: 6, timestamp: '2024-10-15 10:15:22', user: 'Ana Reyes', action: 'ATTENDANCE_UPDATE', module: 'Attendance', details: 'Updated attendance for Grade 7 - Class 2024-2025', severity: 'info', status: 'Success' },
  { id: 7, timestamp: '2024-10-15 10:12:05', user: 'System', action: 'BACKUP_COMPLETE', module: 'System', details: 'Automated daily backup completed successfully', severity: 'info', status: 'Success' },
  { id: 8, timestamp: '2024-10-15 10:08:31', user: 'Roberto Garcia', action: 'PERMISSION_DENIED', module: 'Security', details: 'Attempted access to restricted admin functions', severity: 'danger', status: 'Failed' },
]

export default function AuditLogsPage() {
  return (
    <DashboardLayout
      activePath="/admin/audit-logs"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'Audit Logs',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-wide audit trail monitoring, security logging, and compliance tracking.',
      }}
      heading="Audit Logs"
      subheading="Security & Compliance • Screen 57 / 47"
      topBadges={auditBadges}
      contextText="Admin / SDO • Security audit monitoring"
      contextNotice="Monitor system activities, user actions, and security events across the division."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Audit Logs</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Monitor system activities, user actions, and security events across the entire division for compliance and security purposes.</p>
        
        <div className="row">
          {[
            ['1,247', 'Total Events'],
            ['892', 'Today'],
            ['15', 'Security Alerts', 'danger'],
            ['98.2%', 'System Uptime'],
          ].map(([value, label, color]) => (
            <div key={label} className="col-md-3 col-sm-6 mb-3">
              <div className="stat-card">
                <div className={`stat-kpi ${color === 'danger' ? 'text-danger' : ''}`}>{value}</div>
                <div className="stat-label">{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Security Overview</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn btn-sm" style={{ background: '#EF4444', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-shield-alert" style={{ marginRight: '4px' }}></i>
              Security Alert
            </button>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-download" style={{ marginRight: '4px' }}></i>
              Export Logs
            </button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', marginBottom: '20px' }}>
          <div style={{ backgroundColor: '#ECFDF5', border: '1px solid #A7F3D0', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#065F46', marginBottom: '4px' }}>892</div>
            <div style={{ fontSize: '14px', color: '#065F46', fontWeight: 600 }}>Today's Events</div>
            <div style={{ fontSize: '12px', color: '#047857' }}>Normal activity</div>
          </div>
          <div style={{ backgroundColor: '#FEF3C7', border: '1px solid #FDE68A', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#92400E', marginBottom: '4px' }}>23</div>
            <div style={{ fontSize: '14px', color: '#92400E', fontWeight: 600 }}>Failed Logins</div>
            <div style={{ fontSize: '12px', color: '#B45309' }}>Last 24 hours</div>
          </div>
          <div style={{ backgroundColor: '#DBEAFE', border: '1px solid #93C5FD', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#1E40AF', marginBottom: '4px' }}>156</div>
            <div style={{ fontSize: '14px', color: '#1E40AF', fontWeight: 600 }}>Data Exports</div>
            <div style={{ fontSize: '12px', color: '#2563EB' }}>This month</div>
          </div>
          <div style={{ backgroundColor: '#FEE2E2', border: '1px solid #FCA5A5', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
            <div style={{ fontSize: '24px', fontWeight: 800, color: '#991B1B', marginBottom: '4px' }}>15</div>
            <div style={{ fontSize: '14px', color: '#991B1B', fontWeight: 600 }}>Security Issues</div>
            <div style={{ fontSize: '12px', color: '#B91C1C' }}>Requires attention</div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Activity Log</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Actions</option>
              <option>LOGIN</option>
              <option>LOGIN_FAILED</option>
              <option>GRADE_UPDATE</option>
              <option>EXPORT_DATA</option>
              <option>USER_CREATE</option>
              <option>ATTENDANCE_UPDATE</option>
              <option>PERMISSION_DENIED</option>
            </select>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option value="">All Severity</option>
              <option>info</option>
              <option>warning</option>
              <option>danger</option>
            </select>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Custom Range</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Timestamp</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>User</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Action</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Module</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Details</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Severity</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {auditData.map((log) => (
                <tr key={log.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{log.timestamp}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{log.user}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: log.action === 'LOGIN' ? '#DBEAFE' : log.action === 'LOGIN_FAILED' ? '#FEE2E2' : log.action === 'GRADE_UPDATE' ? '#EDE9FE' : '#F3F4F6',
                      color: log.action === 'LOGIN' ? '#1E40AF' : log.action === 'LOGIN_FAILED' ? '#991B1B' : log.action === 'GRADE_UPDATE' ? '#5B21B6' : '#6B7280',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {log.action}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{log.module}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px', maxWidth: '300px' }}>{log.details}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: log.severity === 'info' ? '#ECFDF5' : log.severity === 'warning' ? '#FEF3C7' : '#FEE2E2',
                      color: log.severity === 'info' ? '#065F46' : log.severity === 'warning' ? '#92400E' : '#991B1B',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {log.severity}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: log.status === 'Success' ? '#ECFDF5' : '#FEE2E2',
                      color: log.status === 'Success' ? '#065F46' : '#991B1B',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {log.status}
                    </span>
                  </td>
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

        <div style={{ marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #E5E7EB', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ color: '#6B7280', fontSize: '14px' }}>
            Showing 8 of 1,247 recent events
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '6px', fontWeight: 500, padding: '6px 12px' }}>
              <i className="mdi mdi-chevron-left" style={{ marginRight: '4px' }}></i>
              Previous
            </button>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '6px', fontWeight: 500, padding: '6px 12px' }}>
              Next
              <i className="mdi mdi-chevron-right" style={{ marginLeft: '4px' }}></i>
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
