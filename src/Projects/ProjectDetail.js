import React from "react";
import "./ProjectDetail.css";

const Modal = ({ id, closeModal }) => {
  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Project {id}</h2>
        <p>Modal content goes here...</p>
        <button onClick={closeModal}>Close Modal</button>
      </div>
    </div>
  );
};

export default Modal;
