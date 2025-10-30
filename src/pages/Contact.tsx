import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsApp from '../components/WhatsApp'

const Contact: React.FC = () => {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <section className="page-header">
          <div className="container">
            <h1>Contact Us</h1>
            <p>Get in touch with ARK² Construction Services for all your construction needs.</p>
          </div>
        </section>

        <section className="container" style={{ padding: '4rem 0' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            <div>
              <h2 style={{ color: 'var(--primary-red)', marginBottom: '2rem' }}>Get In Touch</h2>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4>Email</h4>
                <p><a href="mailto:admin@ark2construct.com" style={{ color: 'var(--primary-red)' }}>admin@ark2construct.com</a></p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4>Phone</h4>
                <p><a href="tel:+13123800712" style={{ color: 'var(--primary-red)' }}>+1 (312) 380-0712</a></p>
              </div>
              <div style={{ marginBottom: '1.5rem' }}>
                <h4>WhatsApp</h4>
                <p><a href="https://api.whatsapp.com/send/?phone=918668457181" style={{ color: 'var(--primary-red)' }} target="_blank" rel="noopener noreferrer">+91 866 845 7181</a></p>
              </div>
            </div>
            <div>
              <h2 style={{ color: 'var(--primary-red)', marginBottom: '2rem' }}>Business Hours</h2>
              <p><strong>Monday - Friday:</strong> 9:00 AM - 6:00 PM</p>
              <p><strong>Saturday:</strong> 10:00 AM - 4:00 PM</p>
              <p><strong>Sunday:</strong> Closed</p>
              <br />
              <p>We respond to all inquiries within 24 hours during business days.</p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Contact