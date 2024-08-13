import {ReactElement} from "react";
import {PhotoUpload} from "../components/PhotoUpload.tsx";
import {UserDisplay} from "../components/UserDisplay.tsx";
import {Page} from "../components/ionic/Page.tsx";

export function AccountPage(): ReactElement {
    return <Page>
        <UserDisplay/>
        <PhotoUpload/>
    </Page>;
}