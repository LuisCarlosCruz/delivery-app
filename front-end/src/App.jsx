import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import MainRoutes from './routes';
// import rockGlass from './images/rockGlass.svg';

function App() {
  return (
    <div className="App">
      <Router>
        <MainRoutes />
      </Router>
    </div>
  );
}

export default App;
