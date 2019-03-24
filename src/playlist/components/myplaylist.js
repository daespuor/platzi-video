import React from 'react';
import PropTypes from 'prop-types';
import './myplaylist.css';
export default function MyPlaylist(props) {
    return (
        <div className='MyPlayList'>
            <p className="MyPlayList-Title">Mi Playlist</p>
            <div className="MyPlayList-List">
                {
                    props.data.map((item,index) => {
                        return <div className="MyPlayList-Element" key={item.get('id')}>
                                    <div className="MyPlayList-Element-Index">{index+1}</div>
                                    <div>{item.get('title')}</div>
                                </div>
                    })
                }
            </div>
        </div>
    )
}

MyPlaylist.propTypes = {
    data: PropTypes.object.isRequired
}