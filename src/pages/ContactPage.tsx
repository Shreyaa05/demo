import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export default function ContactPage() {
  const [form, setForm] = useState({ name: '', email: '', company: '', budget: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <Navbar />

      <section className="contact-section">
        <div className="contact-left">
          <div className="sl2">Contact</div>
          <h1 className="page-h1" style={{ fontSize: 'clamp(2.5rem,5vw,5rem)' }}>LET'S BUILD<br />SOMETHING<br />GREAT</h1>
          <p className="page-desc" style={{ maxWidth: 380 }}>
            Have a project in mind? We'd love to hear about it. Fill out the form and we'll get back to you within 24 hours.
          </p>
          <div className="contact-info">
            <div className="contact-info-item">
              <div className="contact-info-label">Email</div>
              <a href="mailto:hello@webcraftlabs.com" className="contact-info-value">hello@webcraftlabs.com</a>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Phone</div>
              <a href="tel:+15550000000" className="contact-info-value">+1 (555) 000-0000</a>
            </div>
            <div className="contact-info-item">
              <div className="contact-info-label">Location</div>
              <div className="contact-info-value">San Francisco, CA<br />Remote-friendly worldwide</div>
            </div>
          </div>
        </div>

        <div className="contact-right">
          {submitted ? (
            <div className="contact-success">
              <div className="contact-success-icon">✓</div>
              <h3>Thank you!</h3>
              <p>We've received your message and will get back to you within 24 hours.</p>
              <Link to="/" className="nbtn" style={{ display: 'inline-flex', background: '#0a0a0a', color: '#fff', borderColor: '#0a0a0a', marginTop: 20 }}>Back to home →</Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label>Name *</label>
                  <input type="text" required value={form.name} onChange={e => setForm({...form, name: e.target.value})} placeholder="John Doe" />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" required value={form.email} onChange={e => setForm({...form, email: e.target.value})} placeholder="john@company.com" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Company</label>
                  <input type="text" value={form.company} onChange={e => setForm({...form, company: e.target.value})} placeholder="Company Inc." />
                </div>
                <div className="form-group">
                  <label>Budget Range</label>
                  <select value={form.budget} onChange={e => setForm({...form, budget: e.target.value})}>
                    <option value="">Select a range</option>
                    <option value="5k-15k">$5K – $15K</option>
                    <option value="15k-30k">$15K – $30K</option>
                    <option value="30k-50k">$30K – $50K</option>
                    <option value="50k+">$50K+</option>
                  </select>
                </div>
              </div>
              <div className="form-group full">
                <label>Tell us about your project *</label>
                <textarea required rows={5} value={form.message} onChange={e => setForm({...form, message: e.target.value})} placeholder="Describe your project, goals, and timeline..." />
              </div>
              <button type="submit" className="bcta" style={{ cursor: 'pointer', border: '1px solid #0a0a0a', background: '#0a0a0a', color: '#fff' }}>
                Send message ↗
              </button>
            </form>
          )}
        </div>
      </section>

      <Footer />
    </>
  )
}
