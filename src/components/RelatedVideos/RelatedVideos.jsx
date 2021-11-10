import React, { Component } from 'react';

class RelatedVideos extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div>
                <iframe id="relvideo1" type="text/html" width="320" height="180"
  src="https://www.youtube.com/embed/oGWf8tQO__4?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
                <iframe id="relvideo2" type="text/html" width="320" height="180"
  src="https://www.youtube.com/embed/U3SPkP4y-rY?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
                <iframe id="relvideo3" type="text/html" width="320" height="180"
  src="https://www.youtube.com/embed/waAlgFq9Xq8?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
            </div>
         );
    }
}
 
export default RelatedVideos;