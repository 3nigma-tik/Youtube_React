import React, {Component} from "react";
import './Reply.css'

class Reply extends Component{
    constructor(props){
        super(props)
        this.state = {
            
            reply:"",
            comment: this.props.commentId,
            
        }
    }

    componentDidUpdate = (prevState) => {
        if(
            this.state.comment != this.props.commentId
        ){
            this.setState({
                
                comment: this.props.commentId
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
        this.props.createReply(this.state.reply);
        
    }


    render() {
        return(
            <div>  

                <form  onSubmit= {this.handleSubmit} method= 'post'>
                    <div>
                        <input text= "text" name="text" onChange={this.handleChange} value= {this.state.text} />
                        <button type="submit" className="Button">Reply</button>
                        <br/>
                        <br/>
                    </div>
                </form>
            </div>
            
        )
    }
}

export default Reply;