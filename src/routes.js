import Home from "componentes/Home";
import Video from "componentes/Video/Video";
import Cabecera from "componentes/comun/Header/Header";
import Footer from "componentes/comun/Footer/Footer";

//const { default: Home } = require("componentes/Home");
const { BrowserRouter, Routes, Route } = require("react-router-dom");

function AppRoutes(){
    return(
        <BrowserRouter>
        <Cabecera/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/video" element={<Video/>}></Route>
            </Routes>
        <Footer/>
        </BrowserRouter>
    )
}

export default AppRoutes;