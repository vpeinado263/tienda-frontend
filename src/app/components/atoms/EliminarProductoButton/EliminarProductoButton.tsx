import React from 'react';
import axiosInstance from '../../../../utils/axiosInstance';
import styles from './EliminarProductoButton.module.css';
import { toast } from 'react-toastify';

interface EliminarProductoButtonProps {
  productId: string;
  onProductDeleted: () => void; 
}

const EliminarProductoButton: React.FC<EliminarProductoButtonProps> = ({ productId, onProductDeleted }) => {
  const handleDelete = async () => {
    try {
      const response = await axiosInstance.delete(`/products/${productId}`);
      if (response.status === 200) {
        toast.success('Producto eliminado exitosamente');
        onProductDeleted(); 
      } else {
        toast.error('Error al eliminar el producto');
      }
    } catch (err) {
      if (err instanceof Error) {
        console.error('Error al eliminar el producto:', err);
        toast.error(`Error al eliminar el producto: ${err.message}`);
      } else {
        console.error('Error desconocido:', err);
        toast.error('Error al eliminar el producto');
      }
    }
  };

  return (
    <button className={styles.buttoneliminar} onClick={handleDelete}>
      Eliminar Producto
    </button>
  );
};

export default EliminarProductoButton;
