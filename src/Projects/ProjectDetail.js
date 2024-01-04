import React from "react";

const Modal = ({ id, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Project {id}</h2>
        <p>Modal content goes here...</p>
        <button onClick={closeModal}>Close Modal</button>
        {/* TODO: Change content to current project description */}
      </div>
    </div>
  );
};

export default Modal;
