import {useEffect, useState} from "react";

type Object = File | Blob | undefined;
type ObjectURL = string | undefined;

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

        console.log(object);

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