import {ReactElement} from "react";
import {IonContent, IonHeader, IonPage} from "@ionic/react";
import {Toolbar} from "./Toolbar.tsx";

type PageProps = {
    children: ReactElement | ReactElement[],
    title?: string,
}

export function Page({children, title = 'Clarion Call'}: PageProps): ReactElement {
    return <IonPage>
        <IonHeader>
            <Toolbar title={title}/>
        </IonHeader>
        <IonContent>
            {children}
        </IonContent>
    </IonPage>;
}