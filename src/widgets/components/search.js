import React from 'react'
import './search.css'

const SearchForm = (props)=>(
    <form className="Search" onSubmit={props.handleSubmit}>
        <input
            type="text"
            placeholder="Busca tu video favorito"
            className="Search-input"
            value={props.value}
            onChange={props.handleChange}
            ref={props.setInput}
        />
        <div className="Search-Icon">
            <i className="fas fa-search"></i>
        </div>
    </form>
)

export default SearchForm;