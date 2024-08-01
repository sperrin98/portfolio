import React from 'react';
import './App.css';
import overviewImage from './assets/overview-bg.png'; // Update path if needed

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
          </div>
        </div>
      </section>
      <section className="section" id="about-me">
        <h1>About me</h1>
      </section>
      <section className="section" id="work-projects">
        <h1>Work / Projects</h1>
      </section>
      <section className="section" id="skills">
        <h1>Skills</h1>
      </section>
      <section className="section" id="contact-me">
        <h1>Contact me</h1>
      </section>
    </div>
  );
}

export default App;
