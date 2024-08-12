import {IonCol, IonGrid, IonRow} from "@ionic/react";
import {useLiveQuery} from "dexie-react-hooks";
import {ReactElement} from "react";
import {database} from "../utilities/database.ts";
import {Base64Image} from "./Base64Image.tsx";

export function PhotoList(): ReactElement {
    const photos = useLiveQuery(() => database.photos.toArray()) ?? [];

    return <IonGrid>
        <IonRow>
            {photos.map(({id, name, file}) => <IonCol key={id}>
                <Base64Image image={file} alt={name}/>
                <span>{name}</span>
            </IonCol>)}
        </IonRow>
    </IonGrid>;
}