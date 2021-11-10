import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import axios from 'axios';
import './App.css'
import {googleAPIKey} from './Keys'




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


    render() {
        return (
            <div>
                <SearchBar  filtersongs={this.searchForSongs}/>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
                     src="https://www.youtube.com/embed/?autoplay=1&origin=http://example.com"
                        frameborder="0"></iframe>
                <h1>YouTube React Project</h1>
            </div>
        )
    }
}



export default App;