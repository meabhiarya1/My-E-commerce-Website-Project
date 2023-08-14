import React from 'react';
import HeroSection from './components/HeroSection';
import Services from './components/Services';
import Trusted  from './components/Trusted';
import FeatureProduct from './components/FeatureProduct';

const Home = () => {

  const data = {
    name: 'Smart Store',
    des: "The future of e-commerce is sustainable, equitable and inclusive. As we continue to drive changes across key areas of our operations, our commitment is embedded in our vision to create a positive impact, for the planet and communities."
  }

  return (
    <>  
      <HeroSection props={data} />
      <FeatureProduct />
      <Services />
      <Trusted />
    </>
    
  )
};


export default Home;