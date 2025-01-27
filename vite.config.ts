import { defineConfig } from 'vite';
import image from '@rollup/plugin-image';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react(), image()],
  assetsInclude: ['**/*.jpg', '**/*.png', '**/*.svg'],
});
