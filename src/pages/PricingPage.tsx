import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const plans = [
  {
    tier: 'Starter',
    name: 'Launch',
    monthly: 2499,
    yearly: 1999,
    desc: 'Perfect for startups and small businesses launching their first digital product.',
    features: [
      'Custom Landing Page',
      'Mobile Responsive Design',
      'Basic SEO Setup',
      'Contact Form Integration',
      'Up to 5 Pages',
      '2 Rounds of Revisions',
      '14-Day Delivery',
      'Basic Analytics Setup',
    ],
  },
  {
    tier: 'Professional',
    name: 'Growth',
    monthly: 5999,
    yearly: 4799,
    desc: 'For growing companies that need a complete web presence with advanced features.',
    features: [
      'Everything in Launch, plus:',
      'Up to 15 Custom Pages',
      'CMS Integration',
      'Advanced SEO & Schema',
      'E-Commerce Ready (up to 50 products)',
      'Custom Animations',
      'Performance Optimization',
      'Priority Support',
      '5 Rounds of Revisions',
      'Analytics Dashboard',
    ],
    featured: true,
  },
  {
    tier: 'Enterprise',
    name: 'Scale',
    monthly: 12999,
    yearly: 10399,
    desc: 'Full-service digital partner for companies that demand the absolute best.',
    features: [
      'Everything in Growth, plus:',
      'Unlimited Pages',
      'Custom SaaS Development',
      'API Integrations',
      'Advanced E-Commerce',
      'Database Architecture',
      'CI/CD Pipeline Setup',
      'Dedicated Project Manager',
      'Post-Launch Support (3mo)',
      'Unlimited Revisions',
      'Custom Reporting',
    ],
  },
]

const addons = [
  { name: 'Monthly Maintenance', price: '$499/mo', desc: 'Ongoing updates, security patches, and performance monitoring.' },
  { name: 'SEO Retainer', price: '$799/mo', desc: 'Monthly SEO audits, content strategy, and keyword optimization.' },
  { name: 'App Development', price: 'From $8,999', desc: 'iOS & Android app with shared React Native codebase.' },
  { name: 'Brand Identity', price: 'From $3,499', desc: 'Complete brand package: logo, colors, typography, guidelines.' },
]

const pricingFaqs = [
  { q: 'Are there any hidden fees?', a: 'Never. The price you see is the price you pay. All deliverables, revisions, and hosting setup are included in the quoted scope.' },
  { q: 'Can I upgrade my plan later?', a: 'Absolutely. Start with Launch and scale up as your business grows. We credit your initial investment toward the upgrade.' },
  { q: 'What payment methods do you accept?', a: 'Bank transfer, credit card, and cryptocurrency. We typically split projects into milestones: 40% upfront, 30% midway, 30% on delivery.' },
  { q: 'Do you offer refunds?', a: "We offer a satisfaction guarantee. If you're not happy after the discovery phase, we refund your deposit — no questions asked." },
]

export default function PricingPage() {
  const [yearly, setYearly] = useState(false)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const cardsRef = useRef<HTMLDivElement>(null)
  const [cardsVisible, setCardsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setCardsVisible(true) },
      { threshold: 0.1 }
    )
    if (cardsRef.current) observer.observe(cardsRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="pricing-hero">
        <div className="hgrid" />
        <div className="sl2 animate-fade-up" style={{ color: 'rgba(255,255,255,.4)' }}>Pricing</div>
        <h1 className="page-h1 animate-fade-up animate-fade-up-1" style={{ color: '#fff', textAlign: 'center' }}>
          TRANSPARENT<br />PRICING
        </h1>
        <p className="page-desc animate-fade-up animate-fade-up-2" style={{ color: 'rgba(255,255,255,.4)', textAlign: 'center', margin: '0 auto' }}>
          No hidden fees. No surprise invoices. Pick a plan that matches your ambition and let's build something extraordinary.
        </p>
        <div className="pricing-toggle animate-fade-up animate-fade-up-3">
          <span className={!yearly ? 'pricing-toggle-active' : ''}>Monthly</span>
          <button className={`toggle-switch${yearly ? ' on' : ''}`} onClick={() => setYearly(!yearly)} />
          <span className={yearly ? 'pricing-toggle-active' : ''}>Yearly</span>
        </div>
        {yearly && <div className="pricing-save animate-fade-up">Save 20%</div>}
      </div>

      {/* Cards */}
      <div className="pricing-cards" ref={cardsRef}>
        {plans.map((plan, i) => (
          <div
            key={plan.tier}
            className={`pricing-card${plan.featured ? ' featured' : ''} ${cardsVisible ? 'animate-fade-up' : ''}`}
            style={{ animationDelay: `${i * 0.12}s` }}
          >
            {plan.featured && <div className="pricing-badge">Most Popular</div>}
            <div className="pricing-tier">{plan.tier}</div>
            <div className="pricing-name">{plan.name}</div>
            <div className="pricing-price">
              <span className="pricing-amount">${yearly ? plan.yearly.toLocaleString() : plan.monthly.toLocaleString()}</span>
              <span className="pricing-period">/ project</span>
            </div>
            <p className="pricing-desc">{plan.desc}</p>
            <div className="pricing-features">
              {plan.features.map((f, fi) => (
                <div key={fi} className="pricing-feature">
                  <Check size={13} className="pricing-check" />
                  {f}
                </div>
              ))}
            </div>
            <Link to="/contact" className={`pricing-btn${plan.featured ? ' pricing-btn-featured' : ''}`}>
              <span>Get Started <ArrowRight size={12} style={{ display: 'inline', verticalAlign: 'middle' }} /></span>
            </Link>
          </div>
        ))}
      </div>

      {/* Add-ons */}
      <section style={{ background: '#f4f4f4' }}>
        <div className="sl2">Add-Ons</div>
        <h2 className="st">NEED MORE?</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: 10 }}>
          {addons.map((addon, i) => (
            <div key={i} className="value-card animate-scale-in" style={{ animationDelay: `${i * 0.08}s` }}>
              <div className="value-title" style={{ fontSize: '1rem', marginBottom: 6 }}>{addon.name}</div>
              <div style={{ fontFamily: "'Courier New',monospace", fontWeight: 900, fontSize: '1.4rem', color: '#0a0a0a', marginBottom: 10 }}>{addon.price}</div>
              <div className="value-desc">{addon.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ mini */}
      <section>
        <div className="sl2">Questions</div>
        <h2 className="st">PRICING FAQ</h2>
        <div style={{ maxWidth: 700 }}>
          {pricingFaqs.map((f, i) => (
            <div key={i} className={`fi${openFaq === i ? ' op' : ''}`}>
              <div className="fq" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>{f.q}</span>
                <div className="fico">+</div>
              </div>
              <div className="fa">{f.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div id="cta">
        <div id="ctabg">PRICE</div>
        <h2>READY TO<br />INVEST IN<br />GROWTH?</h2>
        <p>Book a free discovery call — we'll scope your project in 30 minutes.</p>
        <Link to="/contact" className="bcta">Schedule a call ↗</Link>
      </div>

      <Footer />
    </>
  )
}
