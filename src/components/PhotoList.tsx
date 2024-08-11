import {useLiveQuery} from "dexie-react-hooks";
import {ReactElement} from "react";
import {database} from "../utilities/database.ts";
import {ImageObject} from "./ImageObject.tsx";

export function PhotoList(): ReactElement {
    const photos = useLiveQuery(() => database.photos.toArray()) ?? [];

    return <ul>
        {photos.map(({id, createdAt, file}) => <li key={id}><ImageObject object={file} alt={`${id} - ${createdAt}`}/></li>)}
    </ul>;
}