/// <reference types="vite/client" /> // https://vite-pwa-org.netlify.app/guide/change-log#new-vite-build
/// <reference lib="webworker" />
import {cleanupOutdatedCaches, createHandlerBoundToURL, precacheAndRoute} from 'workbox-precaching';
import {NavigationRoute, registerRoute} from 'workbox-routing';
import 'dexie-cloud-addon/service-worker';
import {Options} from "../utilities/notification.ts";

declare let self: ServiceWorkerGlobalScope;

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


type NotificationMessage = {
    type: string,
    title: string,
    options: Options,
}
// @ts-expect-error NotificationMessage is valid, but ide is being a baby
self.addEventListener('message', ({data}: MessageEvent<NotificationMessage>): void => {
    if (data['type'] !== 'notification') {
        return;
    }

    console.log(data);
    // const notification = event.data;
    self.registration.showNotification(
        data.title,
        data.options
    ).catch((error) => {
        console.log(error);
    });
});

// database.open().then(() => {
//     database.cloud.events.syncComplete.subscribe(() => {
//         self.registration.showNotification('Test').catch((error) => {
//             console.log(error);
//         });
//     });
// });


// console.log(database.cloud.isServiceWorkerDB);
//
// database.open().then((db: Dexie) => {
//     db.photos.hook('reading', () => {
//         console.log('reading');
//     });
//     db.photos.hook('creating', () => {
//         console.log('creating');
//     });
//     // console.log('open', db, db.photos);
//     // setInterval(() => {
//     //     console.log('ping');
//     // }, 1000);
//     // db.cloud.syncState.subscribe(state => {
//     //     console.log(`TEST2: Sync phase is now ${state.phase}`, state);
//     // });
//     //
//     // db.cloud.events.syncComplete.subscribe(() => {
//     //     console.log('TEST1: Sync complete, refreshing cycles');
//     // });
// }).catch(function (err) {
//     console.error('Failed to open db: ', err);
// });
//
//
// database.cloud.syncState.subscribe(state => {
//     console.log(`TEST2: Sync phase is now ${state.phase}`, state);
// });
//
// database.cloud.events.syncComplete.subscribe(() => {
//     console.log('TEST1: Sync complete, refreshing cycles');
//     // self.registration.showNotification(
//     //     'Sync complete!', {}
//     // ).catch((error) => {
//     //     console.log(error);
//     // });
// });
//
// database.photos.hook('reading', () => {
//     console.log('reading');
// });
//
// database.photos.hook('creating', (key, object) => {
//     console.log(1);
//     if (key === undefined) {
//         return;
//     }
//
//     const file = object.file;
//     if (!file) {
//         return;
//     }
//
//     self.registration.showNotification(
//         'New reminder!', {}
//     ).catch((error) => {
//         console.log(error);
//     });
// });

console.log('Service worker works!');