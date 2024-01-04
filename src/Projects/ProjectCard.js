import React from 'react';

const ProjectCard = ({ project }) => (
  <div className="swiper-slide">
    <a href={`#modal-${project.id}`} className="clickable-div">
      <div className="project-item">
        <h3>{project.title}</h3>
        <h4>{project.scenario}</h4>
        <div className="stars">
          {Array.from({ length: project.stars }).map((_, index) => (
            <i key={index} className="bi bi-star-fill"></i>
          ))}
        </div>
        <p>{project.description}</p>
        <div className="profile mt-auto">
          <img src={project.imageUrl} className="project-img" alt="" />
        </div>
      </div>
    </a>
  </div>
);

export default ProjectCard;