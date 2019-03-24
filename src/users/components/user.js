import React from 'react';
import './user.css';
import PropTypes from 'prop-types';
export default function User(props){
    return (
        <div className="User">
            <div className="User-Icon">
                <img src={props.icon}/>
            </div>
            <div className="User-Name">
                {props.name}
            </div>
        </div>
    )
}

User.propTypes={
    icon:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired
}