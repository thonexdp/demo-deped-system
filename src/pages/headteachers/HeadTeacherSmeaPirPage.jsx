import { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { headNavSections } from './navigation'

const headBadges = [
  { text: 'School Head / Principal', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
]

export default function HeadTeacherSmeaPirPage() {
  const [activeTab, setActiveTab] = useState('dashboard')

  return (
    <DashboardLayout
      activePath="/headteachers/smea-pir"
      roleNavSections={headNavSections}
      profile={{
        badgeCode: 'SH',
        title: 'School Head',
        subtitle: 'School Administrator',
        rolePill: 'School Head / Principal',
        securityContext: 'School Head approvals are required for high-stakes actions.',
      }}
      heading="SMEA/PIR"
      subheading="Administration • School Dashboards"
      topBadges={headBadges}
      contextText="School Head / Principal • School Administration • Scope: SMEA/PIR"
      contextNotice="Notifications, sync, and policy status remain visible in every workspace."
    >
      <style>{`
        .smea-nav {display:flex;align-items:center;gap:0;border-bottom:0.5px solid #E5E7EB;margin-bottom:0;background:#FFFFFF; border-radius: 12px 12px 0 0;}
        .smea-nav-logo {padding:12px 16px;font-weight:500;font-size:13px;border-right:0.5px solid #E5E7EB;color:#185FA5}
        .smea-nav-tabs {display:flex;flex:1;overflow-x:auto}
        .smea-nav-tab {padding:12px 14px;font-size:12px;cursor:pointer;white-space:nowrap;border-bottom:2px solid transparent;color:#6B7280;transition:all 0.15s}
        .smea-nav-tab.active {border-bottom-color:#185FA5;color:#185FA5;font-weight:500}
        .smea-nav-tab:hover:not(.active) {color:#111827;background:#F9FAFB}
        .smea-badge {font-size:10px;padding:2px 6px;border-radius:10px;margin-left:4px;display:inline-block;}
        .smea-badge-blue {background:#E6F1FB;color:#185FA5}
        .smea-badge-amber {background:#FAEEDA;color:#854F0B}
        .smea-badge-green {background:#EAF3DE;color:#3B6D11}
        .smea-badge-red {background:#FCEBEB;color:#A32D2D}
        .smea-content {padding:16px; border: 1px solid #E5E7EB; border-top: none; border-radius: 0 0 12px 12px; background: #FAFAFA;}
        .smea-page-header {display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
        .smea-page-title {font-size:16px;font-weight:500;color:#111827}
        .smea-page-sub {font-size:12px;color:#6B7280;margin-top:2px}
        .smea-btn {padding:7px 14px;font-size:12px;border-radius:8px;border:0.5px solid #D1D5DB;background:#FFFFFF;cursor:pointer;color:#111827}
        .smea-btn:hover {background:#F9FAFB}
        .smea-btn-primary {background:#185FA5;color:#fff;border-color:#185FA5}
        .smea-btn-primary:hover {background:#0C447C}
        .smea-cards-grid {display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:10px;margin-bottom:16px}
        .smea-metric-card {background:#FFFFFF;border: 1px solid #E5E7EB; border-radius:8px;padding:12px 14px}
        .smea-metric-label {font-size:11px;color:#6B7280;margin-bottom:4px}
        .smea-metric-value {font-size:22px;font-weight:500;color:#111827}
        .smea-metric-trend {font-size:11px;margin-top:3px}
        .smea-trend-up {color:#3B6D11}
        .smea-trend-down {color:#A32D2D}
        .smea-trend-flat {color:#6B7280}
        .smea-section-card {background:#FFFFFF;border:0.5px solid #E5E7EB;border-radius:12px;padding:14px;margin-bottom:12px}
        .smea-section-title {font-size:13px;font-weight:500;margin-bottom:10px;display:flex;align-items:center;gap:8px;color:#111827}
        .smea-tag {font-size:10px;padding:2px 7px;border-radius:10px}
        table.smea-data-table {width:100%;font-size:12px;border-collapse:collapse}
        table.smea-data-table th {text-align:left;color:#6B7280;font-weight:400;padding:5px 8px;border-bottom:0.5px solid #E5E7EB;font-size:11px}
        table.smea-data-table td {padding:6px 8px;border-bottom:0.5px solid #E5E7EB;color:#111827}
        table.smea-data-table tr:last-child td {border-bottom:none}
        .smea-proficiency-bar {height:8px;border-radius:4px;background:#F9FAFB;overflow:hidden;min-width:80px}
        .smea-proficiency-fill {height:100%;border-radius:4px}
        .smea-reading-profile {display:grid;grid-template-columns:repeat(5,1fr);gap:6px;margin-top:6px}
        .smea-profile-pill {text-align:center;border-radius:8px;padding:8px 4px;font-size:11px}
        .smea-pp-ind {background:#E1F5EE;color:#085041}
        .smea-pp-inst {background:#EAF3DE;color:#3B6D11}
        .smea-pp-frus {background:#FAEEDA;color:#854F0B}
        .smea-pp-hem {background:#FAEEDA;color:#854F0B;opacity:0.7}
        .smea-pp-lem {background:#FCEBEB;color:#A32D2D}
        .smea-pp-val {font-size:15px;font-weight:500;margin-top:2px}
        .smea-form-row {display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:10px}
        .smea-form-group {display:flex;flex-direction:column;gap:4px}
        .smea-form-label {font-size:11px;color:#6B7280}
        .smea-form-input {padding:7px 10px;font-size:12px;border:0.5px solid #D1D5DB;border-radius:8px;background:#FFFFFF;color:#111827}
        select.smea-form-input {cursor:pointer}
        .smea-form-input:focus {outline:none;border-color:#185FA5}
        .smea-progress-row {display:flex;align-items:center;gap:8px;margin-bottom:7px}
        .smea-progress-label {font-size:12px;min-width:90px;color:#111827}
        .smea-progress-bar-wrap {flex:1;height:10px;border-radius:5px;background:#F9FAFB;overflow:hidden}
        .smea-progress-bar {height:100%;border-radius:5px}
        .smea-progress-pct {font-size:11px;color:#6B7280;min-width:32px;text-align:right}
        .smea-stepper {display:flex;align-items:center;gap:0;margin-bottom:16px}
        .smea-step {display:flex;align-items:center;gap:6px;font-size:11px;color:#6B7280}
        .smea-step-circle {width:20px;height:20px;border-radius:50%;border:0.5px solid #D1D5DB;display:flex;align-items:center;justify-content:center;font-size:10px}
        .smea-step.done .smea-step-circle {background:#185FA5;border-color:#185FA5;color:#fff}
        .smea-step.active .smea-step-circle {border-color:#185FA5;color:#185FA5;font-weight:500}
        .smea-step.active {color:#111827;font-weight:500}
        .smea-step-line {flex:1;height:0.5px;background:#E5E7EB;margin:0 4px}
        .smea-alert-bar {padding:9px 12px;border-radius:8px;font-size:12px;margin-bottom:10px;display:flex;align-items:center;gap:8px}
        .smea-alert-info {background:#E6F1FB;color:#185FA5;border:0.5px solid #B5D4F4}
        .smea-alert-warn {background:#FAEEDA;color:#854F0B;border:0.5px solid #FAC775}
        .smea-mini-dot {width:6px;height:6px;border-radius:50%;display:inline-block;margin-right:4px}
        .smea-two-col {display:grid;grid-template-columns:1fr 1fr;gap:10px}
      `}</style>

      <div style={{ margin: '0 auto', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', borderRadius: '12px' }}>
        <div className="smea-nav">
          <div className="smea-nav-logo">DepEd SMEA/PIR</div>
          <div className="smea-nav-tabs">
            <div className={`smea-nav-tab ${activeTab === 'dashboard' ? 'active' : ''}`} onClick={() => setActiveTab('dashboard')}>Dashboard</div>
            <div className={`smea-nav-tab ${activeTab === 'mps' ? 'active' : ''}`} onClick={() => setActiveTab('mps')}>MPS <span className="smea-badge smea-badge-blue">Quality</span></div>
            <div className={`smea-nav-tab ${activeTab === 'crla' ? 'active' : ''}`} onClick={() => setActiveTab('crla')}>CRLA / Literacy <span className="smea-badge smea-badge-amber">Assessment</span></div>
            <div className={`smea-nav-tab ${activeTab === 'numeracy' ? 'active' : ''}`} onClick={() => setActiveTab('numeracy')}>Numeracy <span className="smea-badge smea-badge-amber">Assessment</span></div>
            <div className={`smea-nav-tab ${activeTab === 'submission' ? 'active' : ''}`} onClick={() => setActiveTab('submission')}>PIR Submission <span className="smea-badge smea-badge-green">Q3</span></div>
          </div>
        </div>

        <div className="smea-content">
          {activeTab === 'dashboard' && (
            <div>
              <div className="smea-page-header">
                <div>
                  <div className="smea-page-title">School Overview — Q3 SY 2024–2025</div>
                  <div className="smea-page-sub">Leyte Division · Elementary Level</div>
                </div>
                <button className="smea-btn smea-btn-primary" onClick={() => setActiveTab('submission')}>Submit PIR Report to SDO ↗</button>
              </div>

              <div className="smea-cards-grid">
                <div className="smea-metric-card">
                  <div className="smea-metric-label">Total Enrolment</div>
                  <div className="smea-metric-value">131</div>
                  <div className="smea-metric-trend smea-trend-flat">Elem: 131 · JHS: 0</div>
                </div>
                <div className="smea-metric-card">
                  <div className="smea-metric-label">Avg MPS (School)</div>
                  <div className="smea-metric-value">82.7%</div>
                  <div className="smea-metric-trend smea-trend-up">▲ above target</div>
                </div>
                <div className="smea-metric-card">
                  <div className="smea-metric-label">CRLA Assessed</div>
                  <div className="smea-metric-value">54</div>
                  <div className="smea-metric-trend smea-trend-flat">Gr 1–3 · MTB/Fil/Eng</div>
                </div>
                <div className="smea-metric-card">
                  <div className="smea-metric-label">RMA Assessed</div>
                  <div className="smea-metric-value">59</div>
                  <div className="smea-metric-trend smea-trend-up">▲ 52.5% at grade level</div>
                </div>
              </div>

              <div className="smea-two-col">
                <div className="smea-section-card">
                  <div className="smea-section-title">MPS by subject area <span className="smea-tag smea-badge-blue">Elementary</span></div>
                  <div className="smea-progress-row"><div className="smea-progress-label">Mathematics</div><div className="smea-progress-bar-wrap"><div className="smea-progress-bar" style={{width:'82.8%',background:'#378ADD'}}></div></div><div className="smea-progress-pct">82.8%</div></div>
                  <div className="smea-progress-row"><div className="smea-progress-label">English</div><div className="smea-progress-bar-wrap"><div className="smea-progress-bar" style={{width:'82.1%',background:'#378ADD'}}></div></div><div className="smea-progress-pct">82.1%</div></div>
                  <div className="smea-progress-row"><div className="smea-progress-label">Science</div><div className="smea-progress-bar-wrap"><div className="smea-progress-bar" style={{width:'82.4%',background:'#378ADD'}}></div></div><div className="smea-progress-pct">82.4%</div></div>
                  <div className="smea-progress-row"><div className="smea-progress-label">GMRC/EsP</div><div className="smea-progress-bar-wrap"><div className="smea-progress-bar" style={{width:'83.6%',background:'#378ADD'}}></div></div><div className="smea-progress-pct">83.6%</div></div>
                  <div className="smea-progress-row"><div className="smea-progress-label">Makabansa</div><div className="smea-progress-bar-wrap"><div className="smea-progress-bar" style={{width:'82.5%',background:'#378ADD'}}></div></div><div className="smea-progress-pct">82.5%</div></div>
                </div>
                <div className="smea-section-card">
                  <div className="smea-section-title">PIR submission status <span className="smea-tag smea-badge-amber">Q3</span></div>
                  <div className="smea-alert-bar smea-alert-info">ACCESS section — complete</div>
                  <div className="smea-alert-bar smea-alert-info">EQUITY section — complete</div>
                  <div className="smea-alert-bar smea-alert-warn">QUALITY section — 2 items pending</div>
                  <button className="smea-btn" style={{width:'100%',marginTop:'6px',fontSize:'12px'}} onClick={() => setActiveTab('submission')}>Review & submit →</button>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mps' && (
            <div>
              <div className="smea-page-header">
                <div>
                  <div className="smea-page-title">Mean Percentage Score (MPS)</div>
                  <div className="smea-page-sub">Per subject area · per grade level · Q3</div>
                </div>
                <div style={{display:'flex',gap:'8px'}}>
                  <select className="smea-form-input" style={{fontSize:'12px'}}>
                    <option>Elementary</option><option>JHS</option><option>SHS</option>
                  </select>
                  <select className="smea-form-input" style={{fontSize:'12px'}}>
                    <option>Quarter 3</option><option>Quarter 1</option><option>Quarter 2</option>
                  </select>
                </div>
              </div>

              <div className="smea-section-card">
                <div className="smea-section-title">Average MPS by subject per grade level</div>
                <table className="smea-data-table">
                  <thead><tr>
                    <th>Subject</th><th>Gr 1</th><th>Gr 2</th><th>Gr 3</th><th>Gr 4</th><th>Gr 5</th><th>Gr 6</th><th>School Avg</th>
                  </tr></thead>
                  <tbody>
                    <tr><td>Language</td><td>82.7</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td><b>82.7</b></td></tr>
                    <tr><td>Reading &amp; Literacy</td><td>84.7</td><td>—</td><td>—</td><td>—</td><td>—</td><td>—</td><td><b>84.7</b></td></tr>
                    <tr><td>Mathematics</td><td>83.6</td><td>82.3</td><td>82.3</td><td>85.1</td><td>81.2</td><td>82.3</td><td><b>82.8</b></td></tr>
                    <tr><td>English</td><td>—</td><td>82.5</td><td>80.3</td><td>84.6</td><td>80.8</td><td>82.4</td><td><b>82.1</b></td></tr>
                    <tr><td>Science</td><td>—</td><td>—</td><td>80.3</td><td>83.6</td><td>83.6</td><td>82.2</td><td><b>82.4</b></td></tr>
                    <tr><td>GMRC/EsP</td><td>83.9</td><td>83.4</td><td>82.8</td><td>83.2</td><td>84.8</td><td>—</td><td><b>83.6</b></td></tr>
                    <tr><td>Makabansa</td><td>82.5</td><td>82.3</td><td>80.5</td><td>—</td><td>—</td><td>—</td><td><b>82.5</b></td></tr>
                  </tbody>
                </table>
              </div>

              <div className="smea-section-card">
                <div className="smea-section-title">Learners at least Nearly Proficient to Highly Proficient</div>
                <table className="smea-data-table">
                  <thead><tr><th>Grade</th><th>Subject</th><th>Male</th><th>Female</th><th>Total</th><th>Proficiency rate</th></tr></thead>
                  <tbody>
                    <tr><td>Grade 1</td><td>Language / Reading / Math</td><td>7</td><td>8</td><td>15</td><td><div className="smea-proficiency-bar"><div className="smea-proficiency-fill" style={{width:'100%',background:'#1D9E75'}}></div></div></td></tr>
                    <tr><td>Grade 2</td><td>English / Math / Fil</td><td>9</td><td>9</td><td>18</td><td><div className="smea-proficiency-bar"><div className="smea-proficiency-fill" style={{width:'94%',background:'#1D9E75'}}></div></div></td></tr>
                    <tr><td>Grade 3–6</td><td>All core subjects</td><td>—</td><td>—</td><td>—</td><td style={{color:'#6B7280',fontSize:'11px'}}>Encoded by teachers</td></tr>
                  </tbody>
                </table>
                <button className="smea-btn smea-btn-primary" style={{marginTop:'10px',fontSize:'12px'}}>Review Teachers MPS data ↗</button>
              </div>
            </div>
          )}

          {activeTab === 'crla' && (
            <div>
              <div className="smea-page-header">
                <div>
                  <div className="smea-page-title">CRLA — Literacy Assessment</div>
                  <div className="smea-page-sub">Comprehensive Rapid Literacy Assessment · Phil-IRI · BOSY Pre-test</div>
                </div>
                <select className="smea-form-input" style={{fontSize:'12px'}}>
                  <option>CRLA (MTB-MLE / Filipino / English)</option>
                  <option>Phil-IRI English</option>
                  <option>Phil-IRI Filipino</option>
                </select>
              </div>

              <div className="smea-alert-bar smea-alert-info">Pre-test window: Q3 · Post-test window: Q2 · Data from SDO central dashboard tool</div>

              <div className="smea-section-card">
                <div className="smea-section-title">Learners assessed per grade &amp; language</div>
                <table className="smea-data-table">
                  <thead><tr><th>Grade</th><th>MTB-MLE</th><th>Filipino</th><th>English</th><th>Total assessed</th></tr></thead>
                  <tbody>
                    <tr><td>Grade 1</td><td>15</td><td>—</td><td>—</td><td>15</td></tr>
                    <tr><td>Grade 2</td><td>17</td><td>17</td><td>—</td><td>34</td></tr>
                    <tr><td>Grade 3</td><td>22</td><td>22</td><td>22</td><td>66</td></tr>
                  </tbody>
                </table>
              </div>

              <div className="smea-section-card">
                <div className="smea-section-title">Reading profile distribution <span className="smea-tag smea-badge-blue">CRLA results</span></div>
                <div style={{fontSize:'11px',color:'#6B7280',marginBottom:'8px'}}>Number of learners per reading category</div>
                <div className="smea-reading-profile">
                  <div className="smea-profile-pill smea-pp-ind"><div>Independent</div><div className="smea-pp-val">8</div></div>
                  <div className="smea-profile-pill smea-pp-inst"><div>Instructional</div><div className="smea-pp-val">9</div></div>
                  <div className="smea-profile-pill smea-pp-frus"><div>Frustration</div><div className="smea-pp-val">6</div></div>
                  <div className="smea-profile-pill smea-pp-hem"><div>High Emerging</div><div className="smea-pp-val">10</div></div>
                  <div className="smea-profile-pill smea-pp-lem"><div>Low Emerging</div><div className="smea-pp-val">10</div></div>
                </div>
                <button className="smea-btn" style={{marginTop:'12px',fontSize:'12px',width:'100%'}}>Suggest ARAL interventions ↗</button>
              </div>
            </div>
          )}

          {activeTab === 'numeracy' && (
            <div>
              <div className="smea-page-header">
                <div>
                  <div className="smea-page-title">Numeracy Assessment</div>
                  <div className="smea-page-sub">RMA (Gr 1–3) · ERUNT (Gr 4–12) · Pre-test Q3 / Post-test Q2</div>
                </div>
                <select className="smea-form-input" style={{fontSize:'12px'}}>
                  <option>RMA — Grades 1–3</option>
                  <option>ERUNT — Grades 4–12</option>
                </select>
              </div>

              <div className="smea-alert-bar smea-alert-warn">RMA/CRLA/Phil-IRI/ERUNT: For one-time school reporting, data is generated by the SDO via the central office dashboard tool.</div>

              <div className="smea-cards-grid">
                <div className="smea-metric-card"><div className="smea-metric-label">Assessed (RMA)</div><div className="smea-metric-value">59</div><div className="smea-metric-trend smea-trend-flat">Gr1: 15 · Gr2: 17 · Gr3: 27</div></div>
                <div className="smea-metric-card"><div className="smea-metric-label">At grade level</div><div className="smea-metric-value">31</div><div className="smea-metric-trend smea-trend-up">▲ 52.5% of assessed</div></div>
                <div className="smea-metric-card"><div className="smea-metric-label">Transitioning</div><div className="smea-metric-value">18</div><div className="smea-metric-trend smea-trend-flat">30.5%</div></div>
                <div className="smea-metric-card"><div className="smea-metric-label">Developing</div><div className="smea-metric-value">10</div><div className="smea-metric-trend smea-trend-down">17% — needs ARAL</div></div>
              </div>

              <div className="smea-section-card">
                <div className="smea-section-title">RMA proficiency by grade level</div>
                <table className="smea-data-table">
                  <thead><tr>
                    <th>Grade</th>
                    <th>At grade level <span style={{color:'#3B6D11'}}>(HP)</span></th>
                    <th>Transitioning <span style={{color:'#639922'}}>(P)</span></th>
                    <th>Developing <span style={{color:'#854F0B'}}>(NP)</span></th>
                    <th>Emerging <span style={{color:'#A32D2D'}}>(LP/Not P)</span></th>
                  </tr></thead>
                  <tbody>
                    <tr><td>Grade 1</td><td>11</td><td>3</td><td>1</td><td>0</td></tr>
                    <tr><td>Grade 2</td><td>10</td><td>5</td><td>2</td><td>0</td></tr>
                    <tr><td>Grade 3</td><td>10</td><td>10</td><td>7</td><td>0</td></tr>
                    <tr><td><b>Total</b></td><td><b>31</b></td><td><b>18</b></td><td><b>10</b></td><td><b>0</b></td></tr>
                  </tbody>
                </table>
                <button className="smea-btn" style={{marginTop:'10px',fontSize:'12px'}}>View ARAL recommendations ↗</button>
              </div>
            </div>
          )}

          {activeTab === 'submission' && (
            <div>
              <div className="smea-page-header">
                <div>
                  <div className="smea-page-title">PIR Submission — Quarter 3</div>
                  <div className="smea-page-sub">Leyte Division · SY 2024–2025 · Deadline: end of Q3</div>
                </div>
              </div>

              <div className="smea-stepper">
                <div className="smea-step done"><div className="smea-step-circle">✓</div> School info</div>
                <div className="smea-step-line"></div>
                <div className="smea-step done"><div className="smea-step-circle">✓</div> ACCESS</div>
                <div className="smea-step-line"></div>
                <div className="smea-step done"><div className="smea-step-circle">✓</div> EQUITY</div>
                <div className="smea-step-line"></div>
                <div className="smea-step active"><div className="smea-step-circle">4</div> QUALITY</div>
                <div className="smea-step-line"></div>
                <div className="smea-step"><div className="smea-step-circle">5</div> Review &amp; submit to SDO</div>
              </div>

              <div className="smea-section-card">
                <div className="smea-section-title">QUALITY — assessment data entry</div>
                <div className="smea-alert-bar smea-alert-warn">2 sections still require data. Complete before submitting.</div>

                <div style={{marginBottom:'12px'}}>
                  <div style={{fontSize:'12px',fontWeight:500,marginBottom:'8px',display:'flex',alignItems:'center',gap:'6px'}}>
                    <span className="smea-mini-dot" style={{background:'#3B6D11'}}></span> MPS per subject area
                    <span className="smea-tag smea-badge-green">complete</span>
                  </div>
                  <div style={{fontSize:'12px',fontWeight:500,marginBottom:'8px',display:'flex',alignItems:'center',gap:'6px'}}>
                    <span className="smea-mini-dot" style={{background:'#3B6D11'}}></span> Kindergarten performance categories
                    <span className="smea-tag smea-badge-green">complete</span>
                  </div>
                  <div style={{fontSize:'12px',fontWeight:500,marginBottom:'8px',display:'flex',alignItems:'center',gap:'6px'}}>
                    <span className="smea-mini-dot" style={{background:'#854F0B'}}></span> Phil-IRI results (English &amp; Filipino)
                    <span className="smea-tag smea-badge-amber">pending</span>
                  </div>
                  <div style={{fontSize:'12px',fontWeight:500,marginBottom:'8px',display:'flex',alignItems:'center',gap:'6px'}}>
                    <span className="smea-mini-dot" style={{background:'#854F0B'}}></span> ERUNT numeracy (Gr 4–12)
                    <span className="smea-tag smea-badge-amber">pending</span>
                  </div>
                  <div style={{fontSize:'12px',fontWeight:500,marginBottom:'8px',display:'flex',alignItems:'center',gap:'6px'}}>
                    <span className="smea-mini-dot" style={{background:'#3B6D11'}}></span> CRLA reading profiles
                    <span className="smea-tag smea-badge-green">complete</span>
                  </div>
                  <div style={{fontSize:'12px',fontWeight:500,display:'flex',alignItems:'center',gap:'6px'}}>
                    <span className="smea-mini-dot" style={{background:'#3B6D11'}}></span> RMA numeracy (Gr 1–3)
                    <span className="smea-tag smea-badge-green">complete</span>
                  </div>
                </div>
              </div>

              <div className="smea-section-card">
                <div className="smea-section-title">Phil-IRI data entry <span className="smea-tag smea-badge-amber">pending</span></div>
                <div className="smea-form-row">
                  <div className="smea-form-group"><label className="smea-form-label">Grade level</label><select className="smea-form-input"><option>Grade 3</option><option>Grade 4</option><option>Grade 5</option><option>Grade 6</option></select></div>
                  <div className="smea-form-group"><label className="smea-form-label">Language</label><select className="smea-form-input"><option>Filipino</option><option>English</option></select></div>
                </div>
                <div className="smea-form-row">
                  <div className="smea-form-group"><label className="smea-form-label">Independent readers</label><input className="smea-form-input" type="number" placeholder="0" /></div>
                  <div className="smea-form-group"><label className="smea-form-label">Instructional readers</label><input className="smea-form-input" type="number" placeholder="0" /></div>
                </div>
                <div className="smea-form-row">
                  <div className="smea-form-group"><label className="smea-form-label">Frustration readers</label><input className="smea-form-input" type="number" placeholder="0" /></div>
                  <div className="smea-form-group"><label className="smea-form-label">Non-readers</label><input className="smea-form-input" type="number" placeholder="0" /></div>
                </div>
                <div style={{display:'flex',gap:'8px',marginTop:'4px'}}>
                  <button className="smea-btn" style={{flex:1,fontSize:'12px'}}>Save draft</button>
                  <button className="smea-btn smea-btn-primary" style={{flex:1,fontSize:'12px'}}>Save &amp; next →</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
