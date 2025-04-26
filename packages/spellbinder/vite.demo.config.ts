import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export default defineConfig({
    plugins: [
        react(),
        svgr(),
        cssInjectedByJsPlugin(),
    ],
    build: {
        outDir: 'dist-demo',
        emptyOutDir: true,
    },
    base: '/Spellbinder/',
})
