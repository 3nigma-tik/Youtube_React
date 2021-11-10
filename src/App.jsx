import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import './App.css'
import {googleAPIKey} from './Keys'
import VideoPlayer from './components/Videos/Videos';
import RelatedVideos from './components/RelatedVideos/RelatedVideos';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm:'dogs'
        };
    }

    getVideo = async () => {
        let response = await axios.get('https://www.googleapis.com/youtube/v3/search?q=' + this.state.searchTerm +'&key=AIzaSyDxx-CQ2sCfb5yUfHqTL0fbXGOaqACFiJg&part=snippet')
        this.setState({      
          searchTerm: response.data
        });
    }
    


    
    searchForSongs = async (searchTerm) => {
        let filteredSongs = this.state.songs.filter(function (song) {
            if (song.title.includes(searchTerm) || song.artist.includes(searchTerm) || song.album.includes(searchTerm) || song.genre.includes(searchTerm)){
                return true
            } else {
                return false;
            }
        })
        this.setState({
            searchTerm: filteredSongs
        });
    }

    playVideo = async () => {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search?q=lofi&duration=long&key=AIzaSyDxx-CQ2sCfb5yUfHqTL0fbXGOaqACFiJg")
    }

    

    render() {
        return (
            <div>
                <h1>YouTube React Project</h1>
                <SearchBar filtersongs={this.searchForSongs}/>
                <VideoPlayer />
                <RelatedVideos />
            </div>
        )
    }
}



export default App;