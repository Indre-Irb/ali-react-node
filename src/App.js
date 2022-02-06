import './App.css';
import MyComponent from "./components/myComponent";
import {useContext, useEffect, useRef, useState} from "react";
import Login from "./components/Login";
import Register from "./components/Register";
import Post from "./components/Post";
import AllPost from "./components/AllPost";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import SingleUserPosts from "./components/SingleUserPosts";
import SinglePost from "./components/SinglePost";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";


//Task1
// function App() {
//
//     const [getResult,setResult] = useState({})
//
//     const input = useRef()
//
//
//     async function check() {
//         const domain = input.current.value
//         const send = await fetch(`http://localhost:4000/check/${domain}`)
//         const result = await send.json();
//
//         console.log(result)
//
//         const keys = Object.keys(result.info)
//
//         setResult(result.info[keys[0]])
//
//     }
//
//     return (
//         <div className="App">
//             <div>
//                 <input type="text" ref={input} placeholder="Write domain"/>
//                 <button onClick={check}>Enter</button>
//                 <textarea name="" id="" value={getResult["Domain Name"]}/>
//             </div>
//         </div>
//     );
// }
//
// export default App;

//Task2

// function App() {
//
//     const input = useRef()
//     const [getResult,setResult] = useState([])
//
//     async function randomUsers() {
//         const num = input.current.value
//         const data = await fetch(`http://localhost:4000/${num}`)
//         const result =  await data.json();
//         setResult(result.arr)
//     }
//     console.log(getResult)
//
//     return (
//         <div className="App">
//             <div>
//                 <input type="text" ref={input} placeholder="Write domain"/>
//                 <button onClick={randomUsers}>Enter</button>
//             </div>
//             <div>
//                 {getResult.map((x,i) => <div key={i}>
//                     <h1>{x.name}</h1>
//                     <img src={x.image} alt=""/>
//                     <h3>{x.city}</h3>
//                 </div>)}
//             </div>
//         </div>
//     );
// }
//
// export default App;

//Task3


