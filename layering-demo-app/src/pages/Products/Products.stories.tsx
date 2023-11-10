import { Meta, StoryFn } from "@storybook/react";
import { Products } from "./Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  DependenciesContextProvider,
  LayeringDemoDependencies,
} from "../../context/context";
import { InMemoryProductGateway } from "../../infrastructure/adapters/in-memory-product-gateway";

export default {
  title: "Products",
  component: Products,
} as Meta<typeof Products>;

// eslint-disable-next-line storybook/prefer-pascal-case
export const inMemoryProductGateway = new InMemoryProductGateway();
const layeringDemoDependencies: LayeringDemoDependencies = {
  PRODUCT_GATEWAY: inMemoryProductGateway,
};

const queryClient = new QueryClient();

const Template: StoryFn<typeof Products> = () => (
  <DependenciesContextProvider dependencies={layeringDemoDependencies}>
    <QueryClientProvider client={queryClient}>
      <Products />
    </QueryClientProvider>
  </DependenciesContextProvider>
);

export const Default = Template.bind({});
