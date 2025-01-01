import React from "react";
import { FaHome, FaShoppingCart,FaGlobe } from "react-icons/fa";
import { Link } from "react-router-dom";
import { RiTeamFill, RiQuestionAnswerFill } from "react-icons/ri";

const Sidebar = () => {
  return (
    <div className="sideBar grid h-full sticky top-0 w-64 bg-gradient-to-b from-green-300 via-green-200 to-green-100 text-black shadow-lg p-6">
      {/* Logo Section */}
      <div className="logoDiv flex flex-col items-center mb-8">
        <img
          src="logobhoomi.png"
          alt="Bhoomi Logo"
          className="w-28 h-24 rounded-full shadow-lg"
        />
        <h2 className="text-3xl font-extrabold text-green-800 mt-4 font-yatra">
          Bhoomi
        </h2>
      </div>

      {/* Menu Section */}
      <div className="menuDiv">
        <h3 className="text-2xl font-bold text-green-900 mb-6 px-2">
          Quick Menu
        </h3>
        <ul className="menuLists grid gap-4">
          {/* What is Bhoomi */}
          <li className="listItem">
            <Link
              to="/what-is-bhoomi"
              className="menuLink flex items-center text-green-900 hover:text-white bg-green-200 hover:bg-green-600 transition-all duration-300 p-3 rounded-lg shadow-md"
            >
              <FaHome className="mr-3" size={22} />
              <span className="text-md font-semibold">What is Bhoomi</span>
            </Link>
          </li>

          {/* BhoomiKart */}
          <li className="listItem">
            <Link
              to="/bhoomikart"
              className="menuLink flex items-center text-green-900 hover:text-white bg-green-200 hover:bg-green-600 transition-all duration-300 p-3 rounded-lg shadow-md"
            >
              <FaShoppingCart className="mr-3" size={22} />
              <span className="text-md font-semibold">BhoomiKart</span>
            </Link>
          </li>

          {/* About Us */}
          <li className="listItem">
            <Link
              to="/about-us"
              className="menuLink flex items-center text-green-900 hover:text-white bg-green-200 hover:bg-green-600 transition-all duration-300 p-3 rounded-lg shadow-md"
            >
              <RiTeamFill className="mr-3" size={22} />
              <span className="text-md font-semibold">About Us</span>
            </Link>
          </li>

          <li className="listItem relative">
            <Link
              to="/farmweb"
              className="menuLink flex items-center text-green-900 hover:text-white bg-green-200 hover:bg-green-600 transition-all duration-300 p-3 rounded-lg shadow-md"
            >
              <FaGlobe className="mr-3" size={24} />
              <span className="text-lg">Farmweb</span>
            </Link>
          </li>

          {/* FAQ */}
          <li className="listItem">
            <Link
              to="/faq"
              className="menuLink flex items-center text-green-900 hover:text-white bg-green-200 hover:bg-green-600 transition-all duration-300 p-3 rounded-lg shadow-md"
            >
              <RiQuestionAnswerFill className="mr-3" size={22} />
              <span className="text-md font-semibold">FAQ</span>
            </Link>
          </li>
        </ul>
      </div>

      {/* Help Center Card */}
      <div className="sideBarCard mt-10 bg-white text-black p-6 rounded-xl shadow-lg relative overflow-hidden">
        {/* Decorative Circles */}
        <div className="absolute top-0 left-0 w-32 h-32 bg-green-200 rounded-full opacity-50 -translate-x-8 -translate-y-8"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 bg-green-300 rounded-full opacity-50 translate-x-12 translate-y-12"></div>

        {/* Card Content */}
        <div className="relative z-10">
          <h3 className="text-lg font-bold text-green-800 mb-3">Help Center</h3>
          <p className="text-sm text-gray-700">
            Facing an issue? Reach out to us for support.
          </p>
          <button
            onClick={() => {
              window.location.href = "/contact-us";
            }}
            className="bg-green-500 text-white px-4 py-2 mt-4 rounded-lg shadow-md hover:bg-green-700 transition-all duration-300"
          >
            Go to Help Center
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
