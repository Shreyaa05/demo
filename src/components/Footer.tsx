import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer>
      <div className="ftg">
        <div className="fbr">
          <Link to="/" style={{ fontFamily: "'Courier New',monospace", fontWeight: 900, fontSize: '1.1rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#0a0a0a', textDecoration: 'none' }}>WebCraftLabs</Link>
          <p>We design and develop digital products that help businesses grow. Quality-first, always.</p>
        </div>
        <div className="fc">
          <h4>Services</h4>
          {['Web Development', 'App Development', 'E-Commerce', 'SaaS Products', 'SEO'].map(l => <Link key={l} to="/services">{l}</Link>)}
        </div>
        <div className="fc">
          <h4>Company</h4>
          <Link to="/about">About Us</Link>
          <Link to="/#work">Our Work</Link>
          <Link to="/pricing">Pricing</Link>
          <Link to="/faq">FAQ</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="fc">
          <h4>Account</h4>
          <Link to="/login">Log In</Link>
          <Link to="/contact">Get Started</Link>
          <a href="mailto:hello@webcraftlabs.com">hello@webcraftlabs.com</a>
          <a href="tel:+15550000000">+1 (555) 000-0000</a>
        </div>
      </div>
      <div className="fbot">
        <p>© 2026 WebCraftLabs. All rights reserved.</p>
        <div className="socs">
          <a href="#" className="soc">X</a>
          <a href="#" className="soc">in</a>
          <a href="#" className="soc">▶</a>
        </div>
      </div>
    </footer>
  )
}
