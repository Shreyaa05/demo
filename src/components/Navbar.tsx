import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const [navScrolled, setNavScrolled] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navClass = isHome
    ? navScrolled ? 'sc' : ''
    : 'sc inner'

  return (
    <nav id="nav" className={navClass}>
      <Link to="/" className="logo">WebCraftLabs</Link>
      <ul className="nl">
        <li><Link to="/#work">Work</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/#faq">FAQ</Link></li>
      </ul>
      <Link to="/contact" className="nbtn">Start a project →</Link>
    </nav>
  )
}
