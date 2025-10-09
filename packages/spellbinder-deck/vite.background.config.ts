import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    outDir: 'dist',
    emptyOutDir: false, // don’t delete popup/inject outputs
    lib: {
      entry: path.resolve(__dirname, 'background/background.ts'),
      formats: ['iife'], // safest cross-browser for MV3 SW
      name: 'SpellbinderBG', // required by Vite for iife
      fileName: () => 'background.js'
    },
    rollupOptions: {
      // ensure no code-splitting; SW must be a single file
      output: { inlineDynamicImports: true }
    },
    target: 'es2020' // fine for MV3 service workers
  }
});
