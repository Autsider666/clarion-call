import Dexie, {EntityTable} from "dexie";
import dexieCloud, {UserLogin} from "dexie-cloud-addon";
import {useObservable} from "dexie-react-hooks";

export type Photo = {
    id: number,
    createdAt: string,
    file: Blob,
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

export const enableSync = () => {
    database.cloud.configure({
        databaseUrl,
        // requireAuth: true,
        // tryUseServiceWorker: true, // https://dexie.org/cloud/docs/DexieCloudOptions
        // disableEagerSync: true,
    });
};

enableSync();

export const useUser = (): UserLogin | undefined => {
    return useObservable(database.cloud.currentUser);
};