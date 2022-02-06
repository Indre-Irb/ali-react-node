import React, {useContext, useRef, useState} from 'react';
import MyContext from "../context/myContext";
import {useNavigate} from "react-router-dom";

const Main = () => {

    const {getProduct, setProduct} = useContext(MyContext)
    const [getMessage, setMessage] = useState("")
    const [getTrigger, setTrigger] = useState(false)

    const productId = useRef()

    const navigate = useNavigate()

    async function checkProduct() {
        setTrigger(true)
        // if(getProduct.length === 0){
        //     setMessage("Loading")
        // }

        const product = productId.current.value

        const send = await fetch(`http://localhost:4000/product/` + product)
        const result = await send.json()


        setProduct(result.data)
        navigate("/product")


    }

    console.log(getProduct)

    return (
        <div>
            <div className="main d-flex f-column al-center j-center">
                <input type="text" ref={productId} placeholder="Type product code"/>
                <button onClick={checkProduct}>Get info</button>
                {getTrigger&& <div className="ring"></div>}
                <h3>{getMessage}</h3>
            </div>
        </div>
    );
};

export default Main;