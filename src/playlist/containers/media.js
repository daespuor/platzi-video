import React,{Component} from 'react';
import Media from '../components/media';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
class MediaContainer extends Component{
    render(){
        return (
            <Media {...this.props.data.toJS()} handleClick={this.props.handleClick}/>
        )
    }
}
function mapStateToProps(state,props){
    return {
        data:state.get('data').get('entities').get('media').get(props.id)
    }
}
MediaContainer.propTypes={
    id:PropTypes.string.isRequired
}
export default connect(mapStateToProps)(MediaContainer)