import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const settingsBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'System Config', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Last Updated: Oct 15', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

export default function SettingsPage() {
  return (
    <DashboardLayout
      activePath="/admin/settings"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'Settings',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-wide system configuration, policy management, and administrative settings.',
      }}
      heading="System Settings"
      subheading="System Configuration • Screen 55 / 47"
      topBadges={settingsBadges}
      contextText="Admin / SDO • System configuration"
      contextNotice="Configure system-wide settings, policies, and administrative parameters for the division."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>System Settings</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Manage system-wide configuration, policies, and administrative settings for the DepEd ONE platform.</p>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>General Settings</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Division Name</label>
            <input 
              type="text" 
              className="form-control" 
              defaultValue="Manila Division"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Academic Year</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="2024-2025" selected>2024-2025</option>
              <option value="2023-2024">2023-2024</option>
              <option value="2022-2023">2022-2023</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Default Timezone</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="Asia/Manila" selected>Asia/Manila (UTC+8)</option>
              <option value="UTC">UTC</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>System Language</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="en" selected>English</option>
              <option value="fil">Filipino</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>Security Settings</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Password Policy</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="standard" selected>Standard (8 chars, 1 uppercase, 1 number)</option>
              <option value="strong">Strong (12 chars, special chars)</option>
              <option value="basic">Basic (6 chars minimum)</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Session Timeout (minutes)</label>
            <input 
              type="number" 
              className="form-control" 
              defaultValue="30"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Maximum Login Attempts</label>
            <input 
              type="number" 
              className="form-control" 
              defaultValue="5"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Two-Factor Authentication</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="optional" selected>Optional</option>
              <option value="required">Required for Admin</option>
              <option value="disabled">Disabled</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>Notification Settings</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Email Notifications</label>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <input type="checkbox" defaultChecked style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>Student grade updates</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <input type="checkbox" defaultChecked style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>Attendance alerts</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <input type="checkbox" defaultChecked style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>System announcements</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>Security notifications</label>
            </div>
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>SMS Notifications</label>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <input type="checkbox" defaultChecked style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>Emergency alerts</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '12px' }}>
              <input type="checkbox" style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>Attendance notifications</label>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="checkbox" style={{ marginRight: '8px' }} />
              <label style={{ fontSize: '14px', color: '#4B5563' }}>Grade updates</label>
            </div>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px', marginBottom: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>Grade Settings</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Passing Grade (%)</label>
            <input 
              type="number" 
              className="form-control" 
              defaultValue="75"
              min="0"
              max="100"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Honor Grade Threshold (%)</label>
            <input 
              type="number" 
              className="form-control" 
              defaultValue="90"
              min="0"
              max="100"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Grading System</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="kto12" selected>K-12 DepEd Standards</option>
              <option value="custom">Custom</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Auto-approve Grades</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="no" selected>No - Require approval</option>
              <option value="yes">Yes - Auto-approve</option>
            </select>
          </div>
        </div>
      </div>

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px' }}>
        <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: '0 0 20px 0' }}>System Maintenance</h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Backup Schedule</label>
            <select className="form-select" style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}>
              <option value="daily" selected>Daily at 2:00 AM</option>
              <option value="weekly">Weekly on Sunday</option>
              <option value="monthly">Monthly on 1st</option>
            </select>
          </div>
          
          <div>
            <label style={{ display: 'block', fontSize: '14px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>Data Retention Period (years)</label>
            <input 
              type="number" 
              className="form-control" 
              defaultValue="7"
              min="1"
              max="20"
              style={{ width: '100%', padding: '10px 12px', border: '1px solid #D1D5DB', borderRadius: '6px', fontSize: '14px' }}
            />
          </div>
        </div>

        <div style={{ marginTop: '24px', paddingTop: '24px', borderTop: '1px solid #E5E7EB' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <button className="btn btn-sm" style={{ background: '#EF4444', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 500, padding: '8px 16px', marginRight: '8px' }}>
                <i className="mdi mdi-database" style={{ marginRight: '4px' }}></i>
                Backup Now
              </button>
              <button className="btn btn-sm" style={{ background: '#F59E0B', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 500, padding: '8px 16px', marginRight: '8px' }}>
                <i className="mdi mdi-cog-refresh" style={{ marginRight: '4px' }}></i>
                Clear Cache
              </button>
              <button className="btn btn-sm" style={{ background: '#6B7280', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 500, padding: '8px 16px' }}>
                <i className="mdi mdi-restart" style={{ marginRight: '4px' }}></i>
                Restart System
              </button>
            </div>
            <div>
              <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '6px', fontWeight: 500, padding: '8px 16px', marginRight: '8px' }}>
                <i className="mdi mdi-undo" style={{ marginRight: '4px' }}></i>
                Reset to Default
              </button>
              <button className="btn btn-sm" style={{ background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '6px', fontWeight: 600, padding: '8px 16px' }}>
                <i className="mdi mdi-content-save" style={{ marginRight: '4px' }}></i>
                Save Settings
              </button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
