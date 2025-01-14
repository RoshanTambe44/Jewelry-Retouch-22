import React from "react";
import "../styles/JewelryServices.css";
import earrings from "../assets/S-1.png"; // Replace with actual images
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
    <section className="jewelry-services">
      <h2>Jewelry Editing Services <br></br>refines jewelry <br></br>visuals</h2>
      <p>We specialize in high-end jewelry retouching that enhances <br></br>the beauty and detail enhances of your jewelry pieces.</p>
      <div className="service-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            <img src={service.image} alt={service.name} />
            <h3>{service.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default JewelryServices;
