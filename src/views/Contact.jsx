import background from "../assets/background-contact.jpg";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const REGEX_EMAIL = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{3})+$/;
const EMAIL_JS_SERVICE_ID = import.meta.env.VITE_EMAIL_JS_SERVICE_ID;
const EMAIL_JS_TEMPLATE_ID = import.meta.env.VITE_EMAIL_JS_TEMPLATE_ID;
const EMAIL_JS_PUBLIC_KEY = import.meta.env.VITE_EMAIL_JS_PUBLIC_KEY;

const validateContactForm = (formData, setErrors) => {
    const errors = {};

    if (!formData.name) {
        errors.name = "Name is required.";
    } else if (formData.name.length > 20) {
        errors.name = "Name should not be longer than 20 characters.";
    }

    if (!formData.email) {
        errors.email = "Email is required.";
    } else if (!REGEX_EMAIL.test(formData.email)) {
        errors.email = "Email is invalid.";
    }

    setErrors(errors);
};

const Contact = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });
    const form = useRef();

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        validateContactForm({ ...formData, [name]: value }, setErrors);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                EMAIL_JS_SERVICE_ID,
                EMAIL_JS_TEMPLATE_ID,
                form.current,
                EMAIL_JS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    // TODO
                    setFormData({
                        name: "",
                        email: "",
                        message: "",
                    });
                }
            );
    };
    return (
        <section
            id="contact"
            className="relative overflow-hidden bg-blue-600 py-12"
        >
            <img
                src={background}
                width="2347"
                height="1244"
                className="absolute left-1/2 top-1/2 max-w-none -translate-x-1/2 -translate-y-1/2"
            />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
                <div className="mx-auto max-w-lg text-center">
                    <form
                        onSubmit={handleSubmit}
                        ref={form}
                        className="space-y-4 "
                    >
                        <h1 className="text-5xl text-blue-100 tracking-tight mb-6">
                            CONTACT US
                        </h1>
                        <div className="text-start mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Your name: (*)</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className={errors.name ? "border border-red-500 p-2 w-full shadow-sm" : "border border-gray-300 p-2 w-full shadow-sm"}
                            />
                            {errors.name && <span className="text-red-500">{errors.name}</span>}
                        </div>
                        <div className="text-start mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Your email: (*)</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className={errors.email ? "border border-red-500 p-2 w-full shadow-sm" : "border border-gray-300 p-2 w-full shadow-sm"}
                            />
                            {errors.email && <span className="text-red-500">{errors.email}</span>}
                        </div>

                        <div className="text-start mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2">Leave us a message:</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows="4"
                                className="border border-gray-300 p-2 w-full shadow-sm"
                            ></textarea>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={
                                    !formData.name ||
                                    errors.name ||
                                    errors.email
                                }
                                className="block w-full items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus:ring-2 focus:ring-blue-500 bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
