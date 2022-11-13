import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './index.css';
import './reset.css';
import Footer from './components/Footer/Footer';
import { store } from './state/store';
import Outcome from './screens/outcomeScreens/Outcome.js';
import Welcome from './screens/WelcomeScreen/Welcome.js';
import Question from './components/questionsComponent/Question.js';
import Header from './components/headerComponents/Header.js';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="questions" element={<Question />} />
          <Route path="result" element={<Outcome />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
