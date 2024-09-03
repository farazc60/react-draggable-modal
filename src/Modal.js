import React, { useState } from 'react';
import './Modal.css'; 
import Draggable from 'react-draggable';

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button id="openModalBtn" onClick={openModal}>Open Modal</button>

      {isOpen && (
        <div id="myModal" className="modal">
          <Draggable>
          <div className="modal-content">
            <header className="modal-header">
              <div>
                <h2>Modal Title</h2>
                <h3 className="modal-subtitle">Subtitle Here</h3>
              </div>
              <span className="close" onClick={closeModal}>&times;</span>
            </header>
            <div className="modal-body">
              <img src="https://via.placeholder.com/400x200" alt="Placeholder" className="modal-image" />
              <p>This is a minimalistic modal with a black and white theme, featuring enhanced content and interactive elements. Below is an image with some descriptive text to illustrate the content layout.</p>
              <p>Additional text can be included here to provide more information or context as needed.</p>
            </div>
            <footer className="modal-footer">
              <div className="footer-text">
                <p>For more information, please contact us at <a href="mailto:support@example.com">support@example.com</a>.</p>
              </div>
              <div className="footer-icons">
                <i className="fas fa-phone-alt"></i>
                <i className="fas fa-envelope"></i>
                <i className="fas fa-info-circle"></i>
              </div>
            </footer>
          </div>
          </Draggable>
        </div>
      )}
    </div>
  );
};

export default Modal;