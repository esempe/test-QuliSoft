import './App.css';
import React from 'react';
import PhotoItem from "./components/photoItem";
import {Route,Routes} from "react-router-dom";
import AppWrapper from "./components/appWrapper";
import SinglePhoto from "./components/singlePhoto";

//720×1280
function App() {
    let state = [
        {
            id: 1, title: 'string 1 ', creator: 'torin', imgSrc: 'path'
        },
        {
            id: 2, title: 'string 2 ', creator: 'odin', imgSrc: 'path'
        },
        {
            id: 3, title: 'string 3 ', creator: 'loki', imgSrc: 'path'
        },
    ]
    return (
        <div className="globalWrapper">

            <Routes>
                <Route path="/" element={<AppWrapper/>}/>
                <Route path="/:photoID" element={<SinglePhoto
                    state ={state}
                />}/>
            </Routes>
        </div>
    );
}

export default App;
