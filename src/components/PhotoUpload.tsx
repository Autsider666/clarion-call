import {ChangeEvent, ReactElement} from "react";
import {asyncFunction} from "../utilities/asyncFunction.ts";
import {database} from "../utilities/database.ts";


const addToDatabase = asyncFunction(async (name: string, file: string) => {
    await database.photos.add({
        name,
        file,
        createdAt: Date.now(),
    });
});

function uploadFile(file: File): void {
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
    const upload = (event: ChangeEvent<HTMLInputElement>): void => {
        for (const file of event.target.files ?? []) {
            uploadFile(file);
        }
    };

    return <div>
        <input type="file" accept="image/x-png,image/jpeg,image/gif"
               onChange={event => upload(event)}/>
    </div>;
}