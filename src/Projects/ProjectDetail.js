import React, { useState, useEffect } from "react";
import projects from '../lang//projects.en.json';
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

  /* for each "links":{
    "Github":"https://github.com/t-montes/PensuManager"
  }, add an <a> with the name and the blank href */
  const links = [];
  for (const [key, value] of Object.entries(project.links)) {
    links.push(
      <a key={value} href={value} target="_blank" rel="noreferrer">
        {key}
      </a>
    );
  }

  return (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h2>{project.name}</h2>
      </div>

      <p className="modal-date">{project.date}</p>

      <div className="row">
        <div className={"modal-left" + (isPC ? " col-7" : "")}>
          <Carousel useKeyboardArrows={true} showThumbs={isPC ? true : false}>
            {project.images.map((path, index) => (
              <img alt={`${project.name} ${index}`} src={path} key={index} />
            ))}
          </Carousel>
        </div>

        <div className={"modal-right d-flex align-items-center" + (isPC ? " col-5" : "")}>
          <div>
            <div className="modal-links">{links.map((e, i) => 
              <React.Fragment key={i}>{e}{i !== links.length - 1 && <span> · </span>}</React.Fragment>
            )}</div>
            <p className="modal-description">{project.description}</p>
            <p className="modal-madeby">
              <span className="modal-madeby-title">Author{project.authors.length > 1 && "s"}: </span> {project.authors.map((author, i) => (
                <React.Fragment key={i}>{author}{i !== project.authors.length - 1 && <span>, </span>}</React.Fragment>
              ))}
            </p>
          </div>
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
