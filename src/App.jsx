import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css'
import {googleAPITKey} from './Keys'




class App extends Component {
    constructor(props) {
        super(props);
        this.state = [];
    }
    


    
    searchForSongs = async (searchTerm) => {
        let filteredSongs = this.state.songfs.filter(function (song) {
            if (song.title.includes(searchTerm) || song.artist.includes(searchTerm) || song.album.includes(searchTerm) || song.genre.includes(searchTerm)){
                return true
            } else {
                return false;
            }
        })
        this.setState({
            songs: filteredSongs
        });
    }


    render() {
        return (
            <div>
                <SearchBar  filtersongs={this.searchForSongs}/>
                <iframe id="ytplayer" type="text/html" width="640" height="360"
  src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
  frameborder="0"></iframe>
                <h1>YouTube React Project</h1>
            </div>
        )
    }
}



export default App;