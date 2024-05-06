import { defineConfig } from "cypress";
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },

  component: {
    devServer: {
      framework: "vue",
      bundler: "vite",
      viteConfig: {
        plugins: [
          vue({
              template: {
                  compilerOptions: {
                      isCustomElement: tag => tag.includes('-'),
                  },
              },
          }),
      ],
      }
    },
  },
});
