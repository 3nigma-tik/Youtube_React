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
        this.props.getAVideo(this.state.searchTerm)
    };



    render() {
        return (
            <div className="searchBar">
                <form onSubmit={this.handleSubmit}>
                    <div className="search">
                        <input type="text" className="searchTerm" name="searchTerm" onChange={this.handleChange} value={this.state.searchTerm} placeholder="Search.." />
                        <button type="submit" className="searchButton">Search For Videos</button>
                    </div>
                </form>
                <br />
            </div>
        )
    }
}




export default SearchBar;