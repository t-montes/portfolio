import React from 'react';

const ProjectCard = ({ project, index }) => (
  <div className="swiper-slide">
    <a href={`#project-${index}`} className="clickable-div">
      <div className="project-item">
        <h3>{project.name}</h3>
        <h4>{project.technologies?.map((tech, i) => 
          <React.Fragment key={i}>{tech} {i !== project.technologies.length - 1 && <b> · </b>}</React.Fragment>
        )}</h4>

        <p className="project-description">{project.description}</p>

        <div className="project-img-container">
          <img src={project.icon??project.images[0]} className="project-img" alt={project.name + " icon"} />
        </div>

        <p className="project-date">{project.date}</p>
      </div>
    </a>
  </div>
);

export default ProjectCard;