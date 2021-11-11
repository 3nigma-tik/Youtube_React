import React, { Component } from 'react';
import "./VideoPlayer.css"

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="center">
                <iframe id="ytplayer" type="text/html" width="200" height="200"
                     src="https://www.youtube.com/embed/QAhvvQQurw4?autoplay=1&origin=http://example.com"
                        frameborder="0"></iframe>
            </div>
         );
    }
}
 
export default VideoPlayer;