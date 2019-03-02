import React,{Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../playlist/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import ErrorHanlder from '../../errors/containers/error'
import VideoPlayer from '../../player/containers/video-player'
import {connect} from 'react-redux'
class Home extends Component{
    state={
        modalVisible:false,
        media:{}
    }
    handleOpenModal= (media)=>{
        this.setState({
            modalVisible:true,
            media
        })
    }
    handleCloseModal= (event)=> {
        this.setState({
            modalVisible:false
        })
    }
    render(){
        return (
            <ErrorHanlder>
                <HomeLayout>
                    <Related/>
                    <Categories data={this.props.categories} 
                    handleOpenModal={this.handleOpenModal}
                    search={this.props.search}/>
                    {
                        this.state.modalVisible &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer autoplay {...this.state.media}/>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </ErrorHanlder>
        )
    }
}
function mapStateToProps(state,props){
    const categories= state.data.categories.map((id)=>{
        return state.data.entities.categories[id];
    });
    return {
        categories,
        search: state.search
    }
}
export default connect(mapStateToProps)(Home);