import { defineConfig } from "vite";
import { resolve } from "path";
import { peerDependencies, dependencies } from "./package.json";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    // React plugin with jsx runtime set to "classic" for smaller bundle size
    react({
      jsxRuntime: "classic",
    }),
    // Plugin for building declaration files (.d.ts)
    dts({
      include: ["src/**/*"],
    }),
  ],
  build: {
    // Do not copy the public directory
    copyPublicDir: false,
    // Library configuration
    lib: {
      // Entry point of the library
      entry: resolve(__dirname, "src/index.ts"),
      // Output formats: ES module and CommonJS
      formats: ["es", "cjs"],
      // Output file name pattern
      fileName: (ext) => `index.${ext}.js`,
    },
    // Exclude dependencies from the build, ensuring they are not part of the final library
    rollupOptions: {
      external: [
        // External dependencies: peerDependencies and dependencies from package.json
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      // Preserve modules for tree shaking, exports named for better compatibility
      output: { preserveModules: true, exports: "named" },
    },

    target: "esnext",
    // Generate source maps for debugging
    sourcemap: true,
  },
});
