import React, { useState, useEffect } from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import "../styles/Hero.css";

// Import slider images
import Header1 from "../assets/Header-1.png";
import Header2 from "../assets/Header-2.png";
import Header3 from "../assets/Header-1.png";

const Header = () => {
  const images = [Header1, Header2, Header3]; // Array of images
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <header className="header" id="home">
      {/* Content Section */}
      <motion.div
        className="header-content"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="heading">
          <h1>Jewelry Photo Retouching Services</h1>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
        Are you looking to elevate your jewelry photography to its fullest potential, our expert retouching services are the perfect solution. We specialize in enhancing the details of your jewelry photos.
        </motion.p>
      </motion.div>

      {/* Slider Section */}
      <motion.div
        className="header-slider"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="header-image">
          <motion.img
            key={currentImageIndex}
            src={images[currentImageIndex]}
            alt={`Slide ${currentImageIndex + 1}`}
            className="slider-image"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>
    </header>
  );
};

export default Header;
