import React, {Component} from "react";
import "./Comment.css"


class Comment extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            text:"",
            video_id: props.videoid,
            
        }
    }

    componentDidUpdate = (prevState) => {
        if(
            this.state.video_id !== this.props.videoid
        ){
            this.setState({
                video_id: this.props.videoid
            })
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
        this.props.createComment(this.state, this.state.video_id);
        
    }


    render() {
        return(
            <div>
                <h4>Comment Here</h4>                
                <form  onSubmit= {this.handleSubmit} method= 'post'>
                    <div>
                        <input text= "text" name="text" onChange={this.handleChange} value= {this.state.text} />
                        <button type="submit" className="Button">Comment Here</button>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default Comment;