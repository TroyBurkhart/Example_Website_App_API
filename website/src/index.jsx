import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers';
import NavBar from './components/navbar';
import DisplayNotes from './components/displayNotes';
import NewNotes from './components/newNotes';

const store = configureStore({
  reducer: rootReducer,
});

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<DisplayNotes />} />
          <Route path="/notes/new" element={<NewNotes />} />
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

const root = createRoot(document.getElementById('main'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
