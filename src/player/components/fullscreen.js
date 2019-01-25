import React from 'react';
import FullScreen from '../../icons/components/fullscreen';
import './full-screen.css';

const FullScreenButton=(props)=>{
   return (
        <div className="FullScreen" onClick={props.handleClick}>
            <FullScreen
                size={25}
                color={'white'}
            />
        </div>
   )
}

export default FullScreenButton;