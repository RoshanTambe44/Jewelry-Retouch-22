// JewelryServices.js
import React from "react";
import "../styles/JewelryServices.css";
import { motion } from "framer-motion"; // Import Framer Motion
import earrings from "../assets/S-1.png";
import pendant from "../assets/S-2.png";
import weddingRing from "../assets/S-3.png";
import rings from "../assets/S-4.png";
import bracelets from "../assets/S-5.png";
import necklaces from "../assets/S-6.png";

const JewelryServices = () => {
  const services = [
    { name: "Earrings", image: earrings },
    { name: "Pendant", image: pendant },
    { name: "Wedding & Bridal", image: weddingRing },
    { name: "Rings", image: rings },
    { name: "Bracelets", image: bracelets },
    { name: "Necklaces", image: necklaces },
  ];

  return (
    <section className="jewelry-services" id="services">
      <h2>Jewelry Editing Services</h2>
      <p>We specialize in high-end jewelry retouching that enhances the beauty and detail enhances of your jewelry pieces.</p>
      <div className="service-list">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="service-item"
            initial={{ opacity: 0, y: 20 }} // Start from below with low opacity
            animate={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position
            transition={{ delay: index * 0.2, duration: 0.5 }} // Delay based on index for staggered effect
          >
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JewelryServices;
