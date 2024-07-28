import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCard from '../../molecules/ProductCard/ProductCard'; 
import { Product } from '../../../../typings/Product'; 

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProductList;


