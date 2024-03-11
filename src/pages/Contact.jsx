import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useState} from "react";
import {Button, Textarea, TextInput} from "flowbite-react";
import * as emailjs from "@emailjs/browser";
import {AiOutlineLoading} from "react-icons/ai";
import {FaGithub, FaInstagram, FaLinkedin} from "react-icons/fa";
import {Link} from "react-router-dom";
import {IoMail} from "react-icons/io5";
import Transition from "../components/PageTransition.jsx";

const Contact = () => {
    const [inputErrorName, setInputErrorName] = useState(null);
    const [inputErrorEmail, setInputErrorEmail] = useState(null);
    const [inputErrorSubject, setInputErrorSubject] = useState(null);
    const [inputErrorMessage, setInputErrorMessage] = useState(null);

    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [subject, setSubject] = useState(null);
    const [message, setMessage] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const validateName = (e) => {
        const data = e.target.value;

        if (data === "") {
            setInputErrorName("This field can not be empty!");
            setName(null);
        } else {
            setInputErrorName(null);
            setName(data);
        }
    };

    const validateEmail = (e) => {
        const data = e.target.value;

        if (data === "") {
            setInputErrorEmail("This field can not be empty!");
            setEmail(null);
        } else {
            setInputErrorEmail(null);
            setEmail(data);
        }
    };

    const validateSubject = (e) => {
        const data = e.target.value;

        if (data === "") {
            setInputErrorSubject("This field can not be empty!");
            setSubject(null);
        } else {
            setInputErrorSubject(null);
            setSubject(data);
        }
    };

    const validateMessage = (e) => {
        const data = e.target.value;

        if (data === "") {
            setInputErrorMessage("This field can not be empty!");
            setMessage(null);
        } else {
            setInputErrorMessage(null);
            setMessage(data);
        }
    };

    const submitForm = (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(e.target).entries());

        if (
            data.from_name === "" &&
            data.from_email === "" &&
            data.subject === "" &&
            data.message === ""
        ) {
            setInputErrorName("This field can not be empty!");
            setInputErrorEmail("This field can not be empty!");
            setInputErrorSubject("This field can not be empty!");
            setInputErrorMessage("This field can not be empty!");
        } else if (data.from_name === "") {
            setInputErrorName("This field can not be empty!");
        } else if (data.from_email === "") {
            setInputErrorEmail("This field can not be empty!");
        } else if (data.subject === "") {
            setInputErrorSubject("This field can not be empty!");
        } else if (data.message === "") {
            setInputErrorMessage("This field can not be empty!");
        } else {
            setInputErrorName(null);
            setInputErrorEmail(null);
            setInputErrorSubject(null);
            setInputErrorMessage(null);

            setIsLoading(true);

            const formParameters = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message,
            };

            emailjs
                .send(
                    import.meta.env.VITE_SERVICE_ID,
                    import.meta.env.VITE_TEMPLATE_ID,
                    formParameters,
                    import.meta.env.VITE_PUBLIC_KEY,
                )
                .then(
                    (response) => {
                        if (response.status === 200) {
                            setIsLoading(false);
                            setName(null);
                            setEmail(null);
                            setSubject(null);
                            setMessage(null);
                        }
                    },
                    (error) => {
                        setIsLoading(false);
                        console.log(error.text);
                    },
                );
        }
    };

    return (
        <>
            <div className="flex flex-col min-h-screen">
                <Header/>
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                        Contact Me
                    </h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                        I welcome the opportunity to connect with you. Whether
                        you have inquiries about my work, collaboration
                        proposals, or just want to say hello, feel free to reach
                        out. I am always eager to engage with new ideas and
                        projects.
                    </p>
                    <form className="space-y-8" onSubmit={(e) => submitForm(e)}>
                        <div>
                            <TextInput
                                type="text"
                                id="name"
                                name="from_name"
                                placeholder="Name"
                                value={name || ''}
                                helperText={
                                    <span className="text-red-500">
                                        {inputErrorName}
                                    </span>
                                }
                                onChange={(e) => validateName(e)}
                            />
                        </div>
                        <div>
                            <TextInput
                                type="email"
                                id="email"
                                name="from_email"
                                placeholder="Email"
                                value={email || ''}
                                helperText={
                                    <span className="text-red-500">
                                        {inputErrorEmail}
                                    </span>
                                }
                                onChange={(e) => validateEmail(e)}
                            />
                        </div>
                        <div>
                            <TextInput
                                type="text"
                                id="subject"
                                name="subject"
                                placeholder="Subject"
                                value={subject || ''}
                                helperText={
                                    <span className="text-red-500">
                                        {inputErrorSubject}
                                    </span>
                                }
                                onChange={(e) => validateSubject(e)}
                            />
                        </div>
                        <div className="sm:col-span-2">
                            <Textarea
                                id="message"
                                name="message"
                                rows="6"
                                placeholder="Message"
                                value={message || ''}
                                helperText={
                                    <span className="text-red-500">
                                        {inputErrorMessage}
                                    </span>
                                }
                                onChange={(e) => validateMessage(e)}
                            />
                        </div>
                        <div className="flex justify-center items-center mx-auto">
                            <Button
                                type="submit"
                                className="text-white dark:text-gray-900 bg-gray-800 dark:bg-white hover:!bg-black dark:hover:!bg-gray-200 font-bold text-center uppercase align-middle select-none font-sans transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-sm py-1 px-7 rounded-lg shadow-md shadow-blue-gray-500/10 hover:shadow-lg hover:shadow-blue-gray-500/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none block hover:scale-[1.02] focus:scale-[1.02] active:scale-100"
                                isProcessing={isLoading}
                                processingSpinner={
                                    <AiOutlineLoading className="h-6 w-6 animate-spin"/>
                                }
                            >
                                Send message
                            </Button>
                        </div>
                    </form>
                </div>
                <div className="flex items-center justify-center">
                    <hr className="border-t border-gray-300 w-3/4 max-w-screen-xl"/>
                </div>
                <div className="p-4 mx-auto max-w-screen-xl text-center lg:py-8">
                    <div className="px-4 mx-auto text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
                        <span className="text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                            Find me on
                        </span>
                        <div
                            className="flex flex-wrap justify-center items-center mt-8 text-gray-500 sm:justify-between">
                            <Link
                                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                                to="https://github.com/nureka-rodrigo"
                            >
                                <FaGithub className="h-8 w-8"/>
                            </Link>
                            <Link
                                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                                to="https://www.linkedin.com/in/nureka-rodrigo"
                            >
                                <FaLinkedin className="h-8 w-8"/>
                            </Link>
                            <Link
                                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                                to="https://www.instagram.com/nureka_rodrigo"
                            >
                                <FaInstagram className="h-8 w-8"/>
                            </Link>
                            <Link
                                className="mr-5 mb-5 lg:mb-0 hover:text-gray-800 dark:hover:text-gray-400"
                                to="mailto:nurekadulshanmc@gmail.com"
                            >
                                <IoMail className="h-8 w-8"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <Footer className="mt-auto"/>
            </div>
        </>
    );
};

export default Transition(Contact);
