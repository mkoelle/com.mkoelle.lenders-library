import React from 'react';
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import AllLendables from './components/pages/AllLendables'
import About from './components/pages/About'

function App() {
  const config = {
    auth: {
      clientId: "1-2.apps.googleusercontent.com",
      authority: "https://accounts.google.com/o/oauth2/v2/auth",
      redirectUri: "/",
      navigateToLoginRequestUrl: false,
      postLogoutRedirectUri: "/",
      protocolMode: 'OIDC',
      knownAuthorities: ["accounts.google.com"]
    }, cache: {
      cacheLocation: 'LocalStorage',
      storeAuthStateInCookie: false
    }
  }
  
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

export default App;
