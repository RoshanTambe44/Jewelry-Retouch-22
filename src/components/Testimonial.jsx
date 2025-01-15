// TestimonialSlider.jsx
import React, { useState } from "react";
import "../styles/Testimonial.css";
import clientImage1 from "../assets/client-1.png"; // Replace with actual image paths
import clientImage2 from "../assets/client-1.png";
import clientImage3 from "../assets/client-1.png";

const testimonials = [
  {
    id: 1,
    image: clientImage1,
    text: "Absolutely fantastic service! The retouching brought out the perfect sparkle and elegance in my product photos. The images look so polished and professional now. This has made a big difference in how my products are showcased, and I’ve already noticed an increase in customer engagement. The attention to detail, from color correction to background enhancement, was impeccable. I’m confident that these enhanced visuals will help my brand stand out even more in a competitive market. I highly recommend this service to anyone looking to elevate their product presentation and drive sales!",
    author: "Tani Shah",
  },
  {
    id: 2,
    image: clientImage2,
    text: "The team's exceptional attention to detail and creative expertise have transformed my products into stunning works of art. Every image reflects their remarkable ability to enhance even the smallest elements, bringing out the true essence of my designs. Their dedication to perfection has elevated my brand and exceeded all expectations. My products have never looked better, and the results have left me thrilled and inspired. I’m excited to see how these enhancements continue to captivate and resonate with my customers!",
    author: "Arjun Patel",
  },
  {
    id: 3,
    image: clientImage3,
    text: "I’m absolutely thrilled with the results! The editing has given my photos a polished, professional edge that makes them truly stand out. Every detail was carefully enhanced, highlighting the quality and uniqueness of my products. Their dedication to excellence exceeded my expectations, and the transformation is remarkable. The final images perfectly capture the essence of my designs, making them more appealing than ever. I highly recommend their services to anyone looking to elevate their visuals to the next level!",
    author: "Riya Kapoor",
  },
];

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
      <h2>Some Best Words From <br></br>Our Clients</h2>
      <div className="testimonial-container">
        <div className="testimonial-image">
          <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].author} />
        </div>
        <div className="testimonial-content">
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
        </div>
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
