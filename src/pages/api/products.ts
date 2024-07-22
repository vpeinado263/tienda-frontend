import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // URL de la API backend
    const response = await axios.get('https://mi-back-end.onrender.com/products'); 
    
    // Enviar la respuesta de la API a la respuesta de la solicitud
    res.status(200).json(response.data);
  } catch (error) {
    // Manejar errores de manera más informativa
    console.error('Error al obtener productos:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export default handler;
