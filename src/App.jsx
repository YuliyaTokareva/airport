import React, { Component } from 'react';
import Header from './components/header/Header.jsx';
import Calendar from './components/calendar/Calendar.jsx';
import Button from './components/button/Button.jsx';

import {
  getWeekStartDate,
  generateWeekRange,
  nextWekGenerate,
  prevWekGenerate
} from '../src/utils/dateUtils.js';
import { fetchEventList, deleteEvent, createEvent } from './gateway/events';
import moment from 'moment';
import './common.scss';
import Modal from './components/modal/Modal.jsx';

class App extends Component {
  render() {
    return <div></div>;
  }
}

export default App;
