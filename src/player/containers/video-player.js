import React,{Component} from 'react'
import VideoPlayerLayout from '../components/video-player-layout'
import Video from '../components/video'
import  Title from '../components/title'
import PlayPause from '../components/play-pause'
import Timer from '../components/timer'
import ProgressBar from '../components/progressBar'
import VideoPlayerControls from '../components/controls'
import Utils from '../../utils'
import Spinner from '../components/spinner'
import VolumeButton from '../components/volume'
import FullScreenButton from '../components/fullscreen'
class VideoPlayer extends Component{
    state={
        pause:true,
        duration:0,
        currentTime:0,
        loading: true,
        mute:false
    }
    handleToggle=()=>{
        this.setState((prevState)=>{
           return  {
                pause:!prevState.pause
            }
        })
    }
    handleVolumeToggle=()=>{
        this.video.volume=this.state.mute
        if(!this.state.mute){
            this.volumeButton.value=0
        }else{
            this.volumeButton.value=1
        }
        this.setState((prevState)=>{
            return {
                mute: !prevState.mute
            }
        })
    }
    handleMetadata=(event)=>{
        this.video=event.target
        this.setState({
            duration:this.video.duration
        })
    }
    handleTimeUpdate=(event)=>{
        this.video=event.target
        this.setState({
            currentTime:this.video.currentTime
        })
    }
    handleProgress=(event)=>{
        const value= event.target.value;
        this.video.currentTime=value;
    }
    handleSeeking=(event)=>{
        this.setState({
            loading: true
        })
    }
    handleSeeked=(event)=>{
        this.setState({
            loading: false
        })
    }
    handleVolume=(event)=>{
        const value=event.target.value
        this.video.volume=value
    }

    setRefVolume=(el)=>{
        this.volumeButton=el
    }

    handleToggleFullScreen=()=>{
        if(!Utils.inFullScreen()){
            Utils.requestFullScreen(this.player)
        }else{
            Utils.closeFullScreen()
        }
    }
    
    setRefPlayer=(element)=>{
        this.player=element
    }
    componentDidMount(){
       
        this.setState({
            pause: !this.props.autoplay
        })
        
    }
    render(){
        return (
            <VideoPlayerLayout setRef={this.setRefPlayer}>
                <Title title={this.props.title}/>
                <VideoPlayerControls>
                    <PlayPause pause={this.state.pause} handleClick={this.handleToggle}/>
                    <Timer duration={Utils.formattedTime(this.state.duration)} currentTime={Utils.formattedTime(this.state.currentTime)}/>
                    <ProgressBar duration={this.state.duration} currentTime={this.state.currentTime} handleProgress={this.handleProgress}/>
                    <VolumeButton handleVolume={this.handleVolume} handleVolumeToggle={this.handleVolumeToggle} 
                        mute={this.state.mute} setRef={this.setRefVolume}/>
                    <FullScreenButton handleClick={this.handleToggleFullScreen}/>
                </VideoPlayerControls>
                <Spinner active={this.state.loading}/> 
                <Video 
                    autoplay={this.props.autoplay}
                    pause={this.state.pause}
                    src={this.props.src}
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

export default VideoPlayer;