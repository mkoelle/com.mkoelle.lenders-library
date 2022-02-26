import React from 'react';
import logo from './placeholder.png';
import './App.css';
import 'bulma/css/bulma.min.css'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <div className="App">
      <main>
        <Navbar></Navbar>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" data-testid='logo' />
        </header>
      </main>
    </div>
  );
}

export default App;
