import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    build: {
        outDir: 'dist',
        emptyOutDir: true,
        rollupOptions: {
            input: {
                'popup/index': path.resolve(__dirname, 'popup/index.html'),
            },
            output: {
                entryFileNames: () => 'popup/main.js',
                assetFileNames: (assetInfo) =>
                    assetInfo.name === 'index.html' ? 'popup/index.html' : '[name].[ext]'
            }
        }
    }
})
