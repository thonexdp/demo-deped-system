import DashboardLayout from '../../components/DashboardLayout'
import { headNavSections } from './navigation'
import { useState } from 'react'
import './HeadTeacherEarlyWarningPage.css'

const badges = [
  { text: 'Head Teacher / Principal', style: { backgroundColor: '#F5F3FF', color: '#5B21B6', border: '1px solid #DDD6FE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Risk View', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

const schoolRiskMetrics = [
  { 
    value: '18', 
    label: 'Active risk cases',
    icon: 'mdi mdi-alert-circle',
    color: '#DC2626',
    severity: 'high',
    trend: { value: '+3', direction: 'up', label: 'from last week' }
  },
  { 
    value: '5', 
    label: 'High severity cases',
    icon: 'mdi mdi-alert',
    color: '#991B1B',
    severity: 'critical',
    trend: { value: '+1', direction: 'up', label: 'requires immediate action' }
  },
  { 
    value: '85%', 
    label: 'Interventions within SLA',
    icon: 'mdi mdi-clock-check',
    color: '#F59E0B',
    severity: 'medium',
    trend: { value: '+8%', direction: 'up', label: 'improvement' }
  },
  { 
    value: '2', 
    label: 'Escalation pending',
    icon: 'mdi mdi-arrow-up-circle',
    color: '#7C3AED',
    severity: 'medium',
    trend: { value: '-1', direction: 'down', label: 'from last week' }
  },
]

const schoolRiskActions = [
  { label: 'Review High Risk Cases', icon: 'mdi mdi-list-status', color: '#DC2626', path: '/headteachers/high-risk-cases' },
  { label: 'Create Intervention Plan', icon: 'mdi mdi-clipboard-plus', color: '#F59E0B', path: '/headteachers/intervention-plan' },
  { label: 'Contact Parents', icon: 'mdi mdi-phone', color: '#7C3AED', path: '/headteachers/parent-contact' },
  { label: 'Generate Risk Report', icon: 'mdi mdi-file-chart', color: '#6B7280', path: '/headteachers/risk-report' },
]

const atRiskStudents = [
  { 
    name: 'Juan Dela Cruz', 
    grade: 'Grade 8 - Mabini', 
    riskScore: 92,
    riskLevel: 'critical',
    indicators: ['8 absences this month', 'failing 3 subjects', 'behavioral concerns'],
    lastActivity: '2 hours ago',
    interventionStatus: 'overdue',
    teacher: 'Ms. Santos'
  },
  { 
    name: 'Maria Reyes', 
    grade: 'Grade 6 - Rizal', 
    riskScore: 85,
    riskLevel: 'high',
    indicators: ['5 consecutive absences', 'declining grades', 'social withdrawal'],
    lastActivity: '4 hours ago',
    interventionStatus: 'in-progress',
    teacher: 'Mr. Cruz'
  },
  { 
    name: 'Jose Santos', 
    grade: 'Grade 7 - Bonifacio', 
    riskScore: 78,
    riskLevel: 'medium',
    indicators: ['frequent tardiness', 'missed assignments', 'low participation'],
    lastActivity: '1 day ago',
    interventionStatus: 'scheduled',
    teacher: 'Ms. Garcia'
  },
  { 
    name: 'Ana Lopez', 
    grade: 'Grade 5 - Aguinaldo', 
    riskScore: 71,
    riskLevel: 'medium',
    indicators: ['3 absences this week', 'failing 1 subject', 'attention issues'],
    lastActivity: '1 day ago',
    interventionStatus: 'pending',
    teacher: 'Mr. Reyes'
  },
]

const gradeLevelRiskBreakdown = [
  { grade: 'Grade 5', totalStudents: 28, atRisk: 3, riskPercentage: 10.7, trend: 'stable', teacher: 'Mr. Reyes' },
  { grade: 'Grade 6', totalStudents: 32, atRisk: 4, riskPercentage: 12.5, trend: 'increasing', teacher: 'Mr. Cruz' },
  { grade: 'Grade 7', totalStudents: 30, atRisk: 5, riskPercentage: 16.7, trend: 'increasing', teacher: 'Ms. Garcia' },
  { grade: 'Grade 8', totalStudents: 31, atRisk: 6, riskPercentage: 19.4, trend: 'decreasing', teacher: 'Ms. Santos' },
]

const schoolRiskAlerts = [
  { time: '30 mins ago', type: 'critical', message: 'Juan Dela Cruz - Intervention overdue by 3 days, requires immediate attention' },
  { time: '2 hours ago', type: 'high', message: 'Grade 6 - New at-risk student identified: Maria Reyes' },
  { time: '4 hours ago', type: 'medium', message: 'Parent meeting scheduled for Jose Santos - Tomorrow 2PM' },
  { time: '6 hours ago', type: 'info', message: 'Weekly risk scan completed - 18 total cases identified' },
  { time: '1 day ago', type: 'high', message: 'Grade 8 showing upward risk trend - 6 active cases' },
]

export default function HeadTeacherEarlyWarningPage() {
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

  const getInterventionStatusColor = (status) => {
    switch(status) {
      case 'overdue': return '#DC2626'
      case 'in-progress': return '#F59E0B'
      case 'scheduled': return '#7C3AED'
      case 'pending': return '#6B7280'
      default: return '#6B7280'
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
      activePath="/headteachers/early-warning"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'HT',
        title: 'School Head',
        subtitle: 'Whole-School Monitoring',
        rolePill: 'Head Teacher / Principal',
        securityContext: 'School-wide risk and intervention monitoring.',
      }}
      heading="Early Warning Risk Dashboard"
      subheading="Head Teacher Risk View"
      topBadges={badges}
      contextText="Head Teacher / Principal • Early Warning System"
      contextNotice="School-wide risk cases with escalation and SLA monitoring."
    >
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>School Risk Monitoring</h1>
          <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '0' }}>ABC model risk view with explainable signals, severity routing, and intervention SLA tracking for your school.</p>
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
              background: selectedView === 'overview' ? '#DC2626' : 'white',
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
              background: selectedView === 'analytics' ? '#DC2626' : 'white',
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

      {/* School Risk Metrics */}
      <div className="row mb-4">
        {schoolRiskMetrics.map((metric, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-3">
            <div 
              className="school-risk-metric-card"
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
                      color: metric.trend.direction === 'up' ? '#DC2626' : '#10B981',
                      marginRight: '4px'
                    }}
                  ></i>
                  <span style={{ color: metric.trend.direction === 'up' ? '#DC2626' : '#10B981', fontWeight: 600 }}>
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

      {/* School Risk Actions */}
      <div className="row mb-4">
        <div className="col-12">
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>Risk Management Actions</h3>
          <div className="row">
            {schoolRiskActions.map((action, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-3">
                <button
                  className="btn w-100 school-risk-action-btn"
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
        {/* At-Risk Students Queue */}
        <div className="col-lg-8 mb-4">
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '0' }}>At-Risk Students Queue</h3>
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
            <div className="at-risk-students-feed">
              {atRiskStudents.map((student, index) => (
                <div key={index} className="at-risk-student-item" style={{ 
                  background: getRiskBgColor(student.riskLevel),
                  border: `1px solid ${getRiskColor(student.riskLevel)}30`,
                  borderRadius: '12px', 
                  padding: '16px', 
                  marginBottom: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `0 4px 12px ${getRiskColor(student.riskLevel)}20`
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                }}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-start">
                      <div style={{
                        background: getRiskColor(student.riskLevel),
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
                        {student.riskScore}
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>
                          {student.name}
                        </div>
                        <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>
                          {student.grade} • Teacher: {student.teacher}
                        </div>
                        <div className="risk-indicators">
                          {student.indicators.map((indicator, idx) => (
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
                                color: getRiskColor(student.riskLevel)
                              }}></i>
                              {indicator}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className="badge" style={{
                        background: getRiskColor(student.riskLevel),
                        color: 'white',
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '4px 8px',
                        borderRadius: '12px',
                        marginBottom: '4px',
                        display: 'inline-block'
                      }}>
                        {student.riskLevel.toUpperCase()}
                      </span>
                      <div style={{ fontSize: '10px', color: '#9CA3AF', marginBottom: '4px' }}>
                        {student.lastActivity}
                      </div>
                      <span className="badge" style={{
                        background: getInterventionStatusColor(student.interventionStatus),
                        color: 'white',
                        fontSize: '9px',
                        fontWeight: 600,
                        padding: '2px 6px',
                        borderRadius: '8px',
                        display: 'inline-block'
                      }}>
                        {student.interventionStatus.replace('-', ' ').toUpperCase()}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* School Risk Alerts & System Health */}
        <div className="col-lg-4 mb-4">
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>School Risk Alerts</h3>
            <div className="school-risk-alerts-feed">
              {schoolRiskAlerts.map((alert, index) => (
                <div key={index} className="school-risk-alert-item" style={{ 
                  paddingBottom: '12px', 
                  borderBottom: index < schoolRiskAlerts.length - 1 ? '1px solid #F3F4F6' : 'none',
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
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Risk model version</span>
                <span className="badge" style={{ 
                  background: '#10B981', 
                  color: 'white', 
                  fontSize: '10px', 
                  fontWeight: 600 
                }}>v2.4</span>
              </div>
              <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '8px' }}>School-level active monitoring</div>
              
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Daily alerts</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#111827' }}>12</span>
              </div>
              
              <div className="d-flex justify-content-between align-items-center mb-3">
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>SLA compliance</span>
                <span style={{ fontSize: '12px', fontWeight: 700, color: '#10B981' }}>85%</span>
              </div>
              
              <div className="d-flex justify-content-between align-items-center">
                <span style={{ fontSize: '13px', fontWeight: 600, color: '#374151' }}>Last scan</span>
                <span style={{ fontSize: '11px', color: '#6B7280' }}>6 hours ago</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Grade Level Risk Breakdown */}
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
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '0' }}>Grade Level Risk Breakdown</h3>
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
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px' }}>Grade</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Total Students</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>At Risk</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Risk %</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Trend</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Adviser</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {gradeLevelRiskBreakdown.map((grade, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #F9FAFB' }}>
                      <td style={{ padding: '16px 8px', fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                        {grade.grade}
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center', fontSize: '13px', color: '#6B7280' }}>
                        {grade.totalStudents}
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span style={{ 
                          fontSize: '14px', 
                          fontWeight: 700, 
                          color: grade.atRisk > 5 ? '#DC2626' : grade.atRisk > 3 ? '#F59E0B' : '#10B981'
                        }}>
                          {grade.atRisk}
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span style={{ 
                          fontSize: '13px', 
                          fontWeight: 600,
                          color: grade.riskPercentage > 15 ? '#DC2626' : grade.riskPercentage > 10 ? '#F59E0B' : '#10B981'
                        }}>
                          {grade.riskPercentage}%
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span className="d-flex align-items-center justify-content-center">
                          <i 
                            className={`mdi mdi-trending-${grade.trend === 'increasing' ? 'up' : grade.trend === 'decreasing' ? 'down' : 'neutral'}`}
                            style={{ 
                              color: grade.trend === 'increasing' ? '#DC2626' : grade.trend === 'decreasing' ? '#10B981' : '#6B7280',
                              fontSize: '16px',
                              marginRight: '4px'
                            }}
                          ></i>
                          <span style={{ 
                            fontSize: '11px',
                            fontWeight: 600,
                            color: grade.trend === 'increasing' ? '#DC2626' : grade.trend === 'decreasing' ? '#10B981' : '#6B7280'
                          }}>
                            {grade.trend.charAt(0).toUpperCase() + grade.trend.slice(1)}
                          </span>
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center', fontSize: '13px', color: '#6B7280' }}>
                        {grade.teacher}
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
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '20px' }}>School Risk Analytics</h3>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="chart-placeholder school-risk-chart-placeholder">
                    <div style={{ textAlign: 'center', color: '#6B7280' }}>
                      <i className="mdi mdi-chart-line" style={{ fontSize: '48px', marginBottom: '8px' }}></i>
                      <div>Risk Trends by Grade</div>
                      <div style={{ fontSize: '12px' }}>Historical risk case analysis per grade level</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="chart-placeholder school-risk-chart-placeholder">
                    <div style={{ textAlign: 'center', color: '#6B7280' }}>
                      <i className="mdi mdi-chart-pie" style={{ fontSize: '48px', marginBottom: '8px' }}></i>
                      <div>Intervention Effectiveness</div>
                      <div style={{ fontSize: '12px' }}>Success rate of intervention strategies</div>
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
