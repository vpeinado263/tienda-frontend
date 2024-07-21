import React, { useState } from 'react';
import axios from 'axios';
import styles from './CreateProductForm.module.css';

const CreateProductForm: React.FC = () => {
  const [product, setProduct] = useState({
    _id: '',
    name: '',
    description: '',
    price: '',
    imageUrl: '',
    quantity: ''
  });
  const [error, setError] = useState('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8080/products', product);
      if (response.data.success) {
        alert('Producto creado exitosamente');
        setProduct({
          _id: '',
          name: '',
          description: '',
          price: '',
          imageUrl: '',
          quantity: ''
        });
        setError('');
      } else {
        setError(response.data.error);
      }
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        setError('Error al crear el producto');
        console.error(err.response?.data || err.message);
      } else {
        setError('Error desconocido');
        console.error(err);
      }
    }
  };

  return (
    <div className={styles.formContainer}>
      <h2 className={styles.formTitle}>Crear Producto</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel} htmlFor="_id">ID del Producto</label>
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
          <label className={styles.formLabel} htmlFor="name">Nombre</label>
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
          <label className={styles.formLabel} htmlFor="description">Descripción</label>
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
            type="text"
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
            type="text"
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


