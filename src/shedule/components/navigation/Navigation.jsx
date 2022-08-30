import React from 'react';
import { connect } from 'react-redux';
import UpAirplane from '../svg/UpAirplane';
import DownAirplane from '../svg/DownAirplane';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import moment from 'moment';
import * as shedulesActions from '../../shedule.actions';
import { datepickerSelector } from '../../shedule.selectors';
import { formaterDateToCalendar, nowDate, esterday, tomorrow } from '../../../utils/dateUtils';
import './navigation.scss';
import 'react-datepicker/dist/react-datepicker.css';

const Navigation = ({ datepicker, toggle, formaterDateToCalendar, params }) => {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});
  const searchQuery = searchParams.get('date') || '';
  const handleChangeCalendar = (e) => {
    const dateOnSet = moment(e).format('DD-MM-YYYY');
    params.date = dateOnSet;
    setSearchParams(params);
    toggle();
  };
  const handleClickCalendar = (e) => {
    e.preventDefault();
    toggle();
  };
  const handleClickDateBtn = (newDate) => {
    const dateOnSet = newDate;
    params.date = dateOnSet;
    setSearchParams(params);
  };

  return (
    <section className="search-result">
      <div className="nav-list">
        <NavLink
          to={`/departure${search ? search : ''}`}
          className={({ isActive }) =>
            isActive
              ? ' nav-list__item nav-left nav-list__item-selected'
              : 'nav-list__item nav-left'
          }>
          <span className="nav-list__item-icon">
            <UpAirplane />
          </span>
          <span>виліт</span>
        </NavLink>

        <NavLink
          to={`/arrival${search ? search : ''}`}
          className={({ isActive }) =>
            isActive
              ? ' nav-list__item nav-right nav-list__item-selected'
              : 'nav-list__item nav-right'
          }>
          <span className="nav-list__item-icon">
            <DownAirplane />
          </span>
          <span>приліт</span>
        </NavLink>
      </div>
      <div className="search-result__dates">
        <div className="search-result__dates-calendar">
          <span
            className="search-result__date-num show-calendar example-custom-input"
            onClick={(e) => handleClickCalendar(e)}
            type="date">
            {formaterDateToCalendar(nowDate)}
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
            className={
              searchQuery === esterday
                ? 'search-result__date yesterday active-date'
                : 'search-result__date yesterday'
            }
            onClick={() => handleClickDateBtn(esterday)}>
            <span className="search-result__date-num">{formaterDateToCalendar(esterday)}</span>
            <span className="search-result__date-name">Вчора</span>
          </div>
          <div
            className={
              searchQuery === nowDate
                ? 'search-result__date today active-date'
                : 'search-result__date today'
            }
            onClick={() => handleClickDateBtn(nowDate)}>
            <span className="search-result__date-num">{formaterDateToCalendar(nowDate)}</span>
            <span className="search-result__date-name">Cьогодні</span>
          </div>
          <div
            className={
              searchQuery === tomorrow
                ? 'search-result__date tomorrow active-date'
                : 'search-result__date tomorrow'
            }
            onClick={() => handleClickDateBtn(tomorrow)}>
            <span className="search-result__date-num">{formaterDateToCalendar(tomorrow)}</span>
            <span className="search-result__date-name">Завтра</span>
          </div>
        </div>
      </div>
    </section>
  );
};
Navigation.propTypes = {
  toggle: PropTypes.func.isRequired,
  datepicker: PropTypes.bool.isRequired,
  formaterDateToCalendar: PropTypes.func.isRequired,
  params: PropTypes.object
};
const mapDispatch = (dispatch) => {
  return {
    toggle: () => dispatch(shedulesActions.onChangeToogleRecieved()),
    formaterDateToCalendar: (date) => formaterDateToCalendar(date)
  };
};
const mapState = (state) => {
  return {
    datepicker: datepickerSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Navigation);
