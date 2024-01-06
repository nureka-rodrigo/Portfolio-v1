import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Error404 from "./pages/404.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"projects"} element={<Projects/>}/>
                <Route path={"resume"} element={<Resume/>}/>
                <Route path={"contact"} element={<Contact/>}/>
                <Route path={"*"} element={<Error404/>}/>
            </Routes>
        </>
    )
}

export default App
