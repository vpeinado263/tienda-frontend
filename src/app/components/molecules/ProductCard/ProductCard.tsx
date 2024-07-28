import React from 'react';
import styles from './ProductCard.module.css';
import Image from 'next/image';
import { Product } from '../../../../typings/Product';
import WhatsapButton from '../../atoms/WhatsappButton/WhatsappButton';

interface Props {
  product: Product;
}

function ProductCard ({ product } : Props) {
  return (
    <div className={styles.productCard}>
      <div className={`p-9 border ${styles.cardContent}`}>
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
        <div className={styles.texto}>
        <p className={styles.texto1}>Descripción: {product.description}</p>
        <p className={styles.texto1}>Cantidad disponible: {product.quantity}</p>
        <button className={styles.comprar}>
          Comprar  &rarr;
          <WhatsapButton/>
        </button>
        
        </div>
      </div>
    </div>
  );
};

export default ProductCard;



