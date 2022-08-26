import React from 'react';
import { useLocation } from 'react-router-dom';
import Search from './shedule/components/search/Search';
import Navigation from './shedule/components/navigation/Navigation';
import Table from './shedule/components/table/Table';

const Home = () => {
  const location = useLocation();

  console.log(location);
  return (
    <>
      <Search location="location" />
      <Navigation />
      <Table />
    </>
  );
};

export default Home;
