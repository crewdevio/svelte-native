import { defineConfig, splitVendorChunkPlugin } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { fileURLToPath } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [splitVendorChunkPlugin(), svelte()],
  resolve: {
    alias: [
      {
        find: "@",
        replacement: fileURLToPath(new URL("./src", import.meta.url)),
      },
      {
        find: "$lib",
        replacement: fileURLToPath(new URL("./src/lib", import.meta.url)),
      },
      {
        find: "$components",
        replacement: fileURLToPath(
          new URL("./src/lib/components/ui", import.meta.url)
        ),
      },
      {
        find: "$assets",
        replacement: fileURLToPath(new URL("./src/assets", import.meta.url)),
      },
      {
        find: "$utils",
        replacement: fileURLToPath(
          new URL("./src/lib/utils.ts", import.meta.url)
        ),
      },
    ],
  },
});
