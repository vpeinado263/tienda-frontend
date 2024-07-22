import React from 'react';
import axios from 'axios';
import styles from './EliminarProductoButton.module.css';

interface EliminarProductoButtonProps {
  productId: string;
  onProductDeleted: () => void; 
}

const EliminarProductoButton: React.FC<EliminarProductoButtonProps> = ({ productId, onProductDeleted }) => {
  const handleDelete = async () => {
    try {
      const response = await axios.delete(`https://mi-back-end.onrender.com/products/${productId}`);
      if (response.status === 200) {
        alert('Producto eliminado exitosamente');
        onProductDeleted(); 
      } else {
        alert('Error al eliminar el producto');
      }
    } catch (err) {
      console.error('Error al eliminar el producto:', err);
      alert('Error al eliminar el producto');
    }
  };

  return (
    <button className={styles.buttoneliminar} onClick={handleDelete}>
      Eliminar Producto
    </button>
  );
};

export default EliminarProductoButton;
