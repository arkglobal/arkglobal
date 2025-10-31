import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const ClientBenefits: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1>Client Benefits</h1>
          <p>Discover the advantages of working with ARK Global Services.</p>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default ClientBenefits;