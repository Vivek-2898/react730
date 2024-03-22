import React, { useState } from 'react';
import './Modal.css'; 

function Modal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div class="modal">
          <div class="modal-content">
            <span class="close" onClick={closeModal}>&times;</span>
            <h2>Modal Content</h2>
            <p>This is a basic modal with a close button.</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
