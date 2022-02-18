import {BrowserRouter, Routes, Route} from "react-router-dom"
import Login from "./Page/login/Login";
import Home from "./Page/home/Home";
import Veiculos from "./Page/veiculos/Veiculos"
import Encomendas from "./Page/encomendas/Encomendas";


function App () {


    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/Home" element={<Home/>}/>
                    <Route path="/Veiculos" element={<Veiculos/>} />
                    <Route path="/Encomendas" element={<Encomendas/>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
};

export default App;