import './index.css'
import Header from './header'
import Home from './Home'
import Devlog from './Devlogs'
import Downloads from './Downloads'
import { HashRouter, Routes, Route} from "react-router-dom";

export default function App(){
    return(
        <>
            <HashRouter>
                <Header/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                        <Route path="/home" element={<Home/>}/>
                        <Route path="/devlogs" element={<Devlog/>}/>
                        <Route path="/downloads" element={<Downloads/>}/>
                        <Route path="*" element={<h1>404 Page Not Found!</h1>} />
                    </Routes>
            </HashRouter>
        </>
    )
}