import React, { useState } from 'react';
import './SkillsCarousel.css';

const SkillsCarousel = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the next slide
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % skills.length);
  };

  // Handle the previous slide
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + skills.length) % skills.length);
  };

  return (
    <div className="skills-carousel">
      <div className="carousel-container">
        <div
          className="carousel-slides"
          style={{ transform: `translateY(-${currentIndex * 100}%)` }}
        >
          {skills.map((skill, index) => (
            <div key={index} className="carousel-slide">
              <h2 className="skill-title">{skill}</h2>
            </div>
          ))}
        </div>
      </div>
      <button className="carousel-control prev" onClick={handlePrev}>
        &#9650; {/* Up arrow */}
      </button>
      <button className="carousel-control next" onClick={handleNext}>
        &#9660; {/* Down arrow */}
      </button>
    </div>
  );
};

export default SkillsCarousel;
