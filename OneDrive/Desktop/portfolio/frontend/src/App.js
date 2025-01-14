import React from 'react';
import './App.css';
import './Overview.css';
import './AboutMe.css';
import './Work.css';
import './ContactMe.css';
import './ProfileImage.css';
import html5Image from './assets/html5.png';
import cssImage from './assets/css.png';
import rubyImage from './assets/ruby.png';
import mySqlImage from './assets/mysql.png';
import javascriptImage from './assets/javascript.png';
import reactLogo from './assets/react.png';
import pythonLogo from './assets/python.png';
import ProjectCard from './ProjectCard';
import MapComponent from './MapComponent';
import SkillsCarousel from './SkillsCarousel';
import profileImage from './assets/profile.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    {
      name: 'HTML & CSS',
      description: 'The foundation of web development, creating structure and styling.',
      images: [ html5Image, cssImage ],
    },
    {
      name: 'Ruby on Rails',
      description: 'A powerful web application framework for building dynamic websites.',
      images: [ rubyImage ],
    },
    {
      name: 'SQL',
      description: 'Database management and query language for data-driven applications.',
      images: [ mySqlImage ],
    },
    {
      name: 'JavaScript',
      description: 'The language of the web, adding interactivity to your websites.',
      images: [ javascriptImage ],
    },
    {
      name: 'React',
      description: 'A JavaScript library for building user interfaces.',
      images: [ reactLogo ],
    },
    {
      name: 'Python',
      description: 'A versatile programming language used in various domains.',
      images: [ pythonLogo ],
    },
  ];

  return (
    <div className="App">
      <section className="section" id="overview">
        <div className="overview-container">
          <div className="nav-buttons">
            <button onClick={() => scrollToSection('about-me')}>About Me</button>
            <button onClick={() => scrollToSection('work-projects')}>Work / Projects</button>
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
              <a
                className="resume-btn"
                href="mailto:stanperrin98@gmail.com?subject=Get in Touch&body=Hello, I'd like to get in touch with you."
              >
                My Resume
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
              <a href="mailto:stanperrin98@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faEnvelope} size="2x" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className='aboutme-header-container'>
        <h1 className='about-header'>About Me</h1>
      </div>

      <section className="section" id="about-me">
        <div className="left-content">
          <div className="img-wrap">
            <img className="profile-img" src={profileImage} alt="Profile" />
          </div>
          <h1 className='aboutme-header'>A little bit about me...</h1>
          <p className='about-section'>
            Born and raised in West London, Ealing, I am 25 years old and I am a web developer, specialising in both frontend and backend practices, both the interface and design of a website or app. I graduated from Le Wagon's Web Development bootcamp in July of 2022, and have years of experience in programming prior. My hobbies include music, I love going to see my favourite bands, and I am also an avid football fan, supporting Reading FC. For the past 16 months, I have been travelling through out South East Asia, before relocating to Melbourne, Australia for a year to work. On the right, is a map of all the places I travelled to.          </p>
          <h1 className='experience-header'>My experience</h1>
          <p className='experience-section'>
            Graduating from an intense bootcamp with Le Wagon, which is ranked as the world's best coding bootcamp, I worked in a team to create a mobile app 'Flickswipe' in a team of 4. Since then, I have worked on different projects, mainly Perrinvest an investment app, and also designing menus and a booking system to a local restaurant in Ealing. The world of programming is so broad, and I am also eager to learn more.           </p>
        </div>

        <div className='right-content'>
          <div className="map-wrap">
            <MapComponent />
          </div>
        </div>
      </section>


      <div className='work-header-container'>
        <h1 className='work-header'>Work / Projects</h1>
      </div>

      <section className="section" id="work-projects">
        <div className="projects-container">
          <ProjectCard title="Flickswipe" description="Flickswipe is a mobile app, designed to help users find a movie or TV show to watch. This app was built using Ruby on Rails. Upon opening the app, the user is prompted to create an account, where they can then add friends, the two users, then pick there genre, TV or movie, and they begin swiping until both users swipe right on the same movie where they will be notified of a match, a Tinder like process. An API was used to fetch TV shows and movies, and then was displayed through a modal developed through JavaScript and Ruby. The data, of friendships, matched content, liked movies are all stored in a SQLite database." />
          <ProjectCard title="Boatee" description="Description for Boatee" />
          <ProjectCard title="Perrinvest" description="Perrinvest is a web-app, an investment app, where the user can view price histories, of stocks, shares, currencies and other economical data. The majority of the data comes from a MySQL database, which was developed through MySQL and Visual Basic. The data is then fetched from the MySQL database from SQL queries incorporated within Python/Flask code, the backend of the app is coded in Python and Flask, whereas the frontend is in JavaScript and React. Chart.js was used to visualise the data in to line graphs, as well as yfinance API, where the data is visualised in candlestick graphs. There is also a feature to divide two securities / currencies together to create a market ratio, and the opportunity to view different stocks priced in different currencies." />
        </div>
      </section>

      <div className='contact-header-container'>
        <h1 className='contact-header'>Contact Me</h1>
      </div>

      <section className="section" id="contact-me">
        <h1>Contact Me</h1>
      </section>
    </div>
  );
}

export default App;
