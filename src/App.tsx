import React from 'react';
import './App.css';
import 'bulma/css/bulma.min.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Rentable from './components/lendables/Lendable'

function App() {
  return (
    <main className="App main">
      <Navbar></Navbar>
      <div className="container is-fluid columns">
          <div className="column">
            <div className="box content">
              <ul className='block-list'>
                <Rentable />
              </ul>
            </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

export default App;
