import React, { Component } from "react";

import Event from "../event/Event";
import TimeLine from "../timeline/TimeLine";
import { formatMins } from "../../../src/utils/dateUtils.js";
import { todayIs } from "../../utils/dateUtils.js";

import moment from "moment";

import "./hour.scss";

const Hour = ({ dataHour, hourEvents, isNowData, toggleModal }) => {
    return (
        <div
            className='calendar__time-slot'
            data-time={dataHour + 1}
            onClick={(e) => {
                console.log(e.target);
                toggleModal(e);
            }}
        >
            {isNowData && dataHour === Number(moment(todayIs).format("HH")) ? (
                <TimeLine />
            ) : (
                ""
            )}
            {/* if no events in the current hour nothing will render here */}
            {hourEvents.map(({ id, dateFrom, dateTo, title }) => {
                const eventStart = `${dateFrom.getHours()}:${formatMins(
                    dateFrom.getMinutes()
                )}`;
                const eventEnd = `${dateTo.getHours()}:${formatMins(
                    dateTo.getMinutes()
                )}`;

                return (
                    <Event
                        key={id}
                        //calculating event height = duration of event in minutes
                        height={
                            (dateTo.getTime() - dateFrom.getTime()) /
                            (1000 * 60)
                        }
                        marginTop={dateFrom.getMinutes()}
                        time={`${eventStart} - ${eventEnd}`}
                        title={title}
                    />
                );
            })}
        </div>
    );
};

export default Hour;
