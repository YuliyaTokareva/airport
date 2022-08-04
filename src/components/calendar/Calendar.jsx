import React from 'react';
import PropTypes from 'prop-types';
import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';

import './calendar.scss';

const Calendar = ({ weekDates, openModal, events, openDeleteBtn }) => {
  return (
    <section className="calendar">
      <Navigation weekDates={weekDates} />
      <div className="calendar__body">
        <div className="calendar__week-container">
          <Sidebar />
          <Week
            weekDates={weekDates}
            events={events}
            openModal={openModal}
            openDeleteBtn={openDeleteBtn}
          />
        </div>
      </div>
    </section>
  );
};
Calendar.propTypes = {
  weekDates: PropTypes.arrayOf(Date),
  events: PropTypes.array,
  openModal: PropTypes.func.isRequired,
  openDeleteBtn: PropTypes.func.isRequired,
};

export default Calendar;
