import "./App.css";
import {Route, Routes} from "react-router-dom";
import LandingPage from "./pages/Landing.jsx";
import Home from "./pages/Home.jsx";
import Projects from "./pages/Projects.jsx";
import Resume from "./pages/Resume.jsx";
import Contact from "./pages/Contact.jsx";
import Error404 from "./pages/404.jsx";
import Snowfall from "react-snowfall";
import About from "./pages/About.jsx";
import {useTheme} from "./hooks/ThemeProvider.jsx";

function App() {
    const {currentTheme} = useTheme();

    return (
        <>
            <Snowfall
                snowflakeCount={50}
                radius={[1, 1]}
                speed={[1, 2]}
                wind={[-0.5, 0.5]}
                color={currentTheme === 'dark' ? '#FFF' : '#000'}
                style={{position: "absolute", top: 0, left: 0, width: "100%", height: "100%"}}
            />
            <div className="bg-white dark:bg-black">
                <Routes>
                    <Route path={"/"} element={<LandingPage/>}/>
                    <Route path={"home"} element={<Home/>}/>
                    <Route path={"about"} element={<About/>}/>
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
