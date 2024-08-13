import {ReactElement} from "react";
import {IonButton, IonIcon, IonItem, IonPage} from "@ionic/react";
import {cloudDone, cloudDownload, cloudOffline, cloudUpload} from "ionicons/icons";

export function SandboxPage(): ReactElement {
    return <IonPage>
        <IonItem>
            <IonButton fill="clear" shape="round" color="success">
                <IonIcon color="success" icon={cloudDone}></IonIcon>
            </IonButton>
            <IonButton fill="clear" shape="round" color="warning">
                <IonIcon color="warning" icon={cloudDownload}></IonIcon>
            </IonButton>
            <IonButton fill="outline" shape="round" color="warning">
                <IonIcon slot="icon-only" color="warning" icon={cloudUpload}></IonIcon>
            </IonButton>
            <IonButton fill="outline" shape="round" color="danger">
                <IonIcon color="danger" icon={cloudOffline}></IonIcon>
            </IonButton>
        </IonItem>
    </IonPage>;
}