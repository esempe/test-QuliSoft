import React from 'react';
import {NavLink} from "react-router-dom";
import img from'../assets/backSvg.svg'

const SinglePhoto = () => {
    return (
        <div className="appWrapperSingle">
            <div className='titleWrapper'>
                <NavLink to={'/'}><img className="titleWrapperImg" src={img}/></NavLink>
                <div className="title">Img Title</div>
            </div>
            <div className="singleImg">
                <img src="https://cdn.fishki.net/upload/post/201601/13/1810009/14_123.jpg" alt=""/>
            </div>
        </div>
    );
};

export default SinglePhoto;