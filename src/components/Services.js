// Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services-section" className="services">
      <h2>Our Services</h2>
      <div className="service-container">
        <div className="service">
          <img src="service1.jpg" alt="Mosquito Misting" />
          <div className="service-content">
            <p>Mosquito Misting</p>
            <p>Our development team has been working for several years to create a misting system that was friendlier to consumers and offered more flexibility and control over the products that are misted...</p>
          </div>
        </div>
        <div className="service">
          <img src="service2.jpg" alt="Mosquito Spraying" />
          <div className="service-content">
            <p>Mosquito Spraying</p>
            <p>Not sure that full-time misting services are right for your needs? We also offer mosquito spraying services using the same fast-acting botanical insecticide—no contract or long-term commitment required...</p>
          </div>
        </div>
      </div>
      {/* Add more services as needed */}
    </section>
  );
};

export default Services;
