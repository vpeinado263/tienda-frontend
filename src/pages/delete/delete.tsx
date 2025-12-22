import React, { useState } from "react";
import EliminarProductoButton from "../../components/atoms/EliminarProductoButton";

const DeleteProductPage = () => {
  const [productId, setProductId] = useState("");
  const handleProductDeleted = () => {
    console.log("Producto eliminado");
    setProductId("");
  };
  return (
    <div>
      <EliminarProductoButton
        productId={productId}
        onProductDeleted={handleProductDeleted}
      />
    </div>
  );
};
export default DeleteProductPage;
