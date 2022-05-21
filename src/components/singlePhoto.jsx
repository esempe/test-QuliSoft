import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import img from'../assets/backSvg.svg'

const SinglePhoto = ( props) => {
    const {photoID} = useParams()
/*    let photoItem = props.state.find(item => item.id === photoID)
    console.log(photoItem)*/

    return (
        <div className="appWrapperSingle">
            <div className='titleWrapper'>
                <NavLink to={'/'}><img className="titleWrapperImg" src={img}/></NavLink>
                <div className="title">title</div>
            </div>
            <div className="singleImg">
                <img src="" alt=""/>
            </div>
        </div>
    );
};

export default SinglePhoto;