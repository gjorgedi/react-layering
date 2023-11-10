import { ProductAPI } from "../core/models/product";

export class ProductApiClient {
  async getAll() {
    const response = await fetch("http://localhost:3000/products");
    const products: ProductAPI[] = await response.json();

    return products;
  }

  async getByID(productID: string) {
    const response = await fetch(`http://localhost:3000/products/${productID}`);
    const product: ProductAPI = await response.json();

    return product;
  }
}
