export interface Product {
    _id: string;
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
    imageUrls?: string[];
    quantity: number;
  }
  