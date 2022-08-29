import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './Home';
import store from './store.js';

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/departure" element={<Home />} />
          <Route path="/arrival" element={<Home />} />
          <Route path="/" element={<Navigate replace to="/departure" />} />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <h1>Ця сторінка зараз в розробці</h1>
              </main>
            }
          />
          <Route
            path="*"
            element={
              <main style={{ padding: '1rem' }}>
                <h1>Ця сторінка зараз в розробці</h1>
              </main>
            }
          />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
