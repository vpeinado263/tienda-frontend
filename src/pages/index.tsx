import React from 'react';
import NavBar from '../app/components/organisms/NavBar/NavBar';
import Carousel from '../app/components/organisms/Carousel/Carousel';
import WhatsapButton from '../app/components/atoms/WhatsappButton/WhatsappButton';
import Footer from '../app/components/organisms/Footer/footer';
import ServicesSection from '../app/components/organisms/ServicesSection/ServicesSection';

const Home = () => {
 
  return (
    <main>
      <NavBar/>
      <Carousel/>
      <ServicesSection/>
      <Footer/>
    </main>
  );
};

export default Home;
