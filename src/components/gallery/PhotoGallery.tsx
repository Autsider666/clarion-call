import {IonCard, IonCardHeader, IonCardSubtitle, IonCol, IonGrid, IonImg, IonRow} from "@ionic/react";
import {useLiveQuery} from "dexie-react-hooks";
import {ReactElement, useEffect, useRef, useState} from "react";
import {useScroll} from "../../hooks/useScroll.ts";
import {database} from "../../utilities/database.ts";

export function PhotoGallery(): ReactElement {
    const gridRef = useRef<HTMLIonGridElement>(null);
    const {scrollToId} = useScroll();
    const photos = useLiveQuery(() => database.photos.toArray()) ?? [];
    const [selectedItem, setSelectedItem] = useState<number | undefined>();

    const handleToggle = (id: number | undefined): void => {
        if (id === selectedItem) {
            id = undefined;
        }

        setSelectedItem(id);
    };

    useEffect(() => {
        if (!selectedItem) {
            return;
        }

        scrollToId(String(selectedItem), 1);
    }, [scrollToId, selectedItem]);

    return <IonGrid ref={gridRef}>
        <IonRow>
            {photos.map(({id, file, createdAt}) => <IonCol
                key={id}
                id={String(id)}
                sizeXs="12"
                sizeSm={selectedItem === id ? "12" : "6"}
                sizeMd={selectedItem === id ? "12" : "4"}
                sizeLg={selectedItem === id ? "6" : "4"}
                sizeXl={selectedItem === id ? "6" : "4"}
            >
                <IonCard>
                    <IonImg src={file} onClick={() => handleToggle(id)} onTouchStart={() => handleToggle(id)}/>
                    <IonCardHeader>{id}</IonCardHeader>
                    <IonCardSubtitle>{(new Date(createdAt)).toLocaleString()}</IonCardSubtitle>
                </IonCard>
            </IonCol>)}
        </IonRow>
    </IonGrid>;
}