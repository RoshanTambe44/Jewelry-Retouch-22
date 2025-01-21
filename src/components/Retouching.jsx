import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "../styles/Retouching.css";

// ServiceBox Component
const ServiceBox = ({ imgSrc, altText, title, description }) => {
  // Framer Motion animation for when the service box is in view
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger once when it comes into view
    threshold: 0.3, // Trigger when 30% of the element is in view
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }} // Initial state: hidden and slightly below
      animate={{
        opacity: inView ? 1 : 0, // Fade in when in view
        y: inView ? 0 : 50, // Move up when in view
      }}
      transition={{ duration: 0.5 }} // Smooth transition
      className="service-box"
    >
      <img src={imgSrc} alt={altText} className="service-image" />
      <div className="service-content">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
      </div>
    </motion.div>
  );
};

// Main Section Component
const JewelryRetouchingSection = () => {
  const services = [
    {
      imgSrc:
        "https://www.jewelryediting.com/wp-content/uploads/2022/11/earring-1.png",
      altText: "Earring",
      title: "Earring Editing Services",
      description:
        "Our Services focus on refining the details of your earring images to showcase their beauty and craftsmanship. We enhance clarity, adjust lighting ,ensuring each earring is presented in its best light.",
    },
    {
      imgSrc:
        "https://www.jewelryediting.com/wp-content/uploads/2022/11/necklace.png",
      altText: "Pendant",
      title: "Pendant Editing Services",
      description:
        "Pendant Editing Services are tailored to enhance the elegance of your pendant images by perfecting every intricate detail. We adjust lighting, sharpen designs, and emphasize shine, ensuring your pendants look flawless.",
    },
    {
      imgSrc:
        "https://www.jewelryediting.com/wp-content/uploads/2022/11/Ring.png",
      altText: "Ring",
      title: "Ring Editing Services",
      description:
        "We enhance the intricate details and shine of your rings, bringing out their full brilliance by fine-tune lighting, remove imperfections, and highlight design features to create flawless images. ",
    },
    {
      imgSrc:
        "https://www.jewelryediting.com/wp-content/uploads/2022/11/bracelet.png",
      altText: "Bracelet",
      title: "Bracelet Editing Services",
      description:
        "Whether it's highlighting gemstones, metal finishes, or unique designs, refine element for a flawless appearance by adjusting lighting, removing imperfections, and emphasizing the bracelet's texture and sparkle , Through careful lighting adjustments showcasing the unique design ",
    },
    {
      imgSrc:
        "https://www.jewelryediting.com/wp-content/uploads/2022/11/imatation-jewelry.png",
      altText: "Necklace",
      title: "Necklace Editing Services",
      description:
        "Necklace Editing Services are crafted to bring out the true elegance and beauty of your necklaces, ensuring they captivate in every image. We focus on enhancing clarity, adjusting lighting, and perfecting the shine to showcase every detail of the design and emphasizing.",
    },
    {
      imgSrc:
        "https://www.jewelryediting.com/wp-content/uploads/2022/11/watch-1.png",
      altText: "Watch",
      title: "Watch Editing Services",
      description:
        "Our Watch Retouching Services are designed to perfect every detail of your timepiece images, ensuring they look flawless and high-end. We expertly enhance the watch’s dial, strap, and casing, correcting imperfections and refining the shine to highlight its luxury and craftsmanship. ",
    },
  ];

  return (
    <section className="jewelry-retouching-section">
      <header className="header-re">
        <h2>
          — High End Jewelry Retouching
          Services—
        </h2>
        <p>
          We specialize in high-end jewelry retouching that enhances the beauty
          and detail of your jewelry pieces.
        </p>
      </header>
      <section className="service-section">
        {services.map((service, index) => (
          <div key={index} className="service-column">
            <ServiceBox {...service} />
          </div>
        ))}
      </section>
    </section>
  );
};

export default JewelryRetouchingSection;
