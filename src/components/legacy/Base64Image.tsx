import {ReactElement} from "react";

type ImageProps = {
    alt: string,
    image: string,
}

export function Base64Image({image, alt}: ImageProps): ReactElement {
    return <img src={image} alt={alt} style={{maxWidth: '100%', maxHeight: 300, width: 'auto', height: 'auto'}}/>;
}