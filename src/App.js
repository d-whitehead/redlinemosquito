// App.js
import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <div className="background-image">
        <HeroSection id="hero-section" />
      </div>
      <div className="light-grey-background">
        <Services id="services-section" />
      </div>
      <div className="dark-grey-background">
        <AboutUs id="about-us-section" />
      </div>
      <div className="background-image">
        <Contact id="contact-section" />
      </div>
      <Footer />
    </div>
  );
};

export default App;
