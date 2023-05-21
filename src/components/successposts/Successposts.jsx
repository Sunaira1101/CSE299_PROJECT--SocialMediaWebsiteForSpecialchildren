import "./successposts.css";
import Successpost from "../successpost/Successpost";



const SuccessPosts = () => {

    const posts = [
        {
            id: 1,
            name: "Mary",
            userId: 1,
            profilePic: "/assets/successpost1.jpeg",
            desc: "Today I will be sharing my child's success story with you.",
            img: "/assets/s1.jpg"
        },
        {
            id: 2,
            name: "Tom",
            userId: 2,
            profilePic: "/assets/friend2.jpg",
            desc: "Today I will be sharing my child's success story with you.",
            img: "/assets/s2.jpeg"
        },
        {
            id: 3,
            name: "Sunaira",
            userId: 3,
            profilePic: "/assets/friend2.jpg",
            desc: "Today I will be sharing my child's success story with you.",
            // img: "/assets/post1.jpg"
        },
    ];

    return <div className="posts">
        {posts.map(post=>(
           <Successpost post={post} key={post.id}/>
        ))}


    </div>;
};


export default SuccessPosts