'use strict'

import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import './media.css'
class Media extends PureComponent {

    handleClick = () => {
        /*const media={
            title:this.props.title,
            src:this.props.src
        }*/

        this.props.handleClick(this.props.id)
    }
    render() {
        let { title, cover } = this.props
        return (
            <div className="Media" onClick={this.handleClick}>
                <div className='Media-cover'>
                    <img className='Media-image' src={cover}
                        alt=""
                        width={260}
                        height={160} />
                </div>
                <h3 className='Media-title'>{title}</h3>
                <p className='Media-author'>{this.props.author}</p>
            </div>
        )
    }
}
Media.propTypes = {
    author: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['image', 'video'])
}
export default Media
