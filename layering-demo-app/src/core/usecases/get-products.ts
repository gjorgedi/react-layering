import { ProductGatewayPort } from "../gateways/products-gateway.port";

export const getProducts = async (gateway: ProductGatewayPort) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const products = await gateway.getAllProducts();
    return products;
  } catch (error) {
    // TODO: Do something with the error
    // Example: Save in state prop so we can show in UI etc.
    throw error;
  }
};
