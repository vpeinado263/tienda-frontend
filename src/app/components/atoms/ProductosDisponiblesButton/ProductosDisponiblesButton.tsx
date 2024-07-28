import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../utils/axiosInstance';
import styles from './ProductosDisponiblesButton.module.css';

interface ProductosDisponiblesButtonProps {
  onClick: () => void;
}

function ProductosDisponiblesButton({ onClick } : ProductosDisponiblesButtonProps) {
  const [productosDisponibles, setProductosDisponibles] = useState<number>(0);

  useEffect(() => {
    const fetchProductosDisponibles = async () => {
      try {
        console.log('Fetching product count...');
        const response = await axiosInstance.get('/api/products/count');
        console.log('API response:', response);
        if (response.data && response.data.count !== undefined) {
          setProductosDisponibles(response.data.count);
        } else {
          console.error('API response does not contain count:', response.data);
        }
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error al obtener la cantidad de productos disponibles:', error.message);
        } else {
          console.error('Error desconocido:', error);
        }
      }
    };

    fetchProductosDisponibles();
  }, []); 

  return (
    <button className={styles.disponible} onClick={onClick}>
      <span className={styles.span}>Productos Disponibles</span> {productosDisponibles}
    </button>
  );
};

export default ProductosDisponiblesButton;



