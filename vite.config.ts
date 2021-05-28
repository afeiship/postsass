import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';

// https://vitejs.dev/config/
export default defineConfig({
  root: 'public',
  build: {
    outDir: '../docs',
    emptyOutDir: true
  },
  plugins: [reactRefresh()]
});
