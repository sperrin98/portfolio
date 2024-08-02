import React from 'react';
import './App.css';
import overviewImage from './assets/overview-bg.png';
import MapComponent from './MapComponent';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      <section
        className="section"
        id="overview"
        style={{
          backgroundImage: `url(${overviewImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="overview-container">
          <div className="nav-buttons">
            <button onClick={() => scrollToSection('overview')}>Overview</button>
            <button onClick={() => scrollToSection('about-me')}>About Me</button>
            <button onClick={() => scrollToSection('work-projects')}>Work / Projects</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('contact-me')}>Contact Me</button>
          </div>
          <div className="text-content">
            <h3 className="intro">Hi, my name is...</h3>
            <h2 className="my-name">Stanley Perrin</h2>
            <h1 className="job-title">I am a web developer</h1>
            <a
              className="btn contact-btn"
              href="mailto:stanperrin98@gmail.com?subject=Get in Touch&body=Hello, I'd like to get in touch with you."
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      <section className="section" id="about-me">
        <div className="left-content">
          {/* Add your content here */}
          <h1 className='aboutme-header'>A little bit about me</h1>
          <p>This is where the information will go on the left side.</p>
        </div>
        <div className="map-container">
          <MapComponent />
        </div>
      </section>
      <section className="section" id="work-projects">
        <h1>Work / Projects</h1>
      </section>
      <section className="section" id="skills">
        <h1>Skills</h1>
      </section>
      <section className="section" id="contact-me">
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}

export default App;
