import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { nowDate, formaterDateToShedule } from '../../../utils/dateUtils';
import { getFilteredShedule } from '../../../utils/getFilteredShedule';
import PropTypes from 'prop-types';
import * as shedulesActions from '../../shedule.actions';
import * as sheduleSelectors from '../../shedule.selectors';
import Spinner from '../spinner/Spinner';
import FlightShedule from '../flightShedule/FlightShedule';
import './table.scss';

const Table = ({ schedule, getSheduleList, pathname, textQuery, isFetching }) => {
  const [searchParams, setSearchParams] = useSearchParams({});

  const searchQuery = searchParams.get('date') || '';
  useEffect(() => {
    if (searchQuery.length) getSheduleList(searchQuery);
    getSheduleList(nowDate);
  }, [searchQuery, textQuery]);
  if (isFetching) {
    return <Spinner />;
  }
  if (!schedule) {
    return null;
  }
  const tab = pathname.slice(1);
  let toSortTimeShedule = tab === 'departure' ? 'timeDepShedule' : 'timeArrShedule';
  const filteredList = getFilteredShedule(schedule[tab], toSortTimeShedule, searchQuery, textQuery);
  console.log(filteredList);
  if ((!isFetching && schedule[tab].length === 0) || (!isFetching && filteredList.length === 0)) {
    return (
      <div className="no-found">
        <span className="no-found__text">Немає рейсів</span>
      </div>
    );
  }
  return (
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
          {filteredList.map((board) =>
            board === undefined ? '' : <FlightShedule key={board.fltNo} board={board} tab={tab} />
          )}
        </tbody>
      </table>
    </section>
  );
};
Table.propTypes = {
  getSheduleList: PropTypes.func.isRequired,
  schedule: PropTypes.object,
  textQuery: PropTypes.string,
  pathname: PropTypes.string,
  isFetching: PropTypes.bool.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    getSheduleList: (date) => dispatch(shedulesActions.getSheduleList(date)),
    formaterDateToShedule: (time) => formaterDateToShedule(time),
    getFilteredShedule: (shedule) => getFilteredShedule(shedule)
  };
};

const mapState = (state) => {
  return {
    schedule: sheduleSelectors.sheduleListSelector(state),
    isFetching: sheduleSelectors.isFetchingSelector(state)
  };
};
export default connect(mapState, mapDispatch)(Table);
