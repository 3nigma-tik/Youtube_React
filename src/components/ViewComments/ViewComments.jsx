import React from "react";
import Reply from "../Reply/Reply";
import './ViewComments.css'


const ViewComments = (props) =>{    
    return (
        props.videoComments.map(function(comment){
            return(
                <div className= 'textBox' key={comment.id}>
                    <h5> Comment</h5>                    
                    <p>{comment.text}</p>
                    <p>likes: {comment.likes} dislikes: {comment.dislikes}</p>
                    
                    <Reply commentId={comment.id} createReply={props.createReply }/>
                    

                    
                </div>
            )
    })
    )
}
          
     
export default ViewComments;