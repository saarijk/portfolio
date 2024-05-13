import React, { useState } from 'react'

type Props = {}

function NewContact({ }: Props) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Implement form submission logic here, e.g., send formData to server
        console.log(formData);
        // Clear form fields after submission
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <>
            <div className="h-[55vh] w-full font-montserrat flex justify-center items-center">
                <div className="w-5/6 h-5/6 flex max-w-[1080px]">
                    <div className="w-1/2">
                        <h1 className="text-5xl font-bold text-left mb-[40px]">Contact Me</h1>
                        <p className="w-5/6">
                            If you have any inquiries or would like to connect, I encourage you to reach out to me through LinkedIn, or the contact form on this page!<br /><br />
                            Feel free to connect with me, and I'll be delighted to engage in meaningful conversations about projects, opportunities, or shared interests :)
                        </p>
                        <div className="gap-4 mt-8">
                            <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                                <button className="w-[150px] p-2 font-bold text-white bg-gray-800 mr-4 rounded-md hover:bg-white hover:text-black transition-all duration-300">
                                    Visit LinkedIn
                                </button>
                            </a>
                            <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                                <button className="w-[150px] p-2 font-bold text-white bg-gray-800 rounded-md hover:bg-white hover:text-black transition-all duration-300">
                                    Explore GitHub
                                </button>
                            </a>
                        </div>
                    </div>
                    <div className="w-1/2 max-w-[500px] mt-[50px] align-left">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your Name"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Your Email"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Subject"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    rows={4}
                                    placeholder="Your Message"
                                    required
                                />
                            </div>
                            <div className="flex items-center justify-between">
                                <button
                                    className="bg-gray-800 hover:bg-blue-700 transition-all duration-300 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                    type="submit"
                                >
                                    Send
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewContact