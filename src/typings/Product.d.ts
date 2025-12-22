export interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageUrls?: string[];
  quantity: number;
}
