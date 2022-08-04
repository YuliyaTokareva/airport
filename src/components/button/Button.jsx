import React from 'react';
import PropTypes from 'prop-types';
import './button.scss';

const Button = ({ onClick, closeDeleteBtn, clientX, clientY }) => {
  return (
    <div
      className="modal overlay hidden button"
      onClick={e => {
        closeDeleteBtn();
      }}
    >
      <div className="modal__content" style={{ top: `${clientY}px`, left: `${clientX}px` }}>
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
Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  closeDeleteBtn: PropTypes.func.isRequired,
  clientX: PropTypes.number,
  clientY: PropTypes.number,
};
Button.defaultProps = {
  height: 60,
  marginTop: 0,
};
export default Button;
