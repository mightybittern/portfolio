import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Ensure you have this if using React
import svgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(), // Include this if you're using React
    svgr(), // Add the SVGR plugin
  ],
});