import React from 'react';

import './button.scss';

const Button = ({ onClick, closeDeleteBtn }) => {
  return (
    <div
      className="modal overlay hidden button"
      onClick={e => {
        closeDeleteBtn();
      }}
    >
      <div className="modal__content">
        <button
          className="delete-event-btn"
          onClick={e => {
            onClick();
          }}
        >
          <i className="fa-solid fa-trash delete-event-btn__icon" />
          <span className="delete-event-btn__text">Delete</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
