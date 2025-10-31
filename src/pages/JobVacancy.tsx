import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppFloat from '../components/WhatsAppFloat';

const JobVacancy: React.FC = () => {
  return (
    <>
      <Header />
      <main className="page-content">
        <div className="container">
          <h1>Job Vacancy</h1>
          <p>Join our team at ARK Global Services. Current job openings and career opportunities.</p>
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
};

export default JobVacancy;