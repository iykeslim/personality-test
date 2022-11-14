import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import './styles.css'
import QuestionScreen from './screens/questionsScreen/QuestionScreen';
import { store } from './redux-files/store';
import Header from './components/headerComponents/Header';
import Welcome from './screens/WelcomeScreen/Welcome';
import Outcome from './screens/outcomeScreens/Outcome.jsx';

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="questions" element={<QuestionScreen />} />
          <Route path="outcome" element={<Outcome />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
