import React from 'react';
import logo from './placeholder.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" data-testid='logo' />
      </header>
    </div>
  );
}

export default App;
