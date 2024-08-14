import {
    IonApp,
    IonButton,
    IonIcon,
    IonRouterOutlet,
    IonTabBar,
    IonTabButton,
    IonTabs,
    setupIonicReact
} from '@ionic/react';
import {IonReactRouter} from "@ionic/react-router";
import {camera, images, person} from 'ionicons/icons';
import {routes} from "./config/routes.tsx";
import {Redirect, Route} from "react-router-dom";
import './utilities/notification.ts';

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
                            // @ts-expect-error It's all valid
                            return <Redirect key={index} exact={exact !== false} {...config}/>;
                        }
                    })}
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="gallery" href="/gallery">
                        <IonIcon icon={images}/>
                        {/*<IonLabel>Images</IonLabel>*/}
                    </IonTabButton>
                    <IonTabButton onClick={() => console.log('click!')}>
                        <IonButton size="large" fill="solid" shape="round" color="primary">
                            <IonIcon color="" size="large" icon={camera}></IonIcon>
                        </IonButton>
                    </IonTabButton>
                    <IonTabButton tab="account" href="/account">
                        <IonIcon icon={person}/>
                        {/*<IonLabel>Account</IonLabel>*/}
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>;
}
