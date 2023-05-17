// import Posts from "../posts/Posts"
// import Post from "../posts/Posts"
import Posts from "../posts/Posts"
import Share from "../share/Share"
import "./feed.css"

export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
          <Share/>
          <Posts/>
          
          
      </div>
    </div>
  )
}
