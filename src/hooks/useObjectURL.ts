import {useEffect, useState} from "react";

type Object = File | Blob | undefined;
type ObjectURL = string | undefined;

// const getUrl = (startimage:File) => {
//     var canvas = document.createElement('canvas');
//     canvas.width = startimage.width;
//     canvas.height = startimage.height;
//     var ctx = canvas.getContext('2d');
//     ctx.drawImage(startimage, 0, 0, startimage.width, startimage.height);
//     var data = canvas.toDataURL("image/jpeg");
// }

export function useObjectURL(initialObject?: Object): {
    objectURL: ObjectURL,
    object: Object,
    setObject: (object: Object) => void
} {
    const [objectURL, setObjectURL] = useState<ObjectURL>();

    const [object, setObject] = useState<Object>(initialObject);

    useEffect(() => {
        if (!object) {
            return;
        }

        const objectURL = URL.createObjectURL(object);
        setObjectURL(objectURL);

        return () => {
            URL.revokeObjectURL(objectURL);
            setObjectURL(undefined);
        };
    }, [object]);

    return {
        objectURL,
        object,
        setObject
    };
}