// function App() {
//
// const inputTwo = {
//     login: useRef(),
//     password: useRef()
// }
//
// const input = {
//     email: useRef(),
//     pass1: useRef(),
//     pass2: useRef()
// }
//
// const sendNum = useRef()
// const myNum = useRef()
//
//
// const [getResult, setResult] = useState("")
// const [getLoginResult, setLoginResult] = useState("")
// const [getNumber,setNumber] = useState(null)
//
// async function userDetails() {
//     const user = {
//         email: input.email.current.value,
//         pass1: input.pass1.current.value,
//         pass2: input.pass2.current.value,
//     }
//
//     const data = await fetch(`http://localhost:4000/`, {
//         method: "POST",
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify({
//             email: user.email,
//             pass1: user.pass1,
//             pass2: user.pass2
//         })
//     })
//     const result = await data.json();
//     setLoginResult(result.message)
// }
//
// async function loginDetails() {
//     const logInfo = {
//         login: inputTwo.login.current.value,
//         password: inputTwo.password.current.value,
//     }
//
//     const data = await fetch(`http://localhost:4000/login`, {
//         method: "POST",
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify({
//             login: logInfo.login,
//             password: logInfo.password
//         })
//     })
//     const result = await data.json();
//     setLoginResult(result.message)
// }
//
// async function deleteAccount() {
//     const logInfo = {
//         login: inputTwo.login.current.value,
//         password: inputTwo.password.current.value,
//     }
//
//     const data = await fetch(`http://localhost:4000/delete`, {
//         method: "POST",
//         headers: {
//             'content-type': 'application/json',
//         },
//         body: JSON.stringify({
//             login: logInfo.login,
//             password: logInfo.password
//         })
//     })
//     const result = await data.json();
//     console.log(result)
// }
//
// async function sendNumber (){
//     const number = sendNum.current.value
//     console.log(number)
//     const send = await fetch(`http://localhost:4000/${number}`)
//     const result = await send.json();
//
//     setNumber(result.data)
// }
//
//     return (
//         <div className="App">
//             <div>
//                 <input type="text" ref={input.email} placeholder="Write email"/>
//                 <input type="text" ref={input.pass1} placeholder="Write pass1"/>
//                 <input type="text" ref={input.pass2} placeholder="Write pass2"/>
//                 <button onClick={userDetails}>Register</button>
//             </div>
//             <div>
//                 <h3>{getResult}</h3>
//             </div>
//
//             <div>
//                 <input type="text" ref={inputTwo.login}/>
//                 <input type="text" ref={inputTwo.password}/>
//                 <button onClick={loginDetails}>Login</button>
//                 <button onClick={deleteAccount}>Delete account</button>
//             </div>
//             <div>
//                 <h3>{getLoginResult}</h3>
//             </div>
//
//             <div>
//                 <input type="text" ref={sendNum}/>
//                 <button onClick={sendNumber}>Send</button>
//             </div>
//
//             <div>
//                 {getNumber}
//             </div>
//
//             <div>
//                 <input type="text" ref={myNum}/>
//             </div>
//         </div>
//     );
// }
//
// export default App;

//Task 4

// function App() {
//
//
//     return (
//         <div className="App">
//             <MyComponent/>
//         </div>
//     );
// }
//
// export default App;

//Middleware Task1
// function App() {
//
//     const [getInfo, setInfo] = useState([])
//     const [getIndex, setIndex] = useState(null)
//     const [getMessage, setMessage] = useState("")
//
//     const email = useRef()
//     const title = useRef()
//     const description = useRef()
//     const username = useRef()
//     const pass1 = useRef()
//     const pass2 = useRef()
//
//     const emailTwo = useRef()
//     const titleTwo = useRef()
//     const descriptionTwo = useRef()
//     const usernameTwo = useRef()
//
//
//     async function submit() {
//         const data = await fetch(`http://localhost:4000/info`, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: email.current.value,
//                 title: title.current.value,
//                 description: description.current.value,
//                 username: username.current.value,
//                 pass1: pass1.current.value,
//                 pass2: pass2.current.value
//             })
//         })
//         const result = await data.json();
//         if (!result.error){
//             setMessage("")
//         setInfo(result)
//         } else {
//             setMessage(result.error)
//         }
//     }
//
//     async function removePost(i) {
//         const data = await fetch(`http://localhost:4000/deletePost`, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify({i})
//         })
//         const result = await data.json();
//         setInfo(result)
//     }
//
//     console.log(getInfo)
//
//     async function updatePost(post, index) {
//         console.log(index)
//         console.log(post)
//         const data = await fetch(`http://localhost:4000/singlePost`, {
//             method: "POST",
//             headers: {
//                 'content-type': 'application/json',
//             },
//             body: JSON.stringify({
//                 email: emailTwo.current.value,
//                 title: titleTwo.current.value,
//                 description: descriptionTwo.current.value,
//                 username: usernameTwo.current.value,
//                 pass1: post.pass1,
//                 pass2: post.pass2,
//                 index
//             })
//         })
//         const result = await data.json();
//
//         setInfo(result)
//         setIndex(null)
//     }
//
//     function editPost(index) {
//         setIndex(index)
//     }
//
//     return (
//         <div className="App">
//             {getMessage && <h1>{getMessage}</h1>}
//             <div>
//                 <input type="text" ref={email} placeholder="Write Email"/>
//                 <input type="text" ref={title} placeholder="Write Title"/>
//                 <input type="text" ref={description} placeholder="Write Description"/>
//                 <input type="text" ref={username} placeholder="Write Username"/>
//                 <input type="text" ref={pass1} placeholder="Write PasswordOne"/>
//                 <input type="text" ref={pass2} placeholder="Write PasswordTwo"/>
//                 <button onClick={submit}>Submit</button>
//             </div>
//             <div className="d-flex f-wrap j-center">
//                 {getInfo.data &&
//                     getInfo.data.map((x, i) => <div className="card d-flex f-column al-center" key={i}>
//                         {i === getIndex ? <input type="text" ref={usernameTwo} defaultValue={x.username}/> :
//                             <h2>{x.username}</h2>}
//                         {i === getIndex ? <input type="text" ref={emailTwo} defaultValue={x.email}/> :
//                             <h5>{x.email}</h5>}
//                         {i === getIndex ? <input type="text" ref={titleTwo} defaultValue={x.title}/> :
//                             <h4>{x.title}</h4>}
//                         {i === getIndex ? <input type="text" ref={descriptionTwo} defaultValue={x.description}/> :
//                             <h6>{x.description}</h6>}
//                         <button onClick={() => removePost(i)} className="button">Delete Post</button>
//                         <div className="d-flex">
//                             <button onClick={() => editPost(i)} className="button">Edit Post</button>
//                             <button onClick={() => updatePost(x, i)} className="button">Update Post</button>
//                         </div>
//                     </div>)}
//             </div>
//         </div>
//
//     );
// }
//
// export default App;

// Middleware Task2
//
// function App() {
//
//
//
//     const [getSecretKey, setSecretKey] = useState(null)
//     const [getAllPosts, setAllPosts] = useState([])
//     const [getOneUserPosts, setOneUserPosts] = useState([])
//     const [getSinglePost, setSinglePost] = useState([])
//
//     function addPost(posts) {
//         setAllPosts(posts)
//     }
//
//
//     function key(userKey) {
//         setSecretKey(userKey)
//     }
//
//     function oneUserPosts(posts) {
//         setOneUserPosts(posts)
//     }
//
//     function postSingle (post){
//         setSinglePost(post)
//     }
//
//     console.log(getSinglePost)
//
//     return (
//         <div className="App">
//             <BrowserRouter>
//                 <Register/>
//                 <Login userSecretKey={key}/>
//                 {getSecretKey && <Post showPosts={addPost} getSecretKey={getSecretKey}/>}
//                 <Routes>
//                     <Route path="/" element={<AllPost getAllPosts={getAllPosts} oneUserPosts={oneUserPosts} singlePost={postSingle}/>}/>
//                     <Route path="/singlePost" element={<SinglePost getSinglePost={getSinglePost}/>}/>
//                 <Route path="/singleUserPost" element={<SingleUserPosts sendPosts={getOneUserPosts}/>}/>
//                 </Routes>
//             </BrowserRouter>
//         </div>
//     );
// }
//
// export default App;

// Middleware Task3

import MainContext from "./context/myContext";

function App() {

    const [getProduct, setProduct] = useState([])

    return (
        <div className="App">
            <MainContext.Provider value={{getProduct, setProduct}}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<MainPage/>}/>
                    <Route path="/product" element={<ProductPage/>}/>
                </Routes>
            </BrowserRouter>
            </MainContext.Provider>
        </div>
    );
}

export default App;

