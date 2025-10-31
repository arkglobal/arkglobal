import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const ProEstimate: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1>ProEstimate</h1>
          <p>Professional estimation services for your construction projects.</p>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default ProEstimate;