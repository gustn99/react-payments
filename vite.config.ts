import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import { defineConfig } from 'vite';
import { BASE_URL } from './src/constants/baseUrl.ts';

// https://vite.dev/config/
export default defineConfig({
  base: `${BASE_URL}/`,
  plugins: [react()],
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
});
