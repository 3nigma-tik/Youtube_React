import React, {Component} from "react";
import "./Comment.css"


class Comment extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            text:"",
            video_id: props.video,
            
        }
    }

    handleChange = (event) => {
        console.log('hello')
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
                <h4>Comment Here</h4>
                <h3>hello</h3>
                <form  onSubmit= {this.handleSubmit} method= 'post'>
                    <div>
                        <input text= "text" name="text" onChange={this.handleChange} value= {this.state.text} />
                        <button type="submit" className="searchButton">Comment Here</button>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default Comment;