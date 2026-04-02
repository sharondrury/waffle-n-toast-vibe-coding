import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import GetInTouchModal from '../getInTouchModal/getInTouchModal'
import './navBar.scss'

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

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

          <button className="nav__phone" onClick={() => setModalOpen(true)}>
            <div className="nav__phone-icon">
              <i className="fa-solid fa-mobile-button"></i>
            </div>
          </button>
        </nav>
      </div>
      <GetInTouchModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default NavBar
