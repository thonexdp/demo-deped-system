import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'

const schoolBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: '24 Schools', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Active: 23', style: { backgroundColor: '#ECFDF5', color: '#065F46', border: '1px solid #A7F3D0', padding: '6px 12px', fontSize: '12px' } },
]

const schoolsData = [
  { id: 1, name: 'San Juan Elementary School', type: 'Elementary', district: 'District I', status: 'Active', students: 456, teachers: 18, principal: 'Dr. Maria Santos' },
  { id: 2, name: 'Rizal High School', type: 'Secondary', district: 'District II', status: 'Active', students: 892, teachers: 32, principal: 'Prof. Juan Cruz' },
  { id: 3, name: 'Laguna Integrated School', type: 'Integrated', district: 'District I', status: 'Active', students: 623, teachers: 25, principal: 'Dr. Ana Reyes' },
  { id: 4, name: 'Quezon National High School', type: 'Secondary', district: 'District III', status: 'Active', students: 734, teachers: 28, principal: 'Prof. Carlos Mendoza' },
  { id: 5, name: 'Makati Science High School', type: 'Secondary', district: 'District II', status: 'Active', students: 512, teachers: 22, principal: 'Dr. Sofia Lee' },
  { id: 6, name: 'Pasay Central Elementary', type: 'Elementary', district: 'District III', status: 'Inactive', students: 0, teachers: 0, principal: 'Vacant' },
]

export default function AllSchoolsPage() {
  return (
    <DashboardLayout
      activePath="/admin/all-schools"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'All Schools',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-level school management, oversight, and administrative controls.',
      }}
      heading="All Schools"
      subheading="School Management • Screen 45 / 47"
      topBadges={schoolBadges}
      contextText="Admin / SDO • Division-wide school access"
      contextNotice="Comprehensive school directory with management capabilities."
    >
      <div style={{ marginBottom: '24px' }}>
        <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>All Schools</h1>
        <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '18px' }}>Manage and monitor all 24 schools in the division, including enrollment, staff, and operational status.</p>
        
        <div className="row">
          {[
            ['24', 'Total Schools'],
            ['23', 'Active Schools'],
            ['1', 'Inactive Schools'],
            ['3,217', 'Total Students'],
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

      <div style={{ backgroundColor: 'white', borderRadius: '12px', border: '1px solid #E5E7EB', padding: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ color: '#111827', fontSize: '20px', fontWeight: 700, margin: 0 }}>School Directory</h2>
          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn btn-sm" style={{ background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-plus" style={{ marginRight: '4px' }}></i>
              Add School
            </button>
            <button className="btn btn-sm" style={{ background: 'white', color: '#4B5563', border: '1px solid #E5E7EB', borderRadius: '8px', fontWeight: 600, padding: '8px 16px' }}>
              <i className="mdi mdi-download" style={{ marginRight: '4px' }}></i>
              Export
            </button>
          </div>
        </div>

        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid #E5E7EB' }}>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>School Name</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Type</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>District</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Status</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Students</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Teachers</th>
                <th style={{ padding: '12px', textAlign: 'left', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Principal</th>
                <th style={{ padding: '12px', textAlign: 'center', fontSize: '12px', fontWeight: 600, color: '#6B7280', textTransform: 'uppercase' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {schoolsData.map((school) => (
                <tr key={school.id} style={{ borderBottom: '1px solid #F3F4F6' }}>
                  <td style={{ padding: '16px 12px' }}>
                    <div style={{ fontWeight: 600, color: '#111827', fontSize: '14px' }}>{school.name}</div>
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
                  <td style={{ padding: '16px 12px' }}>
                    <span style={{ 
                      backgroundColor: school.status === 'Active' ? '#ECFDF5' : '#FEF2F2',
                      color: school.status === 'Active' ? '#065F46' : '#991B1B',
                      padding: '4px 8px',
                      borderRadius: '4px',
                      fontSize: '12px',
                      fontWeight: 500
                    }}>
                      {school.status}
                    </span>
                  </td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{school.students.toLocaleString()}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{school.teachers}</td>
                  <td style={{ padding: '16px 12px', color: '#4B5563', fontSize: '14px' }}>{school.principal}</td>
                  <td style={{ padding: '16px 12px', textAlign: 'center' }}>
                    <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '4px 8px', marginRight: '4px' }}>
                      <i className="mdi mdi-eye" style={{ fontSize: '14px', color: '#6B7280' }}></i>
                    </button>
                    <button className="btn btn-sm" style={{ background: 'transparent', border: '1px solid #E5E7EB', borderRadius: '4px', padding: '4px 8px' }}>
                      <i className="mdi mdi-pencil" style={{ fontSize: '14px', color: '#6B7280' }}></i>
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
