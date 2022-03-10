import React from 'react';
import {Routes, Route} from 'react-router-dom'
import './App.css';
import 'bulma/css/bulma.min.css'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AllLendables from './components/pages/AllLendables'
import About from './components/pages/About'


function App() {
  return (
    <main className="App main">
      <Navbar />
      <div className="container is-fullhd">
        <Routes>
          <Route path='/' element={<AllLendables />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;
