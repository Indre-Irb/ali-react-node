import React from 'react';
import {useNavigate} from "react-router-dom";

const SinglePost = ({getSinglePost}) => {

const navigate = useNavigate();

console.log(getSinglePost)

    return (
        <div>
            {getSinglePost &&

                    <div className="postCard">
                        <h3>{getSinglePost.title}</h3>
                        <img src={getSinglePost.image} alt=""/>
                        <p>{getSinglePost.description}</p>
                        <div className="d-flex">
                            <button onClick={()=> navigate("/")}>Back to main</button>
                        </div>
                    </div>
            }
        </div>
    );
};

export default SinglePost;