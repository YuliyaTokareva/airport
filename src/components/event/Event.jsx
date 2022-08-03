import React from 'react';

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
          //console.log(e, e.screenX, e.screenY);
          openDeleteBtn(dataId);
        }}
      >
        <div className="event__title">{title}</div>
        <div className="event__time">{time}</div>
      </div>
    </>
  );
};

export default Event;
