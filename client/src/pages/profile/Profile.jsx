import "./profile.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PlaceIcon from '@mui/icons-material/Place';
import EmailIcon from '@mui/icons-material/Email';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import Posts from "../../components/posts/Posts";
import { useQuery, useQueryClient, useMutation} from '@tanstack/react-query';
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import { useState } from "react";
import Update from "../../components/update/Update";

export default function Profile() {

  const [openUpdate, setOpenUpdate] = useState(false);

  const { currentUser } = useContext(AuthContext);
  
  const userid = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userid).then((res) => {
      return res.data;
    })
  );

  const {isLoading: rIsLoading ,data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedUserid=" + userid).then((res) => {
        return res.data;
      })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following) return makeRequest.delete("/relationships?userid=" + userid);
      return makeRequest.post("/relationships", { userid });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData.includes(currentUser.id));
  };

  


  return (
    <div className="profile">
      {isLoading ? "loading" : <><div className="images">
      <img src={"/upload/"+data.coverPic} alt="" className="cover" />
        <img className="userProfile" src={"/upload/"+data.profilePic} alt="" />
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
            <span className="uName">{data.name}</span>
            <div className="uLocation">
              <div className="uItem">
                <PlaceIcon />
                <span className="locationText">{data.city}</span>
              </div>
            </div>
            
            {rIsLoading? "loading" : userid === currentUser.id ? 
            (<button onClick={()=>setOpenUpdate(true)} className="uFollow">Update</button>) : 
            (<button onClick={handleFollow} className="uFollow">
              {relationshipData.includes(currentUser.id)
              ? "Following"
              : "Follow"}</button>)}

          </div>
          <div className="profileRight">
          <a href={data.email}>
              <EmailIcon fontSize="large"/>
            </a>
            {/* <EmailIcon/>
            <span className="locationText">{data.email}</span> */}
            <MoreVertOutlinedIcon/>
          </div>
        </div>
        <Posts userid={userid}/>
      </div></>}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  )
}
