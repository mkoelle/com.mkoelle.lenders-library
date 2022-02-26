import React from 'react';
import logo from './placeholder.png';
import './App.css';
import 'bulma/css/bulma.min.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Rentable from './components/lendables/Lendable'

function App() {
  return (
    <div className="App">

      <main className="main">
        <Navbar></Navbar>
        <div className="container">
          <div className="columns">
            <div className="column is-9">
              <div className="box content">
                <Rentable />
              </div>
            </div>
            <div className="column has-text-centered wip">
              <div className="box wip is-full-height"></div>
            </div>
          </div>
        </div>
        <Footer />
      </main>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" data-testid='logo' />
      </header>

    </div>
  );
}

export default App;
