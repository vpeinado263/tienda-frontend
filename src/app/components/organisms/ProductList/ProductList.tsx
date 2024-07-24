import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProductList.module.css';
import ProductCard from '../../molecules/ProductCard/ProductCard'; // Asegúrate de que esta ruta es correcta

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  quantity: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (searchTerm = '') => {
    try {
      setLoading(true);
      const response = await axios.get(`https://mi-back-end.onrender.com/api/products?search=${searchTerm}`);
      setProducts(response.data.data); // Asegúrate de que la estructura de los datos es correcta
      setLoading(false);
    } catch (error) {
      setError('Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
      setLoading(false);
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div className={styles.container}>
      {loading && <p className={styles.info}>Cargando productos...</p>}
      {error && <p className={styles.error}>{error}</p>}
      {!loading && products.length === 0 && !error && <p className={styles.info}>No hay productos disponibles.</p>}
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
