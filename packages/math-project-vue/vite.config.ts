import vue from '@vitejs/plugin-vue'
import path from 'node:path';
import UnoCSS from 'unocss/vite'
import { defineConfig } from 'vite'
import VueI18n from "@intlify/unplugin-vue-i18n/vite" ;

export default defineConfig({
  plugins: [
    vue(),
    UnoCSS({
      // 默认在根目录，也可手动指定配置文件
      configFile: './uno.config.ts',
      theme: {
        fontSize: {
          micro: ['0.625rem', '1rem'],
          xs: ['0.75rem', '1rem'],
          sm: ['0.875rem', '1.125rem'],
          base: ['1rem', '1.5rem'],
          md: ['1.125rem', '1.5rem'],
          lg: ['1.25rem', '1.5rem'],
          xl: ['1.375rem', '2rem'],
        },
      },
    }),
    VueI18n({
      runtimeOnly: true,
      compositionOnly: true,
      fullInstall: true,
      include: [path.resolve(__dirname, "src/locales/**")],
    }),
  ],
  resolve: {
    alias: { '@': '/src' },
  },
  server: {
    open: true,
    proxy: {
      '/api': {
        target: 'https://www.zhihu.com',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
})

