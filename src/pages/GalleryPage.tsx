import {IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from "@ionic/react";
import {ReactElement} from "react";
import {PhotoGallery} from "../components/gallery/PhotoGallery.tsx";
import {PhotoUpload} from "../components/PhotoUpload.tsx";

export function GalleryPage(): ReactElement {
    return <IonPage>
        <IonHeader>
            <IonToolbar >
                <IonTitle>Clarion Call</IonTitle>
            </IonToolbar>
        </IonHeader>
        <IonContent>
            <PhotoUpload/>
            <PhotoGallery/>
        </IonContent>
    </IonPage>;
}