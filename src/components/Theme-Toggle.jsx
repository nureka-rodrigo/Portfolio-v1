import { useEffect, useState } from "react";
import { MdDarkMode, MdSunny } from "react-icons/md";

const ThemeButton = () => {
    const [currentTheme, setCurrentTheme] = useState(!("theme" in localStorage) ? "default" : localStorage.theme === "dark" ? "dark" : "light",
    );

    const themeIcons = {
        dark: <MdDarkMode className="h-5 w-5 text-white" />,
        light: <MdSunny className="h-5 w-5 text-black" />,
    };

    const ThemeSwitcher = () => {
        if (localStorage.theme === "dark" || (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    useEffect(() => {
        ThemeSwitcher();
    }, [currentTheme]);

    return (
        <>
            <button
                className="bg-grey-900 h-fit w-fit rounded-md dark:bg-black"
                onClick={() => {
                    const newTheme = currentTheme === "light" ? "dark" : "light";
                    setCurrentTheme(newTheme);
                    localStorage.theme = newTheme;
                }}
            >
                {currentTheme === "light" ? themeIcons.light : themeIcons.dark}
            </button>
        </>
    );
};

export default ThemeButton;
