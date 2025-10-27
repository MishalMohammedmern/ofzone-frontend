export interface Product {
  id: number;
  name: string;
  category: string;
  totalOrder: number;
  delivered: number;
  pending: number;
  status: 'Available' | 'Out of Stock';
  price: number;
  rating: number;
  image?: string;
}