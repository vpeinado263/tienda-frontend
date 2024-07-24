import React from 'react';
import NavBar from '../app/components/organisms/NavBar/NavBar';
import Carousel from '../app/components/organisms/Carousel/Carousel';
import WhatsapButton from '../app/components/atoms/WhatsappButton/WhatsappButton';
import ProductList from '../app/components/organisms/ProductList/ProductList';

const Home = () => {
 
  return (
    <main>
      <NavBar/>
      <Carousel/>
      <WhatsapButton/>
      <ProductList/>
    </main>
  );
};

export default Home;
