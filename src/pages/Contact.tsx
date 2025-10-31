import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const Contact: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1>Contact Us</h1>
          <p>Get in touch with ARK Global Services.</p>
          <div className="contact-info">
            <p>Email: <a href="mailto:admin@ark2construct.com">admin@ark2construct.com</a></p>
            <p>Phone: <a href="tel:+13123800712">+1 (312) 380-0712</a></p>
            <p>WhatsApp: <a href="https://api.whatsapp.com/send/?phone=918668457181&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer">+91 86684 57181</a></p>
          </div>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default Contact;