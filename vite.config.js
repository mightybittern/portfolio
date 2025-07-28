import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  base: '/portfolio/',
  plugins: [
    svgr(), // For handling SVG files
  ],
});