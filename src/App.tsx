import {
    IonApp,
    IonIcon,
    IonLabel,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from "@ionic/react-router";
import {imagesOutline, personOutline} from 'ionicons/icons';
import {routes} from "./config/routes.tsx";
import {Redirect, Route} from "react-router-dom";

// https://ionicframework.com/docs/developing/config
setupIonicReact();

export default function App() {
    return <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    {routes.map(({type, exact, ...config}, index) => {
                        if (type === "route") {
                            return <Route key={index} exact={exact !== false} {...config}/>;
                        } else {
                            return <Redirect key={index} exact={exact !== false} {...config}/>;
                        }
                    })}
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="gallery" href="/gallery">
                        <IonIcon icon={imagesOutline}/>
                        <IonLabel>Images</IonLabel>
                    </IonTabButton>
                    <IonTabButton tab="account" href="/account">
                        <IonIcon icon={personOutline}/>
                        <IonLabel>Account</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>;
}
