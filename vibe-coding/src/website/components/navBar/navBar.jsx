import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import GetInTouchModal from '../getInTouchModal/getInTouchModal'
import './navBar.scss'

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <div className={`nav-wrapper${scrolled ? ' nav-wrapper--scrolled' : ''}`}>
        <nav className="nav">
          <NavLink to="/" className="nav__logo" aria-label="Home">
            <i className="fa-solid fa-bread-slice"></i>
          </NavLink>

          <div className="nav__links">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
          </div>

          <div className="nav__right">
            <button
              className="nav__hamburger"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <i className="fa-solid fa-bars"></i>
            </button>

            <button className="nav__phone" onClick={() => setModalOpen(true)}>
              <div className="nav__phone-icon">
                <i className="fa-solid fa-mobile-button"></i>
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile slide panel */}
      {menuOpen && (
        <div className="nav__backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
      <div className={`nav__panel${menuOpen ? ' nav__panel--open' : ''}`}>
        <button className="nav__panel-close" onClick={closeMenu} aria-label="Close menu">
          <i className="fa-solid fa-xmark"></i>
        </button>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <NavLink to="/projects" onClick={closeMenu}>Projects</NavLink>
        <NavLink to="/pricing" onClick={closeMenu}>Pricing</NavLink>
      </div>

      <GetInTouchModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default NavBar
