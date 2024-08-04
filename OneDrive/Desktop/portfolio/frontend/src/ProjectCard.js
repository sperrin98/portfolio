import React, { useState } from 'react';
import './ProjectCard.css';

const ProjectCard = ({ title, description }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="project-card" onClick={handleOpenModal}>
        <img className="project-image" src="path/to/your/image.jpg" alt={title} />
        <div className="project-content">
          <h3 className="project-title">{title}</h3>
          <p className="project-description">{description}</p>
          <button className="view-more-btn">View More</button>
        </div>
      </div>

      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-header">
              <h3>{title}</h3>
              <button className="close-modal-btn" onClick={handleCloseModal}>×</button>
            </div>
            <div className="modal-body">
              <img className="modal-image" src="path/to/your/image.jpg" alt={title} />
              <p>{description}</p>
            </div>
            <div className="modal-footer">
              <button className="close-modal-btn" onClick={handleCloseModal}>Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
