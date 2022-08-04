import React from 'react';

import { months } from '../../utils/dateUtils.js';
import PropTypes from 'prop-types';
import './header.scss';

const Header = ({ nextWeek, prevWeek, today, openModal, weekDates }) => {
  return (
    <header className="header">
      <button className="button create-event-btn" onClick={e => openModal(e)}>
        <i className="fas fa-plus create-event-btn__icon"></i>Create
      </button>
      <div className="navigation">
        <button className="navigation__today-btn button" onClick={() => today()}>
          Today
        </button>
        <button className="icon-button navigation__nav-icon" onClick={() => prevWeek()}>
          <i className="fas fa-chevron-left"></i>
        </button>
        <button className="icon-button navigation__nav-icon" onClick={() => nextWeek()}>
          <i className="fas fa-chevron-right"></i>
        </button>
        <span className="navigation__displayed-month">
          {`${months[weekDates[0].getMonth()]} —
                        ${months[weekDates[weekDates.length - 1].getMonth()]}`}
        </span>
      </div>
    </header>
  );
};
Header.propTypes = {
  nextWeek: PropTypes.func.isRequired,
  prevWeek: PropTypes.func.isRequired,
  today: PropTypes.func.isRequired,
  openModal: PropTypes.func.isRequired,
  weekDates: PropTypes.array,
};

export default Header;
