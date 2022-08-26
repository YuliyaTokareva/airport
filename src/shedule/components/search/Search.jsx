import React, { useState } from 'react';
import { connect } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import * as shedulesActions from '../../shedule.actions';
import './search.scss';

const Search = ({ onSearch }) => {
  const [count, setCount] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search');
  //if (params.search.length) params.search = count;
  //console.log(params.search);
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    const params = {};
    if (count.length) params.search = count;
    console.log(count);
    setSearchParams(params);
    // onSearch(count);
    //location.pathname = '/test';
    setCount('');
  };

  return (
    <section className="search">
      <h2 className="search__title title">ПОШУК РЕЙСУ</h2>
      <div className="search__line">
        <svg
          className="search__line-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-512.053 29 44 43">
          <g id="ic_search_white" transform="translate(-512.053 29)">
            <rect id="rectangle" width="44" height="43" className="cls-1"></rect>
            <path
              id="ic_search_white-2"
              data-name="ic_search_white"
              d="M317.717,70.708H316.25l-.55-.538a11.072,11.072,0,0,0,2.933-7.525,11.92,11.92,0,1,0-11.917,11.646,11.628,11.628,0,0,0,7.7-2.867l.55.538V73.4l9.167,8.958,2.75-2.687Zm-11,0a8.065,8.065,0,1,1,8.25-8.063A8.124,8.124,0,0,1,306.717,70.708Z"
              transform="translate(-289.3 -45.625)"
              className="cls-2"></path>
          </g>
        </svg>
        <form name="searchFlightsForm" action="">
          <input
            className="search__line-input"
            type="text"
            placeholder="Номер рейсу або місто"
            value={count}
            onChange={(e) => handleChange(e)}
          />
          <button className="search__line-button" type="submit" onClick={(e) => handlerSubmit(e)}>
            Знайти
          </button>
        </form>
      </div>
    </section>
  );
};
Search.propTypes = {
  onSearch: PropTypes.func.isRequired
};

const mapDispatch = (dispatch) => {
  return {
    onSearch: (words) => dispatch(shedulesActions.searchRecieved(words))
  };
};

export default connect(null, mapDispatch)(Search);
