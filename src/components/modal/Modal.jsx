import React, { Component } from 'react';
import moment from 'moment';
import { createTask } from '../../gateway/events';
import './modal.scss';
import { fetchTasksList } from '../../gateway/events';
///res: {title: 't', date: '2022-07-04', startTime: '19:11', endTime: '19:23', description: 'dddd'}

class Modal extends Component {
  state = {
    title: '',
    date: '',
    startTime: '',
    endTime: '',
    description: '',
  };
  handleChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value,
    });
  };
  prepareNewEvent = () => {
    const copyEvent = Object.assign({}, this.state);
    const { date, startTime, endTime, ...dataInfo } = copyEvent;
    const dateFrom = new Date(date.concat(',', startTime));
    const dateTo = new Date(date.concat(',', endTime));
    const newEvent = { ...dataInfo, dateFrom, dateTo };
    return newEvent;
  };
  //   componentDidMount() {
  //     // this.fetchEvents();
  //     this.props.fetchEvents();
  //   }

  //   createEvent = () => {
  //     const eventData = this.prepareNewEvent();
  //     createTask(eventData);
  //     this.props.fetchEvents();
  //     this.props.closeModal();
  //   };
  render() {
    return (
      <div className="modal overlay hidden">
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={() => this.props.closeModal()}>
              +
            </button>
            <form
              className="event-form"
              onSubmit={e => {
                e.preventDefault();
                this.props.createEvent(this.prepareNewEvent());
              }}
            >
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                value={this.state.title}
                onChange={this.handleChange}
              />
              <div className="event-form__time">
                <input
                  type="date"
                  name="date"
                  className="event-form__field"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
                <input
                  type="time"
                  name="startTime"
                  className="event-form__field"
                  onChange={this.handleChange}
                  value={this.state.startTime}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  value={this.state.endTime}
                  onChange={this.handleChange}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                value={this.state.description}
                onChange={this.handleChange}
              ></textarea>
              <button type="submit" className="event-form__submit-btn">
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
