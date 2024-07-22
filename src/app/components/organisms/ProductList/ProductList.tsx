import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './ProductList.module.css';
import ProductCard from '../../molecules/ProductCard/ProductCard';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  quantity: number;
}

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async (url = '/api/products') => {
    try {
      // Realizar la solicitud a la URL proporcionada
      const response = await axios.get(url);
      setProducts(response.data.data);
    } catch (error) {
      setError('Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
      console.error('Error fetching products:', error);
    }
  };

  const handleAddToCart = (product: Product) => {
    console.log(`Añadido al carrito: ${product.name}`);
  };

  return (
    <div className={styles.container}>
      {error && <p className={styles.error}>{error}</p>}
      {products.length === 0 && !error && <p className={styles.info}>No hay productos disponibles.</p>}
      <div className={styles.productGrid}>
        {products.map((product) => (
          <ProductCard key={product._id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;








