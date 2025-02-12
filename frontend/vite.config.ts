import { defineConfig } from 'vite'
import TailwindCss from '@tailwindcss/vite'
import Vue from '@vitejs/plugin-vue'
export default defineConfig({
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    TailwindCss(),
  ]
})
