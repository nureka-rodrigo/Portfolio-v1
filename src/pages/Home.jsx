import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

const Home = () => {
    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <section className="flex flex-col items-start justify-center flex-1">
                    <div className="container px-5 py-10 mx-auto sm:py-24">
                        <div className="flex flex-col items-start">
                            <h1 className="text-4xl sm:text-8xl font-bold text-black dark:text-white mb-5 sm:mb-10">Hello,</h1>
                            <h1 className="text-4xl sm:text-8xl font-bold text-black dark:text-white mb-5 sm:mb-10">I’m
                                Nureka Rodrigo</h1>
                            <h1 className="text-xl sm:text-3xl font-bold text-black dark:text-white mb-5 sm:mb-10">Backend
                                Developer</h1>
                        </div>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    )
}

export default Home