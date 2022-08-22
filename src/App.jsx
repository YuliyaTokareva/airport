import React from 'react';
import { Provider } from 'react-redux';
import Search from './shedule/components/search/Search';
import Navigation from './shedule/components/navigation/Navigation';
import store from './store.js';

import moment from 'moment';

import Table from './shedule/components/table/Table';

const App = () => {
  return (
    <Provider store={store}>
      <Search />
      <Navigation />
      <Table />
    </Provider>
  );
};

export default App;
