import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const RefundPolicy: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1>Refund Policy</h1>
          <p>Our refund policy and procedures for ARK Global Services.</p>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default RefundPolicy;