import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { convertStringToTime } from '../../utils/dateUtils.js';
import './modal.scss';
import moment from 'moment';

class Modal extends Component {
  state = {
    title: '',
    date: this.props.date,
    startTime: this.props.timeStart,
    endTime: this.props.timeEnd,
    description: '',
    formValidTimeStart: true,
    formValidTimeEnd: true,
    formValidTitle: false,
    errorMessageTime: false,
    errorMessageTitle: false
  };
  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };
  handleChangeForTitle = (e) => {
    const validation = e.target.value.trim() !== '';

    this.setState({
      title: e.target.value,
      formValidTitle: validation,
      errorMessageTitle: !validation
    });
  };
  handleChangeForTimeStart = (e) => {
    const validation =
      Number(convertStringToTime(e.target.value)) >
        Number(convertStringToTime(this.state.endTime)) ||
      Number(convertStringToTime(e.target.value)) ===
        Number(convertStringToTime(this.state.endTime));
    this.setState({
      errorMessageTime: validation,
      startTime: e.target.value,
      formValidTimeStart: !this.state.formValidTimeStart
    });
  };
  handleChangeForTimeEnd = (e) => {
    const validation =
      Number(convertStringToTime(e.target.value)) <
        Number(convertStringToTime(this.state.startTime)) ||
      Number(convertStringToTime(e.target.value)) ===
        Number(convertStringToTime(this.state.startTime));
    console.log(
      convertStringToTime(e.target.value) > convertStringToTime(this.state.startTime) ||
        convertStringToTime(e.target.value) === convertStringToTime(this.state.endTime)
    );
    this.setState({
      errorMessageTime: validation,
      endTime: e.target.value,
      formValidTimeEnd: !this.state.formValidTimeEnd
    });
  };
  prepareNewEvent = () => {
    const copyEvent = Object.assign({}, this.state);
    const { date, startTime, endTime, title, description } = copyEvent;
    const dateFrom = moment(date.concat(' ', startTime)).format();
    const dateTo = moment(date.concat(' ', endTime)).format();
    const newEvent = { title, dateFrom, dateTo, description };
    return newEvent;
  };

  render() {
    const isValid =
      !this.state.formValidTimeStart || !this.state.formValidTitle || !this.state.formValidTimeEnd;
    return (
      <div
        className="modal overlay hidden"
        onClick={(e) => {
          if (e.target.className === 'modal overlay hidden') {
            this.props.closeModal(e);
          }
        }}>
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={(e) => this.props.closeModal(e)}>
              +
            </button>
            <form
              className="event-form"
              onSubmit={(e) => {
                e.preventDefault();
                this.props.createEvent(this.prepareNewEvent());
              }}>
              {this.state.errorMessageTitle ? (
                <div className="error-message">Title must be some info</div>
              ) : (
                ''
              )}
              <input
                type="text"
                name="title"
                placeholder="Title"
                className="event-form__field"
                value={this.state.title}
                onChange={this.handleChangeForTitle}
                autoFocus
              />
              <div className="event-form__time">
                {this.state.errorMessageTime ? (
                  <div className="error-message">Start time must be less than end time</div>
                ) : (
                  ''
                )}
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
                  onChange={this.handleChangeForTimeStart}
                  value={this.state.startTime}
                />
                <span>-</span>
                <input
                  type="time"
                  name="endTime"
                  className="event-form__field"
                  onChange={this.handleChangeForTimeEnd}
                  value={this.state.endTime}
                />
              </div>
              <textarea
                name="description"
                placeholder="Description"
                className="event-form__field"
                value={this.state.description}
                onChange={this.handleChange}></textarea>
              <button
                type="submit"
                disabled={isValid}
                className={`${isValid ? 'disabled' : ''} event-form__submit-btn`}>
                Create
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  state: PropTypes.shape({
    date: PropTypes.date,
    startTime: PropTypes.date,
    endTime: PropTypes.date
  }),

  onClick: PropTypes.func,
  onSubmit: PropTypes.func
};

export default Modal;
