import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer" id="contact">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>About the Company</h4>
            <p>ARK² Construction Services - Your trusted partner in construction solutions.</p>
            <p>Email: <a href="mailto:admin@ark2construct.com">admin@ark2construct.com</a></p>
          </div>
          <div className="footer-column">
            <h4>Important Pages</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#clients">Clients</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/people/ARK-Square-Construction-Services/61560240804233/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/ark2construct/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/ark2constructionservices/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com/channel/UCfpoJp-4TITe5SVpXW28xww" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer