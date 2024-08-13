import {ReactElement} from "react";
import {PhotoGallery} from "../components/gallery/PhotoGallery.tsx";
import {PhotoUpload} from "../components/PhotoUpload.tsx";
import {Page} from "../components/ionic/Page.tsx";

export function GalleryPage(): ReactElement {
    return <Page>
        <PhotoUpload/>
        <PhotoGallery/>
    </Page>;
}