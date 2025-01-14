// Portfolio.jsx
import React, { useState } from "react";
import "../styles/Portfolio.css";

// Replace these with actual image imports or URLs
const portfolioImages = [
  { id: 1, src: "path-to-image1.jpg", category: "Clipping Path" },
  { id: 2, src: "path-to-image2.jpg", category: "Retouching" },
  { id: 3, src: "path-to-image3.jpg", category: "Color Correction" },
  { id: 4, src: "path-to-image4.jpg", category: "Photography" },
  { id: 5, src: "path-to-image5.jpg", category: "Clipping Path" },
  { id: 6, src: "path-to-image6.jpg", category: "Color Correction" },
  { id: 7, src: "path-to-image7.jpg", category: "Photography" },
  { id: 8, src: "path-to-image8.jpg", category: "Retouching" },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? portfolioImages
      : portfolioImages.filter((image) => image.category === activeCategory);

  const categories = ["All", "Clipping Path", "Retouching", "Color Correction", "Photography"];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <p>Making Your Jewelry Photos Look Irresistible and Beautiful</p>
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
