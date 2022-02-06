import React, {useState} from 'react';

const NewArr = ({getResult, getPhotos}) => {

   // const [getPhotos, setPhotos] = useState([])


    async function deletePhoto(index) {
        const data = await fetch(`http://localhost:4000/delete`, {
            method: "POST",
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({index})
        })
        const result = await data.json();

        getPhotos(result.myArr)
    }

    console.log(getResult)

    return (
        <div className="d-flex f-wrap j-center">
            {getResult &&
                getResult.map((x, i) =>
                    <div key={i} className="d-flex f-wrap f-column al-center">
                        <img className="imgSize" src={x.linkAddress} alt=""/>
                        <button onClick={() => deletePhoto(i)} className="btn d-flex ">Delete</button>
                    </div>)}
        </div>
    );
};

export default NewArr;