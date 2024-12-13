import React from 'react';
import classes from './modal.module.css';

export default function Modal({ children, onClose }) {
  return (
    <div className={classes.modalOverlay}>
      <div className={classes.modal}>
        <button className={classes.closeButton} onClick={onClose}>×</button>
        {children}
      </div>
    </div>
  );
}
