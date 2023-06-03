import { useContext, useState } from "react";
import "./comments.css";
import {AuthContext} from "../../context/authContext";
import { useQuery,  useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import moment from "moment";

const Comments = ({postid}) => {
    const [desc, setDesc] = useState("")
    
    const { currentUser } = useContext(AuthContext)

    const { isLoading, error, data } = useQuery({
        queryKey: ['comments'],
        queryFn: () =>
         makeRequest.get("/comments?postid="+postid).then((res) => {
            return res.data;
         })
      });



    const queryClient = useQueryClient()

    const mutation = useMutation(
        (newComment) => {
          return makeRequest.post("/comments", newComment);
        },
        {
          onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["comments"]);
          },
        }
      );

   

    const handleClick = async (e) =>{
        e.preventDefault();
        mutation.mutate({ desc, postid });
        setDesc("");
        

        
    };
  
  
//   const comments = [ 
//     {
//         id: 1,
//         desc: "Good picture! Like it!",
//         name: "Farasha Yussouf",
//         userId: 1,
//         profilePicture: "/assets/comment1.jpeg"
//     },
//     {
//         id: 2,
//         desc: "Lovely!",
//         name: "Farasha Yussouf",
//         userId: 2,
//         profilePicture: "/assets/comment1.jpeg"
//     },
//   ];

  return (
    <div className="comments">
        <div className="write">
            <img className="writeImg" src={currentUser.profilePic} alt="" />
            <input className="writeInput" type="text" placeholder="Write a comment" 
            value={desc}
            onChange={(e) => setDesc(e.target.value)}/>
            <button className="writeButton" onClick={handleClick}>Post</button>
        </div>
        
        
        {isLoading ? "loading" : data.map(comment=>(
            <div className="comment">
                <img className="commentImg" src={comment.profilePic} alt="" />
                <div className="commentInfo">
                    <span className="commentName">{comment.name}</span>
                    <p className="commentDesc">{comment.desc}</p>
                </div>
                <span className="commentDate">{moment(comment.createdate).fromNow()}</span>
            </div>
        ))
    }  
    </div>
  );
};

export default Comments
