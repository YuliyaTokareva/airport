import React, { useEffect } from 'react';
import { useSearchParams, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { nowDate } from '../../../utils/dateUtils';
import { formaterDateToShedule } from '../../../utils/dateUtils';
import PropTypes from 'prop-types';
import * as shedulesActions from '../../shedule.actions';
import * as sheduleSelectors from '../../shedule.selectors';
import Spinner from '../spinner/Spinner';
import './table.scss';

const Table = ({
  schedule,
  getSheduleList,
  pathname,
  textQuery,
  formaterDateToShedule,
  isFetching
}) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const searchQuery = searchParams.get('date') || '';
  useEffect(() => {
    if (searchQuery.length) getSheduleList(searchQuery);
    getSheduleList(nowDate);
  }, [searchQuery, textQuery, pathname]);
  if (isFetching) {
    return <Spinner />;
  }
  if (!schedule) {
    return null;
  }
  const tab = pathname.slice(1);
  const filteredList = schedule[tab]
    .slice()
    .sort((a, b) =>
      tab == 'departure'
        ? new Date(a.timeDepShedule) - new Date(b.timeDepShedule)
        : new Date(a.timeArrShedule) - new Date(b.timeArrShedule)
    )
    .filter((board) =>
      board.codeShareData[0].codeShare.toLowerCase().includes(textQuery.toLowerCase())
    );
  return (!isFetching && schedule[tab].length === 0) ||
    (!isFetching && filteredList.length === 0) ? (
    <div className="no-found">
      <span className="no-found__text">Немає рейсів</span>
    </div>
  ) : (
    <section className="table">
      <table className="table__shedule">
        <thead>
          <tr>
            <th className="table__title">Термінал</th>
            <th className="table__title">Розклад</th>
            <th className="table__title">{tab === 'departure' ? 'Напрямок' : 'Прилітає з'}</th>
            <th className="table__title">Статус</th>
            <th className="table__title">Авіакомпанія</th>
            <th className="table__title">Рейс</th>
            <th className="table__title"></th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((board) => {
            {
              board === undefined ? '' : board;
            }

            return (
              <tr key={board.ID} className="table__flight">
                <td className="table__flight-terminal" data-terminal={`${board.term}`}>
                  <span className="table__flight-terminal-type" data-terminal={`${board.term}`}>
                    {board.term}
                  </span>
                </td>
                <td className="table__flight-time-filed">
                  {tab === 'departure'
                    ? formaterDateToShedule(board.timeDepShedule)
                    : formaterDateToShedule(board.timeArrShedule)}
                </td>

                <td className="table__flight-way">
                  {tab === 'arrival' ? board[`airportFromID.city`] : board[`airportToID.city`]}
                </td>
                <td className="table__flight-mob mob"></td>
                <td className="table__flight-status-filed">
                  {tab === 'departure'
                    ? `Вилетів о  ${formaterDateToShedule(board.timeTakeofFact)}`
                    : `Прибув ${formaterDateToShedule(board.timeArrExpectCalc)}`}
                </td>
                <td className="table__flight-number-mob mob">
                  {`${board.codeShareData[0].codeShare}`}
                </td>
                <td className="table__flight-company">
                  <div className="table__flight-company-info">
                    <img
                      className="table__flight-company-logo"
                      src={`${board.airline.ua.logoSmallName}`}
                      alt={`${board.airline.ua.name}`}
                    />

                    <span className="table__flight-company-name">{board[`carrierID.code`]}</span>
                  </div>
                </td>
                <td className="table__flight-number">{`${board.codeShareData[0].codeShare}`}</td>
                <td className="table__flight-more">
                  <NavLink to={`/${board.ID}`} className="table__flight-more-link">
                    <span>Деталі рейсу</span>
                  </NavLink>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
};
Table.propTypes = {
  getSheduleList: PropTypes.func.isRequired,
  schedule: PropTypes.object,
  formaterDateToShedule: PropTypes.func.isRequired,
  textQuery: PropTypes.string,
  pathname: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    getSheduleList: (date) => dispatch(shedulesActions.getSheduleList(date)),
    formaterDateToShedule: (time) => formaterDateToShedule(time)
  };
};

const mapState = (state) => {
  return {
    schedule: sheduleSelectors.sheduleListSelector(state),
    isFetching: sheduleSelectors.isFetchingSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Table);
