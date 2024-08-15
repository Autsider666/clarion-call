import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import {VitePWA} from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            strategies: 'injectManifest',
            srcDir: './src/serviceWorker',
            filename: 'service-worker.ts',
            registerType: 'autoUpdate',
            workbox: {
                globPatterns: ["**/*"],
            },
            includeAssets: [
                "**/*",
            ],
            manifest: {
                name: 'Clarion Call',
                // eslint-disable-next-line camelcase
                short_name: 'ClarionCall',
                description: 'My Awesome App description',
                // eslint-disable-next-line camelcase
                theme_color: '#FE7F2D', // https://coolors.co/palette/233d4d-fe7f2d
                // eslint-disable-next-line camelcase
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
                enabled: true,
                type: 'module',
                navigateFallback: 'index.html',
                // navigateFallbackAllowlist: [/^index.html$/]
            },
        })
    ],
});
