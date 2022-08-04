import React from 'react';
import Day from '../day/Day';
import PropTypes from 'prop-types';
import './week.scss';
import { todayIs } from '../../utils/dateUtils.js';
import moment from 'moment';

const Week = ({ weekDates, events, openModal, openDeleteBtn }) => {
  return (
    <>
      <div className="calendar__week">
        {weekDates.map(dayStart => {
          const dayEnd = new Date(dayStart.getTime()).setHours(dayStart.getHours() + 24);

          const parseEvents = events.slice().map(event => {
            const { dateFrom, dateTo, ...dataEvent } = event;

            const newdateFrom = new Date(dateFrom);
            const newdateTo = new Date(dateTo);
            return { ...dataEvent, dateFrom: newdateFrom, dateTo: newdateTo };
          });

          //getting all events from the day we will render
          const dayEvents = parseEvents.filter(
            event => event.dateFrom > dayStart && event.dateTo < dayEnd
          );

          return (
            <Day
              key={dayStart.getDate()}
              dataDay={dayStart.getDate()}
              dayEvents={dayEvents}
              isNowData={
                moment(dayStart).format('DD:MMM:YYYY') === moment(todayIs).format('DD:MMM:YYYY')
              }
              openModal={openModal}
              openDeleteBtn={openDeleteBtn}
            />
          );
        })}
      </div>
    </>
  );
};
Week.propTypes = {
  weekDates: PropTypes.arrayOf(Date),
  events: PropTypes.array,
  openModal: PropTypes.func.isRequired,
  openDeleteBtn: PropTypes.func.isRequired,
};

export default Week;
