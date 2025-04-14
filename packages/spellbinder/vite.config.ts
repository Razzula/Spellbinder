import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import path from 'path'
import dts from 'vite-plugin-dts';

const isDev = process.argv.some((arg) => arg.includes('dev') || arg.includes('serve'))

export default defineConfig({
    root: isDev ? path.resolve(__dirname, 'dev') : undefined,
    plugins: [
        react(),
        svgr(),
        cssInjectedByJsPlugin(),
        dts({
            entryRoot: 'src',
            outputDir: 'dist',
        }),
    ],
    build: !isDev
        ? {
            lib: {
                entry: path.resolve(__dirname, 'src/index.tsx'),
                name: 'Spellbinder',
                fileName: (format) => `spellbinder.${format}.js`,
                formats: ['es', 'cjs']
            },
            rollupOptions: {
                external: ['react', 'react-dom']
            }
        }
        : undefined
})
