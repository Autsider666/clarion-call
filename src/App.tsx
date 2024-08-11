import './App.css';
import {PhotoList} from "./components/PhotoList.tsx";
import {PhotoUpload} from "./components/PhotoUpload.tsx";

function App() {


    return (
        <>
            <PhotoUpload/>
            <PhotoList/>
        </>
    );
}

export default App;
