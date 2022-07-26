import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AllLendables from './components/pages/AllLendables'
import About from './components/pages/About'
import Register from './components/pages/Register';
import Login from './components/pages/Login';
import {Account} from './components/AccountContext'

function App() {
  return (
    <Account>
      <Navbar />
      <div className={`container is-fullhd`}>
        <Routes>
          <Route path='/' element={<AllLendables />} />
          <Route path='about' element={<About />} />
          <Route path='register' element={<Register />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Account>
  );
}

export default App;
