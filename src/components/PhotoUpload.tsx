import {IonFab, IonFabButton, IonIcon} from "@ionic/react";
import {camera} from 'ionicons/icons';
import {ChangeEvent, ReactElement, useRef} from "react";
import {asyncFunction} from "../utilities/asyncFunction.ts";
import {database} from "../utilities/database.ts";

const addToDatabase = asyncFunction(async (name: string, file: string) => {
    await database.photos.add({
        name,
        file,
        createdAt: Date.now(),
    });
});

function handleFileUpload(file: File): void {
    const fileReader = new FileReader();
    fileReader.onload = () => {
        const result = fileReader.result;
        if (!result) {
            throw new Error(`Failed to read file "${file.name}"`);
        }

        if (result instanceof ArrayBuffer) {
            console.error('FileReader returned an ArrayBuffer:', result);
            return;
        }

        addToDatabase(file.name, result);
    };
    fileReader.readAsDataURL(file);
}

export function PhotoUpload(): ReactElement {
    const inputRef = useRef<HTMLInputElement | null>(null);

    const uploadFile = (event: ChangeEvent<HTMLInputElement>): void => {
        for (const file of event.target.files ?? []) {
            handleFileUpload(file);
        }
    };

    return <IonFab slot="fixed" vertical="bottom" horizontal="center">
        <input
            ref={inputRef}
            type="file"
            accept="image/x-png,image/jpeg,image/gif"
            style={{display: "none"}}
            onChange={uploadFile}
        />
        <IonFabButton onClick={()=>inputRef.current?.click()}>
            <IonIcon icon={camera}></IonIcon>
        </IonFabButton>
    </IonFab>;
}