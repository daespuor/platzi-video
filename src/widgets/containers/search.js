import React, {Component} from 'react'
import SearchForm from '../components/search'
import {connect} from 'react-redux';
import {searchVideo} from '../../actions/'
class Search extends Component{
    state={
        value:"Luis Fonsi"
    }
    handleSubmit= (el) =>{
        el.preventDefault()
        console.log(this.input.value,'Submit')
        this.props.dispatch(searchVideo(this.input.value))
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

export default connect()(Search);