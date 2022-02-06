import React, {useRef, useState} from 'react';

const Login = ({userSecretKey}) => {

    const [getMessage, setMessage] = useState('')
    // const [getSecretKey, setSecretKey] = useState(null)

    const inputs = {
        username: useRef(),
        pass1: useRef(),

    }


    async function loginUser(){
        const user = {
            username: inputs.username.current.value,
            pass1: inputs.pass1.current.value,
        }

        const option = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        const data = await fetch(`http://localhost:4000/login`, option)
        const result = await data.json()
        console.log(result)
        setMessage(result.message)
        localStorage.setItem(`secretKey`, result.user.secretKey)
        userSecretKey(localStorage.getItem("secretKey"))
    }

    function logoutUser (){
        userSecretKey(localStorage.setItem(`secretKey`, ""))
    }

    return (
        <div className="loginCard d-flex j-center al-center f-column">
            <div>
            <input type="text" ref={inputs.username} placeholder="Username"/>
            <input type="text" ref={inputs.pass1} placeholder="Password"/>
            <button onClick={loginUser}>Login</button>
                <button onClick={logoutUser}>Logout</button>
            </div>
            <div>
                <h3>{getMessage}</h3>
            </div>
        </div>
    );
};

export default Login;