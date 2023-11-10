import { ProductGatewayPort } from "../gateways/products-gateway.port";

export const getProductDetails = async (
  gateway: ProductGatewayPort,
  id: string
) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const productDetails = await gateway.getProductByID(id);
    return productDetails;
  } catch (error) {
    throw error;
  }
};
