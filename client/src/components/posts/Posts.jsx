import { makeRequest } from "../../axios";
import Post from "../post/Post";
import "./posts.css";
import {MoreVert} from '@mui/icons-material';
import { useQuery } from '@tanstack/react-query'


const Posts = ({userid}) => {

    const { isLoading, error, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () =>
         makeRequest.get("/posts?userid=" +userid).then((res) => {
            return res.data;
         })
      });





    // const posts = [
    //     {
    //         id: 1,
    //         name: "Fahrin Sunaira",
    //         userId: 1,
    //         profilePic: "/assets/p1.jpg",
    //         desc: "Hey! It's my first post",
    //         img: "/assets/post1.jpg"
    //     },
    //     {
    //         id: 2,
    //         name: "Fahrin",
    //         userId: 2,
    //         profilePic: "/assets/friend2.jpg",
    //         desc: "Hey! It's my first post",
    //         img: "/assets/post2.jpg"
    //     },
    //     {
    //         id: 3,
    //         name: "Sunaira",
    //         userId: 3,
    //         profilePic: "/assets/friend2.jpg",
    //         desc: "Hey! It's my first post",
    //         // img: "/assets/post1.jpg"
    //     },
    // ];

    return <div className="posts">
        {error ? "Something went wrong!" : isLoading ? "loading" : data.map(post=>(
           <Post post={post} key={post.id}/>
        ))}


    </div>;
};







// export default function Post() {
//   return (
//     <div className="post">
//         <div className="postWrapper">
//             <div className="postTop">
//                 <div className="postTopLeft">
//                     <img className="postProfileImg" src="/assets/friend2.jpg" alt="" />
//                     <span className="postUsername">Sunaira</span>
//                     <span className="postDate">5 mins ago</span>
//                 </div>
//                 <div className="postTopRight">
//                     <MoreVert/>
//                 </div>
//             </div>

            
            
//             <div className="postCenter">
//                 <span className="postText">Hey! It's my first post</span>
//                 <img className="postImg" src="/assets/post1.jpg " alt="" />

//             </div>

//             <div className="postBottom">
//                 <div className="postBottomLeft">
//                 <img className="likeIcon" src="/assets/like.png" alt="" />
//                 <img className="heartIcon" src="/assets/heart.png" alt="" />
//                 <span className="postLikeCounter">32 people liked your post</span>
//                 </div>
//                 <div className="postBottomRight">
//                     <span className="postCommentText">9 comments</span>
//                 </div>
//             </div>
//         </div>
      
//     </div>
//   )
// }


export default Posts




