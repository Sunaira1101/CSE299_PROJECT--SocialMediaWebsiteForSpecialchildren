import Successpost from "../../components/successpost/Successpost";
import Successshare from "../../components/successshare/Successshare";
import "./success.css"
import {PermMedia, VideoLibrary} from '@mui/icons-material';


export default function Success() {
  return (
    <div className="success">
      <div className="successWrapper">
          <Successshare/>
          {/* <Successpost/> */}
          
          
      </div>
    </div>
  )
}




// const Success = () => {
//   return (
//     <div className="successContainer">
//     <div className="shareSuccess">
//       <div className="shareWrapperSuccess">
//          <div className="shareTopSuccess">
//              <img className="shareProfileImgSuccess" src="/assets/p1.jpg" alt="" />
//              <input placeholder="Share your child's success story..." className="shareInputSuccess" />
//          </div>

//          <hr className="shareHrSuccess" />

//          <div className="shareBottomSuccess">
//              <div className="shareOptionsSuccess">
//                  <div className="shareOptionSuccess">
//                      <PermMedia htmlColor="tomato" className="shareIconSuccess"/>
//                      <span className="shareOptionTextSuccess">Photo</span>
//                  </div>
//                  <div className="shareOption">
//                      <VideoLibrary htmlColor="green" className="shareIcon"/>
//                      <span className="shareOptionText">Video</span>
//                  </div>
//              </div>
//              <button className="shareButtonSuccess">Share</button>
//          </div>    
//     </div>
//   </div>
//  </div>
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
//     // <div>
//     //   Success
//     // </div>
//   )
// }

// export default Success
