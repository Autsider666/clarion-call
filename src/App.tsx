import './App.css';
import {PhotoList} from "./components/PhotoList.tsx";
import {PhotoUpload} from "./components/PhotoUpload.tsx";
import {UserDisplay} from "./components/UserDisplay.tsx";
import {database} from "./utilities/database.ts";

function App() {
    console.log(database.cloud.syncState.getValue());
    return (
        <>
            <div style={{padding: 10}}><UserDisplay/></div>
            <div style={{padding: 10}}><PhotoUpload/></div>
            <div style={{padding: 10}}><PhotoList/></div>
        </>
    );
}

export default App;
