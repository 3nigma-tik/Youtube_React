import React, {Component} from "react";
import './Reply.css'

class Reply extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            text:"",
            comment_id: props.comment_id,
            
        }
    }

    componentDidUpdate = (prevState) => {
        if(
            this.state.comment_id != this.props.comment_id
        ){
            this.setState({
                comment_id: this.props.comment_id
            })
        }
    }

    handleChange = (event) => {
        console.log('')
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.props.createReply(this.state);
        
    }


    render() {
        return(
            <div>
                <h4>Reply Here</h4>                
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

export default Reply;