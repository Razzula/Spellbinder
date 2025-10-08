import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';
import dts from 'vite-plugin-dts';
import path from 'path';

export default defineConfig({
    plugins: [
        svgr(),
        react(),
        cssInjectedByJsPlugin(),
        dts({
            entryRoot: 'src',
            outputDir: 'dist',
        }),
    ],
    build: {
        outDir: 'dist',
        lib: {
            entry: path.resolve(__dirname, 'src/index.tsx'),
            name: 'Spellbinder',
            fileName: (format) => `spellbinder.${format}.js`,
            formats: ['es', 'cjs']
        },
        rollupOptions: {
            external: ['react', 'react-dom']
        }
    },
})
