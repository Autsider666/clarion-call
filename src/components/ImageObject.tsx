import {ReactElement} from "react";
import {useObjectURL} from "../hooks/useObjectURL.ts";

type ImageProps = {
    alt: string,
    object: File | Blob,
}

export function ImageObject({object, alt}: ImageProps): ReactElement {
    const {objectURL} = useObjectURL(object);

    return <img src={objectURL} alt={alt} style={{maxWidth: '100%', maxHeight: 300, width: 'auto', height: 'auto'}}/>;
}