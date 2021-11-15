import React from "react";

import './ViewComments.css'


const ViewComments = (props) =>{    
    return (
        props.videoComments.map(function(comment){
            return(
                <div>
                    <p>{comment.text}</p>
<<<<<<< HEAD
                    <p>likes: {comment.likes} dislikes: {comment.dislikes}</p>
                    
                        
                    
=======
                    <p>Likes: {comment.likes} Dislikes:{comment.dislikes}</p>
>>>>>>> 62b5fedb11d1d4cadb980e71dbd175a387d076dc
                    
                    
                </div>
            )
    })
    )
}
          
     
export default ViewComments;