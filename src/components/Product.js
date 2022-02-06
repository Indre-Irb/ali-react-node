import React, {useContext, useState} from 'react';
import MyContext from "../context/myContext";
import {FaArrowAltCircleRight, FaArrowAltCircleLeft, FaStar} from "react-icons/fa";


const Product = () => {


    const {getProduct, setProduct} = useContext(MyContext)
    const [getCurrent, setCurrent] = useState(0)

    const lenght = getProduct.images.length

    if (!Array.isArray(getProduct.images) || getProduct.images.length <= 0) {
        return null
    }

    const nextSlide = () => {
        setCurrent(getCurrent === lenght - 1 ? 0 : getCurrent + 1)
    }

    const prevSlide = () => {
        setCurrent(getCurrent === 0 ? lenght - 1 : getCurrent - 1)
    }

    let number = 0;
    let mainNumber = 0;


    console.log(getCurrent)

    console.log(lenght)
    console.log(getProduct)

    return (
        <div>
            <div className="mainTwo">
                {getProduct.length !== 0 &&
                    <div>
                        <div className="d-flex">
                            <div className="d-flex f-column flex1">
                                <div className="slider">
                                    <FaArrowAltCircleLeft className="arrow-left" onClick={prevSlide}/>
                                    <FaArrowAltCircleRight className="arrow-right" onClick={nextSlide}/>
                                    {getProduct.images.map((img, i) =>
                                        <div key={i}>
                                            {i === getCurrent &&
                                                <img className="mainImage" src={img} alt=""/>}
                                        </div>)}
                                </div>
                            </div>
                            <div className="d-flex f-column flex2">
                                <h5>{getProduct.title}</h5>
                                <div className="d-flex">
                                {Array(getProduct.rating).fill(0).map(numb => number !== getProduct.rating && <FaStar/>)}
                                </div>
                                <h5>Quantity: {getProduct.quantity}</h5>
                                <div className="d-flex f-wrap ">
                                    {getProduct.variants.options[0].values === undefined ?
                                        getProduct.variants.options[1].values.map((photo, ind) =>
                                            <div key={ind} className="smallBox">
                                                <img className="smallImageTwo" src={photo.image} alt=""/>
                                            </div>) : getProduct.variants.options[0].values.map((photo, ind) =>
                                            <div key={ind} className="smallBox">
                                                <img className="smallImageTwo" src={photo.image} alt=""/>
                                            </div>)}
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3>FeedBack and comments</h3>
                            <div>
                                {getProduct.review.map((feed, index) =>
                                    <div className="commentCard" key={index}>
                                        <p>{feed.content}</p>
                                        <h5>{feed.displayName}</h5>
                                        {Array(feed.rating).fill(0).map(numb => number !== feed.rating && <FaStar/>)}
                                    </div>)}
                            </div>
                        </div>
                    </div>}
            </div>

        </div>
    );
};

export default Product;