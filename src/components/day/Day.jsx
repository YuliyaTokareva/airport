import React from 'react';
import Hour from '../hour/Hour';
import PropTypes from 'prop-types';
import './day.scss';

const Day = ({ dataDay, dayEvents, isNowData, openModal, openDeleteBtn }) => {
  const hours = Array(24)
    .fill()
    .map((val, index) => index);

  return (
    <div className="calendar__day" data-day={dataDay}>
      {hours.map(hour => {
        //getting all events from the day we will render
        const hourEvents = dayEvents.filter(event => event.dateFrom.getHours() === hour);

        return (
          <Hour
            key={dataDay + hour}
            dataHour={hour}
            hourEvents={hourEvents}
            isNowData={isNowData}
            openModal={openModal}
            openDeleteBtn={openDeleteBtn}
          />
        );
      })}
    </div>
  );
};
Day.propTypes = {
  isNowData: PropTypes.bool,
  dayEvents: PropTypes.array,
  dataDay: PropTypes.number,
  openModal: PropTypes.func.isRequired,
  openDeleteBtn: PropTypes.func.isRequired,
};

export default Day;
