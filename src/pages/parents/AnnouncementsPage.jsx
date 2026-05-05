import DashboardLayout from '../../components/DashboardLayout'
import { parentNavSections } from './navigation'

const parentBadges = [
  { text: 'Parent / Guardian', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
  { text: 'Linked Learners Only', style: { backgroundColor: '#F9FAFB', color: '#4B5563', border: '1px solid #E5E7EB', padding: '6px 12px', fontSize: '12px' } },
]

export default function AnnouncementsPage() {
  return (
    <DashboardLayout
      activePath="/parents/announcements"
      roleNavSections={parentNavSections}
      profile={{
        badgeCode: 'P7',
        title: 'Guardian Account',
        subtitle: 'Linked Learners Only',
        rolePill: 'Parent / Guardian',
        securityContext: 'Guardian-student linkage and consent policies are active.',
      }}
      heading="Announcements"
      subheading="Communication • School Updates"
      topBadges={parentBadges}
      contextText="Parent / Guardian • Communication"
      contextNotice="View the latest announcements from the school and teachers."
    >
      <div className="row">
        <div className="col-lg-8">
          <div className="info-card">
            <h3>Recent Announcements</h3>
            
            <div style={{ padding: '16px', borderBottom: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#111827' }}>Quarter 3 PTA Meeting</span>
                <span style={{ fontSize: '12px', color: '#6B7280' }}>Today, 9:00 AM</span>
              </div>
              <p style={{ fontSize: '14px', color: '#4B5563', marginBottom: '12px' }}>
                Please be reminded of our upcoming Quarter 3 PTA Meeting scheduled for this Friday at the school gymnasium. Attendance is highly encouraged as we will discuss the upcoming student interventions and performance.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="pill" style={{ backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '4px 10px', fontSize: '11px', borderRadius: '999px', fontWeight: 600 }}>School-wide</span>
                <span className="pill" style={{ backgroundColor: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB', padding: '4px 10px', fontSize: '11px', borderRadius: '999px', fontWeight: 600 }}>Meeting</span>
              </div>
            </div>

            <div style={{ padding: '16px', borderBottom: '1px solid #E5E7EB' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#111827' }}>Suspension of Classes</span>
                <span style={{ fontSize: '12px', color: '#6B7280' }}>Yesterday, 4:00 PM</span>
              </div>
              <p style={{ fontSize: '14px', color: '#4B5563', marginBottom: '12px' }}>
                Due to the heavy rainfall warning issued by PAGASA, all classes in both elementary and secondary levels are suspended tomorrow. Stay safe and dry.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="pill" style={{ backgroundColor: '#FEF2F2', color: '#DC2626', border: '1px solid #FECACA', padding: '4px 10px', fontSize: '11px', borderRadius: '999px', fontWeight: 600 }}>Urgent</span>
                <span className="pill" style={{ backgroundColor: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB', padding: '4px 10px', fontSize: '11px', borderRadius: '999px', fontWeight: 600 }}>Division NCR</span>
              </div>
            </div>

            <div style={{ padding: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                <span style={{ fontWeight: 'bold', color: '#111827' }}>Grade 8 Field Trip Waiver</span>
                <span style={{ fontSize: '12px', color: '#6B7280' }}>Oct 12, 2025</span>
              </div>
              <p style={{ fontSize: '14px', color: '#4B5563', marginBottom: '12px' }}>
                A reminder for parents of Grade 8 students (Juan Dela Cruz): The deadline for the field trip waiver submission is on October 15. Please secure your forms from the adviser.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <span className="pill" style={{ backgroundColor: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB', padding: '4px 10px', fontSize: '11px', borderRadius: '999px', fontWeight: 600 }}>Grade 8</span>
                <span className="pill" style={{ backgroundColor: '#F3F4F6', color: '#4B5563', border: '1px solid #E5E7EB', padding: '4px 10px', fontSize: '11px', borderRadius: '999px', fontWeight: 600 }}>Advisory</span>
              </div>
            </div>

          </div>
        </div>
        <div className="col-lg-4">
           <div className="info-card">
              <h3>Filter Announcements</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button className="btn btn-sm btn-pill" style={{ textAlign: 'left', background: '#EFF6FF', border: '1px solid #BFDBFE', color: '#2563EB' }}>All Announcements</button>
                <button className="btn btn-sm btn-pill" style={{ textAlign: 'left', background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#4B5563' }}>School-wide</button>
                <button className="btn btn-sm btn-pill" style={{ textAlign: 'left', background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#4B5563' }}>Class Advisories</button>
                <button className="btn btn-sm btn-pill" style={{ textAlign: 'left', background: '#FFFFFF', border: '1px solid #E5E7EB', color: '#4B5563' }}>Urgent / Alerts</button>
              </div>
            </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
