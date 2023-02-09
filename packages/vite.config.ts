/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import dts from "vite-plugin-dts";
import { resolve } from "path";
import DefineOptions from "unplugin-vue-define-options/vite";

export default defineConfig({
  build: {
    target: "modules",
    outDir: "es",
    minify: true,
    cssCodeSplit: false,
    rollupOptions: {
      external: ["vue"],
      input: ["./index.ts"],
      output: [
        {
          format: "es",
          entryFileNames: "[name].full.min.js",
          preserveModules: false,
          exports: "named",
          dir: resolve(__dirname, "./hview-ui/dist"),
        },
        {
          format: "es",
          entryFileNames: "[name].mjs",
          preserveModules: true,
          exports: "named",
          dir: resolve(__dirname, "./hview-ui/es"),
        },
        {
          format: "cjs",
          entryFileNames: "[name].js",
          preserveModules: true,
          exports: "named",
          dir: resolve(__dirname, "./hview-ui/lib"),
        },
      ],
    },
    lib: {
      entry: "./index.ts",
      name: "hview",
    },
  },
  plugins: [
    vue(),
    DefineOptions(),
    dts({
      entryRoot: "src",
      outputDir: [
        resolve(__dirname, "./hview-ui/es/src"),
        resolve(__dirname, "./hview-ui/lib/src"),
      ],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./components"),
    },
  },
});
