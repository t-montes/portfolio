import React, { useState, useEffect } from "react";
import projects from './projects.json';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Modal = ({ id, closeModal }) => {
  const [isPC, setIsPC] = useState(window.innerWidth >= 768);
  useEffect(() => {
    const handleResize = () => {
      setIsPC(window.innerWidth >= 768);
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const project = projects[id];

  return (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h2>{project.name}</h2>
      </div>

      <p className="modal-date">{project.date}</p>

      <div className="row">
        <div className={"modal-left" + (isPC ? " col" : "")}>
          <Carousel useKeyboardArrows={true} showThumbs={isPC ? true : false}>
            {project.images.map((path, index) => (
              <img alt={`${project.name} image ${index}`} src={path} key={index} />
            ))}
          </Carousel>
        </div>

        <div className={"modal-right" + (isPC ? " col" : "")}>
          <p className="modal-description">{project.description}</p>
        </div>
      </div>

      <div className="close-button" onClick={closeModal}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
            fill="rgba(0, 0, 0, 0.87)"
          />
        </svg>
      </div>
    </div>
  </div>
  );
};

export default Modal;
