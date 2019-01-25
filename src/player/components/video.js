import React,{Component} from 'react'
import './video.css'

class Video extends Component{

    togglePlay=()=>{
        if(!this.props.pause){
            this.video.play()
        }else{
            this.video.pause()
        }
    }
    setRef=(el)=>{
        this.video=el
    }
    /*componentWillReceiveProps(prevProps){
        if(prevProps.pause !== this.props.pause){
            this.togglePlay()
        }
    }*/
    componentDidUpdate(){
        this.togglePlay()
    }
    render(){
        return(
            <div className="Video">
                <video 
                    autoPlay={this.props.autoplay}
                    src={this.props.src}
                    ref={this.setRef}
                    onLoadedMetadata={this.props.handleMetadata}
                    onTimeUpdate={this.props.handleTimeUpdate}
                    onSeeking={this.props.handleSeeking}
                    onSeeked={this.props.handleSeeked}
                    onCanPlayThrough={this.props.handlePlay}
                />
            </div>
        )
    }
}

export default Video;