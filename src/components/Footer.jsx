import { Link } from 'react-router-dom'
import Logo from './Logo.jsx'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <Link className="brand light" to="/" aria-label="Larson Web Design home">
            <Logo compact />
          </Link>
          <p>Thoughtful websites that help small businesses connect, grow, and thrive.</p>
        </div>

        <div>
          <h2>Explore</h2>
          <Link to="/services">Services</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div>
          <h2>Connect</h2>
          <a href="mailto:contact@larsonwebdesign.com">contact@larsonwebdesign.com</a>
          <a
            href="https://www.facebook.com/larsonwebdesign"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      </div>

      <div className="container copyright">
        <span>© 2026 Larson Web Design</span>
        <span>Creative. Thoughtful. Personal.</span>
      </div>
      <div className="footer-bar">
        <div className="container">
          <span>Websites ♡ Support ♡ Growth ♡ Design with purpose</span>
          <img src="/images/butterfly.png" alt="" />
        </div>
      </div>
    </footer>
  )
}
