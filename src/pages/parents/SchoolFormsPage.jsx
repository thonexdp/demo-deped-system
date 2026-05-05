import DashboardLayout from '../../components/DashboardLayout'
import { parentNavSections } from './navigation'

const parentBadges = [
  { text: 'Parent / Guardian', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
]

export default function SchoolFormsPage() {
  return (
    <DashboardLayout
      activePath="/parents/school-forms"
      roleNavSections={parentNavSections}
      profile={{
        badgeCode: 'P7',
        title: 'Guardian Account',
        subtitle: 'Linked Learners Only',
        rolePill: 'Parent / Guardian',
        securityContext: 'Guardian-student linkage and consent policies are active.',
      }}
      heading="School Forms"
      subheading="Communication • Document Requests"
      topBadges={parentBadges}
      contextText="Parent / Guardian • Forms"
      contextNotice="Download, print, or electronically submit required school documents."
    >
      <div className="row">
        <div className="col-lg-8">
          <div className="info-card">
            <h3>Required Forms for Submission</h3>
            <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '16px' }}>Forms that need your immediate attention and signature for the current school year.</p>

            <div className="list-row" style={{ padding: '16px', background: '#FEF9C3', border: '1px solid #FDE047', borderRadius: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <i className="mdi mdi-file-alert-outline" style={{ fontSize: '24px', color: '#B45309' }}></i>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#92400E' }}>Health Declaration Form</div>
                  <div style={{ fontSize: '13px', color: '#B45309', marginBottom: '8px' }}>Deadline: Oct 20, 2025 • For: Juan Dela Cruz</div>
                  <button className="btn btn-sm btn-pill" style={{ background: '#FFFFFF', border: '1px solid #FDE047', color: '#92400E', padding: '4px 12px', borderRadius: '999px', fontSize: '12px' }}>Download PDF</button>
                  <button className="btn btn-sm btn-pill" style={{ background: '#CA8A04', border: 'none', color: '#FFFFFF', marginLeft: '8px', padding: '4px 12px', borderRadius: '999px', fontSize: '12px' }}>E-Sign & Submit</button>
                </div>
              </div>
            </div>

            <div className="list-row" style={{ padding: '16px', border: '1px solid #E5E7EB', borderRadius: '8px', marginBottom: '12px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <i className="mdi mdi-file-document-outline" style={{ fontSize: '24px', color: '#4B5563' }}></i>
                <div>
                  <div style={{ fontWeight: 'bold', color: '#111827' }}>Field Trip Waiver - National Museum</div>
                  <div style={{ fontSize: '13px', color: '#6B7280', marginBottom: '8px' }}>Deadline: Oct 15, 2025 • For: Juan Dela Cruz</div>
                  <button className="btn btn-sm btn-pill" style={{ background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#4B5563', padding: '4px 12px', borderRadius: '999px', fontSize: '12px' }}>Download PDF</button>
                  <button className="btn btn-sm btn-pill" style={{ background: '#1E3A8A', border: 'none', color: '#FFFFFF', marginLeft: '8px', padding: '4px 12px', borderRadius: '999px', fontSize: '12px' }}>E-Sign & Submit</button>
                </div>
              </div>
            </div>
          </div>

          <div className="info-card">
            <h3>General Document Templates</h3>
            <p style={{ color: '#6B7280', fontSize: '14px', marginBottom: '16px' }}>Standard forms you can download anytime for requests.</p>
            
            <div className="table-responsive">
              <table className="table" style={{ width: '100%', fontSize: '14px' }}>
                <thead>
                  <tr style={{ color: '#6B7280', borderBottom: '1px solid #E5E7EB' }}>
                    <th style={{ padding: '12px 8px', textAlign: 'left' }}>Document Name</th>
                    <th style={{ padding: '12px 8px', textAlign: 'left' }}>Description</th>
                    <th style={{ padding: '12px 8px', textAlign: 'right' }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                    <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>Excuse Slip</td>
                    <td style={{ padding: '12px 8px', color: '#4B5563' }}>Template for explaining student absences.</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right' }}><button className="btn btn-sm" style={{ background: 'transparent', color: '#2563EB', border: 'none', padding: 0 }}><i className="mdi mdi-download"></i> PDF</button></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                    <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>Good Moral Request</td>
                    <td style={{ padding: '12px 8px', color: '#4B5563' }}>Request form for Certificate of Good Moral Character.</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right' }}><button className="btn btn-sm" style={{ background: 'transparent', color: '#2563EB', border: 'none', padding: 0 }}><i className="mdi mdi-download"></i> PDF</button></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid #F3F4F6' }}>
                    <td style={{ padding: '12px 8px', fontWeight: 'bold' }}>SF9 / Report Card Request</td>
                    <td style={{ padding: '12px 8px', color: '#4B5563' }}>Request form for official duplicate report card.</td>
                    <td style={{ padding: '12px 8px', textAlign: 'right' }}><button className="btn btn-sm" style={{ background: 'transparent', color: '#2563EB', border: 'none', padding: 0 }}><i className="mdi mdi-download"></i> PDF</button></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="info-card">
            <h3>Submission History</h3>
            <div className="list-row" style={{ padding: '12px 0', borderBottom: '1px solid #F3F4F6' }}>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>PTA Membership Form</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>Submitted on: Sep 05, 2025</div>
              </div>
              <span className="pill" style={{ backgroundColor: '#DCFCE7', color: '#166534', border: '1px solid #BBF7D0', padding: '4px 10px', fontSize: '11px', borderRadius: '999px', fontWeight: 600 }}>Approved</span>
            </div>
            <div className="list-row" style={{ padding: '12px 0' }}>
              <div>
                <div style={{ fontWeight: 'bold', fontSize: '14px' }}>Learner Profile Update</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>Submitted on: Aug 12, 2025</div>
              </div>
              <span className="pill" style={{ backgroundColor: '#DCFCE7', color: '#166534', border: '1px solid #BBF7D0', padding: '4px 10px', fontSize: '11px', borderRadius: '999px', fontWeight: 600 }}>Verified</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
