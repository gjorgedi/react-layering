import { Product } from "../models/product";

export interface ProductGatewayPort {
  getAllProducts(): Promise<Product[]>;
  getProductByID(productID: string): Promise<Product>;
}
