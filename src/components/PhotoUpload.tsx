import {ChangeEvent, ReactElement} from "react";
import {asyncFunction} from "../utilities/asyncFunction.ts";
import {database} from "../utilities/database.ts";

export function PhotoUpload(): ReactElement {
    const upload = asyncFunction(async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        for (const file of event.target.files ?? []) {
            await database.photos.add({
                file,
                createdAt: Date.now().toString(),
            });
        }
    });

    return <div>
        <input type="file" accept="image/x-png,image/jpeg,image/gif"
               onChange={event => upload(event)}/>
    </div>;
}