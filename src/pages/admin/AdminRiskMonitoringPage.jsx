import DashboardLayout from '../../components/DashboardLayout'
import { divisionNavSections } from './navigation'
import { useState } from 'react'
import './AdminRiskMonitoringPage.css'

const badges = [
  { text: 'Admin / SDO', style: { backgroundColor: '#FFFBEB', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Division Risk', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

const riskMetrics = [
  { 
    value: '42', 
    label: 'Active risk cases',
    icon: 'mdi mdi-alert-circle',
    color: '#EF4444',
    severity: 'high',
    trend: { value: '+8', direction: 'up', label: 'from last week' }
  },
  { 
    value: '11', 
    label: 'High severity cases',
    icon: 'mdi mdi-alert',
    color: '#DC2626',
    severity: 'critical',
    trend: { value: '+3', direction: 'up', label: 'requires attention' }
  },
  { 
    value: '79%', 
    label: 'Interventions within SLA',
    icon: 'mdi mdi-clock-check',
    color: '#F59E0B',
    severity: 'medium',
    trend: { value: '-5%', direction: 'down', label: 'below target' }
  },
  { 
    value: '6', 
    label: 'Escalation pending',
    icon: 'mdi mdi-arrow-up-circle',
    color: '#8B5CF6',
    severity: 'medium',
    trend: { value: '+2', direction: 'up', label: 'new this week' }
  },
]

const riskActions = [
  { label: 'Review High Risk Cases', icon: 'mdi mdi-list-status', color: '#EF4444', path: '/admin/high-risk-cases' },
  { label: 'Generate Risk Report', icon: 'mdi mdi-file-chart', color: '#F59E0B', path: '/admin/risk-report' },
  { label: 'Intervention Management', icon: 'mdi mdi-account-clock', color: '#3B82F6', path: '/admin/interventions' },
  { label: 'Risk Settings', icon: 'mdi mdi-cog', color: '#6B7280', path: '/admin/risk-settings' },
]

const atRiskLearners = [
  { 
    name: 'Juan Dela Cruz', 
    grade: 'Grade 8 Mabini', 
    riskScore: 92,
    riskLevel: 'critical',
    indicators: ['4 absences / 10 days', 'declining quiz trend', 'intervention overdue'],
    lastActivity: '2 hours ago'
  },
  { 
    name: 'Maria Santos', 
    grade: 'Grade 7 Rizal', 
    riskScore: 85,
    riskLevel: 'high',
    indicators: ['3 consecutive absences', 'failing 2 subjects'],
    lastActivity: '5 hours ago'
  },
  { 
    name: 'Jose Reyes', 
    grade: 'Grade 9 Bonifacio', 
    riskScore: 78,
    riskLevel: 'medium',
    indicators: ['frequent tardiness', 'declining participation'],
    lastActivity: '1 day ago'
  },
  { 
    name: 'Ana Garcia', 
    grade: 'Grade 10 Aguinaldo', 
    riskScore: 71,
    riskLevel: 'medium',
    indicators: ['missed assignments', 'low quiz scores'],
    lastActivity: '1 day ago'
  },
]

const schoolRiskBreakdown = [
  { school: 'Central Elementary School', totalStudents: 450, atRisk: 28, riskPercentage: 6.2, trend: 'increasing' },
  { school: 'North High School', totalStudents: 680, atRisk: 45, riskPercentage: 6.6, trend: 'stable' },
  { school: 'South Elementary School', totalStudents: 320, atRisk: 18, riskPercentage: 5.6, trend: 'decreasing' },
  { school: 'East Integrated School', totalStudents: 540, atRisk: 38, riskPercentage: 7.0, trend: 'increasing' },
  { school: 'West Elementary School', totalStudents: 380, atRisk: 22, riskPercentage: 5.8, trend: 'stable' },
]

const recentAlerts = [
  { time: '30 mins ago', type: 'critical', message: 'Juan Dela Cruz - Intervention overdue by 2 days' },
  { time: '2 hours ago', type: 'high', message: '3 new high-risk students identified at North High School' },
  { time: '4 hours ago', type: 'medium', message: 'SLA breach warning for 5 pending interventions' },
  { time: '6 hours ago', type: 'info', message: 'Risk model v2.4 completed daily scan successfully' },
  { time: '1 day ago', type: 'high', message: 'Maria Santos escalated to division-level intervention' },
]

export default function AdminRiskMonitoringPage() {
  const [selectedView, setSelectedView] = useState('overview')
  const [selectedSeverity, setSelectedSeverity] = useState('all')

  const getRiskColor = (level) => {
    switch(level) {
      case 'critical': return '#DC2626'
      case 'high': return '#EF4444'
      case 'medium': return '#F59E0B'
      case 'low': return '#10B981'
      default: return '#6B7280'
    }
  }

  const getRiskBgColor = (level) => {
    switch(level) {
      case 'critical': return '#FEE2E2'
      case 'high': return '#FEE2E2'
      case 'medium': return '#FEF3C7'
      case 'low': return '#D1FAE5'
      default: return '#F9FAFB'
    }
  }

  const getAlertIcon = (type) => {
    switch(type) {
      case 'critical': return 'mdi mdi-alert-circle'
      case 'high': return 'mdi mdi-alert'
      case 'medium': return 'mdi mdi-alert-outline'
      case 'info': return 'mdi mdi-information'
      default: return 'mdi mdi-information'
    }
  }

  return (
    <DashboardLayout
      activePath="/admin/risk-monitoring"
      roleNavSections={divisionNavSections}
      profile={{
        badgeCode: 'SD',
        title: 'Division Admin',
        subtitle: 'All Schools',
        rolePill: 'Admin / SDO',
        securityContext: 'Division-level risk monitoring and audit visibility.',
      }}
      heading="Early Warning Risk Dashboard"
      subheading="Division Risk Monitoring"
      topBadges={badges}
      contextText="Admin / SDO • Early Warning System"
      contextNotice="Division-wide risk monitoring across all schools."
    >
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>Risk Monitoring Dashboard</h1>
          <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '0' }}>ABC model risk view with explainable signals, severity routing, and intervention SLA tracking.</p>
        </div>
        <div className="d-flex gap-2">
          <select 
            className="form-select form-select-sm"
            style={{ 
              borderRadius: '8px', 
              border: '1px solid #E5E7EB',
              fontSize: '14px',
              fontWeight: 500
            }}
            value={selectedSeverity}
            onChange={(e) => setSelectedSeverity(e.target.value)}
          >
            <option value="all">All Severities</option>
            <option value="critical">Critical</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
          <button 
            className="btn btn-sm"
            style={{ 
              background: selectedView === 'overview' ? '#EF4444' : 'white',
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
            className="btn btn-sm"
            style={{ 
              background: selectedView === 'analytics' ? '#EF4444' : 'white',
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

      {/* Risk Metrics Cards */}
      <div className="row mb-4">
        {riskMetrics.map((metric, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-3">
            <div 
              className="risk-metric-card"
              style={{ 
                background: 'white',
                border: `2px solid ${metric.color}20`,
                borderRadius: '16px',
                padding: '20px',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s ease',
                cursor: 'pointer',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 8px 24px ${metric.color}25`
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = metric.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = `${metric.color}20`
              }}
            >
              <div className="d-flex justify-content-between align-items-start mb-3">
                <div style={{ 
                  background: `${metric.color}15`, 
                  color: metric.color, 
                  borderRadius: '12px', 
                  width: '48px', 
                  height: '48px', 
                  display: 'flex', 
                  alignItems: 'center', 
                  justifyContent: 'center',
                  fontSize: '20px'
                }}>
                  <i className={metric.icon}></i>
                </div>
                <div className="d-flex align-items-center" style={{ fontSize: '12px' }}>
                  <i 
                    className={`mdi mdi-trending-${metric.trend.direction === 'up' ? 'up' : 'down'}`}
                    style={{ 
                      color: metric.trend.direction === 'up' ? '#EF4444' : '#10B981',
                      marginRight: '4px'
                    }}
                  ></i>
                  <span style={{ color: metric.trend.direction === 'up' ? '#EF4444' : '#10B981', fontWeight: 600 }}>
                    {metric.trend.value}
                  </span>
                </div>
              </div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: '#111827', marginBottom: '4px' }}>
                {metric.value}
              </div>
              <div style={{ fontSize: '13px', fontWeight: 600, color: '#6B7280', marginBottom: '4px' }}>
                {metric.label}
              </div>
              <div style={{ fontSize: '11px', color: '#9CA3AF' }}>
                {metric.trend.label}
              </div>
              {metric.severity === 'critical' && (
                <div style={{
                  position: 'absolute',
                  top: '0',
                  right: '0',
                  background: metric.color,
                  color: 'white',
                  fontSize: '10px',
                  fontWeight: 700,
                  padding: '2px 8px',
                  borderBottomLeftRadius: '8px'
                }}>
                  CRITICAL
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Risk Actions */}
      <div className="row mb-4">
        <div className="col-12">
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>Risk Management Actions</h3>
          <div className="row">
            {riskActions.map((action, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-3">
                <button
                  className="btn w-100 risk-action-btn"
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
        {/* At-Risk Learners Queue */}
        <div className="col-lg-8 mb-4">
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '0' }}>At-Risk Learner Queue</h3>
              <button className="btn btn-sm" style={{ 
                background: '#FEE2E2', 
                border: '1px solid #FCA5A5', 
                borderRadius: '8px', 
                fontSize: '12px', 
                fontWeight: 600,
                color: '#DC2626'
              }}>
                View All Cases <i className="mdi mdi-arrow-right" style={{ marginLeft: '4px' }}></i>
              </button>
            </div>
            <div className="risk-learners-feed">
              {atRiskLearners.map((learner, index) => (
                <div key={index} className="risk-learner-item" style={{ 
                  background: getRiskBgColor(learner.riskLevel),
                  border: `1px solid ${getRiskColor(learner.riskLevel)}30`,
                  borderRadius: '12px', 
                  padding: '16px', 
                  marginBottom: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 12px ${getRiskColor(learner.riskLevel)}20`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-start">
                      <div style={{
                        background: getRiskColor(learner.riskLevel),
                        color: 'white',
                        borderRadius: '8px',
                        width: '32px',
                        height: '32px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '12px',
                        fontWeight: 800,
                        marginRight: '12px'
                      }}>
                        {learner.riskScore}
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>
                          {learner.name}
                        </div>
                        <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>
                          {learner.grade}
                        </div>
                        <div className="risk-indicators">
                          {learner.indicators.map((indicator, idx) => (
                            <div key={idx} style={{ 
                              fontSize: '11px', 
                              color: '#4B5563', 
                              marginBottom: '2px',
                              paddingLeft: '16px',
                              position: 'relative'
                            }}>
                              <i className="mdi mdi-chevron-right" style={{ 
                                position: 'absolute', 
                                left: '0', 
                                fontSize: '10px',
                                color: getRiskColor(learner.riskLevel)
                              }}></i>
                              {indicator}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className="badge" style={{
                        background: getRiskColor(learner.riskLevel),
                        color: 'white',
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '4px 8px',
                        borderRadius: '12px',
                        marginBottom: '4px',
                        display: 'inline-block'
                      }}>
                        {learner.riskLevel.toUpperCase()}
                      </span>
                      <div style={{ fontSize: '10px', color: '#9CA3AF' }}>
                        {learner.lastActivity}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Alerts & System Health */}
        <div className="col-lg-4 mb-4">
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>Recent Alerts</h3>
            <div className="risk-alerts-feed">
              {recentAlerts.map((alert, index) => (
                <div key={index} className="risk-alert-item" style={{ 
                  paddingBottom: '12px', 
                  borderBottom: index < recentAlerts.length - 1 ? '1px solid #F3F4F6' : 'none',
                  marginBottom: '12px'
                }}>
                  <div className="d-flex align-items-start">
                    <div style={{ 
                      background: alert.type === 'critical' ? '#FEE2E2' : 
                                 alert.type === 'high' ? '#FEE2E2' : 
                                 alert.type === 'medium' ? '#FEF3C7' : '#EFF6FF',
                      color: alert.type === 'critical' ? '#DC2626' : 
                             alert.type === 'high' ? '#EF4444' : 
                             alert.type === 'medium' ? '#F59E0B' : '#3B82F6',
                      borderRadius: '8px', 
                      width: '28px', 
                      height: '28px', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      fontSize: '14px',
                      marginRight: '10px',
                      flexShrink: 0
                    }}>
                      <i className={getAlertIcon(alert.type)}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', color: '#374151', marginBottom: '2px', lineHeight: 1.4 }}>
                        {alert.message}
                      </div>
                      <div style={{ fontSize: '10px', color: '#9CA3AF' }}>
                        {alert.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* System Health */}
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>System Health</h3>
            <div className="system-health-item">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Model version</span>
                <span className="badge" style={{ 
                  background: '#10B981', 
                  color: 'white', 
                  fontSize: '10px', 
                  fontWeight: 600 
                }}>v2.4</span>
              </div>
              <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '8px' }}>Policy-approved, active</div>
              
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Daily alerts</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#111827' }}>18</span>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Delivery rate</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#10B981' }}>96%</span>
              </div>
              
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Last scan</span>
                <span style={{ fontSize: '11px', color: '#6B7280' }}>6 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* School Risk Breakdown */}
      <div className="row">
        <div className="col-12">
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '0' }}>School Risk Breakdown</h3>
              <div className="d-flex gap-2">
                <button className="btn btn-sm" style={{ 
                  background: '#F3F4F6', 
                  border: '1px solid #E5E7EB', 
                  borderRadius: '8px', 
                  fontSize: '12px', 
                  fontWeight: 600,
                  color: '#4B5563'
                }}>
                  Export <i className="mdi mdi-download" style={{ marginLeft: '4px' }}></i>
                </button>
                <button className="btn btn-sm" style={{ 
                  background: '#F3F4F6', 
                  border: '1px solid #E5E7EB', 
                  borderRadius: '8px', 
                  fontSize: '12px', 
                  fontWeight: 600,
                  color: '#4B5563'
                }}>
                  Filter <i className="mdi mdi-filter" style={{ marginLeft: '4px' }}></i>
                </button>
              </div>
            </div>
            <div className="table-responsive">
              <table className="table" style={{ marginBottom: '0' }}>
                <thead>
                  <tr>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px' }}>School</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Total Students</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>At Risk</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Risk %</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Trend</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {schoolRiskBreakdown.map((school, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #F9FAFB' }}>
                      <td style={{ padding: '16px 8px', fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                        {school.school}
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center', fontSize: '13px', color: '#6B7280' }}>
                        {school.totalStudents.toLocaleString()}
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span style={{ 
                          fontSize: '14px', 
                          fontWeight: 700, 
                          color: school.atRisk > 30 ? '#DC2626' : school.atRisk > 20 ? '#F59E0B' : '#10B981'
                        }}>
                          {school.atRisk}
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span style={{ 
                          fontSize: '13px', 
                          fontWeight: 600,
                          color: school.riskPercentage > 6.5 ? '#DC2626' : school.riskPercentage > 6.0 ? '#F59E0B' : '#10B981'
                        }}>
                          {school.riskPercentage}%
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span className="d-flex align-items-center justify-content-center">
                          <i 
                            className={`mdi mdi-trending-${school.trend === 'increasing' ? 'up' : school.trend === 'decreasing' ? 'down' : 'neutral'}`}
                            style={{ 
                              color: school.trend === 'increasing' ? '#DC2626' : school.trend === 'decreasing' ? '#10B981' : '#6B7280',
                              fontSize: '16px',
                              marginRight: '4px'
                            }}
                          ></i>
                          <span style={{ 
                            fontSize: '11px',
                            fontWeight: 600,
                            color: school.trend === 'increasing' ? '#DC2626' : school.trend === 'decreasing' ? '#10B981' : '#6B7280'
                          }}>
                            {school.trend.charAt(0).toUpperCase() + school.trend.slice(1)}
                          </span>
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <button className="btn btn-sm" style={{ 
                          background: '#F3F4F6', 
                          border: '1px solid #E5E7EB', 
                          borderRadius: '6px', 
                          fontSize: '11px', 
                          fontWeight: 600,
                          color: '#4B5563'
                        }}>
                          View Details
                        </button>
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
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '20px' }}>Risk Analytics</h3>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="chart-placeholder risk-chart-placeholder">
                    <div style={{ textAlign: 'center', color: '#6B7280' }}>
                      <i className="mdi mdi-chart-line" style={{ fontSize: '48px', marginBottom: '8px' }}></i>
                      <div>Risk Trends Over Time</div>
                      <div style={{ fontSize: '12px' }}>Historical risk case analysis</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="chart-placeholder risk-chart-placeholder">
                    <div style={{ textAlign: 'center', color: '#6B7280' }}>
                      <i className="mdi mdi-chart-pie" style={{ fontSize: '48px', marginBottom: '8px' }}></i>
                      <div>Risk Distribution</div>
                      <div style={{ fontSize: '12px' }}>Severity level breakdown</div>
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
