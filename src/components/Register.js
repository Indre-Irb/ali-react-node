import React, {useRef, useState} from 'react';

const Register = () => {

    const [getUser, setUser] = useState([])
    const [getMessage, setMessage] = useState("")

    const inputs = {
        username: useRef(),
        pass1: useRef(),
        pass2: useRef()
    }


    async function registerUser() {
        const user = {
            username: inputs.username.current.value,
            pass1: inputs.pass1.current.value,
            pass2: inputs.pass2.current.value
        }

        const option = {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        }

        const data = await fetch(`http://localhost:4000/register`, option)
        const result = await data.json()
        setUser(result)
        setMessage(result.message)
    }

    // console.log(getUser)

    return (
        <div className="registerCard d-flex j-center al-center f-column">
            <div>
            <input type="text" ref={inputs.username} placeholder="Username"/>
            <input type="text" ref={inputs.pass1} placeholder="Password One"/>
            <input type="text" ref={inputs.pass2} placeholder="Password Two"/>
            <button onClick={registerUser}>Register</button>
            </div>
            <div>
                <h3>{getMessage}</h3>
            </div>
        </div>
    );
};

export default Register;