import React from 'react'

const Hero: React.FC = () => {
  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero" id="home">
      <iframe 
        className="hero-video" 
        src="https://netorg18354711-my.sharepoint.com/personal/admin_ark2construct_com/_layouts/15/embed.aspx?UniqueId=6f4d8270-7f4d-4171-8c9e-8c80f0038986&embed=%7B%22ust%22%3Atrue%2C%22hv%22%3A%22CopyEmbedCode%22%7D&referrer=StreamWebApp&referrerScenario=EmbedDialog.Create"
        frameBorder="0" 
        allowFullScreen 
        allow="autoplay">
      </iframe>
      <div className="hero-overlay">
        <h1>ARK² CONSTRUCTION SERVICES</h1>
        <p>Excellence in Construction Solutions</p>
        <div className="hero-cta">
          <button className="hero-button" onClick={scrollToAbout}>
            Discover More
          </button>
        </div>
      </div>
    </section>
  )
}

export default Hero