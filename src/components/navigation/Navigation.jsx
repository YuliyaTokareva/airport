import React from "react";

import { days, todayIs } from "../../utils/dateUtils.js";
import moment from "moment";
import "./navigation.scss";

const Navigation = ({ weekDates }) => {
    return (
        <header className='calendar__header'>
            {weekDates.map((dayDate) => (
                <div
                    className='calendar__day-label day-label'
                    key={moment(dayDate).format("DD-MMM-YYYY")}
                >
                    <span
                        className={`${
                            moment(dayDate).format("DD:MMM:YYYY") ===
                            moment(todayIs).format("DD:MMM:YYYY")
                                ? "activ-day"
                                : ""
                        } day-label__day-name`}
                    >
                        {days[dayDate.getDay()]}
                    </span>
                    <div
                        className={`${
                            moment(dayDate).format("DD:MMM:YYYY") ===
                            moment(todayIs).format("DD:MMM:YYYY")
                                ? "activ-date"
                                : ""
                        } day-label__day-number-block`}
                    >
                        <span className='day-label__day-number'>
                            {dayDate.getDate()}
                        </span>
                    </div>
                </div>
            ))}
        </header>
    );
};

export default Navigation;
