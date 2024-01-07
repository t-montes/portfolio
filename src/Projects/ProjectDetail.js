import React from "react";
import projects from './projects.json';

const Modal = ({ id, closeModal }) => {
  const project = projects[id];
  return (
  <div className="modal-overlay" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <div className="modal-header">
        <h2>{project.name}</h2>
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
      <p>Modal content goes here...</p>
    </div>
  </div>
  );
};

export default Modal;
