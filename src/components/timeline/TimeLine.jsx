import React, { useEffect, useState } from "react";
import './time-line.scss';
import moment from "moment";

const TimeLine = () => {
    const [clock, setClock] = useState({
        time: new Date(),
    });
    const { time } = clock;
    useEffect(() => {
        const interval = setInterval(() => {
            setClock({
                time: new Date(),
            });
        }, 60000);

        return () => {
            clearInterval(interval);
        };
    }, [time]);

    return (
        <>
            <div
                style={{
                    marginTop: `${Number(moment(time).format("mm"))}px`,
                }}
                className='calendar__time-indickator-line'
            ></div>
            <div
                className='calendar__time-indickator-circle'
                style={{
                    marginTop: `${Number(moment(time).format("mm")) - 5}px`,
                }}
            ></div>
        </>
    );
};

export default TimeLine;
