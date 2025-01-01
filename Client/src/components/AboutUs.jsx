// AboutUs.jsx

import React from "react";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

const AboutUs = () => {
  return (
    <section className="about bg-gradient-to-b from-green-200 via-emerald-100 to-yellow-50 w-full min-h-screen ">
      <div className="bg-green-200 flex justify-between items-center mb-6 h-16 p-5 fixed w-full   ">
        {/* Left Side (Logo) */}
        <div className="flex items-center">
          <img src="logobhoomi.png" alt="Bhoomi Logo" className="h-14 w-14" />
          <h1 className="text-2xl font-bold ml-2 ">Bhoomi</h1>
        </div>

        {/* Right Side (Signup and Go Back to Dashboard) */}
        <div className="flex items-center  space-x-4">
          <a
            href="/"
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:scale-110 transition-transform duration-200 shadow-lg "
          >
            Login
          </a>
          <a
            href="/dashboard"
            className="bg-yellow-500 text-white py-2 px-4 rounded-md font-bold hover:scale-110 transition-transform duration-200 shadow-lg"
          >
            Go Back to Dashboard
          </a>
          <button
            onClick={() => (window.location.href = "/register")}
            className="bg-yellow-500 text-white py-2 px-4 rounded-md hover:scale-110 transition-transform duration-200 shadow-lg"
          >
            Sign Up
          </button>
        </div>
      </div>

      {/* Main Section */}
      <div className="main p-10 flex flex-col md:flex-row justify-around items-center space-y-10 md:space-y-0">
        {/* About Us Text */}
        <div className="abt-text w-full md:w-2/5 p-5">
          <h1
            className="text-green-900 mb-8 text-5xl font-bold font-yatra text-center"
            style={{
              fontFamily: "revert-layer",
              WebkitTextStroke: "1.5px black",
            }}
          >
            About <span className="text-white">Us</span>
          </h1>
          <p className="text-gray-800 font-semibold text-lg p-3 mb-5">
            Bhoomi is a revolutionary agricultural platform dedicated to
            transforming farming practices with the power of advanced
            technology. Our mission is to empower farmers by providing
            intelligent tools and actionable insights to improve productivity
            and sustainable farming.
          </p>
          <p className="text-gray-800 text-lg font-semibold p-3">
            Using machine learning and weather analytics, Bhoomi offers precise
            soil analysis, crop recommendations, irrigation schedules, and
            fertilization plans. We aim to improve farming efficiency while
            promoting environmental sustainability, ensuring a greener future
            for agriculture.
          </p>
        </div>

        {/* Developers Section */}
        <div className="team-container w-full md:w-2/5">
          <h1 className="text-center mt-10 text-3xl font-bold text-green-900 mb-5">
            Meet the{" "}
            <span
              style={{
                color: "#FC0050",
              }}
            >
              Team
            </span>
          </h1>

          <div className="team grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Team Member 1 */}
            <div className="team-member bg-white shadow-lg rounded-lg p-5 text-center">
              <div className="team-member-photo w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Img"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-green-800 mt-4">S1</h3>
              <p className="text-gray-600 mt-2">
                Passionate about leveraging technology for sustainable farming
                solutions.
              </p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 text-2xl hover:text-green-900"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 text-2xl hover:text-green-900"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="team-member bg-white shadow-lg rounded-lg p-5 text-center">
              <div className="team-member-photo w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Img"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-green-800 mt-4">S2</h3>
              <p className="text-gray-600 mt-2">
                Innovating agricultural practices with cutting-edge
                technologies.
              </p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href="https://www.instagram.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 text-2xl hover:text-green-900"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://www.linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 text-2xl hover:text-green-900"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="team-member bg-white shadow-lg rounded-lg p-5 text-center">
              <div className="team-member-photo w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Img"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-green-800 mt-4">S3</h3>
              <p className="text-gray-600 mt-2">
                Focused on providing data-driven agricultural insights.
              </p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 text-2xl hover:text-green-900"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 text-2xl hover:text-green-900"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Team Member 4 */}
            <div className="team-member bg-white shadow-lg rounded-lg p-5 text-center">
              <div className="team-member-photo w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
                <img
                  src="https://via.placeholder.com/150"
                  alt="Img"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-bold text-green-800 mt-4">S4</h3>
              <p className="text-gray-600 mt-2">
                Bridging technology and agriculture for sustainable growth.
              </p>
              <div className="flex justify-center mt-4 space-x-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 text-2xl hover:text-green-900"
                >
                  <FaInstagram />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-700 text-2xl hover:text-green-900"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
