import React from 'react';
import axiosInstance from '../../../../utils/axiosInstance';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface EliminarProductoButtonProps {
  productId: string;
  onProductDeleted: () => void; 
  className?: string; 
}

function EliminarProductoButton({ productId, onProductDeleted }: EliminarProductoButtonProps) {
  const handleDelete = async () => {
    try {
      const response = await axiosInstance.delete(`/api/products/${productId}`);
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
    <div>
       <button 
      className="bg-red-600 text-white rounded-md text-base font-semibold py-2 px-4 shadow-md transition-transform transform hover:scale-105 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50"
      onClick={handleDelete}
    >
      Eliminar Producto
    </button>
    </div>
  );
}

export default EliminarProductoButton;
