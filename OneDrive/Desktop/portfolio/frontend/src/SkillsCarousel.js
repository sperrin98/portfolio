import React, { useState, useEffect, useRef } from 'react';
import './SkillsCarousel.css';

const SkillsCarousel = ({ skills }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const handleScroll = (e) => {
    e.preventDefault();

    const scrollDirection = e.deltaY;
    const carouselElement = carouselRef.current;

    if (!carouselElement) return;

    const totalSlides = skills.length;
    const newIndex = scrollDirection > 0
      ? Math.min(currentIndex + 1, totalSlides - 1)
      : Math.max(currentIndex - 1, 0);

    if (newIndex !== currentIndex) {
      setCurrentIndex(newIndex);
      carouselElement.scrollTo({ top: newIndex * carouselElement.clientHeight, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const carouselElement = carouselRef.current;
    if (carouselElement) {
      carouselElement.addEventListener('wheel', handleScroll, { passive: false });
    }

    return () => {
      if (carouselElement) {
        carouselElement.removeEventListener('wheel', handleScroll);
      }
    };
  }, [currentIndex]);

  return (
    <div className="skills-carousel" ref={carouselRef}>
      <div className="carousel-container">
        <div className="carousel-slides" style={{ transform: `translateY(-${currentIndex * 100}%)` }}>
          {skills.map((skill, index) => (
            <div key={index} className="carousel-slide">
              <h2 className="skill-title">{skill.name}</h2>
              <p className="skill-description">{skill.description}</p>
              <div className="images-container">
                {Array.isArray(skill.images) ? (
                  skill.images.map((image, idx) => (
                    <img
                      key={idx}
                      src={image}
                      alt={skill.name}
                      className={skill.name === 'React' ? 'skill-image react-logo' : 'skill-image'}
                    />
                  ))
                ) : (
                  <p>No images available</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsCarousel;
