import './App.css';
import React from 'react';
import PhotoItem from "./components/photoItem";
import {Route,Routes} from "react-router-dom";
import AppWrapper from "./components/appWrapper";
import SinglePhoto from "./components/singlePhoto";

//720×1280
function App() {
    return (
        <div className="globalWrapper">
            <Routes>
                <Route path="/" element={<AppWrapper/>}/>
                <Route path="/1" element={<SinglePhoto/>}/>
            </Routes>
        </div>
    );
}

export default App;
