import React from 'react';
import Link from 'next/link';
import StoreButton from '../../atoms/StoreButton/StoreButton';
import ProductosDisponiblesButton from '../../atoms/ProductosDisponiblesButton/ProductosDisponiblesButton';
import AgregarProductoButton from '../../atoms/AgregarProductoButton/AgregarProductoButton';
import AccountButton from '../../atoms/AccountButton/AccountButton';

const NavBar = () => {
  const handleProductosDisponiblesClick = () => {
    console.log('Clic en productos disponibles');
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <StoreButton />
      </div>
      <div className="flex items-center">
        <Link href="/products/productListPage">
          <div onClick={handleProductosDisponiblesClick}>
          <ProductosDisponiblesButton onClick={handleProductosDisponiblesClick}/>
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        <Link href="/create/create">
          <div>
            <AgregarProductoButton />
          </div>
        </Link>
      </div>
      <div className="flex items-center">
        <AccountButton />
      </div>
    </nav>
  );
};

export default NavBar;
