import React from "react";
import { Product } from "../../../src/typings/Product";
import WhatsapButton from "../../components/atoms/WhatsappButton";
import ImageCarousel from "../../components/molecules/ImageCarousel";

interface Props {
  product: Product;
}

function ProductCard({ product }: Props) {
  const whatsappMessage = `¿Hola, está disponible ${product.name}?`;

  return (
    <div className="border border-gray-300 shadow-sm">
      <h2 className="text-xl font-bold mb-2">{product.name}</h2>
      <p className="text-gray-700 mb-4">Precio: ${product.price}</p>
      {product.imageUrls && product.imageUrls.length > 0 && (
        <ImageCarousel images={product.imageUrls} />
      )}
      <div className="mt-4">
        <p className="text-gray-800 mb-2">Descripción: {product.description}</p>
        <p className="text-gray-800 mb-4">
          Cantidad disponible: {product.quantity}
        </p>
        <div className="flex items-center justify-between">
          <span className="ml-2">
            <WhatsapButton message={whatsappMessage} />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
