import React, { Component } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import './App.css'
import {googleAPIKey} from './Keys'
import VideoPlayer from './components/Videos/Videos';




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
                <VideoPlayer />
                <h1>YouTube React Project</h1>
            </div>
        )
    }
}



export default App;