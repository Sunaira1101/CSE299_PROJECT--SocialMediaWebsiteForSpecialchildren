import "./profile.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from "../../components/posts/Posts";

export default function Profile() {
  return (
    <div className="profile">
      <div className="images">
        <img className="cover" src="/assets/cover2.jpg" alt="" />
        <img className="userProfile" src="/assets/p1.jpg" alt="" />
      </div>
      <div className="profileContainer">
        <div className="uInfo">
          <div className="profileLeft">
            <a href="http://facebook.com">
              <FacebookIcon fontSize="large"/>
            </a>
            <a href="http://twitter.com">
              <TwitterIcon fontSize="large"/>
            </a>
            <a href="http://instagram.com">
              <InstagramIcon fontSize="large"/>
            </a>
          </div>
          <div className="profileCenter">
            <span className="uName">Fahrin Sunaira</span>
            <div className="uLocation">
              <div className="uItem">
                <PlaceIcon />
                <span className="locationText">Bangladesh</span>
              </div>
            </div>
            <button className="uFollow">Follow</button>
          </div>
          <div className="profileRight">
            <EmailIcon/>
            <MoreVertOutlinedIcon/>
          </div>
        </div>
        <Posts/>
      </div>
    </div>
  )
}
