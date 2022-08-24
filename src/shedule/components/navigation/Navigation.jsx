import React from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import moment from 'moment';
import * as shedulesActions from '../../shedule.actions';
import { dateSelector, datepickerSelector, tabSelector } from '../../shedule.selectors';
import './navigation.scss';
import 'react-datepicker/dist/react-datepicker.css';

const Navigation = ({ date, datepicker, toggle, changeDate, changeTab, tab }) => {
  const nowDate = new Date();
  const esterday = moment(nowDate).add(-1, 'day').format();
  const tomorrow = moment(nowDate).add(1, 'day').format();
  const handleChangeCalendar = (e) => {
    changeDate(moment(e).format('DD-MM-YYYY'));
    toggle();
  };
  const handleClickCalendar = (e) => {
    e.preventDefault();
    toggle();
  };
  const handleClickDateBtn = (e, date) => {
    e.preventDefault();
    changeDate(moment(date).format('DD-MM-YYYY'));
  };
  const handleClickTabBtn = (e, name) => {
    e.preventDefault();

    changeTab(name);
  };

  return (
    <section className="search-result">
      <div className="nav-list">
        <a
          href="#"
          className={`${
            tab === 'departure' ? 'nav-list__item-selected' : ''
          } nav-list__item nav-left`}
          //className="nav-list__item nav-left nav-list__item-selected"
          onClick={(e) => handleClickTabBtn(e, 'departure')}>
          <span className="nav-list__item-icon">
            <svg
              width="40px"
              height="28px"
              viewBox="0 0 40 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  id="Path-403"
                  transform="translate(-1.000000, -1.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero">
                  <g id="Group">
                    <path
                      d="M40.9190312,14.2925525 C40.731055,13.5210761 40.2396434,12.8581323 39.5561585,12.4539552 C38.8726735,12.0497781 38.0549837,11.9385881 37.2883912,12.1455827 L26.8096581,15.0218819 L13.1945082,2 L9.38678826,3.03046545 L17.5564785,17.5510243 L7.75204986,20.2442408 L3.86129243,17.1278331 L1,17.9171897 L4.59162231,24.3200818 L6.11030829,27.0112974 L9.26373268,26.1409043 L19.7414654,23.2656055 L28.3253427,20.9165445 L38.8070772,18.0372439 C40.4055057,17.5625364 41.3397513,15.9060318 40.9190312,14.2925525 Z"
                      id="Path_403"
                      transform="translate(21.009879, 14.505649) rotate(-4.012171) translate(-21.009879, -14.505649) "></path>
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span>виліт</span>
        </a>
        <a
          href="#"
          className={`${
            tab === 'arrival' ? 'nav-list__item-selected' : ''
          } nav-list__item nav-right`}
          //className="nav-list__item nav-right"
          onClick={(e) => handleClickTabBtn(e, 'arrival')}>
          <span className="nav-list__item-icon">
            <svg
              width="40px"
              height="28px"
              viewBox="0 0 40 28"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <g id="Page-1" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g id="Group" transform="translate(-4.000000, -7.000000)">
                  <g id="Path-402"></g>
                  <path
                    data-v-7746f986=""
                    d="M43.8940167,20.2848496 C43.7061583,19.5138567 43.2150547,18.8513283 42.531998,18.4474045 C41.8489414,18.0434806 41.031764,17.9323603 40.2656518,18.1392252 L29.793485,21.013722 L16.1868667,8 L12.3815328,9.02981973 L20.5461037,23.5412796 L10.7478188,26.2328084 L6.85949946,23.1183536 L4,23.9072155 L7.5893717,30.3060954 L9.10710602,32.9956246 L12.2585544,32.1257769 L22.7297214,29.2522799 L31.3082198,26.9046908 L41.7833862,24.0271945 C43.3808131,23.5527844 44.3144732,21.8973179 43.8940167,20.2848496 Z"
                    id="Path_402"
                    fill="#FFFFFF"
                    fillRule="nonzero"
                    transform="translate(23.997341, 20.497812) rotate(27.974730) translate(-23.997341, -20.497812) "></path>
                </g>
              </g>
            </svg>
          </span>
          <span>приліт</span>
        </a>
      </div>
      <div className="search-result__dates">
        <div className="search-result__dates-calendar">
          <span
            className="search-result__date-num show-calendar example-custom-input"
            onClick={(e) => handleClickCalendar(e)}
            type="date">
            {moment(date, 'DD-MM-YYYY').format('DD/MM')}
          </span>
          {datepicker && (
            <DatePicker
              dateFormat="dd-MM-yyyy"
              shouldCloseOnSelect={false}
              onChange={handleChangeCalendar}
              selected={new Date()}
              inline
            />
          )}
        </div>
        <div className="search-result__dates-conteiner">
          <div
            className="search-result__date yesterday"
            onClick={(e) => handleClickDateBtn(e, esterday)}>
            <span className="search-result__date-num">{moment(esterday).format('DD/MM')}</span>
            <span className="search-result__date-name">Вчора</span>
          </div>
          <div
            className="search-result__date today"
            onClick={(e) => handleClickDateBtn(e, nowDate)}>
            <span className="search-result__date-num">{moment(nowDate).format('DD/MM')}</span>
            <span className="search-result__date-name">Cьогодні</span>
          </div>
          <div
            className="search-result__date tomorrow"
            onClick={(e) => handleClickDateBtn(e, tomorrow)}>
            <span className="search-result__date-num">{moment(tomorrow).format('DD/MM')}</span>
            <span className="search-result__date-name">Завтра</span>
          </div>
        </div>
      </div>
    </section>
  );
};
Navigation.propTypes = {
  toggle: PropTypes.func.isRequired,
  changeDate: PropTypes.func.isRequired,
  changeTab: PropTypes.func.isRequired,
  date: PropTypes.string.isRequired,
  datepicker: PropTypes.bool.isRequired,
  tab: PropTypes.string.isRequired
};
const mapDispatch = (dispatch) => {
  return {
    toggle: () => dispatch(shedulesActions.onChangeToogleRecieved()),
    changeDate: (date) => dispatch(shedulesActions.dateRecieved(date)),
    changeTab: (name) => dispatch(shedulesActions.tabRecieved(name))
  };
};
const mapState = (state) => {
  return {
    date: dateSelector(state),
    datepicker: datepickerSelector(state),
    tab: tabSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Navigation);
