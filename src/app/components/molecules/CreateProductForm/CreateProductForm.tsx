import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styles from './CreateProductForm.module.css';

const CreateProductForm = () => {
  const [product, setProduct] = useState({
    _id: '',
    name: '',
    description: '',
    price: 0,
    imageUrl: '',
    quantity: 0
  });
  const [error, setError] = useState<string>('');
  const router = useRouter(); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: name === 'price' || name === 'quantity' ? parseFloat(value) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch('https://mi-back-end.onrender.com/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(product),
      });

      if (response.ok) {
        const data = await response.json();
        if (data.success) {
          alert('Producto creado exitosamente');
          setProduct({
            _id: '',
            name: '',
            description: '',
            price: 0,
            imageUrl: '',
            quantity: 0
          });
          setError('');
          router.push('/products'); // Navega a la página de productos con useRouter
        } else {
          setError(data.error || 'Error desconocido al crear el producto');
        }
      } else {
        throw new Error('Error en la respuesta del servidor');
      }
    } catch (err) {
      if (err instanceof Error) {
        setError(`Error al crear el producto: ${err.message}`);
        console.error(err.message);
      } else {
        setError('Error desconocido al crear el producto');
        console.error(err);
      }
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Prenda de vestir</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="_id">Numero del Producto</label>
          <input
            className={styles.formInput}
            type="text"
            id="_id"
            name="_id"
            value={product._id}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="name">Titulo de la prenda</label>
          <input
            className={styles.formInput}
            type="text"
            id="name"
            name="name"
            value={product.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="description">Descripción General</label>
          <textarea
            className={styles.formInput}
            id="description"
            name="description"
            value={product.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="price">Precio</label>
          <input
            className={styles.formInput}
            type="number"
            id="price"
            name="price"
            value={product.price}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="imageUrl">URL de la Imagen</label>
          <input
            className={styles.formInput}
            type="text"
            id="imageUrl"
            name="imageUrl"
            value={product.imageUrl}
            onChange={handleChange}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="quantity">Cantidad</label>
          <input
            className={styles.formInput}
            type="number"
            id="quantity"
            name="quantity"
            value={product.quantity}
            onChange={handleChange}
          />
        </div>
        {error && <p className={styles.errorMessage}>{error}</p>}
        <button className={styles.formButton} type="submit">Crear Producto</button>
      </form>
    </div>
  );
};

export default CreateProductForm;

