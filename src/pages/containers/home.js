import React,{Component} from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../playlist/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import ErrorHanlder from '../../errors/containers/error'
import VideoPlayer from '../../player/containers/video-player'
import {connect} from 'react-redux'
import {List as list} from 'immutable'
import {openModal, closeModal} from '../../actions/'
class Home extends Component{
    
    handleOpenModal= (mediaId)=>{
        this.props.dispatch(openModal(mediaId))
    }
    handleCloseModal= (event)=> {
        this.props.dispatch(closeModal())
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
                        this.props.modal.get('visible') &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer autoplay mediaId={this.props.modal.get('mediaId')}/>
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </ErrorHanlder>
        )
    }
}
function mapStateToProps(state,props){
    const categories= state.get('data').get('categories').map((id)=>{
        return state.get('data').get('entities').get('categories').get(id);
    })
    let results=list();
    const searchResult=state.get('data').get('search');
    if(searchResult){
       results= state.get('data').get('entities').get('media').filter((item)=>{
            return item.get('author').toLowerCase().includes(searchResult.toLowerCase())
                         || item.get('title').toLowerCase().includes(searchResult.toLowerCase());
            
        }).toList();    
    }
   
    return {
        categories,
        search: results,
        modal:state.get('modal')
    }
}
export default connect(mapStateToProps)(Home);