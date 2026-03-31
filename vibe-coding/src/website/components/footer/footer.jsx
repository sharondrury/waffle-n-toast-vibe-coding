import { Link } from 'react-router-dom'
import wntLogo from '../../../assets/images/WnT-logo.svg'
import './footer.scss'

function FacebookIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round"
      strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  )
}

function LinkedInIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer">

        <div className="footer__col-one">
          <img src={wntLogo} alt="Waffle n Toast" className="footer__logo" />
          <address className="footer__address">
            <span>123 Example Street</span>
            <span>London</span>
            <span>EC1A 1BB</span>
          </address>
          <a href="mailto:email@email.com" className="footer__email">
            email@email.com
          </a>
        </div>

        <div className="footer__col-two">
          <button
            className="footer__nav-link"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Home
          </button>
          <Link className="footer__nav-link" to="/projects">Projects</Link>
          <Link className="footer__nav-link" to="/pricing">Pricing</Link>
          <a
            className="footer__nav-link"
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Blog
          </a>
        </div>

        <div className="footer__col-three">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Facebook"
          >
            <FacebookIcon />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__social-link"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>

      </div>
      <p className="footer__copyright">© Copyright Waffle & Toast 2026</p>
    </footer>
  )
}

export default Footer
