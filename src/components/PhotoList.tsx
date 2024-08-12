import {IonCol, IonGrid, IonImg, IonRow} from "@ionic/react";
import {useLiveQuery} from "dexie-react-hooks";
import {ReactElement} from "react";
import {database} from "../utilities/database.ts";

export function PhotoList(): ReactElement {
    const photos = useLiveQuery(() => database.photos.toArray()) ?? [];

    return <IonGrid>
        <IonRow>
            {photos.map(({id, file}) => <IonCol
                key={id}
                sizeXs="12"
                sizeSm="12"
                sizeMd="6"
                sizeLg="4"
                sizeXl="3"
            >
                <IonImg src={file}/>
            </IonCol>)}
        </IonRow>
    </IonGrid>;
}