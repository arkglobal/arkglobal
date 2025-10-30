import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import WhatsApp from '../components/WhatsApp'

const About: React.FC = () => {
  return (
    <div className="App">
      <Header />
      
      <main className="main-content">
        <section className="page-header">
          <div className="container">
            <h1>About ARK² Construction Services</h1>
            <p>Learn more about our company, mission, and commitment to excellence in construction services.</p>
          </div>
        </section>

        <section className="container" style={{ padding: '4rem 0' }}>
          <h2 style={{ color: 'var(--primary-red)', marginBottom: '2rem' }}>Our Story</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            ARK² is a customer-centric construction service company dedicated to providing efficient solutions for the global construction industry. 
            Our team is committed to delivering exceptional quality outputs that save time and cost for our clients.
          </p>
          
          <h2 style={{ color: 'var(--primary-red)', marginBottom: '2rem' }}>Our Mission</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
            We believe in streamlining the paperwork, documentation, scheduling, and estimating processes, so our clients can focus on their construction projects. 
            Our comprehensive project management approach offers a wide range of services to meet our client's needs.
          </p>
        </section>
      </main>

      <Footer />
      <WhatsApp />
    </div>
  )
}

export default About