import React from 'react';
import {NavLink} from "react-router-dom";

const PhotoItem = ({title,creator,imgSrc,id}) => {

    return (
        <NavLink to={`/${id}`} className="photoItem">
            <div className="photoTitle">
                {title}
            </div>
            <div className="imgWrapper">
                <img src="imgSrc" alt="null"/>
                <div className="photoCreator">
                    {creator}
                </div>
            </div>
        </NavLink>
    );
};

export default PhotoItem;