import React, { Component } from 'react';


class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchterms: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.filerSongs(this.state.searchTerms)
    };



    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input type="text" className="col-sn-3" name="searcchTerm" onChange={this.handleChange} placeholder="Search Bar" />
                        <button type="submit">Search Videos</button>
                    </div>
                </form>
                <br />
            </div>
        )
    }
}




export default SearchBar;