import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const services = [
  {
    num: '01',
    title: 'Website Development',
    desc: 'Fast, beautiful, responsive websites built with modern frameworks. From marketing sites to complex web applications — pixel-perfect across every device and optimized for performance.',
    features: ['Custom Design & Development', 'Responsive & Mobile-First', 'CMS Integration', 'Performance Optimization', 'SEO-Ready Architecture'],
    tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=600&q=80',
  },
  {
    num: '02',
    title: 'Branding & Design',
    desc: 'Visual identities that tell your story and leave lasting impressions. We create cohesive brand systems that work across every touchpoint — digital and physical.',
    features: ['Logo & Identity Design', 'Brand Guidelines', 'UI/UX Design', 'Design Systems', 'Motion Design'],
    tags: ['Figma', 'After Effects', 'Illustrator'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80',
  },
  {
    num: '03',
    title: 'SaaS Products',
    desc: 'Full-stack applications built to scale. From MVP validation to enterprise-grade platforms — we handle architecture, development, deployment, and ongoing iteration.',
    features: ['MVP Development', 'Full-Stack Architecture', 'API Design', 'Database Optimization', 'CI/CD Pipelines'],
    tags: ['Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
  },
  {
    num: '04',
    title: 'E-Commerce',
    desc: 'High-converting online stores with seamless checkout flows. Custom Shopify builds, headless commerce, subscription management, and multi-vendor marketplaces.',
    features: ['Custom Storefront', 'Payment Integration', 'Inventory Management', 'Subscription Systems', 'Analytics & Reporting'],
    tags: ['Shopify', 'Stripe', 'Headless CMS'],
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
  },
  {
    num: '05',
    title: 'App Development',
    desc: 'Cross-platform mobile applications that feel truly native. React Native and Flutter development with seamless API integration and app store optimization.',
    features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'Offline Support', 'App Store Optimization'],
    tags: ['React Native', 'Flutter', 'Firebase'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
  },
  {
    num: '06',
    title: 'SEO & Performance',
    desc: 'Technical SEO and web performance optimization that drives organic growth. Core Web Vitals, structured data, site speed, and content strategy.',
    features: ['Technical SEO Audit', 'Core Web Vitals', 'Site Speed Optimization', 'Schema Markup', 'Content Strategy'],
    tags: ['Google Analytics', 'Search Console', 'Lighthouse'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="sl2">Services</div>
          <h1 className="page-h1">WHAT WE<br />DELIVER</h1>
          <p className="page-desc">
            From concept to launch — every layer handled by specialists. We don't do mediocre.
            Every project gets the same obsessive attention to quality, performance, and craft.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list">
        {services.map((s, i) => (
          <div key={s.num} className={`service-row${i % 2 === 1 ? ' reverse' : ''}`}>
            <div className="service-img">
              <img src={s.image} alt={s.title} />
              <div className="service-img-num">{s.num}</div>
            </div>
            <div className="service-content">
              <div className="service-num">{s.num}</div>
              <h3 className="service-title">{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-features">
                {s.features.map(f => (
                  <div key={f} className="service-feature">
                    <span className="sf-check">✓</span> {f}
                  </div>
                ))}
              </div>
              <div className="service-tags">
                {s.tags.map(tag => <span key={tag} className="svtag">{tag}</span>)}
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* CTA */}
      <div id="cta">
        <div id="ctabg">BUILD</div>
        <h2>READY TO<br />GET STARTED?</h2>
        <p>Tell us about your project — we respond within 24 hours.</p>
        <Link to="/contact" className="bcta">Start a project ↗</Link>
      </div>

      <Footer />
    </>
  )
}
