import {getRegistration} from "../serviceWorker/getRegistration.ts";

export type Options = NotificationOptions & {
    image?: string,
    actions?: { action: string, title: string, icon?: string }[]
}

export async function sendNotification(title: string, options: Options = {}): Promise<void> {
    await requestNotificationPermission(); //TODO put in better place

    if (Notification.permission === 'denied') {
        return;
    }

    const registration = await getRegistration();
    // Check that the service worker registration exists.
    if (!registration) {
        console.warn('No service worker registration');
        return;
    }

    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
            type: 'notification',
            title,
            options,
        });
    } else {
        console.log('No service worker controller found. Try a soft reload.');
    }

    // if (Notification.permission !== 'granted') {
    //     Notification.requestPermission().then((permission) => {
    //         console.log(permission);
    //         // If the user accepts, let's create a notification
    //         if (permission === "granted") {
    //             const notification = new Notification("New reminder", options);
    //             console.log(notification);
    //         }
    //     }).catch(error => console.error(error));
    // } else {
    //     const notification = new Notification("New reminder", options);
    //     console.log(notification);
    // }
}

export async function requestNotificationPermission(): Promise<void> {
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
        throw new Error("Notification permission not granted");
    }
}