import React, { Component } from 'react';
import './RelatedVideos.css'

class RelatedVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        console.log(this.props.playRelatedVideo)
        return ( 
            <div>
                {this.props.playRelatedVideo.map((singleVideoObject) => {
        
                    if(singleVideoObject.snippet.thumbnails) {
                        return (
                            <span onClick={() => this.props.changeVideo(singleVideoObject.id.videoId)}>
                                <img src={singleVideoObject.snippet.thumbnails.default.url} />
                            </span>
                        )
                    }
                })}
            </div>
        );
    }
}
 
export default RelatedVideos;