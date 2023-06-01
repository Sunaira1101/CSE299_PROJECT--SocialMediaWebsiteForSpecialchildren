import "./share.css";
import {PermMedia, VideoLibrary, EmojiEmotions, LocationOn} from '@mui/icons-material';
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";



export default function Share() {

    const { currentUser } = useContext(AuthContext);

    return (
    <div className="share">
       <div className="shareWrapper">
            <div className="shareTop">
                <img src={currentUser.profilePic} alt=""className="shareProfileImg" />
                <input placeholder="Write a post about your child today" className="shareInput" />
                {/* <img className="shareProfileImg" src="/assets/p1.jpg" alt="" />
                <input placeholder="Write a post about your child today" className="shareInput" /> */}
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo</span>
                    </div>
                    <div className="shareOption">
                        <VideoLibrary htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Video</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Mood</span>
                    </div>
                    <div className="shareOption">
                        <LocationOn htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                </div>
                <button className="shareButton">Share</button>
            </div>    
       </div>
    </div>
  )
}
