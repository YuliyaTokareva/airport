import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Search from './shedule/components/search/Search';
import Navigation from './shedule/components/navigation/Navigation';
import store from './store.js';

import moment from 'moment';

import Table from './shedule/components/table/Table';

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Provider store={store}>
          <Route path="/">
            <Search />
          </Route>
          <Route path="/">
            <Navigation />
          </Route>
          <Route path="/">
            <Table />
          </Route>
        </Provider>
      </Switch>
    </BrowserRouter>
  );
};

export default App;
