// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Footer from './component/Footer';
import ScrollToTopButton from './component/ScrollToTopButton';
import About from './component/About';
import Error from './component/Error';
import Tournament from './component/Tournament';
import AllGames from './component/AllGames';
import Contact from './component/Contact';
import TermsAndConditions from './component/Terms&Conditions';
import PrivacyPolicy from './component/PrivacyPolicy';
import RefundAndCancellation from './component/RefundAndCancellation';
import { ScrollToTop } from './component/ScrollToTop';


const App = () => {
  return (
    <>
    <ScrollToTopButton/>
    <Router>
      <ScrollToTop/>
      <Navbar />
     

        <Routes>
        <Route path='/' element={ <Home/>}/>
          
          <Route path='/About' element={<About/>}/>
          <Route path='/Tournament' element={<Tournament/>}/>
          <Route path='/AllGames' element={ <AllGames /> } />
          <Route path='/Contact' element={ <Contact /> } />
          <Route path='/terms_and_conditions' element={ <TermsAndConditions /> } />
          <Route path='/privacy_policy' element={ <PrivacyPolicy /> } />
          <Route path='/Refund_and_cancellation_policy' element={ <RefundAndCancellation/> } />
          <Route path="*" element={<Error />} />
          
      </Routes>
      <Footer/>
    </Router>
    </>
  );
};

export default App;
