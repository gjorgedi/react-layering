import { ProductAPI, Product } from "../../core/models/product";

export class ProductMapper {
  static deserializeProductApi = (apiProduct: ProductAPI): Product => {
    return {
      id: apiProduct._id,
      name: apiProduct.name,
      description: apiProduct.description,
      image: apiProduct.imageUrl,
      price: apiProduct.price,
    };
  };
}
