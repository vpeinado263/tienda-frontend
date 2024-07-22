import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    // Realiza una solicitud GET a tu backend
    const response = await axios.get('https://mi-back-end.onrender.com/products');
    
    // Responde con los datos obtenidos de tu backend
    res.status(200).json(response.data);
  } catch (error) {
    console.error('Error al obtener productos:', error);
    
    // Responde con un error en caso de fallo
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export default handler;
