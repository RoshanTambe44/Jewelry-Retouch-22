import React from "react";
import "../styles/WhyChooseUs.css";
import beforeAfterImage from "../assets/choose.png"; // Replace with actual image

const WhyChooseUs = () => {
  const points = [
    { number: "01", title: "Attention to Detail" },
    { number: "02", title: "Expert Team" },
    { number: "03", title: "Fast Turnaround" },
    { number: "04", title: "Customized Solutions" },
  ];

  return (
    <section className="why-choose-us">
      <div className="choose-us-content">
        <h2>Why Choose Us?</h2>
        <p>
          Our expert team ensures exceptional craftsmanship, helping your
          business deliver stunning results that captivate customers. With
          attention to detail, fast turnaround, and tailored solutions,<br></br> we
          prioritize client satisfaction and excellence in every project.
        </p>
        </div>
        <div className="choose-us-image">
        <img
          src={beforeAfterImage}
          alt="Before and After"
          className="before-after-image"
        />
         <div>
        <ul className="choose-us-list">
          {points.map((point, index) => (
            <li key={index} className="choose-us-item">
              <span className="choose-us-number">{point.number}</span>
              <span className="choose-us-title">{point.title}</span>
            </li>
          ))}
        </ul>
        </div>

      </div>
     
    </section>
  );
};

export default WhyChooseUs;
