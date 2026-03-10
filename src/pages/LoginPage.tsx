import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    // Simulate login
    setTimeout(() => setIsLoading(false), 2000)
  }

  return (
    <div className="login-page">
      {/* Left - Branding */}
      <div className="login-left">
        <div className="hgrid" />
        <div className="hscan" />
        <Link to="/" className="login-brand">WebCraftLabs</Link>
        <div className="login-hero-text animate-fade-up">
          <h1>Welcome<br />Back</h1>
          <p>Access your project dashboard, track progress, review deliverables, and communicate with your team — all in one place.</p>
        </div>
        <div className="login-testimonial animate-fade-up animate-fade-up-3">
          <q>WebCraftLabs transformed our digital presence. The dashboard makes collaboration seamless and transparent.</q>
          <cite>— Sarah Chen, CEO at TechNova</cite>
        </div>

        {/* Decorative elements */}
        <div style={{
          position: 'absolute', bottom: 40, left: 64,
          fontFamily: "'Courier New',monospace", fontSize: '.5rem',
          color: 'rgba(255,255,255,.12)', letterSpacing: '.1em', lineHeight: 1.8
        }} className="animate-fade-up animate-fade-up-4">
          SYS // PORTAL v2.4<br />
          STATUS // ONLINE<br />
          UPTIME // 99.98%
        </div>

        {/* Corner brackets */}
        <div style={{ position: 'absolute', top: 24, right: 24, width: 16, height: 16, borderTop: '1px solid rgba(255,255,255,.1)', borderRight: '1px solid rgba(255,255,255,.1)' }} />
        <div style={{ position: 'absolute', bottom: 24, left: 24, width: 16, height: 16, borderBottom: '1px solid rgba(255,255,255,.1)', borderLeft: '1px solid rgba(255,255,255,.1)' }} />
      </div>

      {/* Right - Form */}
      <div className="login-right">
        <div className="login-form-container">
          <div className="login-form-header animate-fade-up">
            <h2>Log In</h2>
            <p>Enter your credentials to access your dashboard.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="login-field animate-fade-up animate-fade-up-1">
              <label>Email Address</label>
              <input
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="login-field animate-fade-up animate-fade-up-2">
              <label>Password</label>
              <div style={{ position: 'relative' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="••••••••"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  style={{ width: '100%', paddingRight: 40 }}
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)',
                    background: 'none', border: 'none', cursor: 'pointer', color: '#999', display: 'flex'
                  }}
                >
                  {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
                </button>
              </div>
            </div>

            <div className="login-extras animate-fade-up animate-fade-up-3">
              <label className="login-remember">
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/login" className="login-forgot">Forgot password?</Link>
            </div>

            <button
              type="submit"
              className="login-submit animate-fade-up animate-fade-up-4"
              disabled={isLoading}
            >
              {isLoading ? 'Signing in...' : (
                <>Sign In <ArrowRight size={12} style={{ display: 'inline', verticalAlign: 'middle', marginLeft: 4 }} /></>
              )}
            </button>

            <div className="login-divider animate-fade-up animate-fade-up-4">
              <span>or</span>
            </div>

            <button type="button" className="login-social-btn animate-fade-up animate-fade-up-5">
              <svg width="16" height="16" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </button>

            <div className="login-footer animate-fade-up animate-fade-up-5">
              Don't have an account? <Link to="/contact">Get started</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
