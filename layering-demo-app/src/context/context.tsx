import { createContext } from "react";
import { ProductGatewayPort } from "../core/gateways/products-gateway.port";

export interface LayeringDemoDependencies {
  PRODUCT_GATEWAY: ProductGatewayPort;
}

export const DependenciesContext = createContext<LayeringDemoDependencies>(
  {} as LayeringDemoDependencies
);

export const DependenciesContextProvider = ({
  children,
  dependencies,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
  dependencies: LayeringDemoDependencies;
}) => {
  const contextValue: LayeringDemoDependencies = { ...dependencies };

  return (
    <DependenciesContext.Provider value={contextValue}>
      {children}
    </DependenciesContext.Provider>
  );
};
