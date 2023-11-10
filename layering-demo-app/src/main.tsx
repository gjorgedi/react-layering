import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  DependenciesContextProvider,
  LayeringDemoDependencies,
} from "./context/context.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProductGateway } from "./infrastructure/adapters/product-gateway.ts";

const queryClient = new QueryClient();

queryClient.setDefaultOptions({
  queries: {
    refetchOnWindowFocus: false,
  },
});

const layeringDemoDependencies: LayeringDemoDependencies = {
  PRODUCT_GATEWAY: new ProductGateway(),
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <DependenciesContextProvider dependencies={layeringDemoDependencies}>
        <App />
      </DependenciesContextProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
