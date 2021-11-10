import React, { Component } from 'react';
import './SearchBar.css'


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filterVideos(this.state)
    };



    render() {
        return (
            <div className="searchBar">
                <form onSubmit={this.handleSubmit}>
                    <div className="search">
                        <input type="text" className="searchInput" name="searchTerm" onChange={this.handleChange} placeholder="Search Videos" />
                        <button type="submit" className="searchButton">Search Videos</button>
                    </div>
                </form>
                <br />
            </div>
        )
    }
}




export default SearchBar;