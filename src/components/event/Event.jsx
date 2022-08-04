import React from 'react';
import PropTypes from 'prop-types';
import './event.scss';

const Event = ({ height, marginTop, title, time, openDeleteBtn, dataId }) => {
  const eventStyle = {
    height,
    marginTop,
  };

  return (
    <>
      <div
        style={eventStyle}
        className="event"
        data-id={dataId}
        onClick={e => {
          openDeleteBtn(dataId, e);
        }}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
    </>
  );
};
Event.propTypes = {
  height: PropTypes.number,
  marginTop: PropTypes.number,
  title: PropTypes.string,
  time: PropTypes.string.isRequired,
  dataId: PropTypes.string.isRequired,

  openDeleteBtn: PropTypes.func.isRequired,
};
Event.defaultProps = {
  height: 60,
  marginTop: 0,
  title: 'No event title',
};
export default Event;
