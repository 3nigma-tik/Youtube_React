import React, {Component} from "react";


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

        
    }


    render() {
        return(
            <form onSubmit= {this.handleSubmit} method= 'post'>
                <div>
                    <input text= "text" name="createComment" onChange={this.handleChange} />

                </div>
            </form>
        )
    }
}

export default Comment;