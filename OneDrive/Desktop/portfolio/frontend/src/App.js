import React from 'react';
import './App.css';
import overviewImage from './assets/overview-bg.png';
import MapComponent from './MapComponent';
import profileImage from './assets/profile.jpg'

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
        <img className='profile-img' src={profileImage} alt="Profile" />
          <h1 className='aboutme-header'>A little bit about me...</h1>
          <p className='about-section'>I am a web developer, specialising in both frontend and backend practices, both the interface and design of a website or app. I graduated Le Wagon's Web Development in July of 2022, and have years of experience building web apps, since 2020.</p>
          <h1 className='experience-header'>My experience</h1>
          <p className='experience-section'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <h1 className='travel-header'>Where I've travelled</h1>
        <div className='right-content'>
          <div className="map-container">
            <MapComponent />
          </div>
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
