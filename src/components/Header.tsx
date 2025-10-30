import React, { useState } from 'react'

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo-container">
          <img src="./public/ARK.png" className="logo" alt="ARK² Logo" />
        </div>
        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
          <a href="tel:+13123800712" className="phone">+1 (312) 380-0712</a>
        </nav>
        <button className="nav-toggle" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`mobile-nav ${mobileNavOpen ? 'active' : ''}`}>
        <a href="#home" onClick={() => setMobileNavOpen(false)}>Home</a>
        <a href="#about" onClick={() => setMobileNavOpen(false)}>About</a>
        <a href="#services" onClick={() => setMobileNavOpen(false)}>Services</a>
        <a href="#clients" onClick={() => setMobileNavOpen(false)}>Clients</a>
        <a href="#contact" onClick={() => setMobileNavOpen(false)}>Contact</a>
        <a href="tel:+13123800712" onClick={() => setMobileNavOpen(false)}>+1 (312) 380-0712</a>
      </div>
    </header>
  )
}

export default Header