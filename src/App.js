import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css';
import Header from './components/headerComponents/Header.js'
import Welcome from './screens/WelcomeScreen/Welcome.js'
import QuestionScreen from './screens/questionsScreen/QuestionScreen.js'
import OutcomeScreen from './screens/outcomeScreens/Outcome.js'

function App() {
  return (
    <div className="app">
      
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/question" element={<QuestionScreen />} />
          <Route path="/outcome" element={<OutcomeScreen />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
