import React, { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import ProductCard from "../../components/molecules/ProductCard";
import EliminarProductoButton from "../../components/atoms/EliminarProductoButton";
import { Product } from "../../../src/typings/Product";
import AgregarProductoButton from "../../components/atoms/AgregarProductoButton";
import Link from "next/link";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log("Haciendo solicitud a la API...");
        const response = await axiosInstance.get("");

        if (response.status === 200 && response.data.success) {
          console.log("Respuesta de la API:", response);
          setProducts(response.data.data);
        } else {
          console.error("Datos inesperados:", response.data);
          setError("Datos inesperados recibidos de la API");
        }
      } catch (err) {
        console.error("Error al obtener productos:", err);
        setError("Error al obtener productos. Intente nuevamente más tarde.");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleProductDeleted = () => {
    setLoading(true);
    setError(null);
    setProducts([]);

    axiosInstance
      .get("")
      .then((response) => {
        if (response.status === 200 && response.data.success) {
          setProducts(response.data.data);
        } else {
          setError("Datos inesperados recibidos de la API");
        }
      })
      .finally(() => setLoading(false));
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-gray-600 text-center">
          El servidor puede tardar unos segundos en activarse...
        </p>
        <div className="border-t-4 border-blue-500 border-dashed rounded-full w-16 h-16 animate-spin"></div>
        <p className="mt-4 text-lg text-gray-600">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-lg text-red-600">{error}</p>
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center">
        <Link href="/create/create" passHref>
          <AgregarProductoButton />
        </Link>
      </div>
      <div>
        {products.map((product) => (
          <div key={product._id} className="relative">
            <ProductCard product={product} />
            <EliminarProductoButton
              productId={product._id}
              onProductDeleted={handleProductDeleted}
              className="absolute top-2 right-2"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
