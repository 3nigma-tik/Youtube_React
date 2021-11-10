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
            searchTerm:'dogs',
            searchResults:[]
        };
    }

    getVideo = async () => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=' + this.state.searchTerm +'&key=AIzaSyDxx-CQ2sCfb5yUfHqTL0fbXGOaqACFiJg&part=snippet')
        this.setState({      
          searchResults: response.data.items
        });
    }
    


    
    searchForVideo = async (searchTerm) => {
        let filteredVideo = this.state.searchResults.filter(function (results) {
            if (results.includes(searchTerm)){
                return true
            } else {
                return false;
            }
        })
        this.setState({
            searchTerm: filteredVideo
        });
    }

    addComment = async (comment) => {
        let response = await axios.post('http://127.0.0.1:8000/comment/', comment);
        
    }

    addReply = async (reply) => {
        let response = await axios.post('http://127.0.0.1:8000/reply/', reply);
        
    }
    

    render() {
        return (
            <div>
                <h1>YouTube React Project</h1>
                <SearchBar filterVideos={this.searchForVideo}/>
                <VideoPlayer />
                <RelatedVideos />
                <h4>Comment Here</h4>
                <Comment createComment={this.addComment}/>
            </div>
        )
    }
}



export default App;