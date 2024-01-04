import ThemeToggle from "./Theme-Toggle.jsx"
import {Link, useLocation} from "react-router-dom";

const Header = () => {

    let pathArray = useLocation().pathname.split("/")
    let lastPart = pathArray[pathArray.length - 1]

    return (
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-black">
                <div className="flex flex-wrap items-center justify-center mx-auto max-w-screen-xl">
                    <div className="flex items-center lg:order-2">
                        <ThemeToggle/>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <Link
                                    to={"/"}
                                    className={`block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${lastPart === "" ? "rounded-none border-b-2 border-white" : ""}`}
                                >
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"projects"}
                                    className={`block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${lastPart === "projects" ? "rounded-none border-b-2 border-white" : ""}`}
                                >
                                    Projects
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"resume"}
                                    className={`block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${lastPart === "resume" ? "rounded-none border-b-2 border-white" : ""}`}
                                >
                                    Resume
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to={"contact"}
                                    className={`block py-2 pr-4 pl-3 text-white rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white ${lastPart === "contact" ? "rounded-none border-b-2 border-white" : ""}`}
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
