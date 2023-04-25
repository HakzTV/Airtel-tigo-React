import React, { useState } from 'react';

import { Carousel } from 'react-bootstrap';
import '../scss/main.scss';
import img1 from '../assets/sim5.png';
import img2 from '../assets/sim4.png';
import img3 from '../assets/esim4.png';


// component for hero Section
function HeroSection() {
  // Hook to indicate index for dot indicator
  const [index, setIndex] = useState(0);

  // Function to handle state
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="hero-section">
      <Carousel
        indicators={false}
        activeIndex={index}
        onSelect={handleSelect}
        interval={3000} // carousel moves automatically every 3 seconds
      >
      {/* Carousel images */}
        <Carousel.Item>
          <img className="d-block w-100" src={img1} alt="First slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={img3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>
      <div className="carousel-indicator-container">
        <div className="carousel-indicator-dots">
        {/* Checking active state on indicators */}
          <div
            className={`carousel-indicator-dot ${
              index === 0 ? 'active' : ''
            }`}
            onClick={() => setIndex(0)}
          ></div>
          <div
            className={`carousel-indicator-dot ${
              index === 1 ? 'active' : ''
            }`}
            onClick={() => setIndex(1)}
          ></div>
          <div
            className={`carousel-indicator-dot ${
              index === 2 ? 'active' : ''
            }`}
            onClick={() => setIndex(2)}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
