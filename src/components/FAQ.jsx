// FAQ.jsx
import React, { useState } from "react";
import "../styles/FAQ.css";

const FAQItem = ({ question, answer, isActive, onClick }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      onClick();
    }
  };

  return (
    <div className="faq-item">
      <div
        className={`faq-question ${isActive ? "active" : ""}`}
        onClick={onClick}
        onKeyDown={handleKeyDown}
        tabIndex="0" // Makes it focusable via Tab key
        role="button" // Indicates it's interactive
        aria-expanded={isActive} // Accessibility state
      >
        {question}
        <span className="faq-icon">{isActive ? "▲" : "▼"}</span>
      </div>
      <div
        className={`faq-answer ${isActive ? "active" : ""}`}
        style={{
          maxHeight: isActive ? "200px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
        }}
      >
        {isActive && <p>{answer}</p>}
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What is the need of Jewelry editing services?",
      answer:
        "Jewelry editing services are essential for enhancing the beauty and professionalism of jewelry images. They involve techniques like color correction, retouching, and background removal to create flawless visuals that attract customers, increase online sales, and make products stand out in a competitive market.",
    },
    {
      question: "How do I submit my photos for editing?",
      answer: "You can submit your photos for editing by uploading them through our secure online portal, ensuring quick and easy access. Alternatively, you can email your images directly to us. We accept various file formats and provide clear instructions for seamless submission, guaranteeing efficient service for your needs.",
    },
    {
      question: "We help your online store to look fashionable!",
      answer: "We help your online store look fashionable by enhancing product images through expert editing techniques. Our services include retouching, color correction, and background optimization, ensuring your jewelry stands out with elegance and professionalism. High-quality visuals attract customers, boost credibility, and create a compelling, stylish brand presence online.",
    },
    {
      question: "How we enhance the visuals of Jewelry images?",
      answer:
        "We enhance the visuals of jewelry images by using advanced editing techniques such as retouching to remove imperfections, color correction to highlight brilliance, and background removal for a clean, professional look. These methods ensure your jewelry appears flawless, captivating, and ready to attract more customers..",
    },
    {
      question: "Do you offer bulk discounts for photo editing services?",
      answer: "Yes, we offer bulk discounts for photo editing services. If you have a large number of images, contact us for a customized quote tailored to your specific requirements and budget.",
    },
    {
      question: "Are there any hidden fees in your pricing?",
      answer: "Yes, we offer bulk discounts for photo editing services. If you have a large number of images, contact us for a customized quote tailored to your specific requirements and budget.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>FAQs</h2>
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <FAQItem
            key={index}
            question={faq.question}
            answer={faq.answer}
            isActive={activeIndex === index}
            onClick={() => toggleFAQ(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
