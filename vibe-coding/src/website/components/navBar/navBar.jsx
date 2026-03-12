import { NavLink } from 'react-router-dom'
import './navBar.scss'

const NavBar = () => {
  return (
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

        <NavLink to="/contact" className="nav__phone">
          <div className="nav__phone-icon">📱</div>
        </NavLink>
      </nav>
    </div>
  );
}

export default NavBar
