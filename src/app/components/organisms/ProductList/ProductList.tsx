import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../molecules/ProductCard/ProductCard';
import EliminarProductoButton from '../../atoms/EliminarProductoButton/EliminarProductoButton'; // Importar el botón de eliminar
import { Product } from '../../../../typings/Product';
import styles from './ProductList.module.css';

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProducts = async () => {
    try {
      console.log('Haciendo solicitud a la API...');
      const response = await axios.get('https://mi-back-end.onrender.com/api/products');
      
      if (response.status === 200 && response.data.success) {
        console.log('Respuesta de la API:', response);
        setProducts(response.data.data);
      } else {
        console.error('Datos inesperados:', response.data);
        setError('Datos inesperados recibidos de la API');
      }
    } catch (err) {
      console.error('Error al obtener productos:', err);
      setError('Error al obtener productos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleProductDeleted = () => {
    fetchProducts();
  };

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <div key={product._id}>
            <ProductCard product={product} />
            <EliminarProductoButton
              className={styles['hidden-mobile']}
              productId={product._id}
              onProductDeleted={handleProductDeleted}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
