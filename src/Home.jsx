import React from 'react';
import { useLocation, useSearchParams, useNavigate } from 'react-router-dom';
import Search from './shedule/components/search/Search';
import Navigation from './shedule/components/navigation/Navigation';
import Table from './shedule/components/table/Table';

const Home = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});

  const searchQuery = searchParams.get('date') || '';
  const textQuery = searchParams.get('search') || '';

  const params = {};
  if (textQuery.length) params.search = textQuery;
  if (searchQuery.length) params.date = searchQuery;
  const addParams = (key, value) => {
    return (params[key] = value);
  };
  console.log(useLocation());

  return (
    <>
      <Search
        // setSearchParams={setSearchParams}
        //textQuery={textQuery}
        params={params}
        // addParams={addParams}
      />
      <Navigation
        setSearchParams={setSearchParams}
        datehQuery={textQuery}
        params={params}
        addParams={addParams}
      />
      <Table params={params} />
    </>
  );
};

export default Home;
