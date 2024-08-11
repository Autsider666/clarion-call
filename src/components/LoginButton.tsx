import {ReactElement, useState} from "react";
import {database} from "../utilities/database.ts";

export function LoginButton(): ReactElement {
    const [interacted, setInteracted] = useState(false);
    const [error, setError] = useState<unknown>();
    const handleClick = () => {
        console.log('Logging in!');
        database.cloud.login().then(() => {
            setInteracted(true);
            console.log('Click!');
        }).catch(error => {
            setError(error);
        });
    };

    return <div>
        <button onTouchStart={handleClick} onClick={handleClick}>Login: {interacted ? 'Clicked' : 'Not yet'}</button>
        {error ? <pre>{JSON.stringify(error, null, 4)}</pre> : undefined}
    </div>;
}