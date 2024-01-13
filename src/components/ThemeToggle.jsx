import { MdDarkMode, MdSunny } from "react-icons/md";
import { useTheme } from "../hooks/ThemeProvider.jsx";

const ThemeButton = () => {
  const { currentTheme, toggleTheme } = useTheme();

  const themeIcons = {
    dark: <MdDarkMode className="h-5 w-5 text-white" />,
    light: <MdSunny className="h-5 w-5 text-black" />,
  };

  return (
    <>
      <button
        className="bg-grey-900 h-fit w-fit rounded-md dark:bg-black"
        onClick={toggleTheme}
      >
        {currentTheme === "light" ? themeIcons.light : themeIcons.dark}
      </button>
    </>
  );
};

export default ThemeButton;
