import React from 'react';
import Link from 'next/link';
import ProductosDisponiblesButton from '../../atoms/ProductosDisponiblesButton/ProductosDisponiblesButton';

const NavBar = () => {
  const handleProductosDisponiblesClick = () => {
    console.log('Clic en productos disponibles');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <Link href="/products/productListPage" passHref>
            <ProductosDisponiblesButton onClick={handleProductosDisponiblesClick} />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;

