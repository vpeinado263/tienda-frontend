import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get('http://localhost:8080/api/products'); // URL de tu API de backend
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch products' });
  }
};

export default handler;
