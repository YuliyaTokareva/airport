import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Button from './components/button/Button.jsx';

import {
  getWeekStartDate,
  generateWeekRange,
  nextWekGenerate,
  prevWekGenerate,
} from '../src/utils/dateUtils.js';
import { fetchEventList, deleteEvent, createEvent } from './gateway/events';
import moment from 'moment';
import './common.scss';
import Modal from './components/modal/Modal.jsx';

class App extends Component {
  state = {
    currentDate: new Date(),
    modalIsOpen: false,
    events: [],
    modalButtonDeleteIsOpen: false,
  };
  componentDidMount() {
    this.fetchEvents();
  }
  fetchEvents = () => {
    fetchEventList().then(eventList => {
      this.updateToState('events', eventList);
    });
  };
  createEvent = eventData => {
    createEvent(eventData).then(() => this.fetchEvents());
    this.toggleModal();
  };
  updateToState = (name, value) => {
    this.setState({
      [name]: value,
    });
  };
  nextWeek = () => {
    const newWeek = nextWekGenerate(this.state.currentDate);
    this.updateToState('currentDate', newWeek);
  };
  prevWeek = () => {
    const prewWeek = prevWekGenerate(this.state.currentDate);
    this.updateToState('currentDate', prewWeek);
  };

  today = () => {
    this.updateToState('currentDate', new Date());
  };

  toggleModal = () => {
    this.updateToState('modalIsOpen', !this.state.modalIsOpen);
  };
  toggleBtn = (id, e) => {
    this.updateToState('modalButtonDeleteIsOpen', !this.state.modalButtonDeleteIsOpen);
    this.idToDelete = id;
    this.clientY = e.clientY;
    this.clientX = e.clientX;
  };
  closeleBtn = () => {
    this.updateToState('modalButtonDeleteIsOpen', false);
  };
  handleEventDelete = () => {
    deleteEvent(this.idToDelete).then(() => this.fetchEvents());
    this.updateToState('modalButtonDeleteIsOpen', !this.state.modalButtonDeleteIsOpen);
  };

  openModal = e => {
    if (e.target.parentNode.className === 'calendar__day') {
      const hourData = e.target.getAttribute('data-time');
      const startTime = +hourData - 1;
      this.timeStart = startTime < 10 ? `0${startTime}:00` : `${startTime}:00`;
      this.timeEnd = hourData < 10 ? `0${hourData}:00` : `${hourData}:00`;
      const dayData = e.target.parentNode.getAttribute('data-day');
      const findDate = generateWeekRange(getWeekStartDate(this.state.currentDate)).filter(date => {
        return +dayData === date.getDate();
      });
      this.date = moment(findDate[0]).format('YYYY-MM-DD');
      this.toggleModal();
    }
    if (e.target.parentNode.className === 'header') {
      this.date = moment(this.state.currentDate).format('YYYY-MM-DD');
      this.timeStart = moment(new Date()).format('HH:mm');
      this.timeEnd = moment(new Date()).add(1, 'hours').format('HH:mm');
      this.toggleModal();
    }
  };

  render() {
    const { currentDate } = this.state;
    const weekDates = generateWeekRange(getWeekStartDate(currentDate));

    return (
      <>
        <Header
          nextWeek={this.nextWeek}
          prevWeek={this.prevWeek}
          today={this.today}
          openModal={this.openModal}
          weekDates={weekDates}
        />
        {this.state.modalIsOpen ? (
          <Modal
            closeModal={this.toggleModal}
            createEvent={this.createEvent}
            timeStart={this.timeStart}
            timeEnd={this.timeEnd}
            date={this.date}
          />
        ) : (
          ''
        )}

        <Calendar
          weekDates={weekDates}
          openModal={this.openModal}
          events={this.state.events}
          openDeleteBtn={this.toggleBtn}
        />
        {this.state.modalButtonDeleteIsOpen ? (
          <Button
            onClick={this.handleEventDelete}
            closeDeleteBtn={this.closeleBtn}
            clientX={this.clientX}
            clientY={this.clientY}
          />
        ) : (
          ''
        )}
      </>
    );
  }
}

export default App;
