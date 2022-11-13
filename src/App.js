import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/headerComponents/Header.js'
import Welcome from './screens/WelcomeScreen/Welcome.js'
import Question from './components/questionsComponent/Question.js';
import Outcome from './screens/outcomeScreens/Outcome.js';

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/question" element={<Question />} />
          <Route path="/outcome" element={<Outcome />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
