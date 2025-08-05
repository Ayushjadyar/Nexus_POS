import React from "react";
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a] shadow-md">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <img src={logo} alt="Restro Logo" className="h-8 w-8 object-contain" />
        <h1 className="text-lg font-semibold text-white">NexusPOS</h1>
      </div>

      {/* Search Bar */}
      <div className="flex items-center gap-4 bg-[#1f1f1f] px-5 py-2 w-[500px] rounded-full">
        <FaSearch className="text-white text-sm" />
        <input
          type="text"
          placeholder="Search"
          className="bg-transparent outline-none text-white w-full placeholder:text-gray-400"
        />
      </div>

      {/* User Info Section */}
      <div className="flex items-center gap-4">
        <div className="bg-[#1f1f1f] p-3 rounded-xl cursor-pointer hover:bg-[#2a2a2a] transition">
          <FaBell className="text-white text-xl" />
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-white text-4xl" />
          <div className="flex flex-col">
            <h2 className="text-sm font-semibold text-white">Deep Goriwale</h2>
            <span className="text-xs text-gray-400">Admin</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
