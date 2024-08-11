import react from '@vitejs/plugin-react'
import {defineConfig} from 'vite'
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            strategies: 'generateSW',
            registerType: 'autoUpdate',
            includeAssets: [],
            manifest: {
                name: 'Clarion Call',
                short_name: 'ClarionCall',
                description: 'My Awesome App description',
                // https://coolors.co/palette/233d4d-fe7f2d
                theme_color: '#FE7F2D',
                background_color: '#233D4D',
                icons: [
                    {
                        src: 'pwa-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'pwa-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            },
            devOptions: {
                enabled: true
            },
        })
    ],
})
