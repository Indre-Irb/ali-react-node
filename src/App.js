import './App.css';
import MyComponent from "./components/myComponent";
import {useContext, useEffect, useRef, useState} from "react";
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import MainPage from "./pages/MainPage";
import ProductPage from "./pages/ProductPage";


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

