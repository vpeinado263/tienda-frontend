import React from 'react';
import { Product } from '../../../../typings/Product';
import WhatsapButton from '../../atoms/WhatsappButton/WhatsappButton';
import ImageCarousel from '../../molecules/ImageCarousel/ImageCarousel';

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const whatsappMessage = `¿Hola, está disponible ${product.name}?`;

  return (
    <div>
      <div className="p-2">
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <p className="text-gray-700 mb-4">Precio: ${product.price}</p>
        {product.imageUrls && product.imageUrls.length > 0 && (<ImageCarousel images={product.imageUrls} />)}
        <div className="mt-4">
          <p className="text-gray-800 mb-2">Descripción: {product.description}</p>
          <p className="text-gray-800 mb-4">Cantidad disponible: {product.quantity}</p>
          <div className="flex items-center justify-between">
              <span className="ml-2">
                <WhatsapButton message={whatsappMessage} />
              </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;

