import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/logo-dark.svg";

const LandingPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/home");
        }, 3000);

        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="flex justify-center items-center min-h-screen">
            <img
                className="h-16 w-auto dark:invert pulse-infinite"
                src={Logo}
                alt="Landing Logo"
            />
        </div>
    );
};

export default LandingPage;
