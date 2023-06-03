import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import "./sidebar.css";
import {QuestionAnswer, Slideshow, AutoStories, CalendarMonth, Mood, SportsEsports, LocalLibrary, Work} from '@mui/icons-material';
import { Link } from "react-router-dom";
import Post from "../post/Post";

export default function Sidebar() {
    const { currentUser } = useContext(AuthContext);
    
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                <li className="sidebarListItem">
                <img src={"/upload/" + currentUser.profilePic} alt="" className="sidebarUserImg" />
                        <Link to ="/sideprofile" style={{textDecoration:"none"}}>
                        <span className="sidebarListItemTextUser">
                            {currentUser.name}
                        </span>
                        </Link>
                     
                    </li>
                    <li className="sidebarListItem">
                        <QuestionAnswer className="sidebarIcon"/>
                        <Link to="/sidefeed" style={{textDecoration:"none"}}>
                        <span className="sidebarListItemText">
                            Feed
                        </span>
                        </Link>
                    </li>
                    {/* <li className="sidebarListItem">
                        <Slideshow className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Videos
                        </span>
                    </li> */}
                    <li className="sidebarListItem">
                        <AutoStories className="sidebarIcon"/>
                        <Link to="/success" style={{textDecoration:"none"}}>
                        <span className="sidebarListItemText">
                            Success Stories
                        </span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Mood className="sidebarIcon"/>
                        <span className="sidebarListItemText">
                            Mood
                        </span>
                    </li>
                    <li className="sidebarListItem">
                        <CalendarMonth className="sidebarIcon"/>
                        <Link to="/event" style={{textDecoration:"none"}}>
                        <span className="sidebarListItemText">
                            Events
                        </span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <SportsEsports className="sidebarIcon"/>
                        <Link to="/game" style={{textDecoration:"none"}}>
                        <span className="sidebarListItemText">
                            Games
                        </span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <LocalLibrary className="sidebarIcon"/>
                        <Link to="/book" style={{textDecoration:"none"}}>
                        <span className="sidebarListItemText">
                            Books
                        </span>
                        </Link>
                    </li>
                    <li className="sidebarListItem">
                        <Work className="sidebarIcon"/>
                        <Link to="/job" style={{textDecoration:"none"}}>
                        <span className="sidebarListItemText">
                            Job Openings
                        </span>
                        </Link>
                    </li>
                    
                </ul>
                {/* <button className="sidebarButton">Show More</button> */}
                {/* <hr className="sidebarHr" />
                <ul className="sidebarFriendList">
                    <li className="sidebarFriend">
                        <img src="/assets/friend2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideBarFriendName">Sunaira</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/friend2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideBarFriendName">Sunaira</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/friend2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideBarFriendName">Sunaira</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/friend2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideBarFriendName">Sunaira</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/friend2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideBarFriendName">Sunaira</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/friend2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideBarFriendName">Sunaira</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/friend2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideBarFriendName">Sunaira</span>
                    </li>
                    <li className="sidebarFriend">
                        <img src="/assets/friend2.jpg" alt="" className="sidebarFriendImg" />
                        <span className="sideBarFriendName">Sunaira</span>
                    </li>
                </ul> */}
            </div>
        </div>
    );
}

