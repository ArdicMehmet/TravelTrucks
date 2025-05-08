"use client"

import { Link } from "react-router-dom"
import { Home, Menu, X } from "lucide-react"
import { useState } from "react"

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <header className="header">
      <div className="container header-container">
        <Link to="/" className="logo">
          <Home size={24} />
          <span>TravelTrucks</span>
        </Link>

        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li>
              <Link to="/" className="nav-link">
                Ana Sayfa
              </Link>
            </li>
            <li>
              <Link to="/catalog" className="nav-link">
                Katalog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
