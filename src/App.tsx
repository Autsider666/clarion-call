import {IonApp, IonRouterOutlet, setupIonicReact} from '@ionic/react';
import {IonReactRouter} from "@ionic/react-router";
import {Route} from 'react-router-dom';
import {HomePage} from "./pages/HomePage.tsx";

setupIonicReact();

export default function App() {
    return <IonApp>
        <IonReactRouter>
            <IonRouterOutlet>
                <Route path="/" exact component={HomePage}/>
                {/*<Route path="/about" exact component={About}/>*/}
            </IonRouterOutlet>
        </IonReactRouter>
    </IonApp>;
}
