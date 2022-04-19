import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AllLendables from './components/pages/AllLendables'
import About from './components/pages/About'

import styles from './App.module.css'

function App() {
  return (
    <>
      <Navbar />
      <div className={`container is-fullhd ${styles.page}`}>
        <Routes>
          <Route path='/' element={<AllLendables />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
