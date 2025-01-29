import swc from "unplugin-swc";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  test: {
    include: ['**/*.e2e-spec.ts','**/*.unit.spec.ts','**/*.integration.spec.ts'],
    globals: true,
    environment: 'node',
    alias: {
      "@": "../src", 
    },
    root: "./",
  },
  resolve: {
    alias: {
      "@": "../src", 
    },
  },
  plugins: [swc.vite(), tsconfigPaths()],
});
