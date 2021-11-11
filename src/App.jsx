import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import './App.css'
import {googleAPIKey} from './Keys'
import VideoPlayer from './components/Videos/Videos';
import RelatedVideos from './components/RelatedVideos/RelatedVideos';
import Comment from './components/Comment/Comment';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchResults: [],
            videoId: ''
        };
    }

    componentDidMount() {
        this.getVideo();
        // this.searchForVideo();
    }

    getVideo = async (searchTerm) => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=' + searchTerm +'&key=AIzaSyAO3qHzkWaf1rvM0gfltWzvqeXM82svDQk&part=snippet')
        console.log(response.data)
        this.setState({
            searchResults: response.data.item,
            videoId: response.data.items[0].id.videoId
        });
    }
    


    
    // searchForVideo = async (searchTerm) => {
    //     let filteredVideo = this.state.searchResults.filter(function (results) {
    //         if (results.includes(searchTerm)){
    //             return true
    //         } else {
    //             return false;
    //         }
    //     })
    //     this.setState({
    //         searchTerm: filteredVideo
    //     });
    // }



    // addComment = async (comment) => {
    //     let response = await axios.post('http://127.0.0.1:8000/comment/', comment);
        
    // }

    // addReply = async (reply) => {
    //     let response = await axios.post('http://127.0.0.1:8000/reply/', reply);
        
    // }
    

    render() {
        return (
            <div>
                <h1>YouTube React Project</h1>
                <SearchBar getAVideo={this.getVideo}/>
                <VideoPlayer playVideo={this.state.videoId} />
                <RelatedVideos />
                <h4>Comment Here</h4>
                <Comment createComment={this.addComment}/>
            </div>
        )
    }
}



export default App;