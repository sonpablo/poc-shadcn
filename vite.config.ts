import { defineConfig } from "vite";
import { resolve } from "path";
import { peerDependencies, dependencies } from "./package.json";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    // react plugin -> parameter js6 runtime. This enable to make bundle a bit smaller
    react({
      jsxRuntime: "classic",
    }),
    // dts is for building declaration
    dts({
      include: ["src/**/*"],
    }),
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__dirname, "src/index.ts"),

      formats: ["es", "cjs"],
      fileName: (ext) => `index.${ext}.js`,
    },
    // don't include the deps and peerDeps in the build. So, deps and peerDeps are not part of the final library.
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      // preserveModules -> important for tree shaking. Combined with sideEffect field from package.json make the lib tree chakeable.
      output: { preserveModules: true, exports: "named" },
    },

    target: "esnext",
    sourcemap: true,
  },
});
