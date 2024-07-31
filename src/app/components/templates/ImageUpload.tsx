import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleUpload = async () => {
    if (!file) {
      setError('Por favor, selecciona un archivo para subir.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://mi-back-end.onrender.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        timeout: 10000,
      });

      if (response.status === 200 && response.data.url) {
        console.log('Imagen subida con éxito:', response.data);
        setImageUrl(response.data.url);
        setError(null);
      } else {
        console.error('Error inesperado al subir la imagen:', response.data);
        setError('Error inesperado al subir la imagen.');
      }
    } catch (err) {
      console.error('Error al subir la imagen:', err);
      if (axios.isAxiosError(err) && err.response) {
        setError(`Error al subir la imagen: ${err.response.data.message}`);
      } else {
        setError('Error al subir la imagen. Por favor, inténtalo de nuevo más tarde.');
      }
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Subir Imagen</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {imageUrl && 
      <Image src={imageUrl} 
      alt="Uploaded" 
      style={{ marginTop: '10px', maxWidth: '100%' }} />}
    </div>
  );
};

export default ImageUpload;
