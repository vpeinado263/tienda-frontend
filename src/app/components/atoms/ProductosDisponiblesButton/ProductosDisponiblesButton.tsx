import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../utils/axiosInstance';
import styles from './ProductosDisponiblesButton.module.css';

interface ProductosDisponiblesButtonProps {
  onClick: () => void;
}

const ProductosDisponiblesButton: React.FC<ProductosDisponiblesButtonProps> = ({ onClick }) => {
  const [productosDisponibles, setProductosDisponibles] = useState<number>(0);

  useEffect(() => {
    const fetchProductosDisponibles = async () => {
      try {
        const response = await axiosInstance.get('/api/products/count');
        setProductosDisponibles(response.data.count);
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


