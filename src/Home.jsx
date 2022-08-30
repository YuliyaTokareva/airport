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
  console.log(pathname);

  return (
    <>
      <Search params={params} />
      <Navigation
        setSearchParams={setSearchParams}
        dateQuery={textQuery}
        params={params}
        addParams={addParams}
        pathname={pathname}
      />
      <Table params={params} pathname={pathname} textQuery={textQuery} />
    </>
  );
};

export default Home;
