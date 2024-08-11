/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_DEXIE_CLOUD_URL?: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}