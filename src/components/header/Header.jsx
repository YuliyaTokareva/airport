import React from "react";
import Day from "../day/Day";
import "./header.scss";

const Header = ({ nextWeek, prevWeek, today, toggleModal }) => {
    return (
        <header className='header'>
            <button
                className='button create-event-btn'
                onClick={() => toggleModal()}
            >
                <i className='fas fa-plus create-event-btn__icon'></i>Create
            </button>
            <div className='navigation'>
                <button
                    className='navigation__today-btn button'
                    onClick={() => today()}
                >
                    Today
                </button>
                <button
                    className='icon-button navigation__nav-icon'
                    onClick={() => prevWeek()}
                >
                    <i className='fas fa-chevron-left'></i>
                </button>
                <button
                    className='icon-button navigation__nav-icon'
                    onClick={() => nextWeek()}
                >
                    <i className='fas fa-chevron-right'></i>
                </button>
                <span className='navigation__displayed-month'></span>
            </div>
        </header>
    );
};

export default Header;
