import type { NextApiRequest, NextApiResponse } from 'next';
import cloudinary from 'cloudinary';

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '10mb', // Limit file size
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    try {
      const fileStr = req.body.data;
      const uploadResponse = await cloudinary.v2.uploader.upload(fileStr, {
        folder: 'mi_carpeta',
      });

      console.log('Upload response:', uploadResponse);
      res.status(200).json({ secure_url: uploadResponse.secure_url });
    } catch (error) {
      console.error('Error uploading image:', error);
      res.status(500).json({ error: 'Error uploading image' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
