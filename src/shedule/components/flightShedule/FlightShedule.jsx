import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { formaterDateToShedule } from '../../../utils/dateUtils';
import { getFilteredShedule } from '../../../utils/getFilteredShedule';
import PropTypes from 'prop-types';

import './table.scss';

const FlightShedule = ({ board, tab }) => {
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
          ? `Вилетів о ${formaterDateToShedule(board.timeTakeofFact)}`
          : `Прибув ${formaterDateToShedule(board.timeArrExpectCalc)}`}
      </td>
      <td className="table__flight-number-mob mob">{`${board.codeShareData[0].codeShare}`}</td>
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
};
FlightShedule.propTypes = {
  board: PropTypes.object,
  tab: PropTypes.oneOf(['departure', 'arrival']),
  formaterDateToShedule: PropTypes.func.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    formaterDateToShedule: (time) => formaterDateToShedule(time),
    getFilteredShedule: (shedule) => getFilteredShedule(shedule)
  };
};

export default connect(mapDispatch)(FlightShedule);
