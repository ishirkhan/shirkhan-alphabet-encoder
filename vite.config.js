const path = require("path");
const { defineConfig } = require("vite");

module.exports = defineConfig({
  build: {
    minify: true,
    outDir: "dist",
    sourcemap: false,
    lib: {
      name: "shirkhan-alphabet-encoder",
      entry: path.resolve(__dirname, "src/encoder/index.ts"),
      fileName: (format) => `shirkhan-alphabet-encoder.${format}.js`,
    },
    rollupOptions: {},
  },
});
