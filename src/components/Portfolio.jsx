import React, { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);
  const [showMore, setShowMore] = useState(true);  // Track if more items are shown
  const filteredImages =
    activeCategory === "All"
      ? portfolioImages.slice(0, visibleCount)
      : portfolioImages.filter((image) => image.category === activeCategory).slice(0, 6);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6);
    setShowMore(false); // Once clicked, show both "Show More" and "Show Less"
  };
  const handleShowLess = () => {
    setVisibleCount(6); // Reset to the initial 6 images
    setShowMore(true); // Show "Show More" again
  };
  return (
    <section className="portfolio" id="portfolio" ref={ref}>
      <motion.h2 initial={{ opacity: 0, y: -30 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -30 }} transition={{ duration: 1 }}>
        — Portfolio —
      </motion.h2>
      <motion.p initial={{ opacity: 0, y: -20 }} animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : -20 }} transition={{ duration: 1, delay: 0.2 }}>
        Making Your Jewelry Photos Look Irresistible and Beautiful
      </motion.p>
      <div className="portfolio-tabs">
        {["All", "Clipping Path", "Retouching", "Color Correction", "Model + Jewelry"].map((category, index) => (
          <motion.button
            key={index}
            className={`portfolio-tab ${activeCategory === category ? "active" : ""}`}
            onClick={() => {
              setActiveCategory(category);
              setVisibleCount(6);  // Reset visible count when changing categories
              setShowMore(true);  // Ensure "Show More" is visible again
            }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <div className="portfolio-gallery">
        {filteredImages.map((image) => (
          <motion.div key={image.id} className="portfolio-item" initial={{ opacity: 0 }} animate={{ opacity: inView ? 1 : 0 }} transition={{ duration: 0.5 }}>
            <img src={image.src} alt={image.category} />
          </motion.div>
        ))}
      </div>
      {/* Show More / Show Less buttons logic */}
      {activeCategory === "All" && (
        <div className="show-buttons-container">
          {filteredImages.length < portfolioImages.length && (
            <button
              className="show-more"
              onClick={handleShowMore}
            >
              Show More
            </button>
          )}
          {visibleCount > 6 && (
            <button
              className="show-less"
              onClick={handleShowLess}
            >
              <a href="#portfolio">Show Less</a>
            </button>
          )}
        </div>
      )}
    </section>
  );
};
export default Portfolio;






