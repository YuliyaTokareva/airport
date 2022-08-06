import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './modal.scss';
import moment from 'moment';

///res: {title: 't', date: '2022-07-04', startTime: '19:11', endTime: '19:23', description: 'dddd'}

class Modal extends Component {
  state = {
    title: '',
    date: this.props.date,
    startTime: this.props.timeStart,
    endTime: this.props.timeEnd,
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
       console.log(copyEvent)
    const { date, startTime, endTime, ...dataInfo } = copyEvent;
    const dateFrom = moment(date.concat(' ', startTime)).format();
    const dateTo = moment(date.concat(' ', endTime)).format();
    const newEvent = { ...dataInfo, dateFrom, dateTo };
    console.log(newEvent)
        console.log(this.state)
    return newEvent;
  };

  render() {
    console.log(this.state)
    return (
      <div className="modal overlay hidden" onClick={e => {
        if (e.target.className === 'modal overlay hidden') {
this.props.closeModal(e)}
        }}>
        <div className="modal__content">
          <div className="create-event">
            <button className="create-event__close-btn" onClick={e => this.props.closeModal(e)}>
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
                required
                autoFocus

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

Modal.propTypes = {
  state: PropTypes.shape({
    date: PropTypes.date,
    startTime: PropTypes.date,
    endTime: PropTypes.date,
  }),

  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default Modal;