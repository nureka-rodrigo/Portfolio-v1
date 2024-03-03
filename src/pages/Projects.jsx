import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import {ProjectData} from "../data/ProjectData.jsx";

const Projects = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen min-w-fit">
                <Header />
                <div className="py-8 lg:pt-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Explore My Projects
                    </h2>
                    <p className="font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        Dive into a collection of my diverse projects
                        and discover the creativity and innovation
                        behind each one.
                    </p>
                </div>
                <section className="antialiased">
                    <div className="max-w-screen-xl px-4 pb-8 mx-auto lg:px-6 sm:pb-16 lg:pb-24">
                        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {ProjectData.map((item, index) => (
                                <div key={index} className="space-y-4">
                                    <h3 className="text-2xl font-bold leading-tight text-gray-900 dark:text-white">
                                        {item.title}
                                    </h3>
                                    <p className="text-lg font-normal text-gray-500 dark:text-gray-400">
                                        {item.description}
                                    </p>
                                    <div className="space-x-2">
                                        {item.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tagIndex}
                                                className="my-2 bg-gray-100 text-gray-900 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-gray-300"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                    <br />
                                    <Link
                                        to={item.link}
                                        className="inline-flex w-full items-center justify-center rounded-lg bg-gray-800 px-4 py-2.5 text-white hover:bg-black focus:outline-none focus:ring-4 focus:ring-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 sm:w-auto"
                                    >
                                        <FaGithub className="mr-3 h-7 w-7" />
                                        <div className="text-left text-white">
                                            <div className="-mt-1 font-sans text-center text-sm font-semibold">
                                                View on the GitHub
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default Projects;
