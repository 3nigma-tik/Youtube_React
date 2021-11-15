import React from "react";

import './ViewComments.css'


const ViewComments = (props) =>{    
    return (
        props.videoComments.map(function(comment){
            return(
                <div>
                    <p>{comment.text}</p>
                    <p>likes: {comment.likes} dislikes: {comment.dislikes}</p>
                    
                        
                    
                    
                    
                </div>
            )
    })
    )
}
          
     
export default ViewComments;