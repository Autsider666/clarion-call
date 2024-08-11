import {createAppleSplashScreens, defineConfig, minimal2023Preset as preset} from '@vite-pwa/assets-generator/config'
import {backgroundColor} from "./src/styles/palette";

export default defineConfig({
    headLinkOptions: {
        preset: '2023'
    },
    preset: {
        ...preset,
        appleSplashScreens: createAppleSplashScreens({
                padding: 0.3,
                resizeOptions: {background: backgroundColor, fit: 'contain'},
                // by default, dark splash screens are exluded
                // darkResizeOptions: { background: 'black' },
                linkMediaOptions: {
                    log: true,
                    addMediaScreen: true,
                    basePath: '/',
                    xhtml: false
                },
                png: {
                    compressionLevel: 9,
                    quality: 60
                },
                name: (landscape, size, dark) => {
                    return `apple-splash-${landscape ? 'landscape' : 'portrait'}-${dark !== undefined ? (dark ? 'dark-' : 'light-') : ''}${size.width}x${size.height}.png`
                }
            },
            ['iPhone 12']
        )
    },
    // https://game-icons.net/1x1/lorc/hunting-horn.html
    images: ['public/favicon.svg']
})