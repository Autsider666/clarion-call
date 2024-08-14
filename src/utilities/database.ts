import Dexie, {EntityTable} from "dexie";
import dexieCloud, {UserLogin} from "dexie-cloud-addon";
import {useObservable} from "dexie-react-hooks";

export type Photo = {
    id: string,
    name?: string,
    file: string,
    createdAt: number,
}

const databaseUrl = import.meta.env.VITE_DEXIE_CLOUD_URL;
if (typeof databaseUrl !== "string") {
    throw new Error(`Missing VITE_DEXIE_CLOUD_URL environment variable.`);
}

export const database = new Dexie('ClarionCall', {addons: [dexieCloud]}) as Dexie & {
    photos: EntityTable<Photo, 'id'>
};

database.version(1).stores({
    photos: '@id, createdAt, file'
});

database.cloud.configure({
    databaseUrl,
});

export const clearPhotos = async () => await database.photos.clear();

// await clearPhotos();

export const useUser = (): UserLogin | undefined => {
    return useObservable(database.cloud.currentUser);
};

database.photos.hook('creating', (key, object) => {
    if (key === undefined) {
        return;
    }

    const file = object.file;

    console.log('new from cloud:', key, object, file);

    if (!file) {
        return;
    }

    console.log(0);
    if (Notification.permission === 'denied') {
        return;
    }

    console.log(1);

    const options: NotificationOptions & {
        image?: string,
        actions?: { action: string, title: string, icon?: string }[]
    } = {
        tag: object.id,
        image: file,
    };
    if (Notification.permission !== 'granted') {
        Notification.requestPermission().then((permission) => {
            console.log(permission);
            // If the user accepts, let's create a notification
            if (permission === "granted") {
                const notification = new Notification("New reminder", options);
                console.log(notification);
            }
        }).catch(error => console.error(error));
    } else {
        const notification = new Notification("New reminder", options);
        console.log(notification);
    }
});