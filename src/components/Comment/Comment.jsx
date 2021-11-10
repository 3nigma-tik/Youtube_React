import React, {Component} from "react";
import axios from "axios";

class Comment extends Component{
    constructor(props){
        
        this.state= {
            comment=''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        let comment= this.state.comment
        await axios.post("http://127.0.0.1:8000/", comment)
        
    }


    render() {
        return(
            <form onSubmit= {(event) => this.handleSubmit(event)} method= 'post'>
                <div>
                    <input text= "text" name="comment" onChange={this.handleChange} value={this.state.comment} />

                </div>
            </form>
        )
    }
}

export default Comment;