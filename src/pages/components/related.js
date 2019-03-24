import React from 'react'
import './related.css'
import logo from '../../../images/logo.png'
import MyPlaylist from '../../playlist/components/myplaylist';
import FriendsList from '../../users/components/friendsList';
import PropTypes from 'prop-types';
function Related(props){
    return (
        <div className="Related">
            <img src={logo} width={250}/>
            <MyPlaylist data={props.myplaylist}/>
            <FriendsList data={props.friendsList}/>
        </div>
    )
}

Related.propTypes={
    myplaylist:PropTypes.object.isRequired,
    friendsList:PropTypes.object.isRequired
}

export default Related;