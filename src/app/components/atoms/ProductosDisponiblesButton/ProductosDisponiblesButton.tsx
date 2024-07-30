import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../utils/axiosInstance';
import styles from './ProductosDisponiblesButton.module.css';

interface ProductosDisponiblesButtonProps {
  onClick: () => void;
}

function ProductosDisponiblesButton({ onClick }: ProductosDisponiblesButtonProps) {
  const [productosDisponibles, setProductosDisponibles] = useState<number | null>(null); // Usar null para representar que aún no se ha cargado
  const [loading, setLoading] = useState<boolean>(true);

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
      } finally {
        setLoading(false); // Deja de mostrar el spinner cuando la carga haya terminado
      }
    };

    fetchProductosDisponibles();
  }, []);

  return (
    <button className={styles.disponible} onClick={onClick}>
      {loading ? (
        <div className={styles.spinnerr}></div> // Mostrar el spinner mientras se carga
      ) : (
        <>
          <span className={styles.span}>Productos Disponibles</span> 
          {productosDisponibles}
        </>
      )}
    </button>
  );
};

export default ProductosDisponiblesButton;




