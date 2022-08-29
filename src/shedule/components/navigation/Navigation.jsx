import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import UpAirplane from '../svg/UpAirplane';
import DownAirplane from '../svg/DownAirplane';
import DatePicker from 'react-datepicker';
import PropTypes from 'prop-types';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import moment from 'moment';
import * as shedulesActions from '../../shedule.actions';
import { dateSelector, datepickerSelector, tabSelector } from '../../shedule.selectors';
import { formaterDateToCalendar, nowDate, esterday, tomorrow } from '../../../utils/dateUtils';
import './navigation.scss';
import 'react-datepicker/dist/react-datepicker.css';

const Navigation = ({
  date,
  datepicker,
  toggle,
  changeDate,
  changeTab,
  formaterDateToCalendar,
  params,
  dateQuery,
  tab,
  pathname
}) => {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});

  const searchQuery = searchParams.get('date') || '';

  console.log(tab);
  useEffect(() => {
    if (searchQuery.length) changeDate(searchQuery);
  }, [searchQuery, dateQuery, pathname]);
  if (searchQuery.length) changeDate(searchQuery);
  if (pathname.slice(1) !== tab) changeTab(pathname.slice(1));
  const handleChangeCalendar = (e) => {
    const dateOnSet = moment(e).format('DD-MM-YYYY');
    params.date = dateOnSet;
    setSearchParams(params);
    changeDate(dateOnSet);
    toggle();
  };
  const handleClickCalendar = (e) => {
    e.preventDefault();
    toggle();
  };
  const handleClickDateBtn = (newDate) => {
    console.log(newDate);
    const dateOnSet = newDate;
    params.date = dateOnSet;
    setSearchParams(params);
    changeDate(dateOnSet);
  };
  const handleClickTabBtn = (name) => {
    changeTab(name);
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
          }
          onClick={() => handleClickTabBtn('departure')}>
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
          }
          onClick={(e) => handleClickTabBtn(e, 'arrival')}>
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
            {formaterDateToCalendar(date)}
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
            onClick={() => handleClickDateBtn(esterday)}>
            <span className="search-result__date-num">{formaterDateToCalendar(esterday)}</span>
            <span className="search-result__date-name">Вчора</span>
          </div>
          <div className="search-result__date today" onClick={() => handleClickDateBtn(nowDate)}>
            <span className="search-result__date-num">{formaterDateToCalendar(nowDate)}</span>
            <span className="search-result__date-name">Cьогодні</span>
          </div>
          <div
            className="search-result__date tomorrow"
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
    changeTab: (name) => dispatch(shedulesActions.tabRecieved(name)),
    formaterDateToCalendar: (date) => formaterDateToCalendar(date)
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
