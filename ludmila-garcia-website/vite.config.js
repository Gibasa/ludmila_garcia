import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"https://gibasa.github.io/ludmila_garcia/",
  esbuild: {
    loader: 'jsx',
  },
  assetsInclude:['**/*.png', '**/*.jpg', '**/*.svg']
})