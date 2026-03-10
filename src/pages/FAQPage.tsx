import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const categories = ['All', 'General', 'Pricing', 'Process', 'Technical', 'Support']

const faqs = [
  { cat: 'General', q: 'What does WebCraftLabs do?', a: 'We design and develop digital products — websites, web apps, SaaS platforms, e-commerce stores, and mobile apps. From concept to launch, every layer handled by specialists.' },
  { cat: 'General', q: 'Who are your typical clients?', a: 'Startups, scale-ups, and established businesses across tech, finance, healthcare, and e-commerce. If you care about quality and craft, we\'re a good fit.' },
  { cat: 'General', q: 'Do you work with international clients?', a: 'Yes. Fully distributed team, async-friendly, and we adapt to your timezone for calls. We\'ve worked with clients across 20+ countries.' },
  { cat: 'Pricing', q: "What's your pricing structure?", a: 'Fixed-scope projects and ongoing retainers. Quoted after a discovery call. No surprise fees — ever. Check our pricing page for detailed plans.' },
  { cat: 'Pricing', q: 'Do you offer payment plans?', a: 'Yes. We typically split projects into milestones: 40% upfront, 30% midway, 30% on delivery. For larger projects, we can customize the schedule.' },
  { cat: 'Pricing', q: 'Is there a minimum project size?', a: 'Our smallest engagements start at $2,499 for landing pages. For full web applications, projects typically start at $5,999.' },
  { cat: 'Process', q: 'How long does a typical project take?', a: 'A landing page takes 1–2 weeks. A full website 4–6 weeks. A SaaS product typically 8–16 weeks from kickoff to launch.' },
  { cat: 'Process', q: 'What does the process look like?', a: 'Four phases: Discovery (brief & scope), Design (mockups & prototypes), Development (code & test), Launch (deploy & support). You\'re involved at every step.' },
  { cat: 'Process', q: 'How involved will I need to be?', a: 'As much or as little as you want. We send weekly updates and have async check-ins. Critical decisions need your input; everything else we handle.' },
  { cat: 'Process', q: 'Can you redesign my existing website?', a: 'Absolutely — redesigns are our specialty. We audit what works, identify pain points, and rebuild with modern technology and improved UX.' },
  { cat: 'Technical', q: 'What technologies do you use?', a: 'React, Next.js, TypeScript, Node.js, PostgreSQL, AWS, and more. We choose the stack that best fits your project — no one-size-fits-all.' },
  { cat: 'Technical', q: 'Will I own the code?', a: '100%. You get full source code, documentation, and deployment guides. It\'s your product — we just help build it.' },
  { cat: 'Technical', q: 'Do you handle hosting and deployment?', a: 'Yes. We set up your hosting environment (AWS, Vercel, or your preferred provider), configure CI/CD, and handle the initial deployment.' },
  { cat: 'Support', q: 'Do you offer post-launch support?', a: 'Yes. Maintenance packages covering updates, monitoring, security patches and feature additions. Plans start at $499/month.' },
  { cat: 'Support', q: 'What if something breaks after launch?', a: 'We include a 30-day bug-fix warranty on all projects. For ongoing coverage, our maintenance plans include 24/7 monitoring and rapid response.' },
  { cat: 'Support', q: 'Can I request new features after launch?', a: 'Absolutely. Most clients keep us on retainer for ongoing development. We track feature requests and prioritize based on business impact.' },
]

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const filtered = activeCategory === 'All'
    ? faqs
    : faqs.filter(f => f.cat === activeCategory)

  return (
    <>
      <Navbar />

      {/* Hero */}
      <div className="faq-hero">
        <div className="hgrid" />
        <div className="sl2 animate-fade-up" style={{ color: 'rgba(255,255,255,.4)' }}>FAQ</div>
        <h1 className="page-h1 animate-fade-up animate-fade-up-1" style={{ color: '#fff' }}>
          QUESTIONS<br />ANSWERED
        </h1>
        <p className="page-desc animate-fade-up animate-fade-up-2" style={{ color: 'rgba(255,255,255,.4)', maxWidth: 480 }}>
          Everything you need to know about working with us. Can't find what you're looking for? Reach out directly.
        </p>
      </div>

      {/* FAQ List */}
      <div className="faq-categories">
        <div className="faq-tabs animate-fade-up animate-fade-up-3">
          {categories.map(cat => (
            <button
              key={cat}
              className={`faq-tab${activeCategory === cat ? ' on' : ''}`}
              onClick={() => { setActiveCategory(cat); setOpenFaq(null) }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="faq-list">
          {filtered.map((f, i) => (
            <div key={i} className={`fi${openFaq === i ? ' op' : ''} animate-fade-up`} style={{ animationDelay: `${i * 0.04}s` }}>
              <div className="fq" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                <span>
                  <span style={{ fontFamily: "'Courier New',monospace", fontSize: '.55rem', color: '#999', letterSpacing: '.1em', marginRight: 10 }}>{f.cat.toUpperCase()}</span>
                  {f.q}
                </span>
                <div className="fico">+</div>
              </div>
              <div className="fa">{f.a}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact CTA */}
      <section style={{ background: '#f4f4f4', textAlign: 'center' }}>
        <MessageCircle size={32} style={{ color: '#0a0a0a', marginBottom: 20 }} />
        <div className="sl2">Still have questions?</div>
        <h2 className="st">LET'S TALK</h2>
        <p style={{ fontFamily: "'Courier New',monospace", fontSize: '.7rem', color: '#999', lineHeight: 1.9, maxWidth: 400, margin: '0 auto 30px' }}>
          Drop us a message and we'll get back to you within 24 hours. No commitment required.
        </p>
        <Link to="/contact" className="bcta" style={{ background: '#0a0a0a', color: '#fff', borderColor: '#0a0a0a' }}>Contact us ↗</Link>
      </section>

      <Footer />
    </>
  )
}
