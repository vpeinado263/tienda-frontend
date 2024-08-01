import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const onUpload = async () => {
    if (!file) {
      alert('Por favor, selecciona un archivo primero.');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('https://mi-back-end.onrender.com/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setImageUrl(response.data.file.secure_url);
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      alert('Hubo un error al subir el archivo.');
    }
  };

  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <button onClick={onUpload}>Subir Imagen</button>
      {imageUrl && <img src={imageUrl} alt="Imagen subida" />}
    </div>
  );
};

export default ImageUpload;
