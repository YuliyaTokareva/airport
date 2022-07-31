import React, { Component } from 'react';

import Navigation from './../navigation/Navigation';
import Week from '../week/Week';
import Sidebar from '../sidebar/Sidebar';
import events from '../../gateway/events';
import { fetchTasksList } from '../../gateway/events';

import './calendar.scss';

class Calendar extends Component {
  // state = {
  //   events,
  // };
  // state = {
  //   events: [],
  // };
  // componentDidMount() {
  //   this.props.fetchEvents();
  // }
  // fetchEvents = () => {
  //   fetchTasksList().then(eventList => {
  //     //const {} = eventList;
  //     console.log(eventList);
  //     this.setState({
  //       events: eventList,
  //     });
  //   });
  // };
  // onCreate = text => {
  //   const newTask = {
  //     text: text,
  //     done: false,
  //   };
  //   createTask(newTask).then(() => this.fetchTasks());
  //   console.log('uppdate');
  // };
  render() {
    const { weekDates, toggleModal, events } = this.props;
    console.log(events);
    return (
      <section className="calendar">
        <Navigation weekDates={weekDates} />
        <div className="calendar__body">
          <div className="calendar__week-container">
            <Sidebar />
            <Week weekDates={weekDates} events={events} toggleModal={toggleModal} />
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
