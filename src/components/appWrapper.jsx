import React from 'react';
import PhotoItem from "./photoItem";

const AppWrapper = () => {

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

    let photoItemList = state.map(photo =>
        <PhotoItem
            title={photo.title}
            creator={photo.creator}
            imgSrc={photo.imgSrc}
            id={photo.id}
        />);


    return (
        <div className="appWrapper">
            <div className='titleWrapper'>
                <div className="title">Unsplash Gallery</div>
            </div>
            <div className="photoList">
                {photoItemList}
            </div>
        </div>
    );
};

export default AppWrapper;