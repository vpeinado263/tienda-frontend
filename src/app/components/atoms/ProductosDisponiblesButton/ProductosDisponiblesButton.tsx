import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from './ProductosDisponiblesButton.module.css';

interface ProductosDisponiblesButtonProps {
  onClick: () => void;
}

const ProductosDisponiblesButton = ({ onClick }: ProductosDisponiblesButtonProps) => {
  const [productosDisponibles, setProductosDisponibles] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    axios.get('https://mi-back-end.onrender.com/products/count')
      .then(response => {
        setProductosDisponibles(response.data.count); // Asume que la respuesta contiene la cantidad en la propiedad `count`
        setLoading(false);
      })
      .catch(error => {
        setError('Error al obtener la cantidad de productos disponibles.');
        setLoading(false);
        console.error('Error al obtener la cantidad de productos disponibles:', error);
      });
  }, []);

  const handleClick = () => {
    router.push('/products');
    if (onClick) {
      onClick();
    }
  };

  return (
    <button className={styles.disponible} onClick={handleClick}>
      {loading ? (
        <span className={styles.span}>Cargando...</span>
      ) : error ? (
        <span className={styles.span}>{error}</span>
      ) : (
        <>
          <span className={styles.span}>Productos Disponibles:</span> {productosDisponibles}
        </>
      )}
    </button>
  );
};

export default ProductosDisponiblesButton;
