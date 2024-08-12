import {ReactElement} from "react";
import {useObjectURL} from "../../hooks/useObjectURL.ts";

type ImageProps = {
    alt: string,
    image: File | Blob,
}

export function ObjectImage({image, alt}: ImageProps): ReactElement {
    const {objectURL} = useObjectURL(image);

    return <img src={objectURL} alt={alt} style={{maxWidth: '100%', maxHeight: 300, width: 'auto', height: 'auto'}}/>;
}