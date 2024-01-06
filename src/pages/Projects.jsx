import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Projects = () => {
    const data = [
        {
            title: "ABC University",
            description: "Explore a comprehensive Student Management System designed to streamline administrative tasks and enhance the academic experience.",
            tags: [
                "ReactJS",
                "TailwindCSS",
                "Python",
                "Django",
                "Django-Rest-Framework",
            ],
            link: "https://github.com/nureka-rodrigo/abc-university-frontend",
        },
        {
            title: "Railway Management System",
            description: "Revolutionizing railway operations with a robust system that manages schedules, bookings, and passenger information seamlessly.",
            tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
            link: "https://github.com/nureka-rodrigo/SLRMS",
        },
        {
            title: "Yummy Kitchen",
            description: "Discover and share delightful recipes on Yummy Kitchen, a user-friendly platform connecting food enthusiasts from around the world.",
            tags: [
                "HTML5",
                "CSS3",
                "JavaScript",
                "JSP",
                "Servlet",
                "MySQL",
                "Bootstrap",
            ],
            link: "https://github.com/nureka-rodrigo/Yummy-Kitchen",
        },
        {
            title: "ABC Hotel",
            description: "A Hotel Management System that simplifies the process of managing hotel operations and provides a seamless experience for guests.",
            tags: ["HTML5", "CSS3", "JavaScript", "PHP", "MySQL", "Bootstrap"],
            link: "https://github.com/nureka-rodrigo/ABC-Hotel",
        },
        {
            title: "GPA Calculator",
            description: "A simple, and straightforward GPA calculator empowers students to efficiently calculate their GPA by inputting the grades they've received, making academic assessment more accessible and user-friendly.",
            tags: ["C"],
            link: "https://github.com/nureka-rodrigo/GPA-Calculator",
        },
    ];

    return (
        <>
            <div className="flex flex-col min-h-screen min-w-fit">
                <Header />
                <section className="antialiased">
                    <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl dark:text-white">
                                Explore My Projects
                            </h2>
                            <p className="mt-4 text-base font-normal text-gray-500 sm:text-xl dark:text-gray-400">
                                Dive into a collection of my diverse projects
                                and discover the creativity and innovation
                                behind each one.
                            </p>
                        </div>
                        <div className="grid grid-cols-1 mt-12 text-center sm:mt-16 gap-x-20 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                            {data.map((item, index) => (
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
