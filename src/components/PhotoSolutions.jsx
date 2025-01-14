// PhotoSolutions.jsx
import React from "react";
import background from "../assets/P-1.png";
import shadow from "../assets/P-2.png";
import Eyes from "../assets/P-3.png";
import scratch from "../assets/P-4.png";
import color from "../assets/P-5.png";
import Reflection from "../assets/P-6.png";
import "../styles/PhotoSolutions.css";

const PhotoSolutions = () => {
  const solutions = [
    { title: "Shadow Creation", description: "Shadow creation adds depth and dimension to design elements, enhancing visual appeal. By using soft or hard shadows, it improves hierarchy, making elements stand out.", image: background },
    { title: "Metal Retouching", description: "Enhance metal surfaces and enhancing or correcting images of metal objects, improving their shine, texture, and details. It can fix scratches, adjust lighting, and add reflections for a polished, professional look.", image: shadow },
    { title: "Gemstone Enhancement", description: "Bring brilliance to gemstones, gemstone's appearance through treatments like heat, irradiation, or coating to enhance color, clarity, or durability, making it more visually appealing for jewelry.", image: Eyes },
    { title: "Color Correction", description: "Change metal or adjusting brightness, contrast, saturation, and hue to enhance visual appeal, readability, and brand identity. Proper color correction creates a cohesive and professional look, improving the overall user experience.", image: scratch },
    { title: "Background Removal", description: "Isolate jewelry with clean background and  enhancing focus on the subject. This process is used in product photography, design, and visual content creation for clarity and supervisioning the image.", image: color },
    { title: "Reflection Creation", description: "Add beautiful reflections , adding mirrored effects beneath objects or text to simulate a reflective surface. This technique enhances depth, visual appeal, and realism, often used in product photography and web design.", image: Reflection },
  ];

  return (
    <section className="photo-solutions">
      <h2>Photo Editing Solutions <br/>We Offer</h2>
      <div className="solutions-grid">
        {solutions.map((solution, index) => (
          <div key={index} className="solution-item">
            <img src={solution.image} alt={solution.title} className="solution-image" />
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PhotoSolutions;
