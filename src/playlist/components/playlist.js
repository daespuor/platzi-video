'use strict'

import React  from 'react'
import Media from './media'
import PropTypes from 'prop-types'
import './playlist.css'

function Playlist(props) {
        const playlist= props.data
        return (
            <div className="Playlist">
                {
                    playlist.map((item)=>{
                        return <Media {...item} key={item.id} handleClick={props.handleOpenModal}/>
                    })
                }
            </div>
        )
}
Playlist.Proptypes={
    data:PropTypes.array.isRequired
}
export default Playlist 