import React from 'react';
import styles from './ProductCard.module.css';
import Image from 'next/image';

interface Product {
  _id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  quantity: number;
}

interface Props {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<Props> = ({ product, onAddToCart }) => {
  return (
    <div className={styles.productCard}>
      <div className={`p-2 border border-gray-100 ${styles.cardContent}`}>
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p>Precio: ${product.price}</p>
        {product.imageUrl && (
          <Image
            src={product.imageUrl}
            alt={product.name}
            className={styles.image}
            width={500}
            height={300}
          />
        )}
        <p>Descripción: {product.description}</p>
        <p>Cantidad: {product.quantity}</p>
        <button
          className="mt-2 p-2 bg-blue-500 text-white rounded"
          onClick={() => onAddToCart(product)}
        >
        </button>
      </div>
    </div>
  );
};

export default ProductCard;




