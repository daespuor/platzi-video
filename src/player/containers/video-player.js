import React, { Component } from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import ProgressBar from '../components/progressBar'
import VideoPlayerControls from '../components/controls'
import Utils from '../../utils'
import Spinner from '../components/spinner'
import VolumeButton from '../components/volume'
import FullScreenButton from '../components/fullscreen'
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
class VideoPlayer extends Component {
    
    handleToggle = () => {
        this.props.actions.togglePlayPause();
    }
    handleVolumeToggle = () => {
        if(this.props.volume>0){
            this.volumeButton.value=0
        }else{
            this.volumeButton.value=this.props.prevVolume
        }
        this.props.actions.changeVolume(this.volumeButton.value,this.props.volume);
    }
    handleMetadata = (event) => {
        this.video = event.target
        this.props.actions.changeTimer(this.video.duration);
    }
    handleTimeUpdate = (event) => {
        this.video = event.target
        this.props.actions.changeProgressBar(this.video.currentTime);
    }
    handleProgress = (event) => {
        const value = event.target.value;
        this.props.actions.manualChangeProgressBar(value);
    }
    handleSeeking = (event) => {
        this.props.actions.isSeeking(true);
    }
    handleSeeked = (event) => {
        this.props.actions.isSeeking(false);
    }
    handleVolume = (event) => {
        this.props.actions.changeVolume(event.target.value);
    }

    setRefVolume = (el) => {
        this.volumeButton = el
    }
    handleToggleFullScreen = () => {
        this.props.actions.fullScreen();
    }

    setRefPlayer = (element) => {
        this.player = element
    }
    componentDidMount() {
        this.props.actions.togglePlayPause(!this.props.autoplay);
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.volume !== this.props.volume) {
            this.video.volume = this.props.volume;
        }
        if(prevProps.changedTime!==this.props.changedTime){
            this.video.currentTime = this.props.changedTime;
        }
        if(prevProps.fullScreen!==this.props.fullScreen){
            if (!Utils.inFullScreen()) {
                Utils.requestFullScreen(this.player)
            } else {
                Utils.closeFullScreen()
            }
        }
    }
    componentWillUnmount(){
        this.props.actions.togglePlayPause(this.props.autoplay);
        this.props.actions.changeVolume(1);
        this.props.actions.changeProgressBar(0);
        this.props.actions.changeTimer(0);
        this.props.actions.manualChangeProgressBar(0);
        this.props.actions.isSeeking(true);
        this.props.actions.fullScreen(false);
    }

    render() {
        return (
            <VideoPlayerLayout setRef={this.setRefPlayer}>
                <Title title={this.props.media.get('title')} />
                <VideoPlayerControls>
                    <PlayPause pause={this.props.pause} handleClick={this.handleToggle} />
                    <Timer duration={Utils.formattedTime(this.props.duration)} currentTime={Utils.formattedTime(this.props.currentTime)} />
                    <ProgressBar duration={this.props.duration} currentTime={this.props.currentTime} handleProgress={this.handleProgress} />
                    <VolumeButton handleVolume={this.handleVolume} handleVolumeToggle={this.handleVolumeToggle}
                        volume={this.props.volume} setRef={this.setRefVolume} />
                    <FullScreenButton handleClick={this.handleToggleFullScreen} />
                </VideoPlayerControls>
                <Spinner active={this.props.loading} />
                <Video
                    autoplay={this.props.autoplay}
                    pause={this.props.pause}
                    src={this.props.media.get('src')}
                    handleMetadata={this.handleMetadata}
                    handleTimeUpdate={this.handleTimeUpdate}
                    handleSeeking={this.handleSeeking}
                    handleSeeked={this.handleSeeked}
                    handlePlay={this.handleSeeked}
                />
            </VideoPlayerLayout>
        )
    }
}

function mapStateToProps(state, props) {
   
    return {
        media: state.get('data').get('entities').get('media').get(props.mediaId),
        pause: state.get('player').get('pause'),
        volume:state.get('player').get('volume'),
        duration:state.get('player').get('duration'),
        currentTime:state.get('player').get('currentTime'),
        changedTime:state.get('player').get('changedTime'),
        loading:state.get('player').get('loading'),
        fullScreen:state.get('player').get('fullScreen'),
        prevVolume:state.get('player').get('prevVolume'),
    }
}

function mapDispatchToProps(dispatcher) {
    return {
        actions: bindActionCreators(actions, dispatcher)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);