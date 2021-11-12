import React, { Component } from 'react';
import './RelatedVideos.css'

class RelatedVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log('Related Videos From RelatedVideos Component', this.props.playRelatedVideo)
        return ( 
            <div>
                {this.props.playRelatedVideo.map((singleVideoObject) => {
        
                    if(singleVideoObject.snippet) {
                        return (
                            <span key={singleVideoObject.id.videoId} onClick={() => this.props.changeVideo(singleVideoObject.id.videoId)}>
                                <img src={singleVideoObject.snippet.thumbnails.default.url} />
                            </span>
                        )
                    }else {
                        return null;
                    }
                })}
            </div>
        );
    }
}
 
export default RelatedVideos;