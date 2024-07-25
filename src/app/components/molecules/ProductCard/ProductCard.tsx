import React from 'react';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import { Product } from '../../../../typings/Product';



interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = ({ product }) => {
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
            width={500} // Ajusta según tus necesidades
            height={300} // Ajusta según tus necesidades
          />
        )}
        <div className={styles.texto}>
        <p>Descripción: {product.description}</p>
        <p>Cantidad: {product.quantity}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



