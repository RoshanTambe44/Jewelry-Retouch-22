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
      question: "What is turnaround time for photos?",
      answer:
        "The turnaround time depends on the complexity of the project. Generally, we aim to complete most projects within 12-24 hours.",
    },
    {
      question: "How do I submit my photos for editing?",
      answer: "Request us to share a folder for easily submitting your photos. Alternatively, you can email your images directly to us. We accept various file formats and provide clear instructions for seamless submission, guaranteeing efficient service for your needs.",
    },
    {
      question: "What file formats do you accept?",
      answer: "We accept all major image file formats including JPEG, TIFF, and PNG. For special requests, please contact us",
    },
    {
      question: "Can you handle large volumes of images?",
      answer:
        "Yes, we can handle both small and large volumes of images with equal attention to detail..",
    },
    {
      question: "Do you offer revisions?",
      answer: "Yes, we offer revisions to ensure the final images meet your expectations. Please review our revision policy for more details.",
    },
    
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq">
      <h2>— Frequently Asked Questions (FAQ’s) —</h2>
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
