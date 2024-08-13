import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import {defineCustomElements} from '@ionic/pwa-elements/loader';

import App from './App.tsx';
/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

import '@ionic/react/css/palettes/dark.system.css';

import './styles/index.css';

await defineCustomElements(window);

// if ('serviceWorker' in navigator) {
//     const updateSW = registerSW({
//         onOfflineReady() {
//             console.log('Offline ready!');
//         },
//         onNeedRefresh() {
//             if (confirm("New content available. Reload?")) {
//                 void (async () => await updateSW(true))();
//             }
//         },
//         onRegisteredSW(swUrl, r) {
//             console.log(`Refresh Checker: service worker at: ${swUrl}`, r);
//         }
//     });
// }

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App/>
    </StrictMode>,
);
