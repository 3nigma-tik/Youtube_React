import React, {Component} from "react";
import "./Comment.css"


class Comment extends Component{
    constructor(props){
        super(props)
        this.state = {
            comment: ''
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.props.createComment(this.state)
    }


    render() {
        return(
            <div>
                <h3>hello</h3>
                <form  onSubmit= {this.handleSubmit} method= 'post'>
                    <div>
                        <input text= "text" name="createComment" onChange={this.handleChange} />
                        <button type="submit" className="searchButton">Comment Here</button>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default Comment;