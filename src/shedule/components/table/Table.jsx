import React, { useEffect } from 'react';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as shedulesActions from '../../shedule.actions';
import * as sheduleSelectors from '../../shedule.selectors';
import './table.scss';
import moment from 'moment';

const Table = ({ schedule, date, tab, getSheduleList, wordsSearch }) => {
  useEffect(() => {
    getSheduleList(date);
  }, [tab, date, wordsSearch]);

  if (!schedule) {
    return null;
  }
  const filteredList = schedule[tab].filter((board) =>
    board.codeShareData[0].codeShare.toLowerCase().includes(wordsSearch.toLowerCase())
  );

  return schedule[tab].length === 0 || filteredList.length === 0 ? (
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
                    ? moment(board.timeDepShedule).format('h:mm')
                    : moment(board.timeArrShedule).format('h:mm')}
                </td>

                <td className="table__flight-way">
                  {tab === 'arrival' ? board[`airportFromID.city`] : board[`airportToID.city`]}
                </td>
                <td className="table__flight-mob mob"></td>
                <td className="table__flight-status-filed">
                  {tab === 'departure'
                    ? `Вилетів о  ${moment(board.timeTakeofFact).format('h:mm')}`
                    : `Прибув ${moment(board.timeArrExpectCalc).format('h:mm')}`}
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
                  <span>Деталі рейсу</span>
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
  date: PropTypes.string.isRequired,
  tab: PropTypes.string.isRequired,
  wordsSearch: PropTypes.string
};

const mapDispatch = {
  getSheduleList: shedulesActions.getSheduleList
};
const mapState = (state) => {
  return {
    schedule: sheduleSelectors.sheduleListSelector(state),
    date: sheduleSelectors.dateSelector(state),
    tab: sheduleSelectors.tabSelector(state),
    wordsSearch: sheduleSelectors.wordsSearchSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Table);
