import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'
import { useState } from 'react'
import './DivisionHeadPage.css'

const divisionBadges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: '24 Schools', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Accounts: 214', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

const enhancedStats = [
  { 
    value: '24', 
    label: 'Schools in division',
    icon: 'mdi mdi-school-outline',
    color: '#3B82F6',
    trend: { value: '+2', direction: 'up', label: 'from last year' }
  },
  { 
    value: '81.9%', 
    label: 'Division avg MPS',
    icon: 'mdi mdi-chart-line',
    color: '#10B981',
    trend: { value: '+3.2%', direction: 'up', label: 'improvement' }
  },
  { 
    value: '214', 
    label: 'Total accounts',
    icon: 'mdi mdi-account-multiple',
    color: '#8B5CF6',
    trend: { value: '+18', direction: 'up', label: 'new this month' }
  },
  { 
    value: '18/24', 
    label: 'PIR submissions',
    icon: 'mdi mdi-file-document-check',
    color: '#F59E0B',
    trend: { value: '75%', direction: 'neutral', label: 'completion rate' }
  },
]

const quickActions = [
  { label: 'Generate Division Report', icon: 'mdi mdi-file-chart', color: '#3B82F6', path: '/admin/smea-pir-division' },
  { label: 'Add New School', icon: 'mdi mdi-plus-circle', color: '#10B981', path: '/admin/add-school' },
  { label: 'User Management', icon: 'mdi mdi-account-cog', color: '#8B5CF6', path: '/admin/all-accounts' },
  { label: 'Data Export', icon: 'mdi mdi-database-export', color: '#F59E0B', path: '/admin/data-export' },
]

const recentActivity = [
  { time: '2 hours ago', action: 'Central Elementary School submitted PIR', type: 'submission' },
  { time: '4 hours ago', action: '3 new teacher accounts created', type: 'user' },
  { time: '6 hours ago', action: 'Division report generated successfully', type: 'report' },
  { time: '1 day ago', action: 'System maintenance completed', type: 'system' },
]

const topSchools = [
  { name: 'Central Elementary School', mps: '94.2%', pir: 'Submitted', status: 'excellent' },
  { name: 'North High School', mps: '89.7%', pir: 'Submitted', status: 'good' },
  { name: 'South Elementary School', mps: '87.3%', pir: 'Pending', status: 'good' },
  { name: 'East Integrated School', mps: '85.1%', pir: 'Submitted', status: 'average' },
]

