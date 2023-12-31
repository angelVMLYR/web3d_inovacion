import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: 'https://angelVMLYR.github.io/web3d_inovacion',
  root: './',
  build: {
      outDir: 'dist',
  },
  publicDir: 'public'
})
