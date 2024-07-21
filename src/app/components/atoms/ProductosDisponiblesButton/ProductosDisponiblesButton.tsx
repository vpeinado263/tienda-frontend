import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProductosDisponiblesButton.module.css';

interface ProductosDisponiblesButtonProps {
  onClick: () => void;
}

const ProductosDisponiblesButton = ({ onClick }: ProductosDisponiblesButtonProps) => {
  const [productosDisponibles, setProductosDisponibles] = useState<number>(0);

  useEffect(() => {
    
    axios.get('http://localhost:8080/products/count')
      .then(response => {
        setProductosDisponibles(response.data.count);
      })
      .catch(error => {
        console.error('Error al obtener la cantidad de productos disponibles:', error);
      });
  }, []); 

  return (
    <>
      <button className={styles.disponible} onClick={onClick}>
        <span className={styles.span}>Productos Disponibles</span> {productosDisponibles}
      </button>
    </>
  );
};

export default ProductosDisponiblesButton;


