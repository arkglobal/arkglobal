import './style.css'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <header class="header">
    <div class="nav-container">
      <div class="logo-container">
        <img src="/public/ARK.png" class="logo" alt="ARK2 Logo" />
        <span class="company-name">ARK2</span>
      </div>
      <nav class="nav">
        <a href="#home" class="nav-link">Home</a>
        <a href="#about" class="nav-link">About</a>
        <a href="#services" class="nav-link">Services</a>
        <a href="#contact" class="nav-link">Contact</a>
      </nav>
    </div>
  </header>

  <main class="main">
    <section class="hero">
      <h1 class="hero-title">Professional Solutions</h1>
      <p class="hero-subtitle">Excellence in every detail</p>
      <button class="cta-button">Get Started</button>
    </section>

    <section class="features">
      <div class="feature-grid">
        <div class="feature-card">
          <h3>Quality</h3>
          <p>Delivering exceptional results with attention to detail</p>
        </div>
        <div class="feature-card">
          <h3>Innovation</h3>
          <p>Cutting-edge solutions for modern challenges</p>
        </div>
        <div class="feature-card">
          <h3>Reliability</h3>
          <p>Trusted partnerships built on consistent performance</p>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>&copy; 2024 ARK2. All rights reserved.</p>
  </footer>
`
