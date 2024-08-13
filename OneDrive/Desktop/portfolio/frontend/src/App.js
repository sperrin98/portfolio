import React from 'react';
import './App.css';
import './Overview.css';
import './AboutMe.css';
import ProjectCard from './ProjectCard';
import MapComponent from './MapComponent';
import SkillsCarousel from './SkillsCarousel'; // Import the SkillsCarousel component
import profileImage from './assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';

function App() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  // Skills data
  const skills = [
    'HTML & CSS',
    'Ruby on Rails',
    'SQL',
    'JavaScript',
    'React',
    'Python'
  ];

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
            <h1 className='skills-title'>MY SKILLS</h1>
            <div className="skills-container">
              <SkillsCarousel skills={skills} />
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

      <div class="aboutme-header-container">
        <h1 class="aboutme-header">About Me</h1>
      </div>

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
          <ProjectCard title="Flickswipe" description="Flickswipe is a mobile app, designed to help users find a movie or TV show to watch. This app was built using Ruby on Rails. Upon opening the app, the user is prompted to create an account, where they can then add friends, the two users, then pick there genre, TV or movie, and they begin swiping until both users swipe right on the same movie where they will be notified of a match, a Tinder like process. An API was used to fetch TV shows and movies, and then was displayed through a modal developed through JavaScript and Ruby. The data, of friendships, matched content, liked movies are all stored in a SQLite database." />
          <ProjectCard title="Boatee" description="Description for Boatee" />
          <ProjectCard title="Perrinvest" description="Perrinvest is a web-app, an investment app, where the user can view price histories, of stocks, shares, currencies and other economical data. The majority of the data comes from a MySQL database, which was developed through MySQL and Visual Basic. The data is then fetched from the MySQL database from SQL queries incorporated within Python/Flask code, the backend of the app is coded in Python and Flask, whereas the frontend is in JavaScript and React. Chart.js was used to visualise the data in to line graphs, as well as yfinance API, where the data is visualised in candlestick graphs. There is also a feature to divide two securities / currencies together to create a market ratio, and the opportunity to view different stocks priced in different currencies." />
        </div>
      </section>

      <section className="section" id="skills">
        <h1>Skills</h1>
        <div className="skills-carousel-container">
          {/* SkillsCarousel component is already included in the overview section */}
        </div>
      </section>

      <section className="section" id="contact-me">
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}

export default App;
