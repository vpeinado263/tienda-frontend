import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get('https://mi-back-end.onrender.com/api/products');
    res.status(200).json(response.data);
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      res.status(error.response?.status || 500).json({ error: errorMessage });
    } else {
      console.error('Unexpected error:', error);
      res.status(500).json({ error: 'Error al cargar Productos' });
    }
  }
};

export default handler;
