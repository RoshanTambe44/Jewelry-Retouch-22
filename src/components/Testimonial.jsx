import React, { useState } from "react";
import { motion } from "framer-motion"; // Importing motion from framer-motion
import "../styles/Testimonial.css";
import clientImage1 from "../assets/client-1.png"; // Replace with actual image paths
import clientImage2 from "../assets/client-2.jpg";
import clientImage3 from "../assets/client-3.jpg";

const testimonials = [
  {
    id: 1,
    image: clientImage1,
    text: "I’ve been using this jewelry retouching service for a few months, and the results are consistently stunning. Every image looks polished and vibrant, with attention to the finest details. I highly recommend their services to any jewelry business!",
    author: "Rita Singh",
  },
  {
    id: 2,
    image: clientImage2,
    text:"The team truly knows how to enhance jewelry photos. They manage to capture the shine and texture of each piece so beautifully. Thanks to their expert retouching, my images now look more professional and appealing!",
    author: "Rahul Patel",
  },
  {
    id: 3,
    image: clientImage3,
    text: "This jewelry retouching service has taken my product photos to the next level. They pay such close attention to detail, making sure each piece shines with precision. The final images look flawless, and the turnaround time is impressive. I’ll definitely continue using their services!",
    author: "Savita Khapre",
  },
]

const TestimonialSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="testimonial">
      <h2>— What our customers say —</h2>
      <div className="testimonial-container">
        <motion.div
          className="testimonial-image"
          initial={{ opacity: 0, y: 50 }} // Start from below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the element is in view
          transition={{ duration: 0.5 }}
        >
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
        </motion.div>

        <motion.div
          className="testimonial-content"
          initial={{ opacity: 0, y: 50 }} // Start from below and invisible
          whileInView={{ opacity: 1, y: 0 }} // Animate to full opacity and normal position when in view
          viewport={{ once: true, amount: 0.2 }} // Trigger animation once when 20% of the element is in view
          transition={{ duration: 0.5 }}
        >
          <p className="testimonial-quote">
            <span className="quote-icon">“</span>
            {testimonials[currentIndex].text}
            <span className="quote-icon">”</span>
          </p>
          <p className="testimonial-author">{testimonials[currentIndex].author}</p>

          <div className="testimonial-pagination">
            {testimonials.map((_, index) => (
              <span
                key={index}
                className={`pagination-dot ${index === currentIndex ? "active" : ""}`}
                onClick={() => setCurrentIndex(index)}
              ></span>
            ))}
          </div>
        </motion.div>

        <div className="testimonial-navigation">
          <button className="nav-button" onClick={handlePrev}>
            &#8249;
          </button>
          <button className="nav-button" onClick={handleNext}>
            &#8250;
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
