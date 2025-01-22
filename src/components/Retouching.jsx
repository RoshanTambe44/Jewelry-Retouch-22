import { motion } from "framer-motion"; // Importing motion from framer-motion
import Earring from "../assets/SE-1.png";
import Pendant from "../assets/SE-2.png";
import Ring from "../assets/SE-3.png";
import Bracelet from "../assets/SE-4.png";
import Necklace from "../assets/SE-5.png";
import Watch from "../assets/SE-6.png";
import "../styles/Retouching.css";

const Retouch = () => {
  const services = [
    { title: "Earring Editing Services", description: "Our Services focus on refining the details of your earring images to showcase their beauty and craftsmanship. We enhance clarity, adjust lighting ,ensuring each earring is presented in its best light.", image: Earring },
    { title: "Pendant Editing Services", description: "Pendant Editing Services are tailored to enhance the elegance of your pendant images by perfecting every intricate detail. We adjust lighting, sharpen designs, and emphasize shine, ensuring your pendants look flawless.", image: Pendant},
    { title: "Ring Editing Services", description: "We enhance the intricate details and shine of your rings, bringing out their full brilliance by fine-tune lighting, remove imperfections, and highlight design features to create flawless images.", image: Ring },
    { title: "Bracelet Editing Services", description: "Whether it's highlighting gemstones, metal finishes, or unique designs, refine element for a flawless appearance by adjusting lighting, removing imperfections, and emphasizing the bracelet's texture and sparkle , Through careful lighting adjustments showcasing the unique design", image: Bracelet },
    { title: "Necklace Editing Services", description: "Necklace Editing Services are crafted to bring out the true elegance and beauty of your necklaces, ensuring they captivate in every image. We focus on enhancing clarity, adjusting lighting, and perfecting the shine to showcase every detail of the design and emphasizing.", image: Necklace },
    { title: "Watch Editing Services", description: "Our Watch Retouching Services are designed to perfect every detail of your timepiece images, ensuring they look flawless and high-end. We expertly enhance the watch’s dial, strap, and casing, correcting imperfections and refining the shine to highlight its luxury and craftsmanship.", image: Watch },
  ];

  return (
    <section className="photo-services">
        <h2>
        —  High End Jewelry Retouching Services —
      </h2>
      <p>We specialize in high-end jewelry retouching that enhances the beauty and detail of your jewelry pieces.</p>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="services-item"
            initial={{ opacity: 0, y: 50 }} // Starting point: invisible and slightly below
            animate={{ opacity: 1, y: 0 }} // End point: fully visible and in place
            transition={{ delay: index * 0.2, duration: 0.5 }} // Delay each item slightly for staggered effect
          >
            <img src={service.image} alt={service.title} className="service-image" />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Retouch;
