import { render, screen, waitFor } from "@testing-library/react";
import { composeStories } from "@storybook/react";
import { debug } from "vitest-preview";

import * as stories from "./Products.stories";
import { describe, it, expect } from "vitest";
import { InMemoryProductGateway } from "../../infrastructure/adapters/in-memory-product-gateway";
import {
  DependenciesContextProvider,
  LayeringDemoDependencies,
} from "../../context/context";

const { Default } = composeStories(stories);

describe("Assessment Component", () => {
  const inMemoryProductGateway = new InMemoryProductGateway();

  const layeringDemoDependencies: LayeringDemoDependencies = {
    PRODUCT_GATEWAY: inMemoryProductGateway,
  };

  it("should render the products component", async () => {
    inMemoryProductGateway.feedWithApiProducts([
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
    ]);
    render(
      <DependenciesContextProvider dependencies={layeringDemoDependencies}>
        <Default />
      </DependenciesContextProvider>
    );

    const productsContainer = screen.getByTestId("container");
    expect(productsContainer).toBeInTheDocument();

    await waitFor(() => {
      const productCards = screen.getAllByTestId("product_card");
      expect(productCards).toHaveLength(2);
    });

    debug();
  });
});
