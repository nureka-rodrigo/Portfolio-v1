import {useTheme} from "../hooks/ThemeProvider.jsx";

const Footer = () => {
    const { currentTheme } = useTheme();

    return (
        <>
            <footer className="mt-auto">
                <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center flex justify-center transition duration-500">
                    <span className="text-sm text-black text-center dark:text-white transition duration-500">
                         Made with {currentTheme === "dark" ? "🤍" : "🖤"} by
                    </span>
                    <span className="text-sm text-black font-extrabold text-center dark:text-white transition duration-500">
                        &nbsp;Nureka Rodrigo
                    </span>
                </div>
            </footer>
        </>
    );
};

export default Footer;
