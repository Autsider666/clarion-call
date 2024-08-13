import {ReactElement} from "react";
import {IonButtons, IonTitle, IonToolbar} from "@ionic/react";
import {DexieCloudStatus} from "../dexie/DexieCloudStatus.tsx";

type ToolbarProps = {
    title: string,
}

export function Toolbar({title}: ToolbarProps): ReactElement {
    return <IonToolbar>
        <IonTitle>{title}</IonTitle>
        <IonButtons slot="end">
            <DexieCloudStatus/>
        </IonButtons>
    </IonToolbar>;
}