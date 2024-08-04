import React, { useState } from 'react';
import './App.css';
import ProjectCard from './ProjectCard';
import overviewImage from './assets/overview-bg.png';
import MapComponent from './MapComponent';
import profileImage from './assets/profile.jpg';

function App() {
  const [modalContent, setModalContent] = useState(null);

  const handleOpenModal = (content) => {
    setModalContent(content);
  };

  const handleCloseModal = () => {
    setModalContent(null);
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
            <button onClick={() => document.getElementById('overview').scrollIntoView({ behavior: 'smooth' })}>Overview</button>
            <button onClick={() => document.getElementById('about-me').scrollIntoView({ behavior: 'smooth' })}>About Me</button>
            <button onClick={() => document.getElementById('work-projects').scrollIntoView({ behavior: 'smooth' })}>Work / Projects</button>
            <button onClick={() => document.getElementById('skills').scrollIntoView({ behavior: 'smooth' })}>Skills</button>
            <button onClick={() => document.getElementById('contact-me').scrollIntoView({ behavior: 'smooth' })}>Contact Me</button>
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
        <div className="projects-container">
          <ProjectCard 
            title="Flickswipe" 
            description="Flickswipe is a mobile app, designed to help users find a movie or TV show to watch. This app was built using Ruby on Rails. Upon opening the app, the user is prompted to create an account, where they can then add friends, the two users, then pick there genre, TV or movie, and they begin swiping until both users swipe right on the same movie where they will be notified of a match, a Tinder like process. An API was used to fetch TV shows and movies, and then was displayed through a modal developed through JavaScript and Ruby. The data, of friendships, matched content, liked movies are all stored in a SQLite database."
            onClick={() => handleOpenModal({
              title: 'Flickswipe',
              description: 'Detailed description for Flickswipe',
              image: 'flickswipe-image-url' // replace with actual URL
            })}
          />
          <ProjectCard 
            title="Boatee" 
            description="Description for Boatee" 
            onClick={() => handleOpenModal({
              title: 'Boatee',
              description: 'Detailed description for Boatee',
              image: 'boatee-image-url' // replace with actual URL
            })}
          />
          <ProjectCard 
            title="Perrinvest" 
            description="Perrinvest is a web-app, an investment app, where the user can view price histories, of stocks, shares, currencies and other economical data. The majority of the data comes from a MySQL database, which was developed through MySQL and Visual Basic. The data is then fetched from the MySQL database from SQL queries incorporated within Python/Flask code, the backend of the app is coded in Python and Flask, whereas the frontend is in JavaScript and React. Chart.js was used to visualise the data in to line graphs, as well as yfinance API, where the data is visualised in candlestick graphs. There is also a feature to divide two securities / currencies together to create a market ratio, and the opportunity to view different stocks priced in different currencies."
            onClick={() => handleOpenModal({
              title: 'Perrinvest',
              description: 'Detailed description for Perrinvest',
              image: 'perrinvest-image-url' // replace with actual URL
            })}
          />
          {/* Add more ProjectCard components here */}
        </div>
      </section>

      <section className="section" id="skills">
        <h1>Skills</h1>
      </section>

      <section className="section" id="contact-me">
        <h1>Contact Me</h1>
      </section>

      {/* Modal Implementation */}
      {modalContent && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseModal}>&times;</button>
            <img className="modal-image" src={modalContent.image} alt={modalContent.title} />
            <h1 className="modal-title">{modalContent.title}</h1>
            <p className="modal-description">{modalContent.description}</p>
            <a className="modal-link" href="#">View More</a>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
