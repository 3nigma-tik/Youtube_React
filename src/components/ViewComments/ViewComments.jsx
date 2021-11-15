import React from "react";
import Reply from "../Reply/Reply";
import './ViewComments.css'


const ViewComments = (props) =>{    
    return (
        props.videoComments.map(function(comment){
            return(
                <div>
                    <p>{comment.text}</p>
                    <p>Likes: {comment.likes} Dislikes:{comment.dislikes}</p>
                    <Reply createReply={props.createReply }/>
                    
                </div>
            )
    })
    )
}
          
     
export default ViewComments;