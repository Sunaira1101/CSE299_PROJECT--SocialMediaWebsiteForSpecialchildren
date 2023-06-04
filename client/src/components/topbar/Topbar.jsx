import { Link, useNavigate } from "react-router-dom";
import "./topbar.css"
import {Search, Person, Chat, Notifications} from '@mui/icons-material';
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";


export default function Topbar() {
    const [logOpen, setLogOpen] = useState(false);
    const navigate = useNavigate();
    
    const { currentUser } = useContext(AuthContext);

    const handleLogout = () => {
       navigate('/Login');
      };
    
    return (
        <div className="topbarContainer">
           
           <div className="topbarLeft">
                <Link to="/" style={{textDecoration:"none"}}>
                <span className="logo">TOGETHER</span>
                </Link>
           </div>

           <div className="topbarCenter">
                <div className="searchBar">
                    <Search className="searchIcon"/>
                    <input placeholder="Search for friend,posts or videos" className="searchInput" />
                </div>
           </div>

           <div className="topbarRight">
                <div className="topbarLinks">
                    <Link to="/" style={{textDecoration:"none", color: "white"}}>
                    <span className="topbarLink">Homepage</span>
                    </Link>
                    {/* <span className="topbarLink">Timeline</span> */}
                </div>

                {/* <div className="topbarIcons">
                    <div className="topbarIconItem">
                        <Person/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                    <div className="topbarIconItem">
                        <Chat/>
                        <span className="topbarIconBadge">2</span>
                    </div>
                    <div className="topbarIconItem">
                        <Notifications/>
                        <span className="topbarIconBadge">1</span>
                    </div>
                 </div> */}
                 
                 <img src={"/upload/" + currentUser.profilePic} alt="" className="topbarImg" />
                 <span onClick={() => setLogOpen(!logOpen)} className="topbarName">{currentUser.name}</span>
                 {logOpen && (
            <button className="deleteLogButton" onClick={handleLogout} to="/Login">LogOut</button>
          )}

           </div>
        
        
        
        </div>
    )
}

