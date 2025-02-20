import React from 'react';
import ProductList from '../app/components/organisms/ProductList/ProductList';
import NavBar from '../app/components/templates/NavBar/NavBar';

const Home = () => {

  return (
    <>
      <NavBar />
      <main>
      <ProductList />
    </main>
    </>
  );
};

export default Home;