export default function DivisionHeadPage() {
  const [selectedView, setSelectedView] = useState('overview')

  return (
    <DashboardLayout
      activePath="/admin/division-head"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'All Schools',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-level analytics, user management, exports, and audit controls.',
      }}
      heading="Division Admin Dashboard"
      subheading="Division Analytics • Screen 44 / 47"
      topBadges={divisionBadges}
      contextText="Admin / SDO • Division-wide access"
      contextNotice="Back-office role with analytics, accounts, exports, and audit logs."
    >
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Division Overview</h1>
          <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '0' }}>Track all 24 schools, PIR submission status, and manage system-wide accounts and data workflows.</p>
        </div>
        <div className="d-flex gap-2">
          <button 
            className="btn btn-sm view-toggle-btn"
            style={{ 
              background: selectedView === 'overview' ? '#3B82F6' : 'white',
              color: selectedView === 'overview' ? 'white' : '#4B5563',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontWeight: 600
            }}
            onClick={() => setSelectedView('overview')}
          >
            Overview
          </button>
          <button 
            className="btn btn-sm view-toggle-btn"
            style={{ 
              background: selectedView === 'analytics' ? '#3B82F6' : 'white',
              color: selectedView === 'analytics' ? 'white' : '#4B5563',
              border: '1px solid #E5E7EB',
              borderRadius: '8px',
              fontWeight: 600
            }}
            onClick={() => setSelectedView('analytics')}
          >
            Analytics
          </button>
        </div>
      </div>

      {/* Enhanced Stats Cards */}
      <div className="row mb-4">
        {enhancedStats.map((stat, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-3">
            <div 
              className="stat-card enhanced-stat-card"
              style={{ 
                background: 'white',
                border: '1px solid #E5E7EB',
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 24px rgba(0, 0, 0, 0.12)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div style={{ 
                  background: `${stat.color}15`, 
                  color: stat.color, 
                  borderRadius: '12px', 
                  width: '48px', 
                  height: '48px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  <i className={stat.icon}></i>
                </div>
                <div className="d-flex align-items-center" style={{ fontSize: '12px' }}>
                  <i 
                    className={`mdi mdi-${stat.trend.direction === 'up' ? 'trending-up' : 'trending-neutral'}`}
                    style={{ 
                      color: stat.trend.direction === 'up' ? '#10B981' : '#6B7280',
                      marginRight: '4px'
                    }}
                  ></i>
                  <span style={{ color: stat.trend.direction === 'up' ? '#10B981' : '#6B7280', fontWeight: 600 }}>
                    {stat.trend.value}
                  </span>
                </div>
              </div>
              <div className="stat-kpi" style={{ fontSize: '28px', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>
                {stat.value}
              </div>
              <div className="stat-label" style={{ fontSize: '13px', fontWeight: 600, color: '#6B7280', marginBottom: '4px' }}>
                {stat.label}
              </div>
              <div style={{ fontSize: '11px', color: '#9CA3AF' }}>
                {stat.trend.label}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="row mb-4">
        <div className="col-12">
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>Quick Actions</h3>
          <div className="row">
            {quickActions.map((action, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-3">
                <button
                  className="btn w-100 quick-action-btn"
                  style={{
                    background: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px',
                    padding: '16px',
                    textAlign: 'left',
                    transition: 'all 0.3s ease',
                    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 4px 16px ${action.color}20`
                    e.currentTarget.style.borderColor = action.color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.03)'
                    e.currentTarget.style.borderColor = '#E5E7EB'
                  }}
                >
                  <div className="d-flex align-items-center">
                    <div style={{ 
                      background: `${action.color}15`, 
                      color: action.color, 
                      borderRadius: '10px', 
                      width: '40px', 
                      height: '40px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '18px',
                      marginRight: '12px'
                    }}>
                      <i className={action.icon}></i>
                    </div>
                    <div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: '#111827', marginBottom: '2px' }}>
                        {action.label}
                      </div>
                      <div style={{ fontSize: '11px', color: '#6B7280' }}>
                        Click to proceed
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="row">
        {/* Recent Activity */}
        <div className="col-lg-4 mb-4">
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>Recent Activity</h3>
            <div className="activity-feed">
              {recentActivity.map((activity, index) => (
                <div key={index} className="d-flex mb-3" style={{ paddingBottom: '12px', borderBottom: index < recentActivity.length - 1 ? '1px solid #F3F4F6' : 'none' }}>
                  <div style={{ 
                    background: activity.type === 'submission' ? '#10B98115' : 
                               activity.type === 'user' ? '#3B82F615' : 
                               activity.type === 'report' ? '#8B5CF615' : '#F59E0B15',
                    color: activity.type === 'submission' ? '#10B981' : 
                           activity.type === 'user' ? '#3B82F6' : 
                           activity.type === 'report' ? '#8B5CF6' : '#F59E0B',
                    borderRadius: '8px', 
                    width: '32px', 
                    height: '32px', 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'center',
                    fontSize: '14px',
                    marginRight: '12px',
                    flexShrink: 0
                  }}>
                    <i className={`mdi mdi-${
                      activity.type === 'submission' ? 'file-document-check' : 
                      activity.type === 'user' ? 'account-plus' : 
                      activity.type === 'report' ? 'chart-box' : 'cog'
                    }`}></i>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', color: '#374151', marginBottom: '2px', lineHeight: 1.4 }}>
                      {activity.action}
                    </div>
                    <div style={{ fontSize: '11px', color: '#9CA3AF' }}>
                      {activity.time}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Schools Performance */}
        <div className="col-lg-8 mb-4">
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '0' }}>Top Performing Schools</h3>
              <button className="btn btn-sm" style={{ 
                background: '#F3F4F6', 
                border: '1px solid #E5E7EB', 
                borderRadius: '8px', 
                fontSize: '12px', 
                fontWeight: 600,
                color: '#4B5563'
              }}>
                View All Schools <i className="mdi mdi-arrow-right" style={{ marginLeft: '4px' }}></i>
              </button>
            </div>
            <div className="table-responsive">
              <table className="table" style={{ marginBottom: '0' }}>
                <thead>
                  <tr>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px' }}>School Name</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>MPS</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>PIR Status</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {topSchools.map((school, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #F9FAFB' }}>
                      <td style={{ padding: '16px 8px', fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                        {school.name}
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span style={{ 
                          fontSize: '14px', 
                          fontWeight: 700, 
                          color: parseFloat(school.mps) >= 90 ? '#10B981' : parseFloat(school.mps) >= 85 ? '#3B82F6' : '#F59E0B'
                        }}>
                          {school.mps}
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span className={`badge ${
                          school.pir === 'Submitted' ? 'bg-success' : 'bg-warning'
                        }`} style={{ fontSize: '11px', fontWeight: 600 }}>
                          {school.pir}
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: school.status === 'excellent' ? '#10B981' : 
                                 school.status === 'good' ? '#3B82F6' : '#F59E0B',
                          background: school.status === 'excellent' ? '#10B98115' : 
                                    school.status === 'good' ? '#3B82F615' : '#F59E0B15',
                          padding: '4px 8px',
                          borderRadius: '12px'
                        }}>
                          {school.status.charAt(0).toUpperCase() + school.status.slice(1)}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>

      {/* Analytics View (Conditional) */}
      {selectedView === 'analytics' && (
        <div className="row mt-4">
          <div className="col-12">
            <div style={{ 
              background: 'white', 
              border: '1px solid #E5E7EB', 
              borderRadius: '16px', 
              padding: '24px',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
            }}>
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '20px' }}>Division Analytics</h3>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="chart-placeholder">
                    <div style={{ textAlign: 'center', color: '#6B7280' }}>
                      <i className="mdi mdi-chart-line" style={{ fontSize: '48px', marginBottom: '8px' }}></i>
                      <div>Performance Trends Chart</div>
                      <div style={{ fontSize: '12px' }}>Interactive chart coming soon</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="chart-placeholder">
                    <div style={{ textAlign: 'center', color: '#6B7280' }}>
                      <i className="mdi mdi-chart-pie" style={{ fontSize: '48px', marginBottom: '8px' }}></i>
                      <div>Submission Status</div>
                      <div style={{ fontSize: '12px' }}>PIR completion breakdown</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </DashboardLayout>
  )
}
