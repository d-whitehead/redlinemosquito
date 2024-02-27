// Header.js
import React, { useState, useEffect } from 'react';
import Background from '/Users/damienwhitehead/Desktop/Programming/redline-mosquito-control/src/background.jpg';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    const shouldAddOpacity = scrollTop > 0;

    setIsScrolled(shouldAddOpacity);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const headerHeight = document.querySelector('header').offsetHeight;
    if (element) {
      window.scrollTo({
        top: element.offsetTop - headerHeight,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className={`fixed-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Add a class for styling based on scroll */}
      <div className="logo-container">
        <img src={Background} alt="Logo" className="logo" />
      </div>
      <div className="header-content">
        <nav>
          <ul>
            <li className="nav-button" onClick={() => scrollToSection('hero-section')}>Home</li>
            <li className="nav-button" onClick={() => scrollToSection('services-section')}>Services</li>
            <li className="nav-button" onClick={() => scrollToSection('about-us-section')}>About Us</li>
            <li className="nav-button" onClick={() => scrollToSection('contact-section')}>Contact</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
