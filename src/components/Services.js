// Services.js
import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <section id="services-section" className="services">
      <h2>Our Services</h2>
      <div className="service-container">
        <div className="service">
          <img src="https://www.aahealth.org/sites/default/files/styles/large/public/2023-03/mosquito.jpg?itok=HSKCPoa1" alt="Mosquito Spraying" />
        </div>
        <div className="service service-content">
          <p>Mosquito Spraying</p>
          <p>Not sure that full-time misting services are right for your needs? We also offer mosquito spraying services using the same fast-acting botanical insecticide—no contract or long-term commitment required...</p>
        </div>
      </div>
      {/* Add more services as needed */}
    </section>
  );
};

export default Services;
