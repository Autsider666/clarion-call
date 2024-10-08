import {IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonImg, IonRow} from "@ionic/react";
import {useLiveQuery} from "dexie-react-hooks";
import {ReactElement, useLayoutEffect, useRef, useState} from "react";
import {useScroll} from "../../hooks/useScroll.ts";
import {database} from "../../utilities/database.ts";

export function PhotoGallery(): ReactElement {
    const gridRef = useRef<HTMLIonGridElement>(null);
    const {scrollToId} = useScroll();
    const photos = useLiveQuery(() => database.photos.toArray()) ?? [];
    const [selectedItem, setSelectedItem] = useState<string | undefined>();

    const handleToggle = (id: string | undefined): void => {
        if (id === selectedItem) {
            id = undefined;
        }

        setSelectedItem(id);
    };

    useLayoutEffect(() => {
        if (!selectedItem) {
            return;
        }

        scrollToId(selectedItem);
    }, [scrollToId, selectedItem]);

    return <IonGrid ref={gridRef}>
        <IonRow>
            {photos.map(({id, file, createdAt}) => <IonCol
                key={id}
                id={id}
                sizeXs="12"
                sizeSm={selectedItem === id ? "12" : "6"}
                sizeMd={selectedItem === id ? "12" : "4"}
                sizeLg={selectedItem === id ? "6" : "4"}
                sizeXl={selectedItem === id ? "6" : "4"}
            >
                <IonCard style={{height: '100%'}}>
                    <IonImg src={file} onClick={() => handleToggle(id)} onTouchStart={() => handleToggle(id)}/>
                    <IonCardHeader>{id}</IonCardHeader>
                    <IonCardSubtitle>{(new Date(createdAt)).toLocaleString()}</IonCardSubtitle>
                </IonCard>
            </IonCol>)}
        </IonRow>
    </IonGrid>;
}