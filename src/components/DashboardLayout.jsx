import { Link } from 'react-router-dom'

function Sidebar({ profile, activePath, roleNavSections }) {
  const roleLandingItems = [
    { label: 'Parent', path: '/parents', tone: '#1D4ED8' },
    { label: 'Teacher', path: '/teachers', tone: '#065F46' },
    { label: 'Head Teacher', path: '/headteachers', tone: '#7C3AED' },
    { label: 'Admin', path: '/admin', tone: '#B45309' },
  ]

  const navSections = roleNavSections

  return (
    <aside className="left-sidebar sidebar-dark" id="left-sidebar">
      <div id="sidebar" className="sidebar">
        <div className="role-switcher-top">
          {roleLandingItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`role-switch-btn ${activePath.startsWith(item.path) ? 'active' : ''}`}
              style={activePath.startsWith(item.path) ? { backgroundColor: item.tone } : undefined}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div style={{ padding: '24px 20px 10px' }}>
          <div className="d-flex align-items-center mb-3">
            <div style={{ background: 'rgba(255,255,255,0.2)', borderRadius: '8px', width: '36px', height: '36px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 800, marginRight: '12px' }}>
              {profile.badgeCode}
            </div>
            <div style={{ lineHeight: 1.2 }}>
              <div style={{ color: 'white', fontWeight: 800, fontSize: '14px' }}>{profile.title}</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px' }}>{profile.subtitle}</div>
            </div>
          </div>
          <div style={{ background: 'rgba(255,255,255,0.2)', color: 'white', padding: '6px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, border: '1px solid rgba(255,255,255,0.3)', display: 'inline-block', width: '100%' }}>
            {profile.rolePill}
          </div>
        </div>

        <div className="sidebar-left" data-simplebar style={{ height: '100%' }}>
          <ul className="nav sidebar-inner" id="sidebar-menu">
            {navSections.map((section) => (
              <li key={section.title}>
                <div className="section-title">{section.title}</div>
                <ul className="nav">
                  {section.items.map((item) => {
                    const isActive = item.path === activePath
                    return (
                      <li className={isActive ? 'active' : ''} key={item.label}>
                        {item.path ? (
                          <Link className="sidenav-item-link" to={item.path}>
                            <i className={item.icon}></i>
                            <span className="nav-text">{item.label}</span>
                          </Link>
                        ) : (
                          <a className="sidenav-item-link" href={item.href}>
                            <i className={item.icon}></i>
                            <span className="nav-text">{item.label}</span>
                          </a>
                        )}
                      </li>
                    )
                  })}
                </ul>
              </li>
            ))}
          </ul>
          <div style={{ padding: '20px' }}>
            <div style={{ background: 'rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px', marginBottom: '12px' }}>
              <div style={{ color: 'white', fontWeight: 800, fontSize: '13px', marginBottom: '6px' }}>Security Context</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', lineHeight: 1.5 }}>{profile.securityContext}</div>
            </div>
            <div style={{ background: 'rgba(0,0,0,0.15)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '16px' }}>
              <div style={{ color: 'white', fontWeight: 800, fontSize: '13px', marginBottom: '6px' }}>Operational Status</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '11px', lineHeight: 1.5 }}>Notifications, sync, and policy status remain visible in every workspace.</div>
            </div>
          </div>
        </div>


      </div>
    </aside>
  )
}

function Header({ heading, subheading, topBadges }) {
  return (
    <header className="main-header" id="header" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '20px' }}>
      <div className="d-flex align-items-center">
        <div className="app-brand" style={{ backgroundColor: 'white', borderRight: '1px solid transparent', width: '260px', display: 'flex', alignItems: 'center', padding: '0 20px', height: '72px' }}>
          <div style={{ background: '#1E3A8A', color: 'white', borderRadius: '8px', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '14px', marginRight: '10px' }}>D1</div>
          <div style={{ lineHeight: 1.2 }}>
            <div style={{ color: '#111827', fontWeight: 800, fontSize: '15px' }}>DepEd ONE</div>
            <div style={{ color: '#6B7280', fontSize: '11px' }}>Unified Learning Platform</div>
          </div>
        </div>

        <button id="sidebar-toggler" className="sidebar-toggle" style={{ marginRight: '20px' }}>
          <span className="sr-only">Toggle navigation</span>
        </button>

        <div style={{ lineHeight: 1.2, marginRight: '30px' }}>
          <div style={{ fontWeight: 800, color: '#111827', fontSize: '16px' }}>{heading}</div>
          <div style={{ color: '#6B7280', fontSize: '12px' }}>{subheading}</div>
        </div>

        <div className="d-none d-lg-flex align-items-center" style={{ gap: '12px' }}>
          {(topBadges || []).map((badge) => (
            <span className="badge" style={badge.style} key={badge.text}>
              {badge.text}
            </span>
          ))}
        </div>
      </div>

      <div className="navbar-right d-flex align-items-center" style={{ gap: '12px' }}>
        <button className="btn btn-sm" style={{ background: 'white', border: '1px solid #E5E7EB', color: '#4B5563', borderRadius: '20px', fontWeight: 700, padding: '6px 16px' }}>English <i className="mdi mdi-chevron-down"></i></button>
        <button className="btn btn-sm" style={{ background: 'white', border: '1px solid #E5E7EB', color: '#4B5563', borderRadius: '20px', fontWeight: 700, padding: '6px 16px' }}>Help</button>
        <button className="btn btn-sm" style={{ background: 'white', border: '1px solid #E5E7EB', color: '#4B5563', borderRadius: '20px', fontWeight: 700, padding: '6px 16px' }}>Profile</button>
      </div>
    </header>
  )
}

export default function DashboardLayout({
  activePath,
  profile,
  roleNavSections,
  heading,
  subheading,
  topBadges,
  contextText,
  contextNotice,
  children,
}) {
  const currentYear = new Date().getFullYear()

  return (
    <div className="wrapper">
      <Sidebar profile={profile} activePath={activePath} roleNavSections={roleNavSections} />
      <div className="page-wrapper">
        <Header heading={heading} subheading={subheading} topBadges={topBadges} />
        <div className="content-wrapper">
          <div className="content p-0">
            <div style={{ backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '12px', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
              <div style={{ color: '#4B5563', fontSize: '14px', fontWeight: 500 }}>
                <strong style={{ color: '#111827' }}>Context:</strong> {contextText}
              </div>
              <div style={{ color: '#1E3A8A', fontSize: '14px', fontWeight: 800 }}>{contextNotice}</div>
            </div>
            {children}
          </div>
        </div>
        <footer className="footer mt-auto">
          <div className="copyright bg-white">
            <p>&copy; {currentYear} DepEd Integrated Proposal System Prototype</p>
          </div>
        </footer>
      </div>
    </div>
  )
}
