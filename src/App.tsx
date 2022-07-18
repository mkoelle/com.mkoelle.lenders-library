import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AllLendables from './components/pages/AllLendables'
import About from './components/pages/About'
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import { withAuthenticator } from '@aws-amplify/ui-react';

Amplify.configure(awsExports);

function App() {
  
  return (
    < >
      <Navbar />
      <div className={`container is-fullhd`}>
        <Routes>
          <Route path='/' element={<AllLendables />} />
          <Route path='about' element={<About />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default withAuthenticator(App);
