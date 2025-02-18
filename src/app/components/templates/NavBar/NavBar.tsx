import React from 'react';
import ProductosDisponiblesButton from '../../atoms/ProductosDisponiblesButton/ProductosDisponiblesButton';

const NavBar = () => {
  const handleProductosDisponiblesClick = () => {
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <div className="flex items-center">
        <ProductosDisponiblesButton onClick={handleProductosDisponiblesClick} />
      </div>
    </nav>
  );
};

export default NavBar;

