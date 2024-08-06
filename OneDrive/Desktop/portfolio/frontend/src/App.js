import React, { useState } from 'react';
import './App.css';
import './Overview.css';
import './AboutMe.css';
import ProjectCard from './ProjectCard';
import MapComponent from './MapComponent';
import profileImage from './assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

function App() {
  const [activeSkill, setActiveSkill] = useState('html-css');

  // Scroll to a section smoothly
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  // Ensure only one skill is active at all times
  const handleSkillClick = (skillId) => {
    setActiveSkill(skillId);
  };

  return (
    <div className="App">
      <section className="section" id="overview">
        <div className="overview-container">
          <div className="nav-buttons">
            <button onClick={() => scrollToSection('about-me')}>About Me</button>
            <button onClick={() => scrollToSection('work-projects')}>Work / Projects</button>
            <button onClick={() => scrollToSection('skills')}>Skills</button>
            <button onClick={() => scrollToSection('contact-me')}>Contact Me</button>
          </div>
          <div className="main-container">
            <div className="text-content">
              <h3 className="intro">Hi, my name is...</h3>
              <h2 className="my-name">Stanley Perrin</h2>
              <h1 className="job-title">I am a web developer</h1>
              <a
                className="contact-btn"
                href="mailto:stanperrin98@gmail.com?subject=Get in Touch&body=Hello, I'd like to get in touch with you."
              >
                Get in Touch
              </a>
            </div>
            <div className="skills-container">
              <ul className="skills-list">
                <li
                  className={`skill ${activeSkill === 'html-css' ? 'active' : ''}`}
                  onClick={() => handleSkillClick('html-css')}
                >
                  HTML & CSS
                </li>
                <div className={`skill-details ${activeSkill === 'html-css' ? 'active' : ''}`} id="html-css">
                  <h3>HTML & CSS</h3>
                  <p>Detailed information about HTML & CSS goes here.</p>
                </div>
                <li
                  className={`skill ${activeSkill === 'ruby' ? 'active' : ''}`}
                  onClick={() => handleSkillClick('ruby')}
                >
                  Ruby on Rails
                </li>
                <div className={`skill-details ${activeSkill === 'ruby' ? 'active' : ''}`} id="ruby">
                  <h3>Ruby on Rails</h3>
                  <p>Detailed information about Ruby on Rails goes here.</p>
                </div>
                <li
                  className={`skill ${activeSkill === 'mysql' ? 'active' : ''}`}
                  onClick={() => handleSkillClick('mysql')}
                >
                  MySQL
                </li>
                <div className={`skill-details ${activeSkill === 'mysql' ? 'active' : ''}`} id="mysql">
                  <h3>MySQL</h3>
                  <p>Detailed information about MySQL goes here.</p>
                </div>
                <li
                  className={`skill ${activeSkill === 'javascript' ? 'active' : ''}`}
                  onClick={() => handleSkillClick('javascript')}
                >
                  JavaScript
                </li>
                <div className={`skill-details ${activeSkill === 'javascript' ? 'active' : ''}`} id="javascript">
                  <h3>JavaScript</h3>
                  <p>Detailed information about JavaScript goes here.</p>
                </div>
                <li
                  className={`skill ${activeSkill === 'react' ? 'active' : ''}`}
                  onClick={() => handleSkillClick('react')}
                >
                  React
                </li>
                <div className={`skill-details ${activeSkill === 'react' ? 'active' : ''}`} id="react">
                  <h3>React</h3>
                  <p>Detailed information about React goes here.</p>
                </div>
                <li
                  className={`skill ${activeSkill === 'python' ? 'active' : ''}`}
                  onClick={() => handleSkillClick('python')}
                >
                  Python
                </li>
                <div className={`skill-details ${activeSkill === 'python' ? 'active' : ''}`} id="python">
                  <h3>Python</h3>
                  <p>Detailed information about Python goes here.</p>
                </div>
              </ul>
            </div>
          </div>
          <div className="social-icons-container">
            <div className="social-icons">
              <a href="https://github.com/your-github-username" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
              <a href="https://linkedin.com/in/your-linkedin-username" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
              <a href="https://facebook.com/your-facebook-username" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="section" id="about-me">
        <div className="left-content">
          <img className='profile-img' src={profileImage} alt="Profile" />
          <h1 className='aboutme-header'>A little bit about me...</h1>
          <p className='about-section'>
            I am a web developer, specialising in both frontend and backend practices, both the interface and design of a website or app. I graduated Le Wagon's Web Development in July of 2022, and have years of experience building web apps, since 2020.
          </p>
          <h1 className='experience-header'>My experience</h1>
          <p className='experience-section'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
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
        <div className="projects-container">
          <ProjectCard title="Flickswipe" description="Flickswipe is a mobile app, designed to help users find a movie or TV show to watch. This app was built using Ruby on Rails. Upon opening the app, the user is prompted to create an account, where they can then add friends, the two users, then pick their genre, TV or movie, and they begin swiping until both users swipe right on the same movie where they will be notified of a match, a Tinder-like process. An API was used to fetch TV shows and movies, and then was displayed through a modal developed through JavaScript and Ruby. The data, of friendships, matched content, liked movies are all stored in a SQLite database." />
          <ProjectCard title="Boatee" description="Description for Boatee" />
          <ProjectCard title="Perrinvest" description="Perrinvest is a web-app, an investment app, where the user can view price histories, of stocks, shares, currencies and other economical data. The majority of the data comes from a MySQL database, which was developed through MySQL and Visual Basic. The data is then fetched from the MySQL database from SQL queries incorporated within Python/Flask code, the backend of the app is coded in Python and Flask, whereas the frontend is in JavaScript." />
        </div>
      </section>
      <section className="section" id="contact-me">
        <h1>Contact Me</h1>
        <div className="contact-container">
          <p>If you have any questions, feel free to reach out to me via the following methods:</p>
          <ul>
            <li>Email: <a href="mailto:stanperrin98@gmail.com">stanperrin98@gmail.com</a></li>
            <li>Phone: <a href="tel:+1234567890">+1234567890</a></li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
