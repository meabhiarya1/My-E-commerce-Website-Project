import HeroSection from './components/HeroSection';
import { useProductContext } from './context/productcontex';

const About = () => {

  const name = useProductContext();

  const data = {
    name: "Smart Ecommerce",
    des: "Technology drives path-breaking, customer-focused innovation that makes high quality products accessible to Indian shoppers, besides making the online shopping experience convenient, intuitive and seamless."
  }

  return (
    <>
      {name.myName}
      {name.surName}
      <HeroSection props={data} />
    </>
  )
}

export default About;