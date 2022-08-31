import React, { useState } from 'react';
import MagnifyingGlass from '../svg/MagnifyingGlass';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import './search.scss';

const Search = ({ params }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get('search') || '';
  const [count, setCount] = useState(searchQuery);
  const handleChange = (e) => {
    setCount(e.target.value);
  };
  const handlerSubmit = (e) => {
    e.preventDefault();
    if (count.length) params.search = count;
    if (!count.length) delete params.search;
    setSearchParams(params);
  };
  return (
    <section className="search">
      <h2 className="search__title title">ПОШУК РЕЙСУ</h2>
      <div className="search__line">
        <MagnifyingGlass />
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
  params: PropTypes.object.isRequired
};

export default Search;
