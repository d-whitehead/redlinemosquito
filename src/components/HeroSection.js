// HeroSection.js
import React from 'react';
import './HeroSection.css';
import headerPhoto from './headerphoto.jpg';  // Import the image

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="gray-background">
        <div id="hero-section" className="hero">
          <div className="hero-content">
            <h1>Welcome to RedLine Mosquito Control</h1>
            <p>Effective solutions for a mosquito-free environment</p>
          </div>
          <div className="hero-image">
            <img src={headerPhoto} alt="" />  {/* Use the imported image */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
