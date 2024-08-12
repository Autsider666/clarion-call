import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {ReactElement} from "react";
import {PhotoUpload} from "../components/PhotoUpload.tsx";
import {UserDisplay} from "../components/UserDisplay.tsx";

export function AccountPage(): ReactElement {
    return <IonPage>
        <IonHeader>
            <IonToolbar>
                <IonTitle>Clarion Call</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <UserDisplay/>
            <PhotoUpload/>
        </IonContent>
    </IonPage>;
}