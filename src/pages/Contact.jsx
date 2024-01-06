import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import {useState} from "react";
import {Button, Textarea, TextInput} from "flowbite-react";
import {toast} from "react-toastify";
import {ToastSettings} from "../data/ToastSettings.jsx";
import * as emailjs from "@emailjs/browser";
import {AiOutlineLoading} from "react-icons/ai";

const Contact = () => {
    const [inputErrorName, setInputErrorName] = useState(null)
    const [inputErrorEmail, setInputErrorEmail] = useState(null)
    const [inputErrorSubject, setInputErrorSubject] = useState(null)
    const [inputErrorMessage, setInputErrorMessage] = useState(null)

    const [name, setName] = useState(null)
    const [email, setEmail] = useState(null)
    const [subject, setSubject] = useState(null)
    const [message, setMessage] = useState(null)

    const [isLoading, setIsLoading] = useState(false)

    const validateName = (e) => {
        const data = e.target.value

        if (data === "") {
            setInputErrorName("This field can not be empty!")
        } else {
            setInputErrorName(null)
        }
    }

    const validateEmail = (e) => {
        const data = e.target.value

        if (data === "") {
            setInputErrorEmail("This field can not be empty!")
        } else {
            setInputErrorEmail(null)
        }
    }

    const validateSubject = (e) => {
        const data = e.target.value

        if (data === "") {
            setInputErrorSubject("This field can not be empty!")
        } else {
            setInputErrorSubject(null)
        }
    }

    const validateMessage = (e) => {
        const data = e.target.value

        if (data === "") {
            setInputErrorMessage("This field can not be empty!")
        } else {
            setInputErrorMessage(null)
        }
    }

    const submitForm = (e) => {
        e.preventDefault()
        const data = Object.fromEntries(new FormData(e.target).entries())
        const formData = new FormData(e.target)

        if (data.from_name === "" && data.from_email === "" && data.subject === "" && data.message === "") {
            setInputErrorName("This field can not be empty!")
            setInputErrorEmail("This field can not be empty!")
            setInputErrorSubject("This field can not be empty!")
            setInputErrorMessage("This field can not be empty!")
        } else if (data.from_name === "") {
            setInputErrorName("This field can not be empty!")
        } else if (data.from_email === "") {
            setInputErrorEmail("This field can not be empty!")
        } else if (data.subject === "") {
            setInputErrorSubject("This field can not be empty!")
        } else if (data.message === "") {
            setInputErrorMessage("This field can not be empty!")
        } else {
            setInputErrorName(null)
            setInputErrorEmail(null)
            setInputErrorSubject(null)
            setInputErrorMessage(null)

            setName(formData.get('from_name'))
            setEmail(formData.get('from_email'))
            setSubject(formData.get('subject'))
            setMessage(formData.get('message'))

            setIsLoading(true)

            const formParameters = {
                from_name: name,
                from_email: email,
                subject: subject,
                message: message
            }

            emailjs.send(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, formParameters, import.meta.env.VITE_PUBLIC_KEY)
                .then((response) => {
                    if (response.status === 200) {
                        toast.success('Message received', {
                            ...ToastSettings
                        })
                        console.log(response.text);
                        setIsLoading(false)
                    }
                }, (error) => {
                    toast.error('An error occurred', {
                        ...ToastSettings
                    })
                    setIsLoading(false)
                    console.log(error.text);
                });
        }
    }

    return (
        <>
            <div className="flex flex-col min-h-screen min-w-fit">
                <Header/>
                <section className="bg-white dark:bg-black">
                    <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                            Contact Me
                        </h2>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                            I welcome the opportunity to connect with you. Whether you have inquiries about my work,
                            collaboration proposals, or just want to say hello, feel free to reach out. I am always
                            eager to engage with new ideas and projects.
                        </p>
                        <form className="space-y-8" onSubmit={(e) => submitForm(e)}>
                            <div>
                                <TextInput
                                    type="text"
                                    id="name"
                                    name="from_name"
                                    placeholder="Name"
                                    helperText={
                                        <span className="text-red-500">{inputErrorName}</span>
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
                                    helperText={
                                        <span className="text-red-500">{inputErrorEmail}</span>
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
                                    helperText={
                                        <span className="text-red-500">{inputErrorSubject}</span>
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
                                    helperText={
                                        <span className="text-red-500">{inputErrorMessage}</span>
                                    }
                                    onChange={(e) => validateMessage(e)}
                                />
                            </div>
                            <div className="flex justify-center items-center mx-auto">
                                <Button
                                    type="submit"
                                    className="text-white dark:text-gray-900 bg-black dark:bg-white hover:!bg-black dark:hover:!bg-white"
                                    isProcessing={isLoading}
                                    processingSpinner={<AiOutlineLoading className="h-6 w-6 animate-spin"/>}>
                                    Send message
                                </Button>
                            </div>
                        </form>
                    </div>
                </section>
                <Footer/>
            </div>
        </>
    );
};

export default Contact;
