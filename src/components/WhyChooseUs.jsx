import React from "react";
import "../styles/WhyChooseUs.css";
import beforeAfterImage from "../assets/choose.png"; // Replace with actual image
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer"; // For detecting when the section is in view

const WhyChooseUs = () => {
  const points = [
    {
      number: "01.",
      title: "Attention to Detail",
      description:
        "Ensures accuracy, precision, and quality by focusing on small, yet crucial, elements.",
    },
    {
      number: "02.",
      title: "Expert Team",
      description:
        "An expert team combines specialized skills, experience, and collaboration to achieve exceptional results efficiently.",
    },
    {
      number: "03.",
      title: "Fast Turnaround",
      description:
        "Delivers results quickly without compromising quality, ensuring efficiency and meeting tight deadlines.",
    },
    {
      number: "04.",
      title: "Customized Solutions",
      description:
        "Customized support provides tailored solutions, addressing unique needs and preferences, ensuring personalized.",
    },
  ];

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger animation once when in view
    threshold: 0.2, // Trigger when 20% of the element is in view
  });

  return (
    <section className="why-choose-us" ref={ref}>
      <div className="choose-us-content">
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Why Choose Us?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: inView ? 1 : 0 }}
          transition={{ duration: 1 }}
        >
          Our expert team ensures exceptional craftsmanship, helping your
          business deliver stunning results that captivate customers. With
          attention to detail, fast turnaround, and tailored solutions, we
          prioritize client satisfaction and excellence in every project.
        </motion.p>
      </div>
      <div className="image-content">
        <div className="choose-us-image">
          <motion.img
            src={beforeAfterImage}
            alt="Example of before and after project work"
            className="before-after-image"
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            transition={{ duration: 1 }}
          />
        </div>
        <div className="choose-us-list">
          <ul>
            {points.map((point, index) => (
              <motion.li
                key={index}
                className="choose-us-item"
                initial={{ opacity: 0 }}
                animate={{ opacity: inView ? 1 : 0 }}
                transition={{ duration: 1, delay: index * 0.2 }} // Stagger the animation for each item
              >
                <span className="choose-us-number">{point.number}</span>
                <span className="choose-us-title">{point.title}</span>
                <p className="choose-us-description">{point.description}</p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
