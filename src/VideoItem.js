import React from 'react'
// import VideoList from './VideoList'
import './VideoItem.css'
export default function VideoItem({ video, onVideoSelect }) {
  return (
    // <div className="ui list">
    <div onClick={() => onVideoSelect(video)} className="ui list">
      <div className="video-item item">
        <img
          className="ui image"
          src={video.snippet.thumbnails.high.url}
          alt=""
        />
        <div className="content">
          <div className="header">{video.snippet.title}</div>
        </div>
      </div>
    </div>
  )
}
