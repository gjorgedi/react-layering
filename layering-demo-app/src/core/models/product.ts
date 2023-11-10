export interface ProductAPI {
  _id: string;
  name: string;
  price: number;
  imageUrl: string;
  description: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
}
