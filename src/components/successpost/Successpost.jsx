import { Link } from "react-router-dom"
import "./successpost.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Comments from "../comments/Comments";
import { useState } from "react";




const Successpost = ({post}) => {
  
//   const [commentOpen, setCommentOpen] = useState(false)  
  
//   const liked = true;
    
    return (
    <div className="post">
     <div className="container">
      <div className="user">
        <div className="userInfo">
            <img className="profileImg" src={post.profilePic} alt="" />
            <div className="details">
                <Link to={`/profile/${post.userID}`} style={{textDecoration:"none", color:"inherit"}}>                
                    <span className="name">{post.name}</span>
                </Link>
                <span className="date">1 min ago</span>
            </div>
        </div>
        <MoreHorizOutlinedIcon/>
      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img className="postImg" src={post.img} alt="" />
      </div>
      <div className="info">
        {/* <div className="reaction">
            {liked ? <FavoriteIcon htmlColor="tomato"/> : <FavoriteBorderIcon/>}
            12 liked
        </div>
        <div className="reaction" onClick={()=> setCommentOpen(!commentOpen)}>
            <TextsmsIcon/>
            2 comments 
        </div> */}
      </div>
      {/* {commentOpen && <Comments/>} */}
     </div>
    </div>
  )
}

export default Successpost