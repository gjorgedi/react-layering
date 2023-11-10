import { ProductGatewayPort } from "../../core/gateways/products-gateway.port";
import { Product, ProductAPI } from "../../core/models/product";
import { ProductMapper } from "../mappers/product.mapper";

// NOTE: Singleton?
export class ProductGateway implements ProductGatewayPort {
  async getAllProducts(): Promise<Product[]> {
    // TODO: Maybe try catch mech. herea
    const response = await fetch("http://localhost:3000/products");
    const apiProducts: ProductAPI[] = await response.json();

    return apiProducts.map((apiProduct) =>
      ProductMapper.deserializeProductApi(apiProduct)
    );
  }

  async getProductByID(productID: string): Promise<Product> {
    const response = await fetch("http://localhost:3000/products/" + productID);
    const apiProduct = await response.json();

    return ProductMapper.deserializeProductApi(apiProduct);
  }
}
