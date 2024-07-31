import { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { data } = req.body;

    try {
      const uploadResponse = await cloudinary.v2.uploader.upload(data, {
        upload_preset: 'ml_default',
      });
      res.status(200).json(uploadResponse);
    } catch (error) {
      res.status(400).json({ error: 'Error uploading image', details: error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
