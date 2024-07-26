import React from 'react';
import NavBar from '../app/components/organisms/NavBar/NavBar';
import Carousel from '../app/components/organisms/Carousel/Carousel';
import WhatsapButton from '../app/components/atoms/WhatsappButton/WhatsappButton';
import Footer from '../app/components/organisms/Footer/footer';

const Home = () => {
 
  return (
    <main>
      <NavBar/>
      <Carousel/>
      <WhatsapButton/>
      <Footer/>
    </main>
  );
};

export default Home;
