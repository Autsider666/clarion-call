import {IonCol, IonGrid, IonImg, IonRow} from "@ionic/react";
import {useLiveQuery} from "dexie-react-hooks";
import {ReactElement} from "react";
import {database} from "../utilities/database.ts";

export function PhotoList(): ReactElement {
    const photos = useLiveQuery(() => database.photos.toArray()) ?? [];

    return <IonGrid>
        <IonRow>
            {photos.map(({id, file}) => <IonCol key={id}>
                <IonImg src={file}/>
                {/*<Base64Image image={file} alt={name}/>*/}
                {/*<span>{name}</span>*/}
            </IonCol>)}
        </IonRow>
    </IonGrid>;
}