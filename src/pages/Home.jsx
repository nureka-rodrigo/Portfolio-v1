import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import Transition from "../components/PageTransition.jsx";
import {TypeAnimation} from "react-type-animation";

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <section className="flex flex-col items-start justify-center flex-1">
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-col items-start pl-0 xl:pl-0 2xl:pl-36">
                            <h1 className="text-4xl sm:text-8xl font-bold text-black dark:text-white mb-5 sm:mb-10">
                                Hello,
                                <br/>
                                I’m&nbsp;
                                <TypeAnimation
                                    sequence={[
                                        'Nureka Rodrigo',
                                        2000,
                                        '',
                                    ]}
                                    wrapper="span"
                                    cursor={true}
                                    repeat={Infinity}
                                    className="animate-pulse"
                                />
                            </h1>
                            <h1 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-5 sm:mb-10">
                                Backend Developer
                            </h1>
                        </div>
                    </div>
                </section>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
};

export default Transition(Home);
