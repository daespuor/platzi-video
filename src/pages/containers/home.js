import React,{Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../playlist/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import ErrorHanlder from '../../errors/containers/error'
import VideoPlayer from '../../player/containers/video-player'
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
                    <Categories data={this.props.data.categories} handleOpenModal={this.handleOpenModal}/>
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

export default Home;