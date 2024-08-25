import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import EliminarProductoButton from '../../atoms/EliminarProductoButton/EliminarProductoButton';
import { Product } from '../../../../typings/Product';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = useCallback(async (retryCount = 3) => {
    try {
      console.log('Haciendo solicitud a la API...');
      const response = await axios.get('https://mi-back-end.onrender.com/api/products', { timeout: 10000 });

      if (response.status === 200 && response.data.success) {
        console.log('Respuesta de la API:', response);
        setProducts(response.data.data);
      } else {
        console.error('Datos inesperados:', response.data);
        setError('Datos inesperados recibidos de la API');
      }
    } catch (err) {
      if (retryCount > 0) {
        console.warn(`Error al obtener productos, reintentando... (${retryCount} reintentos restantes)`);
        fetchProducts(retryCount - 1);
      } else {
        console.error('Error al obtener productos:', err);
        setError('Error al obtener productos. Intente nuevamente más tarde.');
      }
    } finally {
      setLoading(false);
    }
  }, []); 
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]); 

  const handleProductDeleted = () => {
    fetchProducts();
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <div className="border-t-4 border-blue-500 border-dashed rounded-full w-16 h-16 animate-spin"></div>
        <p className="mt-4 text-lg text-gray-600">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div className="p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id} className="relative">
            <ProductCard product={product} />
            <EliminarProductoButton
              productId={product._id}
              onProductDeleted={handleProductDeleted}
              className="absolute top-2 right-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
