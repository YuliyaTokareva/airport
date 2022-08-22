import React, { Component, useEffect } from 'react';
import { connect } from 'react-redux';
import * as shedulesActions from '../../shedule.actions';
import { sheduleListSelector, dateSelector, tabSelector } from '../../shedule.selectors';
import './table.scss';
import moment from 'moment';
class Table extends Component {
  // const Table = (props) => {
  //   useEffect(() => {
  //     console.log(this.props.shedule);
  //     props.getSheduleList(this.props.date), [this.props.tab];
  //   });
  componentDidMount() {
    this.props.getSheduleList(this.props.date);
  }
  render() {
    const { schedule, tab } = this.props;

    if (!schedule) {
      return null;
    }
    const board = schedule[tab];

    console.log(new Date('2022-01-10T03:24:26Z'));
    return (
      <section className="table">
        <table className="table__shedule">
          <thead>
            <tr>
              <th className="table__title">Термінал</th>
              <th className="table__title">Розклад</th>
              <th className="table__title">Напрямок</th>
              <th className="table__title">Статус</th>
              <th className="table__title">Авіакомпанія</th>
              <th className="table__title">Рейс</th>
              <th className="table__title"></th>
            </tr>
          </thead>
          <tbody>
            {schedule[tab].map((board) => {
              return (
                <tr key={board.ID} className="table__flight">
                  <td className="table__flight-terminal" data-terminal={`${board.term}`}>
                    <span className="table__flight-terminal-type" data-terminal={`${board.term}`}>
                      {board.term}
                    </span>
                  </td>
                  <td className="table__flight-time-filed">
                    {moment(board.timeDepShedule).format('h:mm')}
                  </td>
                  <td className="table__flight-way"> {`${board[`airportToID.name`]}`}</td>
                  <td className="table__flight-mob mob"></td>
                  <td className="table__flight-status-filed">Вилетів о 6:19</td>
                  <td className="table__flight-number-mob mob">
                    {`${board[`carrierID.IATA`]}${board.fltNo}`}
                  </td>
                  <td className="table__flight-company">
                    <div className="table__flight-company-info">
                      <img
                        className="table__flight-company-logo"
                        data-v-7746f986=""
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
  }
}

const mapDispatch = {
  getSheduleList: shedulesActions.getSheduleList
};
const mapState = (state) => {
  return {
    schedule: sheduleListSelector(state),
    date: dateSelector(state),
    tab: tabSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Table);
