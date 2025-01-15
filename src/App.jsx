
import React from 'react';
import Navbar from './components/Header';
import Header from './components/Navbar';
import JewelryServices from "./components/JewelryServices";
import PhotoSolutions from "./components/PhotoSolutions";
import Retouching from "./components/Retouching";
import JewelryService from './components/JewelryEditing';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';
import FAQ from './components/faq';
import TestimonialSlider from './components/Testimonial';
import FreeTrialForm from './components/FreeTrial';
import Footer from './components/Footer';

const App = () => {
  return (
     <>
      <Header />
      <Navbar />
      <JewelryServices />
      <PhotoSolutions />
      <Retouching />
      <JewelryService />
      <WhyChooseUs />
      <Portfolio/>
      <FAQ />
      <TestimonialSlider/>
      <FreeTrialForm/>
      <Footer/>
      </>
  );
};

export default App;

