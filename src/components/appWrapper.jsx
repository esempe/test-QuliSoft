import React from 'react';
import PhotoItem from "./photoItem";

const AppWrapper = () => {
    return (
        <div className="appWrapper">
            <div className='titleWrapper'>
                <div className="title">Unsplash Gallery</div>
            </div>
            <div className="photoList">
                <PhotoItem
                    title={'hz'}
                    creator={'hz'}
                    imgSrc={'/path/hz'}
                />
            </div>
        </div>
    );
};

export default AppWrapper;