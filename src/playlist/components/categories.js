import React from 'react'
import Category from './category'
import PropTypes from 'prop-types'
import './categories.css'
import Search from '../../widgets/containers/search'
import Media from './media';
function Categories(props){
    
        const categories= props.data
        return (
            
            <div className='Categories'>
                <Search />
                {
                    props.search.map((item)=>{
                        return <Media {...item} key={item.id}/> 
                    })
                }
                {
                    categories.map((item)=>{
                        return <Category {...item} key={item.id} handleOpenModal={props.handleOpenModal} />
                    })
                }
            </div>
        )
    
}

Categories.propTypes={
    data:PropTypes.array.isRequired
}

export default Categories
