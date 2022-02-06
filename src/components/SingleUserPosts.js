import React from 'react';
import {useNavigate} from "react-router-dom";

const SingleUserPosts = ({sendPosts}) => {

const navigate = useNavigate();

    return (
        <div className="d-flex f-wrap">
            {sendPosts &&
                sendPosts.map((post, index) =>
                    <div className="postCard" key={index}>
                        <h3>{post.title}</h3>
                        <img src={post.image} alt=""/>
                        <p>{post.description}</p>
                        <div className="d-flex">
                            <button onClick={()=> navigate("/")}>Back to main</button>
                        </div>
                    </div>)
            }
        </div>
    );
};

export default SingleUserPosts;