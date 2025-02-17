import React, { useState } from 'react';
import EliminarProductoButton from '../../../src/app/components/atoms/EliminarProductoButton/EliminarProductoButton';

const DeleteProductPage = () => {
  const [productId, setProductId] = useState('');

  const handleProductDeleted = () => {
    console.log('Producto eliminado');
    setProductId('');
  };

  return (
    <div>
      <EliminarProductoButton productId={productId} onProductDeleted={handleProductDeleted} />
    </div>
  );
};

export default DeleteProductPage;
