import React, { useState } from "react";
import { useRouter } from "next/router";

const CreateProductForm = () => {
  const [product, setProduct] = useState({
    _id: "",
    name: "",
    description: "",
    price: 0,
    imageUrls: [""],
    quantity: 0,
  });
  const [error, setError] = useState<string>("");
  const router = useRouter();

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    index?: number,
  ) => {
    const { name, value } = event.target;
    if (name === "imageUrls" && index !== undefined) {
      const newImageUrls = [...product.imageUrls];
      newImageUrls[index] = value;
      setProduct((prevProduct) => ({
        ...prevProduct,
        imageUrls: newImageUrls,
      }));
    } else {
      setProduct((prevProduct) => ({
        ...prevProduct,
        [name]:
          name === "price" || name === "quantity" ? parseFloat(value) : value,
      }));
    }
  };

  const addImageField = () => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      imageUrls: [...prevProduct.imageUrls, ""],
    }));
  };

  const removeImageField = (index: number) => {
    setProduct((prevProduct) => ({
      ...prevProduct,
      imageUrls: prevProduct.imageUrls.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://mi-back-end.onrender.com/api/products",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(product),
        },
      );

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert("Producto creado exitosamente");
          setProduct({
            _id: "",
            name: "",
            description: "",
            price: 0,
            imageUrls: [""],
            quantity: 0,
          });
          setError("");
          router.push(
            "https://tienda-x--swart.vercel.app/products/productPage",
          );
        } else {
          setError(data.error || "Error desconocido al crear el producto");
        }
      } else {
        throw new Error("El número del producto ya existe");
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(`Error al crear el producto: ${err.message}`);
        console.error(err.message);
      } else {
        setError("Error desconocido al crear el producto");
        console.error(err);
      }
    }
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-center text-black">Artículo</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="_id">
            Número del Producto
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="_id"
            name="_id"
            value={product._id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="name">
            Título{" "}
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="description">
            Descripción General
          </label>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="price">
            Precio
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="imageUrls">
            Dirección de Imágen
          </label>
          {product.imageUrls.map((url, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                id={`imageUrls-${index}`}
                name="imageUrls"
                value={url}
                onChange={(e) => handleChange(e, index)}
              />
              <button
                type="button"
                className="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={() => removeImageField(index)}
              >
                Eliminar
              </button>
            </div>
          ))}
          <button
            type="button"
            className="mt-2 p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            onClick={addImageField}
          >
            Agregar
          </button>
        </div>
        <div className="mb-4">
          <label className="block mb-1 font-bold" htmlFor="quantity">
            Cantidad
          </label>
          <input
            className="w-full p-2 border border-gray-300 rounded"
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </div>
        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        <button
          className="w-full p-3 bg-green-500 text-white rounded hover:bg-green-600"
          type="submit"
        >
          Crear Producto
        </button>
      </form>
    </div>
  );
};

export default CreateProductForm;
