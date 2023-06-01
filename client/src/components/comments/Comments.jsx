import { useContext } from "react";
import "./comments.css"
import {AuthContext} from "../../context/authContext"

const Comments = () => {
  
    const {currentUser} = useContext(AuthContext)
  
  
  const comments = [ 
    {
        id: 1,
        desc: "Good picture! Like it!",
        name: "Farasha Yussouf",
        userId: 1,
        profilePicture: "/assets/comment1.jpeg"
    },
    {
        id: 2,
        desc: "Lovely!",
        name: "Farasha Yussouf",
        userId: 2,
        profilePicture: "/assets/comment1.jpeg"
    },
  ];

  return (
    <div className="comments">
        <div className="write">
            <img className="writeImg" src={currentUser.profilePic} alt="" />
            <input className="writeInput" type="text" placeholder="Write a comment" />
            <button className="writeButton">Post</button>
        </div>
        
        
        {comments.map(comment=>(
            <div className="comment">
                <img className="commentImg" src={comment.profilePicture} alt="" />
                <div className="commentInfo">
                    <span className="commentName">{comment.name}</span>
                    <p className="commentDesc">{comment.desc}</p>
                </div>
                <span className="commentDate">1 hour ago</span>
            </div>
        ))
    }  
    </div>
  );
};

export default Comments
