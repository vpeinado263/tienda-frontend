import React from 'react';
import Link from 'next/link';
import AgregarProductoButton from '../app/components/atoms/AgregarProductoButton/AgregarProductoButton';
import ProductosDisponiblesButton from '../app/components/atoms/ProductosDisponiblesButton/ProductosDisponiblesButton';
// import NavBar from '../app/components/organisms/NavBar/NavBar';
// import Carousel from '../app/components/organisms/Carousel/Carousel';
import Footer from '../app/components/organisms/Footer/footer';
import ProductList from '../app/components/organisms/ProductList/ProductList';
// import ServicesSection from '../app/components/organisms/ServicesSection/ServicesSection';

const Home = () => {
  const handleProductosDisponiblesClick = () => {
    console.log('Clic en productos disponibles');
  };
 
  return (
    <main>
      <Footer />
      <div className="flex items-center">
        <Link href="/products/productListPage" passHref>
            <ProductosDisponiblesButton onClick={handleProductosDisponiblesClick} />
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/create/create" passHref>
            <AgregarProductoButton />
        </Link>
      </div>
      <ProductList />
      {/* <NavBar/> */}
      {/* <Carousel/> */}
      {/* <ServicesSection/> */}
      <Footer/>
    </main>
  );
};

export default Home;
