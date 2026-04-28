import { Link, useNavigate, useLocation } from 'react-router-dom'
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
  const navigate = useNavigate()
  const { pathname } = useLocation()

  const handleHome = () => {
    if (pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      navigate('/')
      window.scrollTo({ top: 0, behavior: 'instant' })
    }
  }

  return (
    <footer className="footer-wrapper">
      <div className="footer">
        <div className="footer__col-one">
          <i className="fa-solid fa-bread-slice fa-2x"></i>
          <address className="footer__address">
            <span>
              <i className="fa-solid fa-location-dot fa-lg"></i>North Wales, UK
            </span>
          </address>
          <a href="mailto:email@email.com" className="footer__email">
            <i className="fa-regular fa-envelope fa-lg"></i>
            infowaffleandtoast@gmail.com
          </a>
        </div>

        <div className="footer__col-two">
          <h3 className=" footer-header">Explore</h3>
          <button
            className="footer__nav-link"
            onClick={handleHome}
          >
            Home
          </button>
          <Link className="footer__nav-link" to="/projects">
            Projects
          </Link>
          <Link className="footer__nav-link" to="/pricing">
            Pricing
          </Link>
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
          <h3 className=" footer-header">Follow Us</h3>
          <div className="footer__social-link">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FacebookIcon />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
      <p className="footer__copyright">© Copyright Waffle & Toast 2026</p>
    </footer>
  );
}

export default Footer
