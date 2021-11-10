import React, { Component } from 'react';

class VideoPlayer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    
    
    render() { 
        return ( 
            <div>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
         src="https://www.youtube.com/embed/QAhvvQQurw4?autoplay=1&origin=http://example.com"
    frameborder="0"></iframe>
            </div>
         );
    }
}
 
export default VideoPlayer;