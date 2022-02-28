import React from 'react';
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
        <div className="container is-max-widescreen">
          <div className="columns">
            <div className="column is-9">
              <div className="box content">
                  <ul className='block-list'>
                    <Rentable />
                  </ul>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
}

export default App;
