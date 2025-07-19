import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

// https://vite.dev/config/
export default defineConfig(({ command, mode }) => {
  const isLibBuild = mode === 'lib';
  
  if (isLibBuild) {
    // Plugin build configuration
    return {
      plugins: [
        vue({
          template: {
            compilerOptions: {
              isCustomElement: (tag) => tag === 'webview'
            }
          }
        }),
      ],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
      build: {
        lib: {
          entry: fileURLToPath(new URL("./src/main.ts", import.meta.url)),
          name: "{{APP_CLASS_NAME}}",
          fileName: "index",
          formats: ["es"]
        },
        rollupOptions: {
          external: [],
          output: {
            entryFileNames: 'index.js',
            format: 'es'
          }
        }
      }
    };
  } else {
    // Static web build configuration
    return {
      base: './', // Use relative paths for file:// protocol
      plugins: [
        vue({
          template: {
            compilerOptions: {
              isCustomElement: (tag) => tag === 'webview'
            }
          }
        }),
        vueDevTools(),
      ],
      resolve: {
        alias: {
          "@": fileURLToPath(new URL("./src", import.meta.url)),
        },
      },
      build: {
        outDir: 'web-dist',
        rollupOptions: {
          external: [],
          output: {
            entryFileNames: 'assets/[name].js',
            chunkFileNames: 'assets/[name].js',
            assetFileNames: 'assets/[name].[ext]'
          }
        }
      }
    };
  }
});