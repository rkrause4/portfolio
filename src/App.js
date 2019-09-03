import React from 'react';
import './App.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/layouts/Navbar';
import Header from './components/layouts/Header';
import Work from './components/layouts/Work';
import Contact from './components/layouts/Contact';
import Footer from './components/layouts/Footer';

function App() {
  AOS.init();
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
