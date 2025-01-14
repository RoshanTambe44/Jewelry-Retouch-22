import React, { useState, useEffect } from "react";
import "../styles/Header.css"; // Import your header styles


import Header1 from "../assets/Header-1.png"; // Import your images
import Header2 from "../assets/Header-2.png";
import Header3 from "../assets/Header-1.png";

const Header = () => {
  const images = [Header1, Header2, Header3]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 1000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <header className="header">
      <div className="header-content">
        <div className="heading">
          <h1>Professional Jewelry <br></br>Image Retouching</h1>
        </div>
      
        <p>
          Are you looking to enhance your jewelry photos to their full allure?
          We offer top-notch retouching services and a detailed difference to
          give your jewelry photos exceptional shine.
        </p>
       
        <button className="cta-button">Get 10 photos free </button>
        {/* <FontAwesomeIcon icon={faArrowRight} /> Display the arrow icon */}
      </div>
      <div className="header-slider">
        <div className="header-image">
          <img
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="slider-image"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
