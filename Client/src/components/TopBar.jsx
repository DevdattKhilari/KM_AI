import React, { useState } from "react";
import { FiBell, FiUser } from "react-icons/fi";

const TopBar = () => {
  const user = {
    name: "Admin",
    photoUrl: "admin.png", // Replace with the actual URL of the user's photo
  };

  const [showUserMenu, setShowUserMenu] = useState(false);

  const handleLogout = () => {
    window.location.href = "/";
    setShowUserMenu(false);
  };

  return (
    <div className="bg-white p-4 h-14 flex items-center justify-between shadow-md px-6 backdrop-blur-md bg-opacity-30 z-50">
      {/* Left Section: User Info */}
      <div className="flex items-center space-x-4">
        <img
          src={user.photoUrl}
          alt={`${user.name}'s Photo`}
          className="h-12 w-12 rounded-full shadow-md border-2 border-green-600"
        />
        <div>
          <div className="text-lg font-bold text-green-900">{`Welcome to Bhoomi!`}</div>
          <div className="text-sm text-gray-700 font-medium">
            Soil Analysis Dashboard
          </div>
        </div>
      </div>

      {/* Right Section: Icons */}
      <div className="flex items-center space-x-6 relative">
        {/* Notification Icon */}
        <button className="p-2 bg-white rounded-full shadow-md hover:bg-green-500 hover:text-white transition duration-200">
          <FiBell className="text-xl text-gray-700" size={22} />
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className={`p-2 bg-white rounded-full shadow-md hover:bg-green-500 hover:text-white transition duration-200 ${
              showUserMenu ? "bg-green-500 text-white" : ""
            }`}
          >
            <FiUser className="text-xl" size={22} />
          </button>

          {/* Dropdown Menu */}
          {showUserMenu && (
            <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg">
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 text-sm text-red-500 hover:bg-gray-100 hover:font-semibold rounded-t-lg"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TopBar;
