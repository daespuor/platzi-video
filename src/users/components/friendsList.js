import React from 'react';
import './friendList.css';
import User from './user';
import PropTypes from 'prop-types';
export default function FriendList(props){
    return (
        <div className="FriendList">
            <p className="FriendList-Title">Playlist de amigos</p>
            {
                props.data.map((item)=>{
                    return <User {...item.toJS()} key={item.get('id')}/>
                })
            }
        </div>
    )
}
FriendList.propTypes={
    data:PropTypes.object.isRequired
}
