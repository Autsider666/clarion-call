/// <reference types="vite/client" /> // https://vite-pwa-org.netlify.app/guide/change-log#new-vite-build
/// <reference lib="webworker" />
import {cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute} from 'workbox-precaching';
import {NavigationRoute, registerRoute} from 'workbox-routing';
import '../node_modules/dexie-cloud-addon/dist/modern/service-worker';

// @ts-expect-error __WB_MANIFEST DOES EXIST
// eslint-disable-next-line @typescript-eslint/no-unsafe-argument
precacheAndRoute(self.__WB_MANIFEST);

cleanupOutdatedCaches();

let allowlist: undefined | RegExp[];
if (import.meta.env.DEV) {
    allowlist = [/^\/$/];
}

// to allow work offline
registerRoute(new NavigationRoute(
    createHandlerBoundToURL('index.html'),
    {allowlist}
));

console.log('Service worker works!');