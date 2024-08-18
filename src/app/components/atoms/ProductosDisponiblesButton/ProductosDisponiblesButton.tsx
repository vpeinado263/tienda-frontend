import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../utils/axiosInstance';

interface ProductosDisponiblesButtonProps {
  onClick: () => void;
}

function ProductosDisponiblesButton({ onClick }: ProductosDisponiblesButtonProps) {
  const [productosDisponibles, setProductosDisponibles] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchProductosDisponibles = async () => {
      try {
        console.log('Fetching product count...');
        const response = await axiosInstance.get('/api/products/count');
        console.log('API response:', response);
        if (response.data && response.data.count !== undefined) {
          setProductosDisponibles(response.data.count);
        } 
      } catch (error) {
        if (error instanceof Error) {
          console.error('Error al obtener la cantidad de productos disponibles:', error.message);
        } else {
          console.error('Error desconocido:', error);
        }
      } finally {
        setLoading(false); 
      }
    };

    fetchProductosDisponibles();
  }, []);

  return (
    <button 
      className={`flex items-center gap-2 px-4 py-2 text-white rounded-md bg-gray-800 hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors duration-300 ${loading ? 'cursor-wait' : 'cursor-pointer'}`}
      onClick={onClick}
    >
      {loading ? (
        <div className="border-2 border-white border-t-transparent border-solid rounded-full w-4 h-4 animate-spin mr-4"></div>
      ) : (
        <>
          <span>Productos Disponibles</span>
          <span>{productosDisponibles}</span>
        </>
      )}
    </button>
  );
}

export default ProductosDisponiblesButton;



