import React, { Component } from "react";
import Header from "./components/header/Header.jsx";
import Calendar from "./components/calendar/Calendar.jsx";

import { getWeekStartDate, generateWeekRange } from "../src/utils/dateUtils.js";

import "./common.scss";
import Modal from "./components/modal/Modal.jsx";

class App extends Component {
    state = {
        weekStartDate: new Date(),
        modalIsOpen: false,
    };
    nextWeek = () => {
        const newWeek = new Date(
            this.state.weekStartDate.setDate(
                this.state.weekStartDate.getDate() + 7
            )
        );
        this.setState({
            weekStartDate: newWeek,
        });
    };
    prevWeek = () => {
        const newWeek = new Date(
            this.state.weekStartDate.setDate(
                this.state.weekStartDate.getDate() - 7
            )
        );
        this.setState({
            weekStartDate: newWeek,
        });
    };
    today = () => {
        this.setState({
            weekStartDate: new Date(),
        });
    };
    toggleModal = () => {
        this.setState({
            modalIsOpen: !this.state.modalIsOpen,
        });
    };

    render() {
        const { weekStartDate } = this.state;
        const weekDates = generateWeekRange(getWeekStartDate(weekStartDate));

        return (
            <>
                <Header
                    nextWeek={this.nextWeek}
                    prevWeek={this.prevWeek}
                    today={this.today}
                    toggleModal={this.toggleModal}
                />
                {this.state.modalIsOpen ? (
                    <Modal closeModal={this.toggleModal} />
                ) : (
                    ""
                )}

                <Calendar weekDates={weekDates} />
            </>
        );
    }
}

export default App;
