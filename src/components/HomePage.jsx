import React from 'react';
import Home from '../components/Home';
import ServicesContent from '../components/ServicesContent';
import Header from '../components/Header';
import Footer from '../components/Footer';
import About from '../pages/About'
import Contact from '../pages/Contact'
const HomePage = () => {
  return (
    <div>
        <Header />
      <Home />
      <ServicesContent />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;
