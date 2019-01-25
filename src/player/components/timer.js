import React, {Component} from 'react'
import './timer.css'

const Timer = (props)=>(
    <div className="Timer">
        {props.currentTime}/{props.duration}
    </div>
)

export default Timer;