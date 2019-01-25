import React from 'react'
import './video-player.controls.css'
const VideoPlayerControl=(props)=>(
    <div className="VideoPlayerControls">
        {props.children}
    </div>
)

export default VideoPlayerControl;