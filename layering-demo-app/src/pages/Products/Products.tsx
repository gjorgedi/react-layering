import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../../core/usecases/get-products";
import { useDependencies } from "../../hooks/useDependencies";

export const Products = () => {
  const { PRODUCT_GATEWAY } = useDependencies();

  const { data, isFetched, isFetching } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const products = await getProducts(PRODUCT_GATEWAY);
      return products;
    },
  });

  return (
    <div data-testid="container">
      <h1>Products</h1>
      {isFetching && <h1>Fetching!!!</h1>}

      {isFetched &&
        data &&
        data.map((product) => (
          <div data-testid="product_card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
          </div>
        ))}
    </div>
  );
};
