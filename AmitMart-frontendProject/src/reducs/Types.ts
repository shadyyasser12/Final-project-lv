export type Product = {
  id: string;
  title: string;
  price: number;
  description?: string;
  category?: string;
  image: string;
  rating?: {
    rate: number;
    count: number;
  };
};

export interface Order {
  items: (Product & { quantity: number })[]; // ✅ add quantity per item
  date: string;
}
