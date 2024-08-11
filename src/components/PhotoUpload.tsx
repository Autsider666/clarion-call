import {ChangeEvent, ReactElement} from "react";
import {useObjectURL} from "../hooks/useObjectURL.ts";
import {asyncFunction} from "../utilities/asyncFunction.ts";
import {database} from "../utilities/database.ts";

export function PhotoUpload(): ReactElement {
    const {objectURL, setObject} = useObjectURL();

    const upload = asyncFunction(async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
        const files = event.target.files;
        if (!files || files.length === 0) {
            return;
        }

        const file = files[0];

        setObject(file);

        await database.photos.add({
            file,
            createdAt: Date.now().toString(),
        });
    });

    return <div>
        Upload?
        <input type="file" accept="image/x-png,image/jpeg,image/gif"
               onChange={event => upload(event)}/>
        {objectURL ? <img src={objectURL} alt="Photo!"/> : undefined}
    </div>;
}