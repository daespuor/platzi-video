import React, {Component} from 'react'
import RegularError from '../components/regularError'
class ErrorHandler extends Component{
    state={
        errorOccur:false
    }
    componentDidCatch(error,info){
        this.setState({
            errorOccur:true
        })
    }
    render(){
        if (this.state.errorOccur){
            return (
                <RegularError/>
            )
        }else{
             return (<div>{this.props.children}</div>)
        }       
        
    }
}

export default ErrorHandler;