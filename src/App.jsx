import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import { createEvent } from './gateway/events';
import { getWeekStartDate, generateWeekRange } from '../src/utils/dateUtils.js';
import { fetchEventList } from './gateway/events';
import './common.scss';
import Modal from './components/modal/Modal.jsx';

class App extends Component {
  state = {
    weekStartDate: new Date(),
    modalIsOpen: false,
    events: [],
  };
  componentDidMount() {
    this.fetchEvents();
    // console.log(this.events);
  }
  fetchEvents = () => {
    fetchEventList().then(eventList => {
      console.log(eventList);
      this.setState({
        events: eventList,
      });
    });
  };
  createEvent = eventData => {
    createEvent(eventData);
    this.fetchEvents();
    this.toggleModal();
  };
  nextWeek = () => {
    const newWeek = new Date(
      this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() + 7)
    );
    this.setState({
      weekStartDate: newWeek,
    });
  };
  prevWeek = () => {
    const newWeek = new Date(
      this.state.weekStartDate.setDate(this.state.weekStartDate.getDate() - 7)
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
    // console.log('render');
    console.log(this.state.events);

    return (
      <>
        <Header
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          today={this.today}
          toggleModal={this.toggleModal}
          weekDates={weekDates}
        />
        {this.state.modalIsOpen ? (
          <Modal closeModal={this.toggleModal} createEvent={this.createEvent} />
        ) : (
          ''
        )}

        <Calendar weekDates={weekDates} toggleModal={this.toggleModal} events={this.state.events} />
      </>
    );
  }
}

export default App;
