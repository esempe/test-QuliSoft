import React from 'react';
import {NavLink} from "react-router-dom";

const PhotoItem = () => {
    return (
        <NavLink to={'/1'} className="photoItem">
            <div className="photoTitle">
                Photo From NY
            </div>
            <div className="imgWrapper">
                <img src="#" alt="null"/>
                <div className="photoCreator">
                    Albert Einstein
                </div>
            </div>
        </NavLink>
    );
};

export default PhotoItem;