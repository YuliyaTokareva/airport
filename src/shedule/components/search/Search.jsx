import React from 'react';
import PropTypes from 'prop-types';
import './search.scss';

const Search = () => {
  return (
    <section className="search">
      <h2 className="search__title title">ПОШУК РЕЙСУ</h2>
      <div className="search__line">
        <svg
          className="search__line-svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="-512.053 29 44 43">
          <defs>
            {/* <style>
                .cls-1 {
                  fill: none;
                }

                .cls-2 {
                  fill: #95989a;
                }
              </style> */}
          </defs>
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
          <input className="search__line-input" type="text" placeholder="Номер рейсу або місто" />
          <button className="search__line-button" type="submit">
            Знайти
          </button>
        </form>
      </div>
    </section>
  );
};
// Button.propTypes = {
//   onClick: PropTypes.func.isRequired,
//   closeDeleteBtn: PropTypes.func.isRequired,
//   clientX: PropTypes.number,
//   clientY: PropTypes.number,
// };
// Button.defaultProps = {
//   height: 60,
//   marginTop: 0,
// };
export default Search;
