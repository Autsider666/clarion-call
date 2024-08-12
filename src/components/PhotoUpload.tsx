import {IonFab, IonFabButton, IonIcon} from "@ionic/react";
import {camera} from 'ionicons/icons';
import {ReactElement} from "react";
import {usePhotoGallery} from "../hooks/usePhotoGallery.ts";
import {asyncFunction} from "../utilities/asyncFunction.ts";
import {database} from "../utilities/database.ts";

const addToDatabase = asyncFunction(async (file: string, name?: string) => {
    await database.photos.add({
        name,
        file,
        createdAt: Date.now(),
    });
});

export function PhotoUpload(): ReactElement {
    const {takePhotos} = usePhotoGallery();

    return <IonFab slot="fixed" vertical="bottom" horizontal="center">
        <IonFabButton onClick={() => takePhotos(addToDatabase)}>
            <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
    </IonFab>;
}