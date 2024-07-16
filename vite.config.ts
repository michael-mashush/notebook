import {
  defineConfig
} from 'vitest/config';

import react from '@vitejs/plugin-react-swc';
import svgr  from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [
    react(),
    svgr()
  ],

  base: '/notebook',

  test: {
    setupFiles:  './vitest.setup.ts',
    environment: 'jsdom',
    globals:     true,
    css:         true
  },

  build: {
    outDir:       'dist',
    assetsDir:    'assets',
    minify:       'esbuild',
    cssMinify:    'esbuild',
    cssCodeSplit: true
  },

  resolve: {
    alias: {
      app:      '/src/app',
      pages:    '/src/pages',
      widgets:  '/src/widgets',
      features: '/src/features',
      entities: '/src/entities',
      shared:   '/src/shared',
      tests:    '/tests'
    }
  }

});