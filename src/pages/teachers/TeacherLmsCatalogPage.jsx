import React from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { teacherNavSections } from './navigation'

const teacherBadges = [
  { text: 'Teacher', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'SY 2025-2026 • Q3', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Sync: Pending', style: { backgroundColor: '#FEF3C7', color: '#92400E', border: '1px solid #FDE68A', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Alerts (3)', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

export default function TeacherLmsCatalogPage() {
  return (
    <DashboardLayout
      activePath="/teachers/lms-catalog"
      roleNavSections={teacherNavSections}
      profile={{
        badgeCode: 'T1',
        title: 'Teacher Session',
        subtitle: 'Resource Library',
        rolePill: 'Teacher'
      }}
      heading="Learning Resource Library"
      subheading="LMS Catalog • 3,847 Resources"
      topBadges={teacherBadges}
      contextText="Teacher • Resource Library • Scope: All Published & Approved Resources"
      contextNotice="Only published and RAG-eligible resources are available to students."
    >
      <style>{`
        .resource-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 16px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.03); transition: box-shadow 0.2s; }
        .resource-card:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.08); }
        .resource-card-header { padding: 28px 24px; position: relative; display: flex; align-items: center; justify-content: center; min-height: 100px; }
        .resource-card-body { padding: 20px; }
        .stat-card { background: #FFFFFF; border: 1px solid #E5E7EB; border-radius: 12px; padding: 16px 20px; text-align: center; }
        .pill { padding: 3px 10px; border-radius: 10px; font-size: 11px; font-weight: 700; display: inline-block; }
        .pill-green { background: #DCFCE7; color: #166534; }
        .pill-yellow { background: #FEF3C7; color: #92400E; }
        .pill-blue { background: #EFF6FF; color: #2563EB; }
        .pill-gray { background: #F3F4F6; color: #4B5563; }
        .pill-orange { background: #FFF7ED; color: #C2410C; }
        .filter-select { border: 1px solid #E5E7EB; border-radius: 8px; padding: 7px 12px; font-size: 13px; color: #374151; background: white; outline: none; cursor: pointer; }
      `}</style>

      <h1 style={{ color: '#111827', fontSize: '32px', fontWeight: 800, marginBottom: '8px' }}>Learning Resource Library</h1>
      <p style={{ color: '#4B5563', fontSize: '15px', marginBottom: '24px' }}>Browse DepEd-approved learning resources mapped to curriculum competencies. Only published resources reach students and AI Tutor RAG.</p>

      {/* Stats row */}
      <div className="row mb-4">
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <div className="stat-card">
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#111827' }}>3,847</div>
            <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500, marginTop: '2px' }}>Total Resources</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <div className="stat-card">
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#16A34A' }}>2,614</div>
            <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500, marginTop: '2px' }}>Published</div>
          </div>
        </div>
        <div className="col-6 col-md-3 mb-3 mb-md-0">
          <div className="stat-card">
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#D97706' }}>312</div>
            <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500, marginTop: '2px' }}>In Review</div>
          </div>
        </div>
        <div className="col-6 col-md-3">
          <div className="stat-card">
            <div style={{ fontSize: '26px', fontWeight: 800, color: '#2563EB' }}>1,891</div>
            <div style={{ fontSize: '12px', color: '#6B7280', fontWeight: 500, marginTop: '2px' }}>RAG Eligible</div>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ background: '#F9FAFB', border: '1px solid #E5E7EB', borderRadius: '12px', padding: '16px 20px', display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '28px' }}>
        <span style={{ fontSize: '13px', fontWeight: 700, color: '#111827' }}>Filter:</span>
        <select className="filter-select">
          <option>All Grades</option>
          <option>Grade 7</option>
          <option>Grade 8</option>
          <option>Grade 9</option>
          <option>Grade 10</option>
          <option>Grade 11</option>
          <option>Grade 12</option>
        </select>
        <select className="filter-select">
          <option>All Learning Areas</option>
          <option>Mathematics</option>
          <option>Science</option>
          <option>English</option>
          <option>Filipino</option>
          <option>Araling Panlipunan</option>
          <option>TLE</option>
          <option>MAPEH</option>
        </select>
        <select className="filter-select">
          <option>All Quarters</option>
          <option>Q1</option>
          <option>Q2</option>
          <option>Q3</option>
          <option>Q4</option>
        </select>
        <select className="filter-select">
          <option>All Types</option>
          <option>Self-Learning Module</option>
          <option>Teacher Guide</option>
          <option>Learner Material</option>
          <option>Activity Sheet</option>
          <option>Video Lesson</option>
          <option>Assessment Item</option>
          <option>Remediation Material</option>
          <option>Enrichment Material</option>
        </select>
        <select className="filter-select">
          <option>All Statuses</option>
          <option>Published</option>
          <option>Approved</option>
          <option>In Review</option>
          <option>Draft</option>
        </select>
        <input type="text" placeholder="Search by title, competency, author..." style={{ flex: 1, minWidth: '200px', border: '1px solid #E5E7EB', borderRadius: '8px', padding: '7px 12px', fontSize: '13px', color: '#374151', outline: 'none' }} />
        <button className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '13px' }}>Search</button>
      </div>

      {/* Resource grid */}
      <div className="row">
        {/* Math 10 */}
        <div className="col-md-4 mb-4">
          <div className="resource-card">
            <div className="resource-card-header" style={{ background: 'linear-gradient(135deg, #1E3A8A, #2563EB)' }}>
              <i className="mdi mdi-calculator text-white" style={{ fontSize: '44px' }}></i>
              <span className="pill pill-green" style={{ position: 'absolute', top: '14px', right: '14px' }}>Published</span>
            </div>
            <div className="resource-card-body">
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.05em', marginBottom: '6px' }}>SELF-LEARNING MODULE</div>
              <h5 style={{ color: '#111827', fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>Mathematics 10</h5>
              <p style={{ fontSize: '13px', color: '#4B5563', marginBottom: '12px' }}>Comprehensive guide to algebra, geometry, and basic statistics for Grade 10.</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                <span className="pill pill-blue">Grade 10</span>
                <span className="pill pill-gray">Q1 — Q4</span>
                <span className="pill pill-gray">EN / FIL</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span className="pill pill-green"><i className="mdi mdi-robot-outline"></i> RAG Eligible</span>
                <span className="pill" style={{ background: '#F0FDF4', color: '#166534' }}><i className="mdi mdi-wifi-off"></i> Offline-Ready</span>
              </div>
              <div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '16px' }}>DepEd Bureau of Learning Resources — v2.1 — 2024</div>
              <button className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '13px' }}>Start Learning</button>
            </div>
          </div>
        </div>

        {/* AP 10 */}
        <div className="col-md-4 mb-4">
          <div className="resource-card">
            <div className="resource-card-header" style={{ background: 'linear-gradient(135deg, #0E7490, #0891B2)' }}>
              <i className="mdi mdi-earth text-white" style={{ fontSize: '44px' }}></i>
              <span className="pill pill-green" style={{ position: 'absolute', top: '14px', right: '14px' }}>Published</span>
            </div>
            <div className="resource-card-body">
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.05em', marginBottom: '6px' }}>SELF-LEARNING MODULE</div>
              <h5 style={{ color: '#111827', fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>Araling Panlipunan 10</h5>
              <p style={{ fontSize: '13px', color: '#4B5563', marginBottom: '12px' }}>Understanding contemporary issues in the Philippines and the world.</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                <span className="pill pill-blue">Grade 10</span>
                <span className="pill pill-gray">Q3</span>
                <span className="pill pill-gray">FIL / EN</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span className="pill pill-green"><i className="mdi mdi-robot-outline"></i> RAG Eligible</span>
                <span className="pill" style={{ background: '#F0FDF4', color: '#166534' }}><i className="mdi mdi-wifi-off"></i> Offline-Ready</span>
              </div>
              <div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '16px' }}>DepEd Bureau of Learning Resources — v1.4 — 2024</div>
              <button className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '13px' }}>Start Learning</button>
            </div>
          </div>
        </div>

        {/* Science 10 */}
        <div className="col-md-4 mb-4">
          <div className="resource-card">
            <div className="resource-card-header" style={{ background: 'linear-gradient(135deg, #059669, #10B981)' }}>
              <i className="mdi mdi-flask text-white" style={{ fontSize: '44px' }}></i>
              <span className="pill pill-green" style={{ position: 'absolute', top: '14px', right: '14px' }}>Published</span>
            </div>
            <div className="resource-card-body">
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.05em', marginBottom: '6px' }}>SELF-LEARNING MODULE</div>
              <h5 style={{ color: '#111827', fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>Science 10</h5>
              <p style={{ fontSize: '13px', color: '#4B5563', marginBottom: '12px' }}>Earth and space, forces and motion, and living things and their environment.</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                <span className="pill pill-blue">Grade 10</span>
                <span className="pill pill-gray">Q2</span>
                <span className="pill pill-gray">EN</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span className="pill pill-yellow">RAG Review Pending</span>
                <span className="pill" style={{ background: '#F0FDF4', color: '#166534' }}><i className="mdi mdi-wifi-off"></i> Offline-Ready</span>
              </div>
              <div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '16px' }}>DepEd Bureau of Learning Resources — v1.9 — 2024</div>
              <button className="btn btn-primary" style={{ padding: '9px 20px', fontSize: '13px' }}>Start Learning</button>
            </div>
          </div>
        </div>

        {/* English 10 */}
        <div className="col-md-4 mb-4">
          <div className="resource-card">
            <div className="resource-card-header" style={{ background: 'linear-gradient(135deg, #7C3AED, #8B5CF6)' }}>
              <i className="mdi mdi-book-open-variant text-white" style={{ fontSize: '44px' }}></i>
              <span className="pill pill-blue" style={{ position: 'absolute', top: '14px', right: '14px' }}>Approved</span>
            </div>
            <div className="resource-card-body">
              <div style={{ fontSize: '10px', fontWeight: 700, color: '#9CA3AF', letterSpacing: '0.05em', marginBottom: '6px' }}>LEARNER MATERIAL</div>
              <h5 style={{ color: '#111827', fontWeight: 700, fontSize: '16px', marginBottom: '6px' }}>English 10</h5>
              <p style={{ fontSize: '13px', color: '#4B5563', marginBottom: '12px' }}>Language and literature — reading, writing, listening, and speaking skills.</p>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '12px' }}>
                <span className="pill pill-blue">Grade 10</span>
                <span className="pill pill-gray">Q1</span>
                <span className="pill pill-gray">EN</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '14px' }}>
                <span className="pill pill-yellow">Pending RAG Eligibility</span>
              </div>
              <div style={{ fontSize: '11px', color: '#9CA3AF', marginBottom: '16px' }}>DepEd Bureau of Learning Resources — v1.0 — 2025</div>
              <button className="btn" style={{ background: '#F3F4F6', color: '#9CA3AF', border: '1px solid #E5E7EB', borderRadius: '8px', fontSize: '13px', fontWeight: 700, padding: '9px 20px', cursor: 'default' }}>Awaiting Publish</button>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
