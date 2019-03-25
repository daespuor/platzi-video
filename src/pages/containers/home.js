import React, { Component } from 'react'
import HomeLayout from '../components/home-layout'
import Categories from '../../playlist/components/categories'
import Related from '../components/related'
import ModalContainer from '../../widgets/containers/modal'
import Modal from '../../widgets/components/modal'
import ErrorHanlder from '../../errors/containers/error'
import VideoPlayer from '../../player/containers/video-player'
import { connect } from 'react-redux'
import { List as list,  Map as map } from 'immutable'
import * as actions from '../../actions/'
import { bindActionCreators } from 'redux'
import Media from '../../model/media';
class Home extends Component {

    handleOpenModal = (mediaId) => {
        this.props.actions.openModal(mediaId)
    }
    handleCloseModal = (event) => {
        this.props.actions.closeModal()
    }
    handleFormSubmit=(event)=>{
        event.preventDefault();
        const form =new FormData(event.target);
        const media=new Media(
            form.get('title'),
            form.get('author'),
            form.get('category'),
            form.get('url'),
            form.get('image'),
            "video"
        )
        this.props.actions.addMediaAsync(media);
    }
    handleShowForm=()=>{
        this.props.actions.toggleForm();
    }
    render() {
        return (
            <ErrorHanlder>
                <HomeLayout>
                    <Related
                        myplaylist={this.props.myplaylist}
                        friendsList={this.props.friendsList} />
                    <Categories data={this.props.categories}
                        handleOpenModal={this.handleOpenModal}
                        search={this.props.search}
                        isLoading={this.props.isLoading}
                        user={this.props.user}
                        handleFormSubmit={this.handleFormSubmit}
                        handleShowForm={this.handleShowForm}
                        showForm={this.props.showForm}
                        isLoadingForm={this.props.isLoadingForm} />
                    {
                        this.props.modal.get('visible') &&
                        <ModalContainer>
                            <Modal handleClick={this.handleCloseModal}>
                                <VideoPlayer autoplay mediaId={this.props.modal.get('mediaId')} />
                            </Modal>
                        </ModalContainer>
                    }
                </HomeLayout>
            </ErrorHanlder>
        )
    }
}
function mapStateToProps(state, props) {
    const categories = state.get('data').get('categories').map((id) => {
        return state.get('data').get('entities').get('categories').get(id);
    })
    let results = list();
    let friendsList=list();
    let user=map();
    const searchResult = state.get('data').get('search');
    if (searchResult) {
        results = state.get('data').get('entities').get('media').filter((item) => {
            return item.get('author').toLowerCase().includes(searchResult.toLowerCase())
                || item.get('title').toLowerCase().includes(searchResult.toLowerCase());

        }).toList();
    }
    friendsList=state.get('users').get('data').filter((item)=>{
        return !item.get('currentUser')
    }).toList();
    user=state.get('users').get('data').filter((item)=>{
        return item.get('currentUser')
    }).get(0);
  
    return {
        categories,
        search: results,
        myplaylist: state.get('myplaylist').get('data'),
        modal: state.get('modal'),
        isLoading: state.get('isLoading').get('active'),
        isLoadingForm:state.get('form').get('isLoading'),
        showForm:state.get('form').get('active'),
        friendsList,
        user
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);