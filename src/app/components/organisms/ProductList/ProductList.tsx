import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Define la interfaz para el producto
interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  quantity: number;
}

// Define el componente ProductList
const ProductList: React.FC = () => {
  // Estado para almacenar los productos y los errores
  const [products, setProducts] = useState<Product[]>([]);
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  // Función para obtener los productos desde el backend
  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get('https://mi-back-end.onrender.com/api/products');
      console.log(response.data); // Verifica en la consola la respuesta
      setProducts(response.data.data || []); // Ajusta según la estructura de la respuesta
    } catch (error) {
      setError('Error al cargar los productos. Por favor, inténtalo de nuevo más tarde.');
      console.error('Error fetching products:', error);
    } finally {
      setLoading(false);
    }
  };

  // Llama a la función fetchProducts cuando el componente se monte
  useEffect(() => {
    fetchProducts();
  }, []);

  // Renderiza el componente
  return (
    <div style={{ padding: '20px' }}>
      {loading && <p>Loading products...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && products.length === 0 && !error && <p>No products available.</p>}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '20px' }}>
        {products.map((product) => (
          <div key={product._id} style={{ border: '1px solid #ddd', padding: '10px', borderRadius: '5px' }}>
            {product.imageUrl && (
              <img
                src={product.imageUrl}
                alt={product.name}
                style={{ width: '100%', height: 'auto', borderRadius: '5px' }}
              />
            )}
            <h2 style={{ fontSize: '1.5rem' }}>{product.name}</h2>
            <p>Price: ${product.price}</p>
            <p>{product.description}</p>
            <p>Quantity: {product.quantity}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
