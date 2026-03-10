import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChevronDown, ArrowRight, Globe, Zap, Layers, ShoppingCart, Smartphone, Search, FileText, Users, Briefcase, HelpCircle, LogIn } from 'lucide-react'

interface DropdownItem {
  icon: React.ReactNode
  label: string
  desc: string
  to: string
}

interface NavDropdown {
  label: string
  items: DropdownItem[]
}

const dropdowns: Record<string, NavDropdown> = {
  work: {
    label: 'Work',
    items: [
      { icon: <Layers size={16} />, label: 'All Projects', desc: 'View our complete portfolio', to: '/#work' },
      { icon: <Globe size={16} />, label: 'Web Development', desc: 'Custom websites & apps', to: '/#work' },
      { icon: <ShoppingCart size={16} />, label: 'E-Commerce', desc: 'Online stores that convert', to: '/#work' },
      { icon: <Zap size={16} />, label: 'SaaS Products', desc: 'Scalable software platforms', to: '/#work' },
    ],
  },
  services: {
    label: 'Services',
    items: [
      { icon: <Globe size={16} />, label: 'Website Development', desc: 'Fast, beautiful, responsive', to: '/services' },
      { icon: <Layers size={16} />, label: 'Branding & Design', desc: 'Visual identities that last', to: '/services' },
      { icon: <Zap size={16} />, label: 'SaaS Products', desc: 'MVP to enterprise scale', to: '/services' },
      { icon: <ShoppingCart size={16} />, label: 'E-Commerce', desc: 'High-converting stores', to: '/services' },
      { icon: <Smartphone size={16} />, label: 'App Development', desc: 'iOS & Android native feel', to: '/services' },
      { icon: <Search size={16} />, label: 'SEO & Performance', desc: 'Organic growth engine', to: '/services' },
    ],
  },
  company: {
    label: 'Company',
    items: [
      { icon: <Users size={16} />, label: 'About Us', desc: 'Our story and team', to: '/about' },
      { icon: <Briefcase size={16} />, label: 'Careers', desc: 'Join our growing team', to: '/about' },
      { icon: <HelpCircle size={16} />, label: 'FAQ', desc: 'Common questions answered', to: '/faq' },
      { icon: <FileText size={16} />, label: 'Blog', desc: 'Insights & case studies', to: '/about' },
    ],
  },
}

export default function Navbar() {
  const [navScrolled, setNavScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const location = useLocation()
  const isHome = location.pathname === '/'
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setMobileOpen(false)
    setActiveDropdown(null)
  }, [location])

  const navClass = isHome
    ? navScrolled ? 'sc' : ''
    : 'sc inner'

  const handleMouseEnter = (key: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(key)
  }

  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 200)
  }

  return (
    <>
      <nav id="nav" className={navClass}>
        <Link to="/" className="logo">WebCraftLabs</Link>

        <ul className="nl">
          {Object.entries(dropdowns).map(([key, dropdown]) => (
            <li
              key={key}
              className="nav-dropdown-trigger"
              onMouseEnter={() => handleMouseEnter(key)}
              onMouseLeave={handleMouseLeave}
            >
              <span className="nav-link-with-arrow">
                {dropdown.label}
                <ChevronDown size={10} className={`nav-chevron ${activeDropdown === key ? 'nav-chevron-active' : ''}`} />
              </span>

              <div className={`mega-dropdown ${activeDropdown === key ? 'mega-dropdown-visible' : ''}`}
                onMouseEnter={() => handleMouseEnter(key)}
                onMouseLeave={handleMouseLeave}
              >
                <div className="mega-dropdown-inner">
                  <div className="mega-header">
                    <span className="mega-label">{dropdown.label}</span>
                    <Link to={dropdown.items[0].to} className="mega-view-all">
                      View all <ArrowRight size={10} />
                    </Link>
                  </div>
                  <div className="mega-grid">
                    {dropdown.items.map((item, i) => (
                      <Link
                        key={i}
                        to={item.to}
                        className="mega-item"
                        style={{ animationDelay: `${i * 0.04}s` }}
                      >
                        <div className="mega-item-icon">{item.icon}</div>
                        <div className="mega-item-text">
                          <div className="mega-item-label">{item.label}</div>
                          <div className="mega-item-desc">{item.desc}</div>
                        </div>
                        <ArrowRight size={12} className="mega-item-arrow" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
          <li><Link to="/pricing">Pricing</Link></li>
        </ul>

        <div className="nav-right">
          <Link to="/login" className="nav-login-btn">
            <LogIn size={13} />
            <span>Log In</span>
          </Link>
          <Link to="/contact" className="nbtn">Start a project →</Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className={`mobile-hamburger ${mobileOpen ? 'mobile-hamburger-open' : ''}`}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div className={`mobile-menu-overlay ${mobileOpen ? 'mobile-menu-overlay-visible' : ''}`}>
        <div className={`mobile-menu ${mobileOpen ? 'mobile-menu-visible' : ''}`}>
          <div className="mobile-menu-inner">
            {Object.entries(dropdowns).map(([key, dropdown]) => (
              <div key={key} className="mobile-menu-section">
                <button
                  className="mobile-menu-trigger"
                  onClick={() => setMobileExpanded(mobileExpanded === key ? null : key)}
                >
                  <span>{dropdown.label}</span>
                  <ChevronDown size={14} className={mobileExpanded === key ? 'mobile-chev-open' : ''} />
                </button>
                <div className={`mobile-submenu ${mobileExpanded === key ? 'mobile-submenu-open' : ''}`}>
                  {dropdown.items.map((item, i) => (
                    <Link key={i} to={item.to} className="mobile-submenu-link">
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <Link to="/pricing" className="mobile-menu-link">Pricing</Link>
            <Link to="/faq" className="mobile-menu-link">FAQ</Link>
            <div className="mobile-menu-bottom">
              <Link to="/login" className="mobile-login-btn">
                <LogIn size={14} />
                Log In
              </Link>
              <Link to="/contact" className="nbtn" style={{ width: '100%', textAlign: 'center' }}>Start a project →</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
