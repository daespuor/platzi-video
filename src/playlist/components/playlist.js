'use strict'

import React  from 'react'
import MediaContainer from '../containers/media'
import PropTypes from 'prop-types'
import './playlist.css'

function Playlist(props) {
        const playlist= props.data
        return (
            <div className="Playlist">
                {
                    playlist.map((idMedia)=>{
                        return <MediaContainer id={idMedia} key={idMedia} handleClick={props.handleOpenModal}/>
                    })
                }
            </div>
        )
}
Playlist.Proptypes={
    data:PropTypes.array.isRequired
}
export default Playlist 