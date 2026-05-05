import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const exportBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Data Export', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Last Export: Oct 14', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

const recentExports = [
  { id: 1, type: 'Student Grades', format: 'Excel', scope: 'All Schools', requested: '2024-10-14 15:30', completed: '2024-10-14 15:32', status: 'Completed', size: '2.4 MB', user: 'Admin User' },
  { id: 2, type: 'Attendance Report', format: 'PDF', scope: 'District I', requested: '2024-10-14 14:15', completed: '2024-10-14 14:18', status: 'Completed', size: '1.8 MB', user: 'Admin User' },
  { id: 3, type: 'Teacher PMES', format: 'CSV', scope: 'All Schools', requested: '2024-10-13 10:20', completed: '2024-10-13 10:25', status: 'Completed', size: '856 KB', user: 'Admin User' },
  { id: 4, type: 'Enrolment Data', format: 'Excel', scope: 'Division', requested: '2024-10-13 09:45', completed: '-', status: 'Processing', size: '-', user: 'Admin User' },
]

export default function DataExportPage() {
  return (
    <DashboardLayout
      activePath="/admin/data-export"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'Data Export',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-wide data export, report generation, and analytics extraction.',
      }}
      heading="Data Export"
      subheading="System Data • Screen 56 / 47"
      topBadges={exportBadges}
      contextText="Admin / SDO • Data export management"
      contextNotice="Export system data, generate reports, and manage data extraction requests across the division."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Data Export Center</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Export system data, generate reports, and manage data extraction requests for the entire division.</p>
        
        <div className="row">
          {[
            ['24', 'Total Exports'],
            ['18', 'Completed'],
            ['3', 'Processing'],
            ['12.4 MB', 'Total Size'],
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
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>New Export Request</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '20px', marginBottom: '20px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Export Type *</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="">Select Export Type</option>
              <option value="grades">Student Grades</option>
              <option value="attendance">Attendance Reports</option>
              <option value="enrolment">Enrolment Data</option>
              <option value="pmes">Teacher PMES</option>
              <option value="smea-pir">SMEA / PIR Reports</option>
              <option value="users">User Accounts</option>
              <option value="schools">School Information</option>
              <option value="custom">Custom Report</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Export Format *</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="excel">Excel (.xlsx)</option>
              <option value="csv">CSV (.csv)</option>
              <option value="pdf">PDF Report</option>
              <option value="json">JSON (.json)</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Data Scope *</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="division">Entire Division</option>
              <option value="district-i">District I</option>
              <option value="district-ii">District II</option>
              <option value="district-iii">District III</option>
              <option value="school">Specific School</option>
            </select>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Date Range</label>
          <div style={{ display: 'flex', gap: '12px' }}>
            <input 
              type="date" 
              className="form-control" 
              defaultValue="2024-10-01"
              style={{ flex: 1, padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}
            />
            <span style={{ display: 'flex', alignItems: 'center', color: '#6B7280' }}>to</span>
            <input 
              type="date" 
              className="form-control" 
              defaultValue="2024-10-15"
              style={{ flex: 1, padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Additional Options</label>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" defaultChecked style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>Include charts and graphs</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" defaultChecked style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>Include summary statistics</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>Exclude sensitive data</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>Compress file</label>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '12px' }}>
          <button className="btn" style={{ background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, padding: '10px 20px' }}>
            <i className="mdi mdi-download" style={{ marginRight: '6px' }}></i>
            Generate Export
          </button>
          <button className="btn" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '10px 20px' }}>
            <i className="mdi mdi-clock" style={{ marginRight: '6px' }}></i>
            Schedule Export
          </button>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>Quick Export Templates</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '16px' }}>
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', padding: '16px', cursor: 'pointer', transition: 'all 0.2s' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="mdi mdi-chart-box" style={{ fontSize: '24px', color: '#1E3A8A', marginRight: '12px' }}></i>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>Monthly Report</h3>
            </div>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 12px 0' }}>Complete monthly division report with all metrics</p>
            <button className="btn btn-sm" style={{ background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 500, padding: '6px 12px' }}>
              Export Now
            </button>
          </div>
          
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', padding: '16px', cursor: 'pointer', transition: 'all 0.2s' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="mdi mdi-school" style={{ fontSize: '24px', color: '#059669', marginRight: '12px' }}></i>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>School Performance</h3>
            </div>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 12px 0' }}>All schools academic performance data</p>
            <button className="btn btn-sm" style={{ background: '#059669', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 500, padding: '6px 12px' }}>
              Export Now
            </button>
          </div>
          
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', padding: '16px', cursor: 'pointer', transition: 'all 0.2s' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="mdi mdi-account-group" style={{ fontSize: '24px', color: '#7C3AED', marginRight: '12px' }}></i>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>User Directory</h3>
            </div>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 12px 0' }}>Complete user accounts and contact list</p>
            <button className="btn btn-sm" style={{ background: '#7C3AED', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 500, padding: '6px 12px' }}>
              Export Now
            </button>
          </div>
          
          <div style={{ border: '1px solid #E5E7EB', borderRadius: '8px', padding: '16px', cursor: 'pointer', transition: 'all 0.2s' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
              <i className="mdi mdi-calendar-check" style={{ fontSize: '24px', color: '#DC2626', marginRight: '12px' }}></i>
              <h3 style={{ fontSize: '16px', fontWeight: 600, color: '#111827', margin: 0 }}>Attendance Summary</h3>
            </div>
            <p style={{ fontSize: '14px', color: '#6B7280', margin: '0 0 12px 0' }}>Monthly attendance statistics and trends</p>
            <button className="btn btn-sm" style={{ background: '#DC2626', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 500, padding: '6px 12px' }}>
              Export Now
            </button>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>Recent Exports</h2>
          <div style={{ display: 'flex', gap: '8px' }}>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option>All Types</option>
              <option>Student Grades</option>
              <option>Attendance Reports</option>
              <option>Teacher PMES</option>
              <option>Enrolment Data</option>
            </select>
            <select className="form-select form-select-sm" style={{ width: 'auto' }}>
              <option value="">All Status</option>
              <option>Completed</option>
              <option>Processing</option>
              <option>Failed</option>
            </select>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Export Type</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Format</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Scope</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Requested</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Completed</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Size</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>User</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentExports.map((exportItem) => (
                <tr key={exportItem.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px', fontWeight: 600, color: '#111827', fontSize: '14px' }}>{exportItem.type}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: exportItem.format === 'Excel' ? '#DBEAFE' : exportItem.format === 'PDF' ? '#FEF3C7' : '#EDE9FE',
                      color: exportItem.format === 'Excel' ? '#1E40AF' : exportItem.format === 'PDF' ? '#92400E' : '#5B21B6',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {exportItem.format}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{exportItem.scope}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{exportItem.requested}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{exportItem.completed}</td>
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: exportItem.status === 'Completed' ? '#ECFDF5' : exportItem.status === 'Processing' ? '#FEF3C7' : '#FEE2E2',
                      color: exportItem.status === 'Completed' ? '#065F46' : exportItem.status === 'Processing' ? '#92400E' : '#991B1B',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {exportItem.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{exportItem.size}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{exportItem.user}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    {exportItem.status === 'Completed' ? (
                      <button className="btn btn-sm" style={{ background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px' }}>
                        <i className="mdi mdi-download" style={{ fontSize: '14px' }}></i>
                      </button>
                    ) : exportItem.status === 'Processing' ? (
                      <button className="btn btn-sm" style={{ background: '#F59E0B', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px' }}>
                        <i className="mdi mdi-clock" style={{ fontSize: '14px' }}></i>
                      </button>
                    ) : (
                      <button className="btn btn-sm" style={{ background: '#EF4444', color: 'white', border: 'none', borderRadius: '4px', padding: '4px 8px' }}>
                        <i className="mdi mdi-restart" style={{ fontSize: '14px' }}></i>
                      </button>
                    )}
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
