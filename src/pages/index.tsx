import React from 'react';
import Link from 'next/link';
import AgregarProductoButton from '../app/components/atoms/AgregarProductoButton/AgregarProductoButton';
import ProductList from '../app/components/organisms/ProductList/ProductList';
import NavBar from '../app/components/templates/NavBar/NavBar';

const Home = () => {

  return (
    <>
      <NavBar />
      <main>
      <div className="flex items-center">
        <Link href="/create/create" passHref>
            <AgregarProductoButton />
        </Link>
      </div>
      <ProductList />
    </main>
    </>
  );
};

export default Home;
