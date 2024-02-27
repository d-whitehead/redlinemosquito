// HeroSection.js
import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-container">
      <div className="gray-background">
        <div id="hero-section" className="hero">
          <div className="hero-content">
            <h1>Welcome to RedLine Mosquito Control</h1>
            <p>Effective solutions for a mosquito-free environment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
