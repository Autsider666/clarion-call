import Dexie, {EntityTable} from "dexie";

export type Photo = {
    id: number,
    createdAt: string,
    file: Blob,
}

export const database = new Dexie('ClarionCall') as Dexie & {
    photos: EntityTable<Photo, 'id'>
};

database.version(1).stores({
    photos: '++id, createdAt, file'
});