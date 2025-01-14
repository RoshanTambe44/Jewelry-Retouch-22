
import React from 'react';
import Navbar from './components/Header';
import Header from './components/Navbar';
import JewelryServices from "./components/JewelryServices";
import PhotoSolutions from "./components/PhotoSolutions";
import Retouching from "./components/Retouching";
import JewelryService from './components/JewelryEditing';
import WhyChooseUs from './components/WhyChooseUs';
import Portfolio from './components/Portfolio';

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
      {/* <Portfolio/> */}

      </>
  );
};

export default App;

