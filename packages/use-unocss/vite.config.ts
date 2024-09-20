import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],

  // theme: {
  //   fontSize: {
  //     micro: ["0.625rem", "1rem"],
  //     xs: ["0.75rem", "1rem"],
  //     sm: ["0.875rem", "1.125rem"],
  //     base: ["1rem", "1.5rem"],
  //     md: ["1.125rem", "1.5rem"],
  //     lg: ["1.25rem", "1.5rem"],
  //     xl: ["1.375rem", "2rem"],
  //   },
  // },
})
