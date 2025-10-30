import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Counter from '../components/Counter'
import Software from '../components/Software'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Footer from '../components/Footer'
import WhatsApp from '../components/WhatsApp'

const Home: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Counter />
      <Software />
      <Services />
      <Clients />
      <Footer />
      <WhatsApp />
    </div>
  )
}

export default Home