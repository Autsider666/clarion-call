import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {ReactElement} from "react";
import {PhotoList} from "../components/PhotoList.tsx";
import {PhotoUpload} from "../components/PhotoUpload.tsx";
import {UserDisplay} from "../components/UserDisplay.tsx";

export function HomePage(): ReactElement {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Clarion Call</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <UserDisplay/>
            <PhotoUpload/>
            <PhotoList/>
        </IonContent>
    </IonPage>;
}