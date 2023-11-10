import { describe, expect, it } from "vitest";
import { ProductAPI } from "../../core/models/product";
import { getProducts } from "../../core/usecases/get-products";
import { InMemoryProductGateway } from "../../infrastructure/adapters/in-memory-product-gateway";
import { getProductDetails } from "../../core/usecases/get-product-details";

describe("get products usecase", () => {
  const inMemoryProductGateway = new InMemoryProductGateway();

  it("should fetch all api products and desirialize them into product", async () => {
    //  *** ARRANGE
    // TODO: Create builder
    const apiProducts: ProductAPI[] = [
      {
        _id: "651305c8b96ac5fa931ac0e6",
        name: "Globus",
        price: 500,
        imageUrl:
          "https://cdn.pixabay.com/photo/2017/07/24/14/07/globus-2534766_1280.png",
        description: "Nice globus",
      },
      {
        _id: "651307cd0e058e22e004d57b",
        name: "Sony Playstation 5",
        price: 30000,
        imageUrl:
          "https://media.direct.playstation.com/is/image/psdglobal/PS5-console-front",
        description: "Have fun gaming.",
      },
    ];

    inMemoryProductGateway.feedWithApiProducts(apiProducts);

    // *** ACT

    const products = await getProducts(inMemoryProductGateway);

    // *** ARRANGE

    expect(products).toEqual([
      {
        id: "651305c8b96ac5fa931ac0e6",
        name: "Globus",
        price: 500,
        image:
          "https://cdn.pixabay.com/photo/2017/07/24/14/07/globus-2534766_1280.png",
        description: "Nice globus",
      },
      {
        id: "651307cd0e058e22e004d57b",
        name: "Sony Playstation 5",
        price: 30000,
        image:
          "https://media.direct.playstation.com/is/image/psdglobal/PS5-console-front",
        description: "Have fun gaming.",
      },
    ]);
  });

  it("should throw an error when fetching all products", async () => {
    inMemoryProductGateway.feedWithError("Something went wrong");

    await expect(getProducts(inMemoryProductGateway)).rejects.toThrow(
      "Something went wrong"
    );
  });

  it("should get product by id", async () => {
    inMemoryProductGateway.reset();
    const product = await getProductDetails(
      inMemoryProductGateway,
      "651305c8b96ac5fa931ac0e6"
    );

    expect(product).toEqual({
      id: "651305c8b96ac5fa931ac0e6",
      name: "Globus",
      price: 500,
      image:
        "https://cdn.pixabay.com/photo/2017/07/24/14/07/globus-2534766_1280.png",
      description: "Nice globus",
    });
  });

  it("should throw an error when fetching product details", async () => {
    inMemoryProductGateway.feedWithError("Something went wrong");

    await expect(
      getProductDetails(inMemoryProductGateway, "1")
    ).rejects.toThrow("Something went wrong");
  });
});
