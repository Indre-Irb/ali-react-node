import React, {useRef, useState} from 'react';

const Post = ({showPosts, getSecretKey}) => {

    const [getPosts, setPosts] = useState([])
    const [getMessage, setMessage] = useState("")

    const inputs = {
        title: useRef(),
        image: useRef(),
        description: useRef()
    }

    async function createPost() {
        const post = {
            title: inputs.title.current.value,
            image: inputs.image.current.value,
            description: inputs.description.current.value,
            secretKey: getSecretKey
        }

        const option = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(post)
        }

        const data = await fetch(`http://localhost:4000/post`, option)
        const result = await data.json()
        setMessage(result.message)
        showPosts(result.allPosts)

    }


    return (
        <div>
            <div>
                <h3>{getMessage}</h3>
            </div>
            <div className="card">
                <input type="text" placeholder="title" ref={inputs.title}/>
                <input type="text" placeholder="image" ref={inputs.image}/>
                <input type="text" placeholder="description" ref={inputs.description}/>
                <button onClick={createPost}>Create Post</button>
            </div>

        </div>
    );
};

export default Post;