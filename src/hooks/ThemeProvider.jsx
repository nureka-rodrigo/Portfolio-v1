import {createContext, useContext, useEffect, useState} from "react";

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({children}) => {
    const [currentTheme, setCurrentTheme] = useState(
        localStorage.theme === "dark" ? "dark" : "light"
    );

    useEffect(() => {
        const ThemeSwitcher = () => {
            if (
                localStorage.theme === "dark" ||
                (!("theme" in localStorage) &&
                    window.matchMedia("(prefers-color-scheme: dark)").matches)
            ) {
                document.documentElement.classList.add("dark");
            } else {
                document.documentElement.classList.remove("dark");
            }
        };

        ThemeSwitcher();
    }, [currentTheme]);

    const toggleTheme = () => {
        const newTheme = currentTheme === "light" ? "dark" : "light";
        setCurrentTheme(newTheme);
        localStorage.theme = newTheme;
    };

    return (
        <ThemeContext.Provider value={{currentTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    );
};
