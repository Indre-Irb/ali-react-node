import React from 'react';
import {useNavigate} from "react-router-dom";

const AllPost = ({getAllPosts, oneUserPosts, singlePost}) => {

    const navigate = useNavigate();

    async function showUserPosts(username) {
        const send = await fetch(`http://localhost:4000/user/`+username)
        const result = await send.json()

        oneUserPosts(result.oneUserPosts)
        navigate("/singleUserPost")
    }
    async function showOnePost (index){
        const send = await fetch(`http://localhost:4000/posts/`+index)
        const result = await send.json()

        singlePost(result.singlePost)
        navigate("/singlePost")
    }


    return (
        <div>
            <div className="d-flex f-wrap">
                {getAllPosts &&
                    getAllPosts.map((post, index) =>
                        <div className="postCard" key={index}>
                            <h3>{post.title}</h3>
                            <img src={post.image} alt=""/>
                            <p>{post.description}</p>
                            <div className="d-flex">
                                <button onClick={() => showOnePost(index)}>Show Single Post</button>
                                <button onClick={() => showUserPosts(post.username)}>Show User Posts</button>
                            </div>
                        </div>)
                }
            </div>
        </div>
    );
};

export default AllPost;