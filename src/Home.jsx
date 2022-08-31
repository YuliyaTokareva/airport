import React from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import Search from './shedule/components/search/Search';
import Navigation from './shedule/components/navigation/Navigation';
import Table from './shedule/components/table/Table';
import { formaterDateToShedule } from './utils/dateUtils';
const Home = () => {
  const { pathname } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams({});

  const searchQuery = searchParams.get('date') || '';
  const textQuery = searchParams.get('search') || '';

  const params = {};
  if (textQuery.length) params.search = textQuery;
  if (searchQuery.length) params.date = searchQuery;

  return (
    <>
      <Search params={params} />
      <Navigation params={params} />
      <Table
        pathname={pathname}
        textQuery={textQuery}
        // formaterDateToShedule={formaterDateToShedule}
      />
    </>
  );
};

export default Home;
