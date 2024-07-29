import React from 'react';
import styles from './ProductCard.module.css';
import { Product } from '../../../../typings/Product';
import WhatsapButton from '../../atoms/WhatsappButton/WhatsappButton';
import ImageCarousel from '../../molecules/ImageCarousel/ImageCarousel';

interface Props {
  product: Product;
}

function ProductCard ({ product } : Props) {

const whatsappMessage = `¿Hola Janni esta diponible?: ${product.name}`;

  return (
    <div className={styles.productCard}>
      <div className={`p-9 border ${styles.cardContent}`}>
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p>Precio: ${product.price}</p>
        {product.imageUrls && product.imageUrls.length > 0 && (
          <ImageCarousel images={product.imageUrls} />
        )}
        <div className={styles.texto}>
          <p className={styles.texto1}>Descripción: {product.description}</p>
          <p className={styles.texto1}>Cantidad disponible: {product.quantity}</p>
          <button className={styles.comprar}>
            Comprar &rarr;
            <WhatsapButton message={whatsappMessage} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
