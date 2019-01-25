import React from 'react'
import oops from '../../../images/oops.jpg'
import './regularError.css'

function RegularError(props){
    return (
        <div className="RegularError">
            <img src={oops} width={700} />
        </div>
    )
}

export default RegularError;