import React, { useEffect } from 'react';
import { useSearchParams, NavLink, useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { nowDate } from '../../../utils/dateUtils';
import PropTypes from 'prop-types';
import * as shedulesActions from '../../shedule.actions';
import * as sheduleSelectors from '../../shedule.selectors';
import './table.scss';
import moment from 'moment';

const Table = ({ schedule, getSheduleList, wordsSearch, pathname, textQuery }) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const searchQuery = searchParams.get('date') || '';
  useEffect(() => {
    if (searchQuery.length) getSheduleList(searchQuery);
    getSheduleList(nowDate);
    // console.log(date);
  }, [searchQuery, textQuery, pathname]);
  console.log(new Date('2020-08-29T02:45:00Z'));
  if (!schedule) {
    return null;
  }
  const tab = pathname.slice(1);

  const filteredList = schedule[tab]
    .slice()
    .sort((a, b) =>
      tab == 'departure'
        ? moment(a.timeDepShedule) - moment(b.timeDepShedule)
        : moment(a.timeArrShedule) - moment(b.timeArrShedule)
    )
    .filter((board) =>
      board.codeShareData[0].codeShare.toLowerCase().includes(textQuery.toLowerCase())
    );
  console.log(filteredList);
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
                    ? moment(board.timeDepShedule).format('H:mm')
                    : moment(board.timeArrShedule).format('H:mm')}
                </td>

                <td className="table__flight-way">
                  {tab === 'arrival' ? board[`airportFromID.city`] : board[`airportToID.city`]}
                </td>
                <td className="table__flight-mob mob"></td>
                <td className="table__flight-status-filed">
                  {tab === 'departure'
                    ? `Вилетів о  ${moment(board.timeTakeofFact).format('H:mm')}`
                    : `Прибув ${moment(board.timeArrExpectCalc).format('H:mm')}`}
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
  schedule: PropTypes.object
};

const mapDispatch = {
  getSheduleList: shedulesActions.getSheduleList
};
const mapState = (state) => {
  return {
    schedule: sheduleSelectors.sheduleListSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Table);
