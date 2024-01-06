import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import { Link } from "react-router-dom";

const Error404 = () => {
    return (
        <>
            <div className="flex flex-col max-h-screen min-w-fit">
                <Header />
                <section className="flex items-center justify-center h-screen">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <div className="mx-auto max-w-screen-sm text-center">
                            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl dark:text-white">
                                404
                            </h1>
                            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl dark:text-white">
                                Something&apos;s missing.
                            </p>
                            <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
                                Sorry, we can&apos;t find that page. You&apos;ll
                                find lots to explore on the home page.
                            </p>
                            <Link
                                to="/"
                                className="inline-flex text-white dark:text-gray-900 bg-gray-800 dark:bg-white hover:bg-black dark:hover:bg-gray-200 focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900 my-4"
                            >
                                Back to Homepage
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </div>
        </>
    );
};

export default Error404;
