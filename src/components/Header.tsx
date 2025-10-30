import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  const toggleNav = () => {
    setMobileNavOpen(!mobileNavOpen)
  }

  return (
    <header className="header">
      <div className="nav-container">
        <div className="logo-container">
          <Link to="/">
            <img src="public/ARK.png" className="logo" alt="ARK² Logo" />
          </Link>
        </div>
        <nav className="nav">
          <div className="nav-item">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-item">
            <a href="#services">Services ▼</a>
            <div className="dropdown">
              <Link to="/estimating-services">Estimating Services</Link>
              <Link to="/submittal-services">Submittal Services</Link>
              <Link to="/estimating-software">Estimating Software</Link>
            </div>
          </div>
          <div className="nav-item">
            <a href="#company">Company ▼</a>
            <div className="dropdown">
              <Link to="/about">About</Link>
              <Link to="/client-benefits">Client Benefits</Link>
              <Link to="/american-vendors">American Vendors</Link>
              <Link to="/job-vacancy">Job Vacancy</Link>
            </div>
          </div>
          <div className="nav-item">
            <a href="#tools">Tools ▼</a>
            <div className="dropdown">
              <Link to="/calendar">Calendar</Link>
              <Link to="/proestimate">ProEstimate</Link>
            </div>
          </div>
          <div className="nav-item">
            <a href="#legal">Legal ▼</a>
            <div className="dropdown">
              <Link to="/terms">Terms and Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
              <Link to="/refund">Refund Policy</Link>
            </div>
          </div>
          <div className="nav-item">
            <Link to="/contact">Contact Us</Link>
          </div>
          <a href="tel:+13123800712" className="phone">+1 (312) 380-0712</a>
        </nav>
        <button className="nav-toggle" onClick={toggleNav}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
      <div className={`mobile-nav ${mobileNavOpen ? 'active' : ''}`}>
        <Link to="/" onClick={() => setMobileNavOpen(false)}>Home</Link>
        <Link to="/calendar" onClick={() => setMobileNavOpen(false)}>Calendar</Link>
        <Link to="/proestimate" onClick={() => setMobileNavOpen(false)}>ProEstimate</Link>
        <Link to="/client-benefits" onClick={() => setMobileNavOpen(false)}>Client Benefits</Link>
        <Link to="/estimating-services" onClick={() => setMobileNavOpen(false)}>Estimating Services</Link>
        <Link to="/submittal-services" onClick={() => setMobileNavOpen(false)}>Submittal Services</Link>
        <Link to="/about" onClick={() => setMobileNavOpen(false)}>About</Link>
        <Link to="/terms" onClick={() => setMobileNavOpen(false)">Terms and Conditions</Link>
        <Link to="/contact" onClick={() => setMobileNavOpen(false)}>Contact Us</Link>
        <Link to="/refund" onClick={() => setMobileNavOpen(false)">Refund Policy</Link>
        <Link to="/american-vendors" onClick={() => setMobileNavOpen(false)}>American Vendors</Link>
        <Link to="/estimating-software" onClick={() => setMobileNavOpen(false)">Estimating Software</Link>
        <Link to="/job-vacancy" onClick={() => setMobileNavOpen(false)">Job Vacancy</Link>
        <Link to="/privacy" onClick={() => setMobileNavOpen(false)">Privacy Policy</Link>
        <a href="tel:+13123800712" onClick={() => setMobileNavOpen(false)}>+1 (312) 380-0712</a>
      </div>
    </header>
  )
}

export default Header