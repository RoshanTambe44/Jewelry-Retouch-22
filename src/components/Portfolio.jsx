import React, { useState } from "react";
import watch from "../assets/WP-1.jpg";
import watch1 from "../assets/WP-2.jpg";
import watch2 from "../assets/WP-3.jpg";
import watch3 from "../assets/WP-4.jpg";
import watch4 from "../assets/WP-5.jpg";
import Ring from "../assets/RP.jpg";
import necklace from "../assets/NP.jpg";
import necklace2 from "../assets/NP-2.jpg";
import necklace3 from "../assets/NP-3.jpg";
import earrings from "../assets/EP.jpg";
import Bracelet1 from "../assets/BP-1.jpg";
import Bracelet2 from "../assets/BP-2.jpg";
import Bracelet3 from "../assets/BP-3.jpg";
import Bracelet4 from "../assets/BP-4.jpg";
import Bracelet5 from "../assets/BP-5.jpg";
import "../styles/Portfolio.css";

// Portfolio image data
const portfolioImages = [
  { id: 1, src: watch3, category: "Clipping Path" },
  { id: 2, src: Bracelet1, category: "Clipping Path" },
  { id: 3, src: Ring, category: "Clipping Path" },
  { id: 4, src: watch1, category: "Clipping Path" },
  { id: 5, src: Bracelet5, category: "Clipping Path" },
  { id: 6, src: watch4, category: "Clipping Path" },
  { id: 7, src: Bracelet2, category: "Retouching" },
  { id: 8, src: watch, category: "Retouching" },
  { id: 9, src: earrings, category: "Retouching" },
  { id: 10, src: Ring, category: "Retouching" },
  { id: 11, src: Bracelet5, category: "Retouching" },
  { id: 12, src: necklace, category: "Retouching" },
  { id: 13, src: Bracelet5, category: "Color Correction" },
  { id: 14, src: Bracelet4, category: "Color Correction" },
  { id: 15, src: watch, category: "Color Correction" },
  { id: 16, src: earrings, category: "Color Correction" },
  { id: 17, src: Ring, category: "Color Correction" },
  { id: 18, src: watch3, category: "Color Correction" },
  { id: 19, src: Bracelet3, category: "Model + Jewelry" },
  { id: 20, src: Ring, category: "Model + Jewelry" },
  { id: 21, src: necklace2, category: "Model + Jewelry" },
  { id: 22, src: watch3, category: "Model + Jewelry" },
  { id: 23, src: necklace3, category: "Model + Jewelry" },
  { id: 24, src: earrings, category: "Model + Jewelry" },
];

// Shuffle utility function
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Select random subset of images
const selectRandomImages = (array, count) => {
  return shuffleArray(array).slice(0, count);
};

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  // Get 6 random images based on the selected category
  const filteredImages =
    activeCategory === "All"
      ? selectRandomImages(portfolioImages, 6) // Randomly select 6 images for "All"
      : selectRandomImages(
          portfolioImages.filter((image) => image.category === activeCategory),
          6
        ); // Randomly select 6 images for specific category

  // Categories for tabs
  const categories = ["All", "Clipping Path", "Retouching", "Color Correction", "Model + Jewelry"];

  return (
    <section className="portfolio" id="portfolio">
      <h2>— Portfolio —</h2>
      <p>Making Your Jewelry Photos Look Irresistible and Beautiful</p>

      {/* Category Tabs */}
      <div className="portfolio-tabs">
        {categories.map((category, index) => (
          <button
            key={index}
            className={`portfolio-tab ${activeCategory === category ? "active" : ""}`}
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
