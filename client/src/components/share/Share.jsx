import "./share.css";
import {PermMedia, VideoLibrary, EmojiEmotions, LocationOn} from '@mui/icons-material';
// import Image from "../assets/img.png";
// import Map from "../../assets/map.png";
// import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import  { useMutation, useQueryClient } from '@tanstack/react-query';
import { makeRequest } from "../../axios";



export default function Share() {
    const [file,setFile] = useState(null);
    const [desc,setDesc] = useState("");

    const upload = async () => {
        try {
          const formData = new FormData();
          formData.append("file", file);
          const res = await makeRequest.post("/upload", formData);
          return res.data;
        } catch (err) {
          console.log(err);
        }
      };

    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient()

    const mutation = useMutation(
        (newPost) => {
          return makeRequest.post("/posts", newPost);
        },
        {
          onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries(["posts"]);
          },
        }
      );

   

    const handleClick = async (e) =>{
        e.preventDefault();
        let imgUrl = "";  //no file, empty string
        if (file) imgUrl = await upload(); //if file, return URL
        mutation.mutate({ desc, img: imgUrl });
        setDesc("");
        setFile(null);

        
    };

    return (

  





    // <div className="share">
    //    <div className="shareWrapper">
    //         <div className="shareTop">
    //             <img src={currentUser.profilePic} alt=""className="shareProfileImg" />
    //             <input type="text" placeholder={`Write a post about your child today ${currentUser.name}`} className="shareInput" />
    //             {/* <img className="shareProfileImg" src="/assets/p1.jpg" alt="" />
    //             <input placeholder="Write a post about your child today" className="shareInput" /> */}
    //         </div>
    //         <hr className="shareHr" />
    //         <div className="shareBottom">
    //             <div className="shareOptions">
    //                 <div className="shareOption">
    //                     <PermMedia htmlColor="tomato" className="shareIcon"/>
    //                     <span className="shareOptionText">Photo</span>
    //                 </div>
    //                 <div className="shareOption">
    //                     <VideoLibrary htmlColor="green" className="shareIcon"/>
    //                     <span className="shareOptionText">Video</span>
    //                 </div>
    //                 {/* <div className="shareOption">
    //                     <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
    //                     <span className="shareOptionText">Mood</span>
    //                 </div> */}
    //                 <div className="shareOption">
    //                     <LocationOn htmlColor="blue" className="shareIcon"/>
    //                     <span className="shareOptionText">Location</span>
    //                 </div>
    //             </div>
    //             <button className="shareButton">Share</button>
    //         </div>    
    //    </div>
    // </div>





  <div className="share">
      <div className="sharecontainer">
        <div className="sharetop">
          <div className="shareimgleft">
            <img className="shareProfileImg" src={currentUser.profilePic} alt="" />
            <input className="shareInput"
              type="text"
              placeholder={`What's on your mind ${currentUser.name}?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="shareimgright">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr className="shareHr"/>
        <div className="sharebottom">
          <div className="shareleft">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="shareitem">
                <img className="shareinsideimg" src="/assets/img.png" alt="" />
                <span className="shareinsidetext">Add Image</span>
              </div>
            </label>
            <div className="shareitem">
              <img className="shareinsideimg" src="/assets/map.png" alt="" />
              <span className="shareinsidetext">Add Place</span>
            </div>
            <div className="shareitem">
              <img className="shareinsideimg" src="/assets/friend.png" alt="" />
              <span className="shareinsidetext">Tag Friends</span>
            </div>
          </div>
          <div className="shareright">
            <button onClick={handleClick} className="sharebutton">Share</button>
          </div>
        </div>
      </div>
    </div>
  )
}
