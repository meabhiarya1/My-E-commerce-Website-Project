import React from 'react'
import HeroSection from './components/HeroSection';

const About = () => {

  const data = {
    name: "Smart Ecommerce",
    des: "Technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless."
  }

  return (
    <HeroSection props={data}/>
  )
}

export default About;