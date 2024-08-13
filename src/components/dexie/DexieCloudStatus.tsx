import {ReactElement} from "react";
import {database} from "../../utilities/database.ts";
import {useObservable} from "dexie-react-hooks";
import {Color} from "@ionic/core";
import {IonButton, IonIcon, IonSpinner} from "@ionic/react";
import {cloud, cloudDownload, cloudOffline} from "ionicons/icons";

export function DexieCloudStatus(): ReactElement | undefined {
    const {phase, status} = useObservable(database.cloud.syncState) ?? {};
    const {isLoggedIn} = useObservable(database.cloud.currentUser) ?? {};
    let fill: 'outline' | 'clear' = 'outline';

    let color: Color = "secondary";
    let iconElement: ReactElement;
    if (!phase || phase === 'initial' || !status || status === 'connecting') {
        iconElement = <IonSpinner class="loading" name="dots"></IonSpinner>;
        fill = 'clear';
    } else {
        color = "success";
        let icon: string = cloud;
        if (!isLoggedIn) {
            color = "warning";
            icon = cloudOffline;
        } else {
            switch (phase) {
                case "in-sync":
                    break;
                // case "initial":
                case "not-in-sync":
                case "pushing":
                    color = "primary";
                    icon = cloudDownload;
                    break;
                case "pulling":
                    color = "primary";
                    icon = cloudDownload;
                    break;
                case 'offline':
                case 'error':
                    color = "danger";
            }
        }

        iconElement = <IonIcon color={color} icon={icon}></IonIcon>;
    }


    // console.log({
    //     phase, status, isLoggedIn
    // });

    return <>
        {/*{phase} - {status} - {isLoggedIn ? 'Yes' : 'No'}*/}
        <IonButton fill={fill} shape="round" color={color}>
            {iconElement}
        </IonButton>
        {/*<IonButton fill="clear" shape="round" color="success">*/}
        {/*    <IonIcon color="success" icon={cloudDone}></IonIcon>*/}
        {/*</IonButton>*/}
        {/*<IonButton fill="clear" shape="round" color="warning">*/}
        {/*    <IonIcon color="warning" icon={cloudDownload}></IonIcon>*/}
        {/*</IonButton>*/}
        {/*<IonButton fill="outline" shape="round" color="warning">*/}
        {/*    <IonIcon slot="icon-only" color="warning" icon={cloudUpload}></IonIcon>*/}
        {/*</IonButton>*/}
        {/*<IonButton fill="outline" shape="round" color="danger">*/}
        {/*    <IonIcon color="danger" icon={cloudOffline}></IonIcon>*/}
        {/*</IonButton>*/}
    </>;
}