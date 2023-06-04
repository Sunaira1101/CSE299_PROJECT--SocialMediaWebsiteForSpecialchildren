import { Link } from "react-router-dom"
import "./post.css"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import TextsmsIcon from '@mui/icons-material/Textsms';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";




const Post = ({post}) => {
  
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);  
  
  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postid=" + post.id).then((res) => {
      return res.data;
    })
  );
  
  // const liked = true;

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete("/likes?postid=" + post.id);
      return makeRequest.post("/likes", { postid: post.id });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );

  const deleteMutation = useMutation(
    (postid) => {
      return makeRequest.delete("/posts/" + postid);
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["posts"]);
      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };
    
    return (
    <div className="post">
     <div className="container">
      <div className="user">
        <div className="userInfo">
            <img className="profileImg" src={"/upload/"+post.profilePic} alt="" />
            <div className="details">
                <Link to={`/profile/${post.userid}`} style={{textDecoration:"none", color:"inherit"}}>                
                    <span className="name">{post.name}</span>
                </Link>
                <span className="date">{moment(post.createdate).fromNow()}</span>
            </div>
        </div>
        <MoreHorizOutlinedIcon onClick={() => setMenuOpen(!menuOpen)}/>
        {menuOpen && post.userid === currentUser.id && (
            <button className="deleteButton" onClick={handleDelete}>Delete</button>
          )}


      </div>
      <div className="content">
        <p>{post.desc}</p>
        <img className="postImg" src={"./upload/"+post.img} alt="" />
      </div>
      <div className="info">
        <div className="reaction">
            {isLoading ? "loading" : data.includes(currentUser.id) ? <FavoriteIcon htmlColor="tomato" onClick={handleLike}/>
             :  <FavoriteBorderIcon onClick={handleLike}/> }
            {data?.length} Liked
        </div>
        <div className="reaction" onClick={()=> setCommentOpen(!commentOpen)}>
            <TextsmsIcon/>
            {data?.length} comments 
        </div>
      </div>
      {commentOpen && <Comments postid={post.id}/>}
     </div>
    </div>
  )
}

export default Post
