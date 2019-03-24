import React from 'react'
import Mute from '../../icons/components/mute'
import Volume from '../../icons/components/volume'
import './volume.css'

const VolumeButton=(props)=>{
    return (
        <div className="Volume" >
            {   
                props.volume<=0?
                <button onClick={props.handleVolumeToggle} > 
                    <Mute
                        color={'white'}
                        size={25}
                        
                    />
                </button>
                :
                <button onClick={props.handleVolumeToggle} >
                    <Volume
                        color={'white'}
                        size={25}
                    />
                </button>
            }
            <div className="Volume-range">
                <input 
                    type="range"
                    min={0}
                    max={1}
                    step={.05}
                    ref={props.setRef}
                    onChange={props.handleVolume}/>
            </div>
        </div>
    )
}

export default VolumeButton;