import {useLiveQuery} from "dexie-react-hooks";
import {ReactElement} from "react";
import {database} from "../utilities/database.ts";
import {Base64Image} from "./Base64Image.tsx";

export function PhotoList(): ReactElement {
    const photos = useLiveQuery(() => database.photos.toArray()) ?? [];

    return <ul>
        {photos.map(({id, name, file}) => <li key={id}>
            <Base64Image image={file} alt={name}/>
            <span>{name}</span>
        </li>)}
    </ul>;
}