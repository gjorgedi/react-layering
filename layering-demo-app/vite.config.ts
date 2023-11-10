import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import progress from "vite-plugin-progress";
import tsconfigPaths from "vite-tsconfig-paths";
import path from "path";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), progress(), tsconfigPaths()],
  build: {
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  resolve: {
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser", //fix production build
      pages: path.resolve(__dirname, "./src/pages"),
      components: path.resolve(__dirname, "./src/components"),
      utils: path.resolve(__dirname, "./src/utils"),
      hooks: path.resolve(__dirname, "./src/hooks"),
      assets: path.resolve(__dirname, "./src/assets"),
      interfaces: path.resolve(__dirname, "./src/interfaces"),
      layout: path.resolve(__dirname, "./src/layout"),
      mocks: path.resolve(__dirname, "./src/__mocks__"),
    },
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.ts",
    css: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov"],
      exclude: [
        "node_modules",
        "src/{App,main}.tsx",
        "src/assets/**",
        "src/routes/**",
        "src/services/**",
      ],
    },
  },
});
