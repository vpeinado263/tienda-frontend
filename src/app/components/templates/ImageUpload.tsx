// src/templates/ImageUpload.tsx
import React, { useState } from 'react';
import axios from 'axios';
import Image from 'next/image';

const ImageUpload = () => {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files![0];
    setFile(selectedFile);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setUploadedImageUrl(response.data.url);
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <h1>Upload Image</h1>
      <input type="file" onChange={handleChange} />
      <button onClick={handleSubmit} disabled={uploading}>
        {uploading ? 'Uploading...' : 'Upload Image'}
      </button>
      {uploadedImageUrl && (
        <div>
          <h2>Uploaded Image:</h2>
          <Image src={uploadedImageUrl} alt="Uploaded" width={500} height={500} />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;

