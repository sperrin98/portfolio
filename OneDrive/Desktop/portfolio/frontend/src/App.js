import React from 'react';
import './App.css';
import overviewImage from './assets/overview-bg.png'; // Adjust path based on where you place the image

function App() {
  return (
    <div className="App">
      <section
        className="section"
        id="overview"
        style={{
          backgroundImage: `url(${overviewImage})`, // Use the correct property and path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div className="overview-container">
          <h3 className="intro">Hi, my name is...</h3>
          <h2 className="my-name">Stanley Perrin</h2>
          <h1 className="job-title">I am a web developer</h1>
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
