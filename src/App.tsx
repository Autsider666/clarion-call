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
import {Redirect, Route} from 'react-router-dom';
import {AccountPage} from "./pages/AccountPage.tsx";
import {GalleryPage} from "./pages/GalleryPage.tsx";

// https://ionicframework.com/docs/developing/config
setupIonicReact();

export default function App() {
    return <IonApp>
        <IonReactRouter>
            <IonTabs>
                <IonRouterOutlet>
                    <Redirect exact path="/" to="/gallery"/>
                    <Route path="/gallery" exact component={GalleryPage}/>
                    <Route path="/account" exact component={AccountPage}/>
                </IonRouterOutlet>
                <IonTabBar slot="bottom">
                    <IonTabButton tab="gallery" href="/gallery">
                        <IonIcon icon={imagesOutline}/>
                        <IonLabel>Images</IonLabel>
                    </IonTabButton>

                    {/*<IonTabButton tab="radio" href="/radio">*/}
                    {/*    /!*<IonIcon icon={radio} />*!/*/}
                    {/*    <IonLabel>Radio</IonLabel>*/}
                    {/*</IonTabButton>*/}

                    {/*<IonTabButton tab="library" href="/library">*/}
                    {/*    /!*<IonIcon icon={library} />*!/*/}
                    {/*    <IonLabel>Library</IonLabel>*/}
                    {/*</IonTabButton>*/}

                    <IonTabButton tab="account" href="/account">
                        <IonIcon icon={personOutline}/>
                        <IonLabel>Account</IonLabel>
                    </IonTabButton>
                </IonTabBar>
            </IonTabs>
        </IonReactRouter>
    </IonApp>;
}
