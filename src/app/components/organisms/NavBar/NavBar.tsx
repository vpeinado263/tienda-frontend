import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';
import StoreButton from '../../atoms/StoreButton/StoreButton';
import ProductosDisponiblesButton from '../../atoms/ProductosDisponiblesButton/ProductosDisponiblesButton';
import AgregarProductoButton from '../../atoms/AgregarProductoButton/AgregarProductoButton';

const NavBar = () => {
  const [productIdToDelete, setProductIdToDelete] = useState('');

  const handleProductDeleted = () => {
    console.log('Producto eliminado');
  };

  const handleProductosDisponiblesClick = () => {
    console.log('Clic en productos disponibles');
  };

  return (
    <div className={styles.contenedor}>
      <nav className={styles.nav}>
        <StoreButton />
      </nav>
      <div className={styles.bottom1}>
        <Link href="/products/productListPage">
          <span className={styles.section}>
            <ProductosDisponiblesButton onClick={handleProductosDisponiblesClick}/>
          </span>
        </Link>
      </div>
      <div className={styles.bottom}>
        <Link href="/create/create">
          <AgregarProductoButton />
        </Link>
      </div>
      <div className={styles.bottom}>
      </div>
    </div>
  );
};

export default NavBar;
