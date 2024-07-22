import React, { useState } from 'react';
import styles from './NavBar.module.css';
import Link from 'next/link';
import AccountButton from '../../atoms/AccountButton/AccountButton';
import StoreButton from '../../atoms/StoreButton/StoreButton';
import ProductosDisponiblesButton from '../../atoms/ProductosDisponiblesButton/ProductosDisponiblesButton';
import AgregarProductoButton from '../../atoms/AgregarProductoButton/AgregarProductoButton'; // Corrección del nombre del archivo
import EliminarProductoButton from '../../atoms/EliminarProductoButton/EliminarProductoButton';

const NavBar = () => {
  const [productIdToDelete, setProductIdToDelete] = useState<string>('');

  const handleProductDeleted = () => {
    console.log('Producto eliminado');
    // Aquí podrías añadir lógica para actualizar la UI si es necesario
  };

  const handleProductosDisponiblesClick = () => {
    console.log('Clic en productos disponibles');
    // Aquí podrías añadir lógica para redirigir a una página de lista de productos
  };

  return (
    <div className={styles.contenedor}>
      <nav className={styles.nav}>
        <StoreButton />
        <AccountButton />
      </nav>
      <div className={styles.bottom1}>
        <Link href="/products/productListPage">
          <span className={styles.section}>
            <ProductosDisponiblesButton onClick={handleProductosDisponiblesClick} />
          </span>
        </Link>
      </div>
      <div className={styles.bottom}>
        <Link href="/create/create">
          <AgregarProductoButton />
        </Link>
      </div>
      <div className={styles.bottom}>
        <input
          type="text"
          placeholder="ID del producto a eliminar"
          value={productIdToDelete}
          onChange={(e) => setProductIdToDelete(e.target.value)}
        />
        <EliminarProductoButton productId={productIdToDelete} onProductDeleted={handleProductDeleted} />
      </div>
    </div>
  );
};

export default NavBar;

