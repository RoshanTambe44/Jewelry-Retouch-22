import React from "react";
import "../styles/JewelryEditing.css";
import traditionalJewelry from "../assets/traditional-jewelry.png"; // Replace with actual image
import diamondRing from "../assets/diamond-ring.png";

const JewelryService = () => {
  return (
    <section className="jewelry-service">
      <div className="service-images-1">
        <img
          src={traditionalJewelry}
          alt="Traditional Jewelry"
          className="jewelry-image"
          loading="lazy"
        />
      </div>
      <div className="service-content-edit">
        <h2>Jewelry Photo Editing <br></br>Service in India</h2>
        <p>
        Elevate your jewelry visuals with expert editing that highlights the brilliance of your precious pieces. We specialize in background removal, color correction, shine enhancement, and custom retouching to ensure every detail stands out.
        </p>
      </div>
      <div className="service-images-2">
        <img
          src={diamondRing}
          alt="Diamond Ring"
          className="jewelry-image"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default JewelryService;
