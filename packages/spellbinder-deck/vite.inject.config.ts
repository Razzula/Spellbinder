import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        emptyOutDir: false, // don't wipe popup build
        lib: {
            entry: path.resolve(__dirname, 'inject/index.tsx'),
            name: 'InjectedUI',
            formats: ['iife'],
            fileName: () => 'inject/main.js'
        }
    },
    define: {
        'process.env.NODE_ENV': JSON.stringify('production'),
        'process.env': '{}'
    },
})
