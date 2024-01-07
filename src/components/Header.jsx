import {Link, useLocation} from "react-router-dom";
import {useState} from "react";
import Logo from "../assets/img/logo-dark.svg"
import ThemeToggle from "./Theme-Toggle.jsx";
import {IoIosClose, IoIosMenu} from "react-icons/io";

const Header = () => {
    let pathArray = useLocation().pathname.split("/");
    let lastPart = pathArray[pathArray.length - 1];

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <header>
                <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
                    <div className="flex lg:flex-1">
                        <Link to="/" className="-m-1.5 p-1.5">
                            <span className="sr-only">Your Company</span>
                            <img
                                src={Logo}
                                className="mr-3 h-6 sm:h-9 dark:invert"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="flex lg:hidden">
                        <button type="button" onClick={toggleMenu}
                                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700">
                            <span className="sr-only">Open main menu</span>
                            <IoIosMenu className="h-6 w-6 text-black dark:text-white"/>
                        </button>
                    </div>
                    <div className="hidden lg:flex lg:gap-x-12">
                        <Link to="/"
                              className={`text-sm font-semibold leading-6 block py-2 pr-4 pl-3 lg:text-primary-700 lg:p-0 text-gray-900 dark:text-white ${lastPart === "" ? "rounded-none border-b-2 border-black dark:border-white" : ""}`}>Home</Link>
                        <Link to="/projects"
                              className={`text-sm font-semibold leading-6 block py-2 pr-4 pl-3 lg:text-primary-700 lg:p-0  text-gray-900 dark:text-white ${lastPart === "projects" ? "rounded-none border-b-2 border-black dark:border-white" : ""}`}>Projects</Link>
                        <Link to="/resume"
                              className={`text-sm font-semibold leading-6 block py-2 pr-4 pl-3 lg:text-primary-700 lg:p-0  text-gray-900 dark:text-white ${lastPart === "resume" ? "rounded-none border-b-2 border-black dark:border-white" : ""}`}>Resume</Link>
                        <Link to="contact"
                              className={`text-sm font-semibold leading-6 block py-2 pr-4 pl-3 lg:text-primary-700 lg:p-0  text-gray-900 dark:text-white ${lastPart === "contact" ? "rounded-none border-b-2 border-black dark:border-white" : ""}`}>Contact</Link>
                    </div>
                    <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                        <ThemeToggle/>
                    </div>
                </nav>
                <div className={`lg:hidden ${menuOpen ? 'block' : 'hidden'}`} role="dialog" aria-modal="true">
                    <div className="fixed inset-0 z-10"></div>
                    <div
                        className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 dark:bg-black">
                        <div className="flex items-center justify-between">
                            <button type="button" onClick={toggleMenu}
                                    className="-m-2.5 rounded-md p-2.5 text-gray-700">
                                <span className="sr-only">Close menu</span>
                                <IoIosClose className="h-8 w-8 text-black dark:text-white"/>
                            </button>
                            <ThemeToggle/>
                        </div>
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link
                                    to={"/"}
                                    className={`block py-2 pr-4 pl-3 lg:text-gray-900 lg:p-0 dark:text-white ${lastPart === "" ? "rounded-none border-b-2 border-gray-900 dark:border-white" : ""}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/projects"}
                                    className={`block py-2 pr-4 pl-3 lg:text-gray-900 lg:p-0 dark:text-white ${lastPart === "projects" ? "rounded-none border-b-2 border-gray-900 dark:border-white" : ""}`}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/resume"}
                                    className={`block py-2 pr-4 pl-3 lg:text-gray-900 lg:p-0 dark:text-white ${lastPart === "resume" ? "rounded-none border-b-2 border-gray-900 dark:border-white" : ""}`}
                                >
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"/contact"}
                                    className={`block py-2 pr-4 pl-3 lg:text-primary-700 lg:p-0  text-gray-900 dark:text-white ${lastPart === "contact" ? "rounded-none border-b-2 border-white" : ""}`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
