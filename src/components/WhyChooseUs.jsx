import React from "react";
import "../styles/WhyChooseUs.css";
import beforeAfterImage from "../assets/choose.png"; // Replace with actual image

const WhyChooseUs = () => {
  const points = [
    { number: "01.", title: "Attention to Detail", description: "Ensures accuracy, precision, and quality by focusing on small, yet crucial, elements." },
    { number: "02.", title: "Expert Team", description: "An expert team combines specialized skills, experience, and collaboration to achieve exceptional results efficiently." },
    { number: "03.", title: "Fast Turnaround", description: "Delivers results quickly without compromising quality, ensuring efficiency and meeting tight deadlines." },
    { number: "04.", title: "Customized Solutions", description: "Customized support provides tailored solutions, addressing unique needs and preferences, ensuring personalized assistance and optimal results for every client." },
  ];

  return (
    <section className="why-choose-us">
      <div className="choose-us-content">
        <h2>Why Choose Us?</h2>
        <p>
          Our expert team ensures exceptional craftsmanship, helping your business deliver stunning results that captivate customers.
          With attention to detail, fast turnaround, and tailored solutions, we prioritize client satisfaction and excellence in every project.
        </p>
      </div>
      
      <div className="choose-us-image">
        <img
          src={beforeAfterImage}
          alt="Example of before and after project work"
          className="before-after-image"
        />
      
      <div className="choose-us-list">
        <ul>
          {points.map((point, index) => (
            <li key={index} className="choose-us-item">
              <span className="choose-us-number">{point.number}</span>
              <span className="choose-us-title">{point.title}</span>
              <p className="choose-us-description">{point.description}</p>
            </li>
          ))}
        </ul>
      </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
