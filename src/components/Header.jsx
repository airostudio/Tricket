import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/what-is-tricket', label: 'What is Tricket?' },
    { to: '/rules', label: 'Rules' },
    { to: '/enter', label: 'Enter a Team' },
    { to: '/fixtures', label: 'Fixtures' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/contact', label: 'Contact' },
  ]

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo" onClick={closeMenu}>
          <img src="/tricket-logo.png" alt="Tricket - Fast, fun cricket game for families at Australian caravan parks" />
        </Link>

        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            {navLinks.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                  onClick={closeMenu}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>
          <Link to="/enter" className="btn btn-primary nav-cta" onClick={closeMenu}>
            Register Now
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header
