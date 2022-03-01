import {BrowserRouter, Routes, Route} from "react-router-dom"
import Encomendas from "../Page/encomendas";
import Login from "../Page/login";
import Main from "../Page/main";
import Veiculos from "../Page/veiculos";


const RouterList = () => {


    return (
        <>
           <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login/>} />
                    <Route path="/main" element={<Main/>}/>
                    <Route path="/veiculos" element={<Veiculos/>} />
                    <Route path="/encomendas" element={<Encomendas/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default RouterList;


