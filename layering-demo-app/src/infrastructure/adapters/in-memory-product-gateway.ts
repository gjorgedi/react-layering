import { ProductGatewayPort } from "../../core/gateways/products-gateway.port";
import { Product, ProductAPI } from "../../core/models/product";
import { ProductMapper } from "../mappers/product.mapper";

export class InMemoryProductGateway implements ProductGatewayPort {
  private apiProducts: ProductAPI[] = [];

  private error: string | undefined = "";

  feedWithApiProducts(apiProducts: ProductAPI[]) {
    this.apiProducts = apiProducts;
  }
  feedWithError(error: string) {
    this.error = error;
  }
  // Reset the data for different test cases
  reset() {
    this.error = "";
  }

  async getAllProducts(): Promise<Product[]> {
    if (this.error) {
      throw new Error(this.error);
    }
    return this.apiProducts.map((apiProduct) =>
      ProductMapper.deserializeProductApi(apiProduct)
    );
  }

  async getProductByID(productID: string): Promise<Product> {
    if (this.error) {
      throw new Error(this.error);
    }
    const [product] = this.apiProducts.filter(({ _id }) => productID === _id);

    return ProductMapper.deserializeProductApi(product);
  }
}
