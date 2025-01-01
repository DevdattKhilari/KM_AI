import React from "react";
import { FaUser, FaEnvelope, FaPhone, FaRegComment } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-green-300 via-yellow-200 to-green-100 text-black"
    >
      {/* Navbar */}
      <div className="bg-green-100 flex justify-between items-center mb-6 h-16 p-5 fixed w-full shadow-md z-50">
        {/* Left Side (Logo) */}
        <div className="flex items-center">
          <img src="logobhoomi.png" alt="Bhoomi Logo" className="h-14 w-14" />
          <h1 className="text-2xl font-bold ml-2 text-green-800">Bhoomi</h1>
        </div>

        {/* Right Side (Signup and Go Back to Dashboard) */}
        <div className="flex items-center space-x-4">
          <a
            href="/"
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:scale-110 duration-300 shadow-lg"
          >
            Login
          </a>
          <a
            href="/dashboard"
            className="bg-blue-500 text-white py-2 px-4 rounded-md font-bold hover:scale-110 duration-300 shadow-lg"
          >
            Go Back to Dashboard
          </a>
          <button
            onClick={() => (window.location.href = "/register")}
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:scale-110 duration-300 shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Contact Us Section */}
      <div className="flex flex-col items-center justify-center h-full pt-20 px-6">
        <div className="max-w-lg bg-white p-10 rounded-xl shadow-2xl transform hover:shadow-xl transition-all">
          <h1 className="text-5xl font-bold mb-6 text-green-900 text-center">
            Contact Us
          </h1>
          <p className="text-lg mb-8 text-gray-700 text-center">
            Submit the form below to get in touch with us about{" "}
            <span className="text-green-800 font-bold">Bhoomi</span>.
          </p>

          <form
            action="https://getform.io/f/13a36658-67e4-4237-b8a5-2858ae8a035a"
            method="post"
            className="flex flex-col space-y-6"
          >
            {/* Name Field */}
            <div className="flex items-center space-x-3">
              <FaUser className="text-2xl text-green-700" />
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="flex-1 p-3 bg-transparent border-2 rounded-md text-black focus:outline-none border-green-600 placeholder-gray-600"
              />
            </div>

            {/* Email Field */}
            <div className="flex items-center space-x-3">
              <FaEnvelope className="text-2xl text-green-700" />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="flex-1 p-3 bg-transparent border-2 rounded-md text-black focus:outline-none border-green-600 placeholder-gray-600"
              />
            </div>

            {/* Phone Field */}
            <div className="flex items-center space-x-3">
              <FaPhone className="text-2xl text-green-700" />
              <input
                type="tel"
                name="phone"
                placeholder="Your Phone Number"
                className="flex-1 p-3 bg-transparent border-2 rounded-md text-black focus:outline-none border-green-600 placeholder-gray-600"
              />
            </div>

            {/* Message Field */}
            <div className="flex items-start space-x-3">
              <FaRegComment className="text-2xl text-green-700 mt-1" />
              <textarea
                name="message"
                rows="5"
                placeholder="How can we assist you with Bhoomi?"
                className="flex-1 p-3 bg-transparent border-2 rounded-md text-black focus:outline-none border-green-600 placeholder-gray-600"
              ></textarea>
            </div>

            {/* Submit Button */}
            <button className="text-white bg-gradient-to-b from-green-700 to-green-500 px-6 py-3 rounded-md font-bold hover:scale-105 duration-300 shadow-lg">
              Let's Talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
