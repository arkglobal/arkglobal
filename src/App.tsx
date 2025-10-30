import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'

const App: React.FC = () => {
  return (
    <Router basename="/ark2-website">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/estimating-services" element={<div>Estimating Services - Coming Soon</div>} />
        <Route path="/submittal-services" element={<div>Submittal Services - Coming Soon</div>} />
        <Route path="/estimating-software" element={<div>Estimating Software - Coming Soon</div>} />
        <Route path="/client-benefits" element={<div>Client Benefits - Coming Soon</div>} />
        <Route path="/american-vendors" element={<div>American Vendors - Coming Soon</div>} />
        <Route path="/job-vacancy" element={<div>Job Vacancy - Coming Soon</div>} />
        <Route path="/calendar" element={<div>Calendar - Coming Soon</div>} />
        <Route path="/proestimate" element={<div>ProEstimate - Coming Soon</div>} />
        <Route path="/terms" element={<div>Terms and Conditions - Coming Soon</div>} />
        <Route path="/privacy" element={<div>Privacy Policy - Coming Soon</div>} />
        <Route path="/refund" element={<div>Refund Policy - Coming Soon</div>} />
      </Routes>
    </Router>
  )
}

export default App