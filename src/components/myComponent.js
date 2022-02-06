import React, {useRef, useState} from 'react';
import NewArr from "./newArr";

const MyComponent = () => {
    const address = useRef()

    const [getResult, setResult] = useState([])


    async function addLink() {
        const linkAddress = address.current.value
        console.log(linkAddress)

        const option = {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({linkAddress})
        }
        const send = await fetch(`http://localhost:4000/main`, option)
        const result = await send.json()
        console.log(result)
        setResult(result.myArr)

    }

    function add(n){
        setResult(n)
    }

    console.log(getResult)

    return (
        <div>
            <div>
                <input type="text" ref={address}/>
                <button onClick={addLink}>Add</button>
            </div>
            <NewArr getResult={getResult} getPhotos={add}/>
        </div>
    );
};

export default MyComponent;