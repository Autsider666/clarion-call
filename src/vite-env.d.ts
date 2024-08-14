/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />
/// <reference types="vite-plugin-pwa/react" />
interface ImportMetaEnv {
    readonly VITE_DEXIE_CLOUD_URL?: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}