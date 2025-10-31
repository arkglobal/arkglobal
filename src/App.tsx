import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Calendar from './pages/Calendar';
import ProEstimate from './pages/ProEstimate';
import ClientBenefits from './pages/ClientBenefits';
import Services from './pages/Services';
import EstimatingServices from './pages/EstimatingServices';
import SubmittalServices from './pages/SubmittalServices';
import About from './pages/About';
import Terms from './pages/Terms';
import Contact from './pages/Contact';
import RefundPolicy from './pages/RefundPolicy';
import AmericanVendors from './pages/AmericanVendors';
import EstimatingSoftware from './pages/EstimatingSoftware';
import JobVacancy from './pages/JobVacancy';
import PrivacyPolicy from './pages/PrivacyPolicy';
import More from './pages/More';
import './shared/styles.css';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calendar" element={<Calendar />} />
        <Route path="/proestimate" element={<ProEstimate />} />
        <Route path="/client-benefits" element={<ClientBenefits />} />
        <Route path="/services" element={<Services />} />
        <Route path="/estimating-services" element={<EstimatingServices />} />
        <Route path="/submittal-services" element={<SubmittalServices />} />
        <Route path="/about" element={<About />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/american-vendors" element={<AmericanVendors />} />
        <Route path="/estimating-software" element={<EstimatingSoftware />} />
        <Route path="/job-vacancy" element={<JobVacancy />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/more" element={<More />} />
      </Routes>
    </Router>
  );
};

export default App;