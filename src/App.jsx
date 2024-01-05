import './App.css'
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";

function App() {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<Home/>}/>
                <Route path={"projects"} element={<Projects/>}/>
                <Route path={"resume"} element={<Resume/>}/>
                <Route path={"contact"} element={<Contact/>}/>
            </Routes>
        </>
    )
}

export default App
