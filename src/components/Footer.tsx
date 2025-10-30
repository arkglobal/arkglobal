import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-column">
            <h4>About the Company</h4>
            <p>ARK² Construction Services - Your trusted partner in construction solutions.</p>
            <p>Email: <a href="mailto:admin@ark2construct.com">admin@ark2construct.com</a></p>
            <p>Phone: <a href="tel:+13123800712">+1 (312) 380-0712</a></p>
          </div>
          
          <div className="footer-column">
            <h4>Services</h4>
            <ul>
              <li><a href="/estimating-services">Estimating Services</a></li>
              <li><a href="/submittal-services">Submittal Services</a></li>
              <li><a href="/estimating-software">Estimating Software</a></li>
              <li><a href="/calendar">Calendar</a></li>
              <li><a href="/proestimate">ProEstimate</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Company</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/client-benefits">Client Benefits</a></li>
              <li><a href="/american-vendors">American Vendors</a></li>
              <li><a href="/job-vacancy">Job Vacancy</a></li>
              <li><a href="/contact">Contact Us</a></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h4>Legal</h4>
            <ul>
              <li><a href="/terms">Terms and Conditions</a></li>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/refund">Refund Policy</a></li>
            </ul>
            
            <h4 style={{marginTop: '2rem'}}>Follow Us</h4>
            <div className="social-links">
              <a href="https://www.facebook.com/people/ARK-Square-Construction-Services/61560240804233/" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://www.instagram.com/ark2construct/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="https://www.linkedin.com/company/ark2constructionservices/?viewAsMember=true" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com/channel/UCfpoJp-4TITe5SVpXW28xww" target="_blank" rel="noopener noreferrer">YouTube</a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-copyright">
            <p>&copy; 2024 ARK² Construction Services. All rights reserved.</p>
          </div>
          <div className="footer-links">
            <a href="/privacy">Privacy</a>
            <a href="/terms">Terms</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer