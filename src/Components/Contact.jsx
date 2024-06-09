import React from 'react'
import Header from './Header'

function Contact() {
    return (
        <div>
            <Header />
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col justify-center items-center p-4">
                <h1 className="text-white text-5xl font-extrabold mb-6 font-sans">Contact Us</h1>
                <p className="text-white text-xl mb-8 text-center max-w-2xl font-light">
                    We'd love to hear from you! Whether you have a question about features, pricing, or anything else, our team is ready to answer all your questions.
                </p>
                <form className="bg-white p-8 rounded-lg shadow-lg w-full max-w-lg">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="name">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Your name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-lg font-semibold mb-2" htmlFor="message">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-blue-500"
                            placeholder="Your message"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition duration-300 ease-in-out text-lg font-semibold"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact