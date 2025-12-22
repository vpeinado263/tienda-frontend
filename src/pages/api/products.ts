import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_URL}/api/products`
    );    

    if (Array.isArray(response.data)) {
      res.status(200).json({ count: response.data.length });
    } else {
      res.status(500).json({ error: "Unexpected API response format" });
    }
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const errorMessage = error.response?.data?.message || error.message;
      res.status(error.response?.status || 500).json({ error: errorMessage });
    } else {
      console.error("Unexpected error:", error);
      res.status(500).json({ error: "Error al cargar productos" });
    }
  }
};

export default handler;
