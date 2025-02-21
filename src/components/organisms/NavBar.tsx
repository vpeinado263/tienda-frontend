import React from 'react';
import ProductosDisponiblesButton from '../atoms/ProductosDisponiblesButton'

const NavBar = () => {
  const handleProductosDisponiblesClick = () => {
  };

  return (
    <nav>
      <div className="flex items-center">
        <ProductosDisponiblesButton onClick={handleProductosDisponiblesClick} />
      </div>
    </nav>
  );
};

export default NavBar;

