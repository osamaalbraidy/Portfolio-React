import './Home.css';
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Home = () => {

  useEffect(() => {
    const typedInstance = new Typed('.typed', {
      strings: ['Software Developer', 'Full-Stack Developer', 'Mobile Developer'],
      typeSpeed: 100,
      loop: true,
      startDelay: 500,
      backSpeed: 100,
    });

    return () => {
      typedInstance.destroy();
    };
  }, []);


  return (
    <div className="hero route bg-image">
      <div className="overlay-itro"></div>
      <div className="hero-content display-table">
        <div className="table-cell">
          <div className="container">
            <h1 className="hero-title mb-4">I am Osama Al Braidy</h1>
            <p className="hero-subtitle">
              <span className="typed"></span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
