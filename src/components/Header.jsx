import { useEffect, useState } from 'react'
import { NavLink, Link } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/portfolio', label: 'Portfolio' },
  { to: '/about', label: 'About' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [progress, setProgress] = useState(0)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onScroll = () => {
      const top = window.scrollY
      const max = document.documentElement.scrollHeight - window.innerHeight
      setScrolled(top > 18)
      setProgress(max > 0 ? (top / max) * 100 : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)
    return () => document.body.classList.remove('menu-open')
  }, [open])

  function tiltLogo(event) {
    const box = event.currentTarget.getBoundingClientRect()
    const x = ((event.clientX - box.left) / box.width - 0.5) * 18
    const y = ((event.clientY - box.top) / box.height - 0.5) * -18
    setTilt({ x, y })
  }

  return (
    <header className={`site-header ${scrolled ? 'is-scrolled' : ''} ${open ? 'is-open' : ''}`}>
      <div className="scroll-progress" style={{ width: `${progress}%` }} />

      <div className="header-shell">
        <Link
          className="brand-mark"
          to="/"
          onClick={() => setOpen(false)}
          onMouseMove={tiltLogo}
          onMouseLeave={() => setTilt({ x: 0, y: 0 })}
          aria-label="Larson Web Design home"
        >
          <span className="brand-orb">
            <img
              src="/images/butterfly.png"
              alt=""
              style={{ transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)` }}
            />
            <i className="spark" aria-hidden="true" />
          </span>
          <span className="brand-copy">
            <strong>Larson</strong>
            <small>Web Design</small>
          </span>
        </Link>

        <nav className="nav-pill" aria-label="Primary navigation">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} end={link.to === '/'}>
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="header-actions">
          <NavLink className="nav-cta" to="/contact">
            <span>Let’s work together</span>
            <em aria-hidden="true">→</em>
          </NavLink>
          <button
            className={`menu ${open ? 'is-open' : ''}`}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span className="sr-only">{open ? 'Close navigation' : 'Open navigation'}</span>
          </button>
        </div>
      </div>

      <div id="mobile-nav" className={`mobile-nav ${open ? 'is-open' : ''}`}>
        <div className="mobile-nav-inner">
          {links.map((link, i) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              style={{ animationDelay: `${120 + i * 70}ms` }}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
          <NavLink className="nav-cta" to="/contact" onClick={() => setOpen(false)}>
            Let’s work together <span aria-hidden="true">→</span>
          </NavLink>
        </div>
      </div>
    </header>
  )
}
