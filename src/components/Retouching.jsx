import React from 'react';
import "../styles/Retouching.css";

// ServiceBox Component
const ServiceBox = ({ imgSrc, altText, title, description, link }) => (
  <div className="service-box">
    <a href={link} className="service-link" tabIndex="-1">
      <img src={imgSrc} alt={altText} className="service-image" />
    </a>
    <div className="service-content">
      <h3 className="service-title">
        <a href={link}>{title}</a>
      </h3>
      <p className="service-description">{description}</p>
    </div>
  </div>
);

// Main Section Component
const JewelryRetouchingSection = () => {
  const services = [
    {
      imgSrc: "https://www.jewelryediting.com/wp-content/uploads/2022/11/Ring.png",
      altText: "Ring",
      title: "Ring Editing Services",
      description: "Jewelry Editing Services as a company works to make this ride hassle-free and remarkable for each of our clients.",
      link: "https://www.jewelryediting.com/ring-editing-services/"
    },
    {
      imgSrc: "https://www.jewelryediting.com/wp-content/uploads/2022/11/earring-1.png",
      altText: "Earring",
      title: "Earring Editing Services",
      description: "Editing as art needs no new introduction. None of us nowadays are unaware of the striking difference between an edited photo and an unedited one.",
      link: "https://www.jewelryediting.com/earring-editing-services/"
    },
    {
      imgSrc: "https://www.jewelryediting.com/wp-content/uploads/2022/11/necklace.png",
      altText: "Necklace",
      title: "Necklace Editing Services",
      description: "At Jewelry Editing Services, we redefine the visualities of Jewelries. We believe that 'First impression does last lifelong', especially when we are residing in a digital era.",
      link: "https://www.jewelryediting.com/necklace-editing-services/"
    },
    {
      imgSrc: "https://www.jewelryediting.com/wp-content/uploads/2022/11/bracelet.png",
      altText: "Bracelet",
      title: "Bracelet Editing Services",
      description: "If you are performing a digital jewelry business, then you always require an experienced jewelry photo editing service company.",
      link: "https://www.jewelryediting.com/bracelet-editing-services/"
    },
    {
      imgSrc: "https://www.jewelryediting.com/wp-content/uploads/2022/11/watch-1.png",
      altText: "Watch",
      title: "Watch Editing Services",
      description: "Editing is always a requirement, whether for personal use or commercial use, when you are trading jewelry, perfection on clicking the jewelry image is mandatory",
      link: "https://www.jewelryediting.com/watch-editing-services/"
    },
    {
      imgSrc: "https://www.jewelryediting.com/wp-content/uploads/2022/11/imatation-jewelry.png",
      altText: "Imitation Jewelry",
      title: "Imitation Jewelry Editing Services",
      description: "As a service provider, you have to display your jewelry perfectly, and when you are trading jewelry, perfection on clicking the jewelry image is mandatory.",
      link: "https://www.jewelryediting.com/imitation-jewelry-editing-services/"
    },
  ];

  return (
    <section className="jewelry-retouching-section">
      <header className="header-re">
        <h2>World Class Jewelry Retouching for Jewellers</h2>
        <p>Making Your Jewelry Photos Look Amazing and detailed</p>
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
