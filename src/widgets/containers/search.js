import React, {Component} from 'react'
import SearchForm from '../components/search'

class Search extends Component{
    state={
        value:"Luis Fonsi"
    }
    handleSubmit= (el) =>{
        el.preventDefault()
        console.log(this.input.value,'Submit')
    }
    handleInputChange=(event)=>{
        this.setState({
            value:event.target.value.replace(' ','-')
        })
    }
    setInput=(el)=>{
        this.input=el
    }
    render(){
        return (
            <SearchForm
                handleSubmit={this.handleSubmit}
                handleChange={this.handleInputChange}
                value={this.state.value}
                setInput={this.setInput}
             />
        )
    }
}

export default Search;