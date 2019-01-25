import React  from 'react'
import PlayList from './playlist'
import PropTypes from 'prop-types'
import './category.css'
function Category(props){
    
      
        return (
            <div className='Category'>
                <div className='Category-Description'>
                    {props.description}
                </div>
                <div className='Category-Title'>
                    {props.title}
                </div>
                <PlayList data={props.playlist} handleOpenModal={props.handleOpenModal}/>
            </div>
        )
    
}
Category.propTypes={
    description:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    playlist:PropTypes.array.isRequired
}

export default Category