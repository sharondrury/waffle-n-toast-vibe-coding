import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import GetInTouchModal from '../getInTouchModal/getInTouchModal'
import './navBar.scss'

const NavBar = () => {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <>
      <div className="nav-wrapper">
        <nav className="nav">
          <NavLink to="/" className="nav__logo">
            Waffle n Toast
          </NavLink>

          <div className="nav__links">
            <NavLink to="/about">About</NavLink>
            <NavLink to="/projects">Projects</NavLink>
            <NavLink to="/pricing">Pricing</NavLink>
          </div>

          <button className="nav__phone" onClick={() => setModalOpen(true)}>
            <div className="nav__phone-icon">📱</div>
          </button>
        </nav>
      </div>
      <GetInTouchModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  )
}

export default NavBar
