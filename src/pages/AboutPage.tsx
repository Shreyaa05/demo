import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const team = [
  { name: 'Alex Morgan', role: 'Founder & CEO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80', bio: 'Former lead engineer at a Fortune 500 tech company. 12 years building digital products.' },
  { name: 'Sarah Chen', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80', bio: 'Award-winning designer. Previously at top agencies in London and New York.' },
  { name: 'Marcus Williams', role: 'Tech Lead', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80', bio: 'Full-stack architect. Open-source contributor. Obsessed with performance.' },
  { name: 'Elena Rodriguez', role: 'Project Director', img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80', bio: 'PMP certified. Keeps every project on time, on budget, and exceeding expectations.' },
  { name: 'David Park', role: 'Senior Developer', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80', bio: 'React specialist. Builds interfaces that are fast, accessible, and delightful.' },
  { name: 'Lisa Thompson', role: 'UX Researcher', img: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80', bio: 'Data-driven design thinker. Turns user insights into product breakthroughs.' },
]

const values = [
  { num: '01', title: 'Quality First', desc: 'We never cut corners. Every pixel, every line of code is crafted with care. We\'d rather take extra time than deliver something mediocre.' },
  { num: '02', title: 'Transparency', desc: 'No hidden fees, no surprise timelines. You see everything — every decision, every sprint, every line item.' },
  { num: '03', title: 'Partnership', desc: 'We don\'t do "fire and forget." We build long-term relationships and invest in your success beyond the launch.' },
  { num: '04', title: 'Innovation', desc: 'We stay at the bleeding edge. Modern frameworks, AI integration, performance optimization — always pushing forward.' },
]

export default function AboutPage() {
  return (
    <>
      <Navbar />
      
      {/* Hero */}
      <section className="page-hero">
        <div className="page-hero-inner">
          <div className="sl2">About Us</div>
          <h1 className="page-h1">WE'RE A TEAM<br />OF BUILDERS</h1>
          <p className="page-desc">
            WebCraftLabs started in 2018 with a simple belief: businesses deserve better digital products.
            Today, we're a team of 15+ designers, developers, and strategists who turn complex ideas into
            elegant, high-performing digital experiences.
          </p>
        </div>
        <div className="page-hero-img">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" alt="Team at work" />
        </div>
      </section>

      {/* Stats Band */}
      <div className="stats">
        {[
          { t: '350+', lbl: 'Projects Delivered' },
          { t: '15+', lbl: 'Team Members' },
          { t: '8', lbl: 'Years in Business' },
          { t: '12', lbl: 'Countries Served' },
        ].map(s => (
          <div key={s.lbl} className="sc2">
            <div className="snum"><span>{s.t}</span></div>
            <div className="slbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* Values */}
      <section className="about-values">
        <div className="sl2">Our Values</div>
        <h2 className="st">WHAT DRIVES<br />US FORWARD</h2>
        <div className="values-grid">
          {values.map(v => (
            <div key={v.num} className="value-card">
              <div className="value-num">{v.num}</div>
              <div className="value-title">{v.title}</div>
              <div className="value-desc">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="about-team">
        <div className="sl2">The Team</div>
        <h2 className="st">MEET THE<br />PEOPLE</h2>
        <div className="team-grid">
          {team.map(t => (
            <div key={t.name} className="team-card">
              <div className="team-img">
                <img src={t.img} alt={t.name} />
              </div>
              <div className="team-info">
                <div className="team-name">{t.name}</div>
                <div className="team-role">{t.role}</div>
                <div className="team-bio">{t.bio}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div id="cta">
        <div id="ctabg">TEAM</div>
        <h2>WANT TO<br />WORK WITH<br />US?</h2>
        <p>Tell us about your project — we respond within 24 hours.</p>
        <Link to="/contact" className="bcta">Start a project ↗</Link>
      </div>

      <Footer />
    </>
  )
}
