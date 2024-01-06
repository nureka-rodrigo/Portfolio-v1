import "./App.css";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Error404 from "./pages/404.jsx";
import Snowfall from "react-snowfall";

function App() {

    return (
        <>
            <Snowfall
                snowflakeCount={50}
                radius={[0.5, 0.5]}
                speed={[1, 2]}
                wind={[-0.5, 0.5]}
                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
            />
            <div className="bg-white dark:bg-black">
                <Routes>
                    <Route path={"/"} element={<Home/>}/>
                    <Route path={"projects"} element={<Projects/>}/>
                    <Route path={"resume"} element={<Resume/>}/>
                    <Route path={"contact"} element={<Contact/>}/>
                    <Route path={"*"} element={<Error404/>}/>
                </Routes>
            </div>
        </>
    );
}

export default App;
