import React from 'react';
import './VideoItem.css';

const VideoItem = ({ video }) => {
    const { title, thumbnails } = video.snippet;
    return (
        <div className="item video-item">
            <img  className="ui image" src={thumbnails.medium.url} />
            <div className="content">
                <div className="header">{title}</div>
            </div>
        </div>
    )
};

export default VideoItem;