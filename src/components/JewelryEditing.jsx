// JewelryService.jsx
import React from "react";
import "../styles/JewelryEditing.css";
import traditionalJewelry from "../assets/traditional-jewelry.png"; // Replace with actual image
import diamondRing from "../assets/diamond-ring.png";

const JewelryService = () => {
  return (
    <section className="jewelry-service">
      <div className="service-content">
        <h2>Jewelry Photo Editing Service in India</h2>
        <p>
          Enhance your jewelry images with expert editing services designed to
          bring out the brilliance of your precious pieces. Transform your
          business with high-quality images that truly shine.
        </p>
      </div>
      <div className="service-images">
        <img
          src={traditionalJewelry}
          alt="Traditional Jewelry"
          className="jewelry-image"
        />
        <img src={diamondRing} alt="Diamond Ring" className="jewelry-image" />
      </div>
    </section>
  );
};

export default JewelryService;
