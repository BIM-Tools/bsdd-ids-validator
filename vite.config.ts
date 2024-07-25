import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.js',
      name: 'bsdd-ids-validator',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
  },
});