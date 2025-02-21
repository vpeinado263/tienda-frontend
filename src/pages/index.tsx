import React from 'react';
import ProductList from '../components/organisms/ProductList';
import NavBar from '../components/organisms/NavBar';

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
