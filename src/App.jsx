import React from 'react';
import { HashRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import NoFound from '../src/shedule/components/404/404';
import store from './store.js';

const App = () => {
  return (
    <HashRouter>
      <Provider store={store}>
        <Routes>
          <Route path="departure" element={<Home />} />
          <Route path="arrival" element={<Home />} />
          <Route path="/" element={<Navigate replace to="departure" />} />
          <Route path="*" element={<NoFound />} />
        </Routes>
      </Provider>
    </HashRouter>
  );
};

export default App;
