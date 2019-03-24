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
                    props.isLoading?
                    <p>Buscando tus videos favoritos...</p>
                    :
                    props.search.map((item)=>{
                        return <Media {...item.toJS()} key={item.get('id')} handleClick={props.handleOpenModal}/> 
                    })
                }
                {
                    categories.map((item)=>{
                        return <Category {...item.toJS()} key={item.get('id')} handleOpenModal={props.handleOpenModal} />
                    })
                }
            </div>
        )
    
}

Categories.propTypes={
    data:PropTypes.object.isRequired
}

export default Categories
