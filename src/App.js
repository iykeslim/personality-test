import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/headerComponents/Header.js';
import Welcome from './screens/WelcomeScreen/Welcome.js';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Welcome />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
