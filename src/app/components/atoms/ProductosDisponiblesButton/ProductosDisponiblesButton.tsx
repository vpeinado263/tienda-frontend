import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Usa el axios configurado o la URL correcta
import styles from './ProductosDisponiblesButton.module.css';

interface ProductosDisponiblesButtonProps {
  onClick: () => void;
}

const ProductosDisponiblesButton = ({ onClick }: ProductosDisponiblesButtonProps) => {
  const [productosDisponibles, setProductosDisponibles] = useState<number>(0);

  useEffect(() => {
    // Reemplaza la URL con el endpoint correcto para obtener el conteo de productos
    axios.get('https://mi-back-end.onrender.com/products/count')
      .then(response => {
        // Ajusta el acceso a los datos según el formato de respuesta
        if (response.data && typeof response.data.count === 'number') {
          setProductosDisponibles(response.data.count);
        } else {
          console.error('Formato de respuesta inesperado:', response.data);
        }
      })
      .catch(error => {
        console.error('Error al obtener la cantidad de productos disponibles:', error);
      });
  }, []);

  return (
    <button className={styles.disponible} onClick={onClick}>
      <span className={styles.span}>Productos Disponibles</span> {productosDisponibles}
    </button>
  );
};

export default ProductosDisponiblesButton;

