import { useState } from 'react'
import DashboardLayout from '../../components/DashboardLayout'
import { parentNavSections } from './navigation'

const parentBadges = [
  { text: 'Parent / Guardian', style: { backgroundColor: '#EFF6FF', color: '#2563EB', border: '1px solid #BFDBFE', padding: '6px 12px', fontSize: '12px' } },
]

export default function MessageTeacherPage() {
  const [activeChat, setActiveChat] = useState('adviser1')

  return (
    <DashboardLayout
      activePath="/parents/messages"
      roleNavSections={parentNavSections}
      profile={{
        badgeCode: 'P7',
        title: 'Guardian Account',
        subtitle: 'Linked Learners Only',
        rolePill: 'Parent / Guardian',
        securityContext: 'Guardian-student linkage and consent policies are active.',
      }}
      heading="Message Teacher"
      subheading="Communication • Direct Messaging"
      topBadges={parentBadges}
      contextText="Parent / Guardian • Communication"
      contextNotice="Directly communicate with your child's teachers."
    >
      <div className="row" style={{ minHeight: '600px' }}>
        <div className="col-lg-4 d-flex flex-column">
          <div className="info-card flex-grow-1" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
            <div style={{ padding: '16px', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
              <h3 style={{ margin: 0, fontSize: '16px' }}>Teachers</h3>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflowY: 'auto' }}>
              <button 
                onClick={() => setActiveChat('adviser1')}
                style={{ 
                  textAlign: 'left', 
                  padding: '16px', 
                  border: 'none', 
                  borderBottom: '1px solid #E5E7EB', 
                  backgroundColor: activeChat === 'adviser1' ? '#EFF6FF' : 'transparent',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontWeight: 'bold', color: '#111827' }}>Mr. Santos</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>Adviser • Grade 8 - Mabini</div>
                <div style={{ fontSize: '12px', color: '#2563EB', marginTop: '4px' }}><i className="mdi mdi-account-child-outline me-1"></i>Juan Dela Cruz</div>
              </button>
              
              <button 
                onClick={() => setActiveChat('adviser2')}
                style={{ 
                  textAlign: 'left', 
                  padding: '16px', 
                  border: 'none', 
                  borderBottom: '1px solid #E5E7EB', 
                  backgroundColor: activeChat === 'adviser2' ? '#EFF6FF' : 'transparent',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontWeight: 'bold', color: '#111827' }}>Ms. Reyes</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>Adviser • Grade 5 - Rizal</div>
                <div style={{ fontSize: '12px', color: '#2563EB', marginTop: '4px' }}><i className="mdi mdi-account-child-outline me-1"></i>Ana Dela Cruz</div>
              </button>
              
              <button 
                onClick={() => setActiveChat('subject1')}
                style={{ 
                  textAlign: 'left', 
                  padding: '16px', 
                  border: 'none', 
                  borderBottom: '1px solid #E5E7EB', 
                  backgroundColor: activeChat === 'subject1' ? '#EFF6FF' : 'transparent',
                  cursor: 'pointer'
                }}
              >
                <div style={{ fontWeight: 'bold', color: '#111827' }}>Mrs. Villanueva</div>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>Math Teacher • Grade 8</div>
                <div style={{ fontSize: '12px', color: '#2563EB', marginTop: '4px' }}><i className="mdi mdi-account-child-outline me-1"></i>Juan Dela Cruz</div>
              </button>
            </div>
          </div>
        </div>
        
        <div className="col-lg-8 d-flex flex-column">
          <div className="info-card flex-grow-1" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden' }}>
            <div style={{ padding: '16px', borderBottom: '1px solid #E5E7EB', backgroundColor: '#F9FAFB', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#E5E7EB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4B5563', fontWeight: 'bold' }}>
                {activeChat === 'adviser1' ? 'MS' : activeChat === 'adviser2' ? 'MR' : 'MV'}
              </div>
              <div>
                <h3 style={{ margin: 0, fontSize: '16px' }}>
                  {activeChat === 'adviser1' ? 'Mr. Santos' : activeChat === 'adviser2' ? 'Ms. Reyes' : 'Mrs. Villanueva'}
                </h3>
                <div style={{ fontSize: '12px', color: '#6B7280' }}>
                  {activeChat === 'adviser1' ? 'Adviser • Grade 8 - Mabini' : activeChat === 'adviser2' ? 'Adviser • Grade 5 - Rizal' : 'Math Teacher • Grade 8'}
                </div>
              </div>
            </div>
            
            <div style={{ flex: 1, padding: '20px', overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: '16px', backgroundColor: '#FFFFFF', minHeight: '400px' }}>
              {activeChat === 'adviser1' && (
                <>
                  <div style={{ alignSelf: 'flex-start', maxWidth: '75%' }}>
                    <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '4px', marginLeft: '4px' }}>Mr. Santos • Oct 10, 2:30 PM</div>
                    <div style={{ backgroundColor: '#F3F4F6', padding: '12px 16px', borderRadius: '16px', borderTopLeftRadius: '4px', color: '#111827', fontSize: '14px' }}>
                      Good afternoon po. I noticed Juan missed his first period class today. Is everything okay?
                    </div>
                  </div>
                  
                  <div style={{ alignSelf: 'flex-end', maxWidth: '75%' }}>
                    <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '4px', marginRight: '4px', textAlign: 'right' }}>You • Oct 10, 3:00 PM</div>
                    <div style={{ backgroundColor: '#2563EB', color: '#FFFFFF', padding: '12px 16px', borderRadius: '16px', borderTopRightRadius: '4px', fontSize: '14px' }}>
                      Hello sir, yes po, he had a slight fever this morning so we went to the clinic. He'll be resting today. I will submit the excuse slip tomorrow.
                    </div>
                  </div>
                  
                  <div style={{ alignSelf: 'flex-start', maxWidth: '75%' }}>
                    <div style={{ fontSize: '11px', color: '#6B7280', marginBottom: '4px', marginLeft: '4px' }}>Mr. Santos • Oct 10, 3:15 PM</div>
                    <div style={{ backgroundColor: '#F3F4F6', padding: '12px 16px', borderRadius: '16px', borderTopLeftRadius: '4px', color: '#111827', fontSize: '14px' }}>
                      Understood. Wishing him a fast recovery! We'll just provide his makeup activities once he returns.
                    </div>
                  </div>
                </>
              )}
              {activeChat !== 'adviser1' && (
                <div style={{ textAlign: 'center', color: '#6B7280', fontSize: '13px', marginTop: '40px' }}>
                  No recent messages in this conversation.
                </div>
              )}
            </div>
            
            <div style={{ padding: '16px', borderTop: '1px solid #E5E7EB', backgroundColor: '#F9FAFB' }}>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button className="btn btn-sm" style={{ background: 'transparent', color: '#6B7280', border: 'none', padding: '8px' }}>
                  <i className="mdi mdi-paperclip" style={{ fontSize: '20px' }}></i>
                </button>
                <input type="text" placeholder="Type a message..." style={{ flex: 1, padding: '10px 16px', border: '1px solid #D1D5DB', borderRadius: '999px', outline: 'none' }} />
                <button className="btn btn-sm btn-pill" style={{ background: '#2563EB', color: '#FFFFFF', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 0 }}>
                  <i className="mdi mdi-send" style={{ fontSize: '18px' }}></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
