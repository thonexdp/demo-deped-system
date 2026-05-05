import React, { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { teacherNavSections } from './navigation'

const teacherBadges = [
  { text: 'Student', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Sync: Pending', style: { backgroundColor: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: '2 updates available', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

export default function TeacherOfflinePackagesPage() {
  const [downloading, setDownloading] = useState({})
  
  const handleDownload = (id) => {
    setDownloading({ ...downloading, [id]: 0 })
    const iv = setInterval(() => {
      setDownloading(prev => {
        const cur = prev[id]
        if (cur >= 100) {
          clearInterval(iv)
          return { ...prev, [id]: 'done' }
        }
        return { ...prev, [id]: Math.min(100, cur + Math.random() * 20) }
      })
    }, 400)
  }

  return (
    <DashboardLayout
      activePath="/teachers/offline-packages"
      roleNavSections={teacherNavSections}
      profile={{
        badgeCode: 'ST',
        title: 'Learner Session',
        subtitle: 'Offline Packages',
        rolePill: 'Student'
      }}
      heading="Offline Packages"
      subheading="Download lessons for offline learning"
      topBadges={teacherBadges}
      contextText="Student • Offline Packages • Published DepEd SLMs only"
      contextNotice="Progress syncs automatically when internet is restored."
    >
      <style>{`
        .stat-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px 24px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); }
        .stat-value { font-size: 28px; font-weight: 800; color: #111827; line-height: 1; margin-bottom: 4px; }
        .stat-label { font-size: 12px; color: #6B7280; font-weight: 500; }

        .package-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; padding: 20px; margin-bottom: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.03); display: flex; gap: 16px; align-items: flex-start; }
        .pkg-icon { width: 52px; height: 52px; border-radius: 14px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .pkg-meta { font-size: 11px; color: #9CA3AF; margin-top: 4px; }
        .bar-track { background: #F3F4F6; border-radius: 6px; height: 6px; overflow: hidden; margin: 8px 0 4px; }
        .bar-fill { height: 100%; border-radius: 6px; background: #2563EB; transition: width 0.4s; }
        .pill { padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: 700; display: inline-block; }
        .pill-green { background: #DCFCE7; color: #166534; }
        .pill-blue { background: #EFF6FF; color: #2563EB; }
        .pill-yellow { background: #FEF3C7; color: #92400E; }
        .pill-gray { background: #F3F4F6; color: #4B5563; }

        .sync-row { display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-bottom: 1px dashed #E5E7EB; font-size: 13px; }
        .sync-row:last-child { border-bottom: none; }
        .dl-btn { background: #1E3A8A; color: white; border: none; border-radius: 8px; padding: 7px 16px; font-size: 12px; font-weight: 700; cursor: pointer; display: inline-flex; align-items: center; gap: 4px; }
        .dl-btn.downloaded { background: #F3F4F6; color: #9CA3AF; cursor: default; }
        .dl-btn.updating { background: #FEF3C7; color: #92400E; cursor: default; }
        .storage-bar { background: #F3F4F6; border-radius: 8px; height: 12px; overflow: hidden; }
        .storage-fill { height: 100%; border-radius: 8px; background: linear-gradient(90deg, #2563EB, #3B82F6); }
      `}</style>

      <h1 style={{ color: '#111827', fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>Offline Packages</h1>
      <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '24px' }}>Download your assigned lessons for offline learning. Only DepEd-published and offline-ready packages are available.</p>

      {/* Stats row */}
      <div className="row mb-4">
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <div className="stat-card">
            <div className="stat-value" style={{ color: '#16A34A' }}>3</div>
            <div className="stat-label">Packages Downloaded</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <div className="stat-card">
            <div className="stat-value" style={{ color: '#2563EB' }}>6</div>
            <div className="stat-label">Available to Download</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <div className="stat-card">
            <div className="stat-value">247 MB</div>
            <div className="stat-label">Storage Used</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="stat-card">
            <div className="stat-value" style={{ color: '#D97706' }}>2</div>
            <div className="stat-label">Updates Pending</div>
          </div>
        </div>
      </div>

      <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '16px 20px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ flex: 1 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px', fontWeight: 600, color: '#374151', marginBottom: '6px' }}>
            <span>Device Storage</span><span>247 MB / 2 GB</span>
          </div>
          <div className="storage-bar">
            <div className="storage-fill" style={{ width: '12%' }}></div>
          </div>
        </div>
        <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500, textAlign: 'right' }}>88% free</div>
      </div>

      <div className="row">
        {/* Available packages */}
        <div className="col-lg-8">
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.06em', marginBottom: '14px' }}>ASSIGNED PACKAGES</div>

          <div className="package-card">
            <div className="pkg-icon" style={{ background: 'linear-gradient(135deg,#1E3A8A,#2563EB)' }}>
              <i className="mdi mdi-calculator" style={{ color: 'white', fontSize: '24px' }}></i>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '2px' }}>Mathematics 10 — Lesson Pack Q3</div>
                  <div className="pkg-meta">Self-Learning Module — Grade 10 — EN/FIL — 84 MB — v2.1</div>
                </div>
                <span className="pill pill-green" style={{ marginLeft: '12px', flexShrink: 0 }}>Downloaded</span>
              </div>
              <div style={{ display: 'flex', gap: '8px', marginTop: '8px', flexWrap: 'wrap' }}>
                <span className="pill pill-green"><i className="mdi mdi-robot-outline"></i> RAG Eligible</span>
                <span className="pill pill-gray">12 scenes</span>
                <span className="pill pill-gray">Last synced: Today</span>
              </div>
              <div style={{ marginTop: '10px', display: 'flex', gap: '8px' }}>
                <button className="dl-btn downloaded"><i className="mdi mdi-check"></i> Downloaded</button>
                <button style={{ background: 'white', border: '1.5px solid #E5E7EB', color: '#374151', borderRadius: '8px', padding: '7px 14px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Open Lessons</button>
              </div>
            </div>
          </div>

          <div className="package-card">
            <div className="pkg-icon" style={{ background: 'linear-gradient(135deg,#B45309,#D97706)' }}>
              <i className="mdi mdi-leaf" style={{ color: 'white', fontSize: '24px' }}></i>
            </div>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: '#111827', marginBottom: '2px' }}>Earth and Life Science 11 — Q1</div>
                  <div className="pkg-meta">Self-Learning Module — Grade 11 — EN — 118 MB — v1.2</div>
                </div>
                <span className={downloading['els11'] === 'done' ? "pill pill-green" : "pill pill-blue"} style={{ marginLeft: '12px', flexShrink: 0 }}>
                  {downloading['els11'] === 'done' ? 'Downloaded' : 'Available'}
                </span>
              </div>
              
              {downloading['els11'] !== undefined && downloading['els11'] !== 'done' && (
                <div style={{ marginTop: '8px' }}>
                  <div className="bar-track" style={{ height: '8px', marginBottom: '4px' }}>
                    <div className="bar-fill" style={{ width: `${downloading['els11']}%` }}></div>
                  </div>
                  <div style={{ fontSize: '11px', color: '#6B7280' }}>Downloading... {Math.round(downloading['els11'])}%</div>
                </div>
              )}

              <div style={{ marginTop: '10px' }}>
                {downloading['els11'] === 'done' ? (
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button className="dl-btn downloaded"><i className="mdi mdi-check"></i> Downloaded</button>
                    <button style={{ background: 'white', border: '1.5px solid #E5E7EB', color: '#374151', borderRadius: '8px', padding: '7px 14px', fontSize: '12px', fontWeight: 700, cursor: 'pointer' }}>Open Lessons</button>
                  </div>
                ) : (
                  <button 
                    className="dl-btn" 
                    onClick={() => handleDownload('els11')}
                    disabled={downloading['els11'] !== undefined}
                  >
                    {downloading['els11'] !== undefined ? <><i className="mdi mdi-loading mdi-spin"></i> Starting...</> : <><i className="mdi mdi-download"></i> Download (118 MB)</>}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Sync status */}
        <div className="col-lg-4">
          <div style={{ fontSize: '11px', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.06em', marginBottom: '14px' }}>SYNC STATUS</div>
          <div style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '16px', padding: '20px', boxShadow: '0 2px 8px rgba(0,0,0,0.03)', marginBottom: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FDE68A', border: '2px solid #D97706' }}></div>
              <span style={{ fontSize: '14px', fontWeight: 700, color: '#111827' }}>Last sync: 3 hours ago</span>
            </div>
            <div className="sync-row">
              <span style={{ color: '#4B5563', fontWeight: 600 }}>Progress uploaded</span>
              <span className="pill pill-green">Synced</span>
            </div>
            <div className="sync-row">
              <span style={{ color: '#4B5563', fontWeight: 600 }}>AI Tutor sessions</span>
              <span className="pill pill-green">Synced</span>
            </div>
            <button style={{ width: '100%', marginTop: '14px', background: '#1E3A8A', color: 'white', border: 'none', borderRadius: '10px', padding: '10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer' }}>
              <i className="mdi mdi-sync"></i> Sync Now
            </button>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
