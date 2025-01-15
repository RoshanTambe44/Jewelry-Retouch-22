// Portfolio.jsx
import React, { useState } from "react";
import neck from "../assets/1.png";
import black from "../assets/2.png";
import color from "../assets/3.png";
import retouch from "../assets/4.png";
import clipping from "../assets/5.png";
import photo from "../assets/6.png";
import retouch2 from "../assets/7.png";
import bracelet from "../assets/8.png";
import heart from "../assets/P-2.png";

import "../styles/Portfolio.css";

// Portfolio image data
const portfolioImages = [
  { id: 1, src: neck, category: "Clipping Path" },
  { id: 2, src: photo, category: "Clipping Path" },
  { id: 3, src: neck, category: "Clipping Path" },
  { id: 4, src: black, category: "Retouching" },
  { id: 5, src: color, category: "Color Correction" },
  { id: 6, src: photo, category: "Model + Jewelry" },
  { id: 7, src: clipping, category: "Clipping Path" },
  { id: 8, src: retouch2, category: "Color Correction" },
  { id: 9, src: bracelet, category: "Model + Jewelry" },
  { id: 10, src: photo, category: "Retouching" },
  { id: 11, src: heart, category: "Retouching" },
  { id: 12, src: retouch, category: "Model + Jewelry" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Filter images based on selected category
  const filteredImages =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((image) => image.category === activeCategory);

  // Categories for tabs
  const categories = ["All", "Clipping Path", "Retouching", "Color Correction", "Model + Jewelry"];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>Making Your Jewelry Photos Look Irresistible and Beautiful</p>

      {/* Category Tabs */}
      <div className="portfolio-tabs">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`portfolio-tab ${
              activeCategory === category ? "active" : ""
            }`}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Section */}
      <div className="portfolio-gallery">
        {filteredImages.map((image) => (
          <div key={image.id} className="portfolio-item">
            <img src={image.src} alt={image.category} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
