import React, {Component} from 'react'
import SearchForm from '../components/search'
import {connect} from 'react-redux';
import * as actions from '../../actions/'
import {bindActionCreators} from 'redux';
class Search extends Component{
    handleSubmit= (el) =>{
        el.preventDefault()
        this.props.actions.searchAsyncVideo(this.input.value)
    }
    handleInputChange=(event)=>{
        this.setState({
            value:event.target.value.replace(' ',' ')
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
                setInput={this.setInput}
             />
        )
    }
}
function mapDispatchToProps(dispatch){
    return {
        actions:bindActionCreators(actions,dispatch)
    }
}
export default connect(null,mapDispatchToProps)(Search);