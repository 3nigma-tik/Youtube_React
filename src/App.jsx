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
                <h1>YouTube React Project</h1>
                <SearchBar  filtersongs={this.searchForSongs}/>
            </div>
        )
    }
}



export default App;