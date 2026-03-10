import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { projects } from '../data/projects'

export default function HomePage() {
  const [clock, setClock] = useState('--:--:--')
  const [progressWidth, setProgressWidth] = useState(0)
  const [currentStep, setCurrentStep] = useState(0)
  const [progressFill, setProgressFill] = useState(25)
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState('All')
  const countersStarted = useRef(false)

  useEffect(() => {
    const interval = setInterval(() => {
      const n = new Date()
      setClock([n.getHours(), n.getMinutes(), n.getSeconds()]
        .map(v => String(v).padStart(2, '0')).join(':'))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement
      const prog = doc.scrollTop / (doc.scrollHeight - doc.clientHeight)
      setProgressWidth(prog * 100)

      // Process scroll-driven step
      const pw = document.getElementById('pw')
      if (pw) {
        const rect = pw.getBoundingClientRect()
        const scrolled = -rect.top
        const total = pw.offsetHeight - window.innerHeight
        if (scrolled >= 0 && scrolled <= total) {
          const step = Math.min(3, Math.floor((scrolled / total) * 4))
          goStep(step)
        }
      }

      // Counters
      if (!countersStarted.current) {
        document.querySelectorAll('.cnt:not(.done)').forEach(el => {
          if (el.getBoundingClientRect().top < window.innerHeight * 0.9) {
            el.classList.add('done')
            countersStarted.current = true
            const target = +(el as HTMLElement).dataset.t!
            const start = Date.now(), dur = 2000
            const tick = () => {
              const t = Math.min((Date.now() - start) / dur, 1)
              el.textContent = String(Math.round(target * (1 - Math.pow(1 - t, 3))))
              if (t < 1) requestAnimationFrame(tick)
            }
            tick()
          }
        })
      }

      // H-scroll services
      const hsw = document.getElementById('hsw')
      const st = document.getElementById('st')
      if (hsw && st) {
        const r = hsw.getBoundingClientRect()
        const scrolled = -r.top
        const total = hsw.offsetHeight - window.innerHeight
        if (scrolled >= 0 && scrolled <= total) {
          const svcs = st.querySelectorAll('.svc')
          const maxX = svcs.length * 320 - (window.innerWidth - 420)
          ;(st as HTMLElement).style.transform = `translateX(${-(scrolled / total) * Math.max(0, maxX)}px)`
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const goStep = (n: number) => {
    setCurrentStep(n)
    setProgressFill((n + 1) * 25)
  }

  const toggleFaq = (i: number) => {
    setOpenFaq(openFaq === i ? null : i)
  }

  const faqs = [
    { q: 'How long does a typical project take?', a: 'It depends on scope. A landing page takes 1–2 weeks. A full SaaS product typically 8–16 weeks from kickoff to launch.' },
    { q: "What's your pricing structure?", a: 'Fixed-scope projects and ongoing retainers. Quoted after a discovery call. No surprise fees — ever.' },
    { q: 'Do you offer post-launch support?', a: 'Yes. Maintenance packages covering updates, monitoring, security patches and feature additions.' },
    { q: 'Can you redesign my existing website?', a: 'Absolutely — redesigns are our specialty. We analyze what works, what doesn\'t, and build something better.' },
    { q: 'Do you work with international clients?', a: 'Yes. Fully distributed team, async-friendly, and we adapt to your timezone for calls.' },
  ]

  const processSteps = [
    {
      tag: 'Phase 01 of 04 — Initiation',
      title: <>Discovery<br />Call</>,
      desc: 'We dive deep into your goals, audience, and requirements. No templates — every brief built from scratch around your situation.',
      file: 'BRIEF_INIT.SH',
      code: <>
        <span className="dim">$</span> run discovery --client=new<br />
        <span className="dim">→</span> Scanning requirements...<br />
        <span className="dim">→</span> Building brief matrix...<br />
        <span className="dim">✓</span> Brief ready <span className="ptcur" />
      </>,
      data: <>PHASE // 01<br />STATUS // ACTIVE<br />BUILD // 2026.03</>
    },
    {
      tag: 'Phase 02 of 04 — Design',
      title: <>Design<br />Sprint</>,
      desc: 'Pixel-perfect mockups delivered in days, not weeks. You see exactly what you\'re getting before a single line of code is written.',
      file: 'FIGMA_EXPORT.SH',
      code: <>
        <span className="dim">$</span> export --frames=all --handoff<br />
        <span className="dim">→</span> Compiling 48 frames...<br />
        <span className="dim">→</span> Attaching token specs...<br />
        <span className="dim">✓</span> Handoff complete <span className="ptcur" />
      </>,
      data: <>FRAMES // 48<br />STATUS // ACTIVE<br />TOKENS // 312</>
    },
    {
      tag: 'Phase 03 of 04 — Build',
      title: <>Develop-<br />ment</>,
      desc: 'Clean, scalable code with modern frameworks. Weekly live demos keep you in the loop at every stage of the build.',
      file: 'BUILD.SH',
      code: <>
        <span className="dim">$</span> npm run build --env=production<br />
        <span className="dim">→</span> Compiling 1,847 modules...<br />
        <span className="dim">→</span> Running test suite...<br />
        <span className="dim">✓</span> Build passing <span className="ptcur" />
      </>,
      data: <>MODULES // 1847<br />TESTS // 100%<br />STATUS // ACTIVE</>
    },
    {
      tag: 'Phase 04 of 04 — Ship',
      title: <>Launch &amp;<br />Support</>,
      desc: 'We handle deployment, QA, and post-launch monitoring. Most clients keep us on retainer long after the first project ships.',
      file: 'DEPLOY.SH',
      code: <>
        <span className="dim">$</span> deploy --env=prod --cdn=global<br />
        <span className="dim">→</span> Pushing to 14 edge nodes...<br />
        <span className="dim">→</span> Warming cache...<br />
        <span className="dim">✓</span> Live at 99.98% uptime <span className="ptcur" />
      </>,
      data: <>UPTIME // 99.98%<br />NODES // 14<br />STATUS // LIVE</>
    },
  ]

  const filteredProjects = activeTab === 'All'
    ? projects
    : projects.filter(p => p.categoryTag === activeTab)

  return (
    <>
      <div id="prog" style={{ width: `${progressWidth}%` }} />

      {/* LOADER */}
      <div id="ldr">
        <div className="ldr-word"><span>WEBCRAFTLABS</span></div>
        <div className="ldr-bar-wrap"><div className="ldr-bar" /></div>
        <div style={{ fontFamily: "'Courier New',monospace", fontSize: '.65rem', color: 'rgba(255,255,255,.3)', letterSpacing: '.2em' }}>LOADING...</div>
      </div>

      {/* NAV */}
      <Navbar />

      {/* HERO */}
      <section id="hero">
        <div className="hgrid" />
        <div className="hscan" />
        <div className="hbr tl" /><div className="hbr tr" />
        <div className="hbr bl" /><div className="hbr br" />
        <div className="hsys">
          <div className="hsr"><span>SYS</span><div className="hsb b1" /></div>
          <div className="hsr"><span>CPU</span><div className="hsb b2" /></div>
          <div className="hsr"><span>MEM</span><div className="hsb b3" /></div>
        </div>
        <div className="hread">LAT // 28.619<br />LNG // 77.209<br /><br /><span>{clock}</span></div>
        <div className="horbit">
          <div className="hring"><div className="hrdot" /></div>
          <div className="hring r2" />
          <div className="hring r3" />
        </div>
        <div className="hscroll"><div className="hsl" /><div className="hslt">Scroll</div></div>
        <div className="hbadge"><div className="hdot" />Available for new projects · 2026</div>
        <h1 className="hh1">
          <span className="hl"><span className="hw w1">WE</span>&nbsp;<span className="hw w2">BUILD</span></span>
          <span className="hl"><span className="hw w3 hout">DIGITAL</span></span>
          <span className="hl"><span className="hw w4">SOLUTIONS</span></span>
        </h1>
        <div className="hbot">
          <p className="hdesc">SaaS platforms, web apps, and e-commerce experiences crafted with precision. We turn complex problems into elegant digital products.</p>
          <div className="hbtns">
            <a href="#work" className="bw">View Work ↗</a>
            <Link to="/contact" className="bgh">Let's Talk</Link>
          </div>
        </div>
      </section>

      {/* TICKER */}
      <div className="ticker">
        <div className="ttrack">
          {['Web Development', 'SaaS Products', 'E-Commerce', 'UI/UX Design', 'Landing Pages', 'App Development', 'SEO', 'Redesign',
            'Web Development', 'SaaS Products', 'E-Commerce', 'UI/UX Design', 'Landing Pages', 'App Development', 'SEO', 'Redesign'
          ].map((item, i) => (
            <div key={i} className="titem">{item}<span className="tdot" /></div>
          ))}
        </div>
      </div>

      {/* WORK */}
      <section id="work">
        <div className="wh">
          <div><div className="sl2">Selected Work</div><h2 className="st" style={{ marginBottom: 0 }}>WE ARE<br />PROUD</h2></div>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
            <p style={{ fontFamily: "'Courier New',monospace", fontSize: '.67rem', color: '#999', maxWidth: 220, lineHeight: 1.8, textAlign: 'right' }}>Quality and precision on every project.</p>
            <div className="ftabs">
              {['All', 'SaaS', 'E-Commerce', 'Branding'].map(tab => (
                <button key={tab} className={`ftab${activeTab === tab ? ' on' : ''}`} onClick={() => setActiveTab(tab)}>{tab}</button>
              ))}
            </div>
          </div>
        </div>
        <div className="wgrid">
          {filteredProjects.map(p => (
            <Link to={`/work/${p.id}`} key={p.id} className={`pc ${p.colSpan}`}>
              <div className="pci">
                <img src={p.image} alt={p.name} className="pci-img" />
                <div className="pci-overlay" />
                <div className="pcib">{p.shortName}</div>
              </div>
              <div className="pctag">{p.categoryTag}</div>
              <div className="pcarr">↗</div>
              <div className="pci2">
                <div className="pcat">{p.category}</div>
                <div className="pnm">{p.name}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <div className="cbar">
        {['TechNova', 'Vortex', 'BlueAxis', 'Meridian', 'Solarix', 'Craftware', 'Nexify'].map(c => (
          <div key={c} className="cli">{c}</div>
        ))}
      </div>

      {/* MARQUEE */}
      <div className="mqw">
        <div className="mqr">
          <div className="mqin">
            {['Website Development ↗', 'Branding & Design ↗', 'E-Commerce ↗', 'SaaS Products ↗', 'App Development ↗', 'SEO ↗',
              'Website Development ↗', 'Branding & Design ↗', 'E-Commerce ↗', 'SaaS Products ↗'].map((item, i) => (
              <div key={i} className={`mqit${i % 2 === 0 ? ' lit' : ''}`}>{item}</div>
            ))}
          </div>
        </div>
        <div className="mqr">
          <div className="mqin">
            {['CRM Systems ↗', 'Landing Pages ↗', 'Redesign ↗', 'UI/UX Design ↗', 'Performance ↗', 'Consulting ↗',
              'CRM Systems ↗', 'Landing Pages ↗', 'Redesign ↗', 'UI/UX ↗'].map((item, i) => (
              <div key={i} className={`mqit${i % 2 !== 0 ? ' lit' : ''}`}>{item}</div>
            ))}
          </div>
        </div>
      </div>

      {/* SERVICES H-SCROLL */}
      <div id="hsw"><div id="hsp">
        <div className="hint">
          <div><div className="sl2">Services</div><h2 className="st" style={{ fontSize: 'clamp(2.2rem,4vw,3.6rem)', marginBottom: 0 }}>WHAT WE<br />DELIVER</h2></div>
          <p>From concept to launch — every layer handled by specialists.</p>
          <Link to="/services" className="nbtn" style={{ width: 'fit-content', background: '#0a0a0a', color: '#fff', borderColor: '#0a0a0a' }}>View all services →</Link>
        </div>
        <div id="st">
          {[
            { n: '01', t: 'Website Dev', d: 'Fast, beautiful websites. Pixel-perfect across all devices.', tags: ['React', 'Next.js'] },
            { n: '02', t: 'Branding', d: 'Visual identities that tell your story and make impressions.', tags: ['Figma', 'UI/UX'] },
            { n: '03', t: 'SaaS Products', d: 'Full-stack apps built to scale. MVP to enterprise.', tags: ['Node.js', 'AWS'] },
            { n: '04', t: 'E-Commerce', d: 'High-converting stores with seamless checkout flows.', tags: ['Shopify', 'Headless'] },
            { n: '05', t: 'App Dev', d: 'Cross-platform mobile apps that feel truly native.', tags: ['React Native'] },
            { n: '06', t: 'SEO', d: 'Technical SEO and performance that drives organic growth.', tags: ['Core Web Vitals'] },
            { n: '07', t: 'Landing Pages', d: 'Conversion-focused pages built fast. Proven to perform.', tags: ['CRO', 'A/B'] },
          ].map(s => (
            <div key={s.n} className="svc">
              <div className="svn">{s.n}</div>
              <div>
                <div className="svt">{s.t}</div>
                <div className="svd">{s.d}</div>
                <div>{s.tags.map(tag => <span key={tag} className="svtag">{tag}</span>)}</div>
              </div>
            </div>
          ))}
        </div>
      </div></div>

      {/* STATS */}
      <div className="stats">
        {[
          { t: 350, sup: '+', lbl: 'Projects Delivered' },
          { t: 8, sup: 'yr', lbl: 'In Business' },
          { t: 98, sup: '%', lbl: 'Client Satisfaction' },
          { t: 24, sup: '/7', lbl: 'Support Available' },
        ].map(s => (
          <div key={s.lbl} className="sc2">
            <div className="snum"><span className="cnt" data-t={s.t}>0</span><span className="ssup">{s.sup}</span></div>
            <div className="slbl">{s.lbl}</div>
          </div>
        ))}
      </div>

      {/* PROCESS */}
      <div id="pw">
        <div id="ps">
          <div className="pgrid" />
          <div className="pscan" />
          {[
            { left: '8%', dur: '14s', del: '0s' }, { left: '22%', dur: '19s', del: '3s' },
            { left: '37%', dur: '12s', del: '1s' }, { left: '53%', dur: '17s', del: '5s' },
            { left: '68%', dur: '15s', del: '2s' }, { left: '81%', dur: '22s', del: '7s' },
            { left: '14%', dur: '16s', del: '4s' }, { left: '45%', dur: '20s', del: '9s' },
            { left: '72%', dur: '13s', del: '6s' }, { left: '90%', dur: '18s', del: '8s' },
          ].map((p, i) => (
            <div key={i} className="pp" style={{ left: p.left, animationDuration: p.dur, animationDelay: p.del }} />
          ))}

          <div className="pleft">
            <div className="plbl">Process</div>
            <h2 className="ph">HOW<br />WE<br />WORK</h2>
            <div className="pnav">
              {['Discovery Call', 'Design Sprint', 'Development', 'Launch & Support'].map((label, i) => (
                <div key={i} className={`pst${currentStep === i ? ' on' : ''}`} onClick={() => goStep(i)}>
                  <div className="pnum">0{i + 1}</div>
                  <div className="pdot" />
                  <div className="plb">{label}</div>
                </div>
              ))}
            </div>
            <div className="pprog">
              <div className="pprog-lbl"><span>PROGRESS</span><span>{progressFill}%</span></div>
              <div className="pprog-track"><div className="pprog-fill" style={{ width: `${progressFill}%` }} /></div>
            </div>
          </div>

          <div className="pright">
            {processSteps.map((step, i) => (
              <div key={i} className={`ppanel${currentStep === i ? ' on' : ''}`}>
                <div className="pbign">0{i + 1}</div>
                <div className="ptag"><div className="ptag-dot" />{step.tag}</div>
                <div className="ptitle">{step.title}</div>
                <div className="pdesc">{step.desc}</div>
                <div className="pterm">
                  <div className="ptbar"><div className="ptdot" /><div className="ptdot" /><div className="ptdot" /><div className="pttl">{step.file}</div></div>
                  <div className="ptcode">{step.code}</div>
                </div>
                <div className="pdata">{step.data}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* TECH */}
      <section id="tech">
        <div className="sl2">Stack</div>
        <h2 className="st">OUR TOOLS<br />OF THE TRADE</h2>
        <div className="tgrid">
          {[
            { ico: '⚛️', nm: 'React' }, { ico: '▲', nm: 'Next.js' }, { ico: '🟢', nm: 'Node.js' },
            { ico: '🐘', nm: 'PostgreSQL' }, { ico: '🍃', nm: 'MongoDB' }, { ico: '🐳', nm: 'Docker' },
            { ico: '☁️', nm: 'AWS' }, { ico: '🔥', nm: 'Firebase' }, { ico: '🛒', nm: 'Shopify' },
            { ico: '🎨', nm: 'Figma' }, { ico: '📱', nm: 'React Native' }, { ico: '🔷', nm: 'TypeScript' },
          ].map(t => (
            <div key={t.nm} className="tt"><div className="tico">{t.ico}</div><div className="tnm">{t.nm}</div></div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section id="faq">
        <div className="flay">
          <div>
            <div className="sl2">FAQ</div>
            <h2 className="st">FREQUENTLY<br />ASKED</h2>
            <p className="flp">Have more questions? Drop us a line — happy to chat before any commitment.</p>
            <Link to="/contact" className="nbtn" style={{ display: 'inline-flex', background: '#0a0a0a', color: '#fff', borderColor: '#0a0a0a' }}>Contact us →</Link>
          </div>
          <div>
            {faqs.map((f, i) => (
              <div key={i} className={`fi${openFaq === i ? ' op' : ''}`}>
                <div className="fq" onClick={() => toggleFaq(i)}>
                  <span>{f.q}</span>
                  <div className="fico">+</div>
                </div>
                <div className="fa">{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <div id="cta">
        <div id="ctabg">CRAFT</div>
        <h2>LET'S BUILD<br />SOMETHING<br />GREAT</h2>
        <p>Tell us about your project — we respond within 24 hours.</p>
        <Link to="/contact" className="bcta">Start a project ↗</Link>
      </div>

      <Footer />
    </>
  )
}
