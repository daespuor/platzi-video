import React,{Component} from 'react';
import Media from '../components/media';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
class MediaContainer extends Component{
    render(){
        return (
            <Media {...this.props.data} handleClick={this.props.handleClick}/>
        )
    }
}
function mapStateToProps(state,props){
    return {
        data:state.data.entities.media[props.id]
    }
}
MediaContainer.propTypes={
    id:PropTypes.string.isRequired
}
export default connect(mapStateToProps)(MediaContainer)