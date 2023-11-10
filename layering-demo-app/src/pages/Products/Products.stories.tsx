import { Meta, StoryFn } from "@storybook/react";
import { Products } from "./Products";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default {
  title: "Products",
  component: Products,
} as Meta<typeof Products>;

const queryClient = new QueryClient();

const Template: StoryFn<typeof Products> = () => (
  <QueryClientProvider client={queryClient}>
    <Products />
  </QueryClientProvider>
);

export const Default = Template.bind({});
