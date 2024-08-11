import {ReactElement} from "react";
import {useUser} from "../utilities/database.ts";
import {LoginButton} from "./LoginButton.tsx";

export function UserDisplay(): ReactElement {
    const user = useUser();

    return user ? <div>
            <p>Current User: {user.name}</p>
            {user.isLoggedIn ? undefined : <LoginButton/>}
        </div> :
        <LoginButton/>;
}