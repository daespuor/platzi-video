import React from 'react'
import Category from './category'
import PropTypes from 'prop-types'
import './categories.css'
import Search from '../../widgets/containers/search'
import Media from './media';
import User from '../../users/components/user';
import AddMedia from './addMedia';
function Categories(props){
    
        const categories= props.data
        return (
            
            <div className='Categories'>
                <div className="Categories-Tools">
                    <Search />
                    <div className="Categories-Tools-User" >
                        <User {...props.user.toJS()}/>
                    </div>
                </div>
                <AddMedia 
                    categories={categories}
                    handleSubmit={props.handleFormSubmit}
                    handleShow={props.handleShowForm}
                    showForm={props.showForm}
                    isLoading={props.isLoadingForm}/>
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
    data:PropTypes.object.isRequired,
    user:PropTypes.object.isRequired,
    handleFormSubmit:PropTypes.func.isRequired,
    handleShowForm:PropTypes.func.isRequired,
    showForm:PropTypes.bool.isRequired,
    isLoadingForm:PropTypes.bool.isRequired
}

export default Categories
