import React from 'react';
import Link from 'next/link';
import AgregarProductoButton from '../app/components/atoms/AgregarProductoButton/AgregarProductoButton';
// import NavBar from '../app/components/organisms/NavBar/NavBar';
// import Carousel from '../app/components/organisms/Carousel/Carousel';
import ProductList from '../app/components/organisms/ProductList/ProductList';
// import ServicesSection from '../app/components/organisms/ServicesSection/ServicesSection';

const Home = () => {

  return (
    <main>
      <div className="flex items-center">
        <Link href="/create/create" passHref>
            <AgregarProductoButton />
        </Link>
      </div>
      <ProductList />
      {/* <NavBar/> */}
      {/* <Carousel/> */}
      {/* <ServicesSection/> */}
    </main>
  );
};

export default Home;
