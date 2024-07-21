import React, { useState } from 'react';
import EliminarProductoButton from '../../../src/app/components/atoms/EliminarProductoButton/EliminarProductoButton';

const DeleteProductPage = () => {
  const [productId, setProductId] = useState('');

  const handleProductDeleted = () => {
    // Lógica para manejar la UI después de eliminar el producto
    console.log('Producto eliminado');
    setProductId('');
  };

  return (
    <div>
      <h1>Eliminar Producto</h1>
      <input
        type="text"
        placeholder="ID del producto a eliminar"
        value={productId}
        onChange={(e) => setProductId(e.target.value)}
      />
      <EliminarProductoButton productId={productId} onProductDeleted={handleProductDeleted} />
    </div>
  );
};

export default DeleteProductPage;
