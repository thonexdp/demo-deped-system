import DashboardLayout from '../../components/DashboardLayout'
import { headNavSections } from './navigation'
import { useState } from 'react'
import './HeadTeachersPage.css'

const headBadges = [
  { text: 'Head Teacher / Principal', style: { backgroundColor: '#F5F3FF', color: '#5B21B6', border: '1px solid #DDD6FE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Whole School View', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'IPCRF Pending: 6', style: { backgroundColor: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
]

const schoolMetrics = [
  { 
    value: '131', 
    label: 'Total enrolment',
    icon: 'mdi mdi-account-group',
    color: '#7C3AED',
    trend: { value: '+8', direction: 'up', label: 'from last year' }
  },
  { 
    value: '82.7%', 
    label: 'School avg MPS',
    icon: 'mdi mdi-chart-line',
    color: '#10B981',
    trend: { value: '+2.3%', direction: 'up', label: 'improvement' }
  },
  { 
    value: '6', 
    label: 'Awaiting IPCRF approval',
    icon: 'mdi mdi-clipboard-check',
    color: '#F59E0B',
    trend: { value: '-3', direction: 'down', label: 'from last week' }
  },
  { 
    value: '2/6', 
    label: 'PIR pending sections',
    icon: 'mdi mdi-file-document',
    color: '#EF4444',
    trend: { value: '33%', direction: 'neutral', label: 'completion rate' }
  },
]

const schoolActions = [
  { label: 'Review IPCRF Submissions', icon: 'mdi mdi-clipboard-check', color: '#F59E0B', path: '/headteachers/pending-approvals' },
  { label: 'Submit PIR Checklist', icon: 'mdi mdi-file-document-check', color: '#7C3AED', path: '/headteachers/smea-pir' },
  { label: 'View Attendance Report', icon: 'mdi mdi-calendar-check', color: '#10B981', path: '/headteachers/attendance-overview' },
  { label: 'Grade Monitoring', icon: 'mdi mdi-book-open-page-variant', color: '#3B82F6', path: '/headteachers/grade-monitoring' },
]

const pendingIPCRF = [
  { 
    teacher: 'Maria Santos', 
    grade: 'Grade 6 - English', 
    submitted: '2 days ago',
    status: 'pending',
    rating: 'Very Satisfactory',
    remarks: 'Excellent classroom management'
  },
  { 
    teacher: 'Juan Reyes', 
    grade: 'Grade 8 - Mathematics', 
    submitted: '3 days ago',
    status: 'pending',
    rating: 'Outstanding',
    remarks: 'Innovative teaching methods'
  },
  { 
    teacher: 'Ana Cruz', 
    grade: 'Grade 5 - Science', 
    submitted: '1 day ago',
    status: 'pending',
    rating: 'Very Satisfactory',
    remarks: 'Strong student engagement'
  },
  { 
    teacher: 'Carlos Mendoza', 
    grade: 'Grade 7 - Filipino', 
    submitted: '4 days ago',
    status: 'pending',
    rating: 'Outstanding',
    remarks: 'Exceptional lesson planning'
  },
]

const pirStatus = [
  { section: 'School Profile', status: 'completed', completedDate: 'Oct 15, 2024' },
  { section: 'Learners Profile', status: 'completed', completedDate: 'Oct 16, 2024' },
  { section: 'Physical Facilities', status: 'completed', completedDate: 'Oct 17, 2024' },
  { section: 'Teachers Profile', status: 'in-progress', progress: 75 },
  { section: 'Curriculum Implementation', status: 'pending', progress: 0 },
  { section: 'School Improvement Plan', status: 'pending', progress: 0 },
]

const recentActivities = [
  { time: '1 hour ago', action: 'Maria Santos submitted IPCRF for Grade 6 English', type: 'ipcrf' },
  { time: '3 hours ago', action: 'Monthly attendance report generated', type: 'report' },
  { time: '5 hours ago', action: 'Grade monitoring updated for Grade 8', type: 'grade' },
  { time: '1 day ago', action: 'PIR section Teachers Profile updated', type: 'pir' },
  { time: '2 days ago', action: 'Juan Reyes IPCRF approved', type: 'approval' },
]

const teacherPerformance = [
  { name: 'Maria Santos', grade: 'Grade 6', subject: 'English', mps: '94.2%', attendance: '98%', status: 'excellent' },
  { name: 'Juan Reyes', grade: 'Grade 8', subject: 'Mathematics', mps: '91.8%', attendance: '97%', status: 'excellent' },
  { name: 'Ana Cruz', grade: 'Grade 5', subject: 'Science', mps: '88.5%', attendance: '96%', status: 'good' },
  { name: 'Carlos Mendoza', grade: 'Grade 7', subject: 'Filipino', mps: '87.2%', attendance: '95%', status: 'good' },
]

export default function HeadTeachersPage() {
  const [selectedView, setSelectedView] = useState('overview')

  const getStatusColor = (status) => {
    switch(status) {
      case 'completed': return '#10B981'
      case 'in-progress': return '#F59E0B'
      case 'pending': return '#EF4444'
      default: return '#6B7280'
    }
  }

  const getStatusBg = (status) => {
    switch(status) {
      case 'completed': return '#D1FAE5'
      case 'in-progress': return '#FEF3C7'
      case 'pending': return '#FEE2E2'
      default: return '#F9FAFB'
    }
  }

  const getActivityIcon = (type) => {
    switch(type) {
      case 'ipcrf': return 'mdi mdi-clipboard-check'
      case 'report': return 'mdi mdi-file-chart'
      case 'grade': return 'mdi mdi-book-open-page-variant'
      case 'pir': return 'mdi mdi-file-document'
      case 'approval': return 'mdi mdi-check-decagram'
      default: return 'mdi mdi-information'
    }
  }

  return (
    <DashboardLayout
      activePath="headteachers/school-overview"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'HT',
        title: 'School Head',
        subtitle: 'Whole-School Monitoring',
        rolePill: 'Head Teacher / Principal',
        securityContext: 'You can approve teacher IPCRF submissions and add remarks.',
      }}
      heading="School Overview"
      subheading="School Operations • Screen 21 / 47"
      topBadges={headBadges}
      contextText="Head Teacher / Principal • School-wide Monitoring"
      contextNotice="You can approve and add remarks but cannot edit teacher records."
    >
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-start mb-4">
        <div>
          <h1 style={{ color: '#111827', fontSize: '36px', fontWeight: 800, marginBottom: '8px' }}>School Overview</h1>
          <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '0' }}>Monitor school-level PIR checklist, grade and attendance overviews, and IPCRF approvals.</p>
        </div>
        <div className="d-flex gap-2">
          <button 
            className="btn btn-sm"
            style={{ 
              background: selectedView === 'overview' ? '#7C3AED' : 'white',
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
              background: selectedView === 'analytics' ? '#7C3AED' : 'white',
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

      {/* Enhanced School Metrics */}
      <div className="row mb-4">
        {schoolMetrics.map((metric, index) => (
          <div key={index} className="col-lg-3 col-md-6 mb-3">
            <div 
              className="school-metric-card"
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
                e.currentTarget.style.boxShadow = `0 8px 24px ${metric.color}25`
                e.currentTarget.style.transform = 'translateY(-2px)'
                e.currentTarget.style.borderColor = metric.color
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.03)'
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = '#E5E7EB'
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
                    className={`mdi mdi-trending-${metric.trend.direction === 'up' ? 'up' : metric.trend.direction === 'down' ? 'down' : 'neutral'}`}
                    style={{ 
                      color: metric.trend.direction === 'up' ? '#10B981' : metric.trend.direction === 'down' ? '#EF4444' : '#6B7280',
                      marginRight: '4px'
                    }}
                  ></i>
                  <span style={{ color: metric.trend.direction === 'up' ? '#10B981' : metric.trend.direction === 'down' ? '#EF4444' : '#6B7280', fontWeight: 600 }}>
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
            </div>
          </div>
        ))}
      </div>

      {/* School Management Actions */}
      <div className="row mb-4">
        <div className="col-12">
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>School Management Actions</h3>
          <div className="row">
            {schoolActions.map((action, index) => (
              <div key={index} className="col-lg-3 col-md-6 mb-3">
                <button
                  className="btn w-100 school-action-btn"
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
        {/* Pending IPCRF Approvals */}
        <div className="col-lg-8 mb-4">
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '0' }}>Pending IPCRF Approvals</h3>
              <button className="btn btn-sm" style={{ 
                background: '#FEF3C7', 
                border: '1px solid #FDE68A', 
                borderRadius: '8px', 
                fontSize: '12px', 
                fontWeight: 600,
                color: '#92400E'
              }}>
                View All <i className="mdi mdi-arrow-right" style={{ marginLeft: '4px' }}></i>
              </button>
            </div>
            <div className="ipcrf-queue">
              {pendingIPCRF.map((teacher, index) => (
                <div key={index} className="ipcrf-item" style={{ 
                  background: '#F9FAFB',
                  border: '1px solid #E5E7EB',
                  borderRadius: '12px', 
                  padding: '16px', 
                  marginBottom: '12px',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}>
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="d-flex align-items-start">
                      <div style={{
                        background: '#F59E0B',
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
                        {teacher.rating.charAt(0)}
                      </div>
                      <div>
                        <div style={{ fontSize: '14px', fontWeight: 700, color: '#111827', marginBottom: '4px' }}>
                          {teacher.teacher}
                        </div>
                        <div style={{ fontSize: '12px', color: '#6B7280', marginBottom: '8px' }}>
                          {teacher.grade}
                        </div>
                        <div style={{ fontSize: '11px', color: '#4B5563', marginBottom: '4px' }}>
                          <i className="mdi mdi-star" style={{ color: '#F59E0B', fontSize: '10px' }}></i>
                          {teacher.rating} • {teacher.remarks}
                        </div>
                        <div style={{ fontSize: '10px', color: '#9CA3AF' }}>
                          Submitted {teacher.submitted}
                        </div>
                      </div>
                    </div>
                    <div className="text-end">
                      <span className="badge" style={{
                        background: '#F59E0B',
                        color: 'white',
                        fontSize: '10px',
                        fontWeight: 600,
                        padding: '4px 8px',
                        borderRadius: '12px',
                        marginBottom: '4px',
                        display: 'inline-block'
                      }}>
                        PENDING
                      </span>
                      <div className="d-flex gap-1 mt-2">
                        <button className="btn btn-sm" style={{ 
                          background: '#10B981', 
                          border: 'none', 
                          borderRadius: '6px', 
                          fontSize: '10px', 
                          fontWeight: 600,
                          color: 'white',
                          padding: '4px 8px'
                        }}>
                          Approve
                        </button>
                        <button className="btn btn-sm" style={{ 
                          background: '#6B7280', 
                          border: 'none', 
                          borderRadius: '6px', 
                          fontSize: '10px', 
                          fontWeight: 600,
                          color: 'white',
                          padding: '4px 8px'
                        }}>
                          Review
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Recent Activities & PIR Status */}
        <div className="col-lg-4 mb-4">
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)',
            marginBottom: '20px'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>Recent Activities</h3>
            <div className="activities-feed">
              {recentActivities.map((activity, index) => (
                <div key={index} className="activity-item" style={{ 
                  paddingBottom: '12px', 
                  borderBottom: index < recentActivities.length - 1 ? '1px solid #F3F4F6' : 'none',
                  marginBottom: '12px'
                }}>
                  <div className="d-flex align-items-start">
                    <div style={{ 
                      background: '#F3F4F6',
                      color: '#7C3AED',
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
                      <i className={getActivityIcon(activity.type)}></i>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: '12px', color: '#374151', marginBottom: '2px', lineHeight: 1.4 }}>
                        {activity.action}
                      </div>
                      <div style={{ fontSize: '10px', color: '#9CA3AF' }}>
                        {activity.time}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* PIR Status */}
          <div style={{ 
            background: 'white', 
            border: '1px solid #E5E7EB', 
            borderRadius: '16px', 
            padding: '20px',
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.03)'
          }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '16px' }}>PIR Checklist Status</h3>
            <div className="pir-status-list">
              {pirStatus.map((item, index) => (
                <div key={index} className="pir-status-item" style={{ 
                  marginBottom: '12px',
                  padding: '8px 0'
                }}>
                  <div className="d-flex justify-content-between align-items-center mb-2">
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#374151' }}>
                      {item.section}
                    </span>
                    <span className="badge" style={{
                      background: getStatusBg(item.status),
                      color: getStatusColor(item.status),
                      fontSize: '9px',
                      fontWeight: 600,
                      padding: '2px 6px',
                      borderRadius: '8px'
                    }}>
                      {item.status.replace('-', ' ').toUpperCase()}
                    </span>
                  </div>
                  {item.status === 'in-progress' && (
                    <div style={{ 
                      background: '#F3F4F6', 
                      borderRadius: '4px', 
                      height: '4px', 
                      overflow: 'hidden' 
                    }}>
                      <div style={{ 
                        background: '#F59E0B', 
                        height: '100%', 
                        width: `${item.progress}%`,
                        transition: 'width 0.3s ease'
                      }}></div>
                    </div>
                  )}
                  {item.completedDate && (
                    <div style={{ fontSize: '10px', color: '#9CA3AF', marginTop: '2px' }}>
                      Completed: {item.completedDate}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Teacher Performance Summary */}
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
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: '#111827', marginBottom: '0' }}>Teacher Performance Summary</h3>
              <button className="btn btn-sm" style={{ 
                background: '#F3F4F6', 
                border: '1px solid #E5E7EB', 
                borderRadius: '8px', 
                fontSize: '12px', 
                fontWeight: 600,
                color: '#4B5563'
              }}>
                View All Teachers <i className="mdi mdi-arrow-right" style={{ marginLeft: '4px' }}></i>
              </button>
            </div>
            <div className="table-responsive">
              <table className="table" style={{ marginBottom: '0' }}>
                <thead>
                  <tr>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px' }}>Teacher</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Grade</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Subject</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>MPS</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Attendance</th>
                    <th style={{ fontSize: '12px', fontWeight: 600, color: '#6B7280', borderBottom: '1px solid #F3F4F6', padding: '12px 8px', textAlign: 'center' }}>Performance</th>
                  </tr>
                </thead>
                <tbody>
                  {teacherPerformance.map((teacher, index) => (
                    <tr key={index} style={{ borderBottom: '1px solid #F9FAFB' }}>
                      <td style={{ padding: '16px 8px', fontSize: '13px', color: '#374151', fontWeight: 500 }}>
                        {teacher.name}
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center', fontSize: '13px', color: '#6B7280' }}>
                        {teacher.grade}
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center', fontSize: '13px', color: '#6B7280' }}>
                        {teacher.subject}
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span style={{ 
                          fontSize: '14px', 
                          fontWeight: 700, 
                          color: parseFloat(teacher.mps) >= 90 ? '#10B981' : parseFloat(teacher.mps) >= 85 ? '#F59E0B' : '#EF4444'
                        }}>
                          {teacher.mps}
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span style={{ 
                          fontSize: '13px', 
                          fontWeight: 600,
                          color: parseFloat(teacher.attendance) >= 97 ? '#10B981' : '#F59E0B'
                        }}>
                          {teacher.attendance}
                        </span>
                      </td>
                      <td style={{ padding: '16px 8px', textAlign: 'center' }}>
                        <span style={{
                          fontSize: '11px',
                          fontWeight: 600,
                          color: teacher.status === 'excellent' ? '#10B981' : '#F59E0B',
                          background: teacher.status === 'excellent' ? '#D1FAE5' : '#FEF3C7',
                          padding: '4px 8px',
                          borderRadius: '12px'
                        }}>
                          {teacher.status.charAt(0).toUpperCase() + teacher.status.slice(1)}
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
              <h3 style={{ fontSize: '18px', fontWeight: 700, color: '#111827', marginBottom: '20px' }}>School Analytics</h3>
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="chart-placeholder school-chart-placeholder">
                    <div style={{ textAlign: 'center', color: '#6B7280' }}>
                      <i className="mdi mdi-chart-line" style={{ fontSize: '48px', marginBottom: '8px' }}></i>
                      <div>Grade Performance Trends</div>
                      <div style={{ fontSize: '12px' }}>Subject-wise MPS analysis</div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="chart-placeholder school-chart-placeholder">
                    <div style={{ textAlign: 'center', color: '#6B7280' }}>
                      <i className="mdi mdi-chart-pie" style={{ fontSize: '48px', marginBottom: '8px' }}></i>
                      <div>Attendance Overview</div>
                      <div style={{ fontSize: '12px' }}>Monthly attendance patterns</div>
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
