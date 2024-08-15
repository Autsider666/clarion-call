import Dexie, {EntityTable} from "dexie";
import dexieCloud, {UserLogin} from "dexie-cloud-addon";
import {useObservable} from "dexie-react-hooks";
import {sendNotification} from "./notification.ts";

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
    tryUseServiceWorker: true,
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
    if (!file) {
        return;
    }

    void (async () => await sendNotification('New photo', {image: file}))();
});