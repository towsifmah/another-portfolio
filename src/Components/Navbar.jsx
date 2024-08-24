import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black text-white px-8 md:px-16  lg:px-24">
      <div className="container py-4 flex justify-center md:justify-between items-center">
        <div className="text-2xl font-bold font-poppins hidden md:inline">
          Mahmud Hasan
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl rounded-full">
            .
          </span>
        </div>
        <div className="space-x-3 md:space-x-6 text-sm  md:text-lg font-poppins font-medium">
          <a href="#home" className="hover:text-gray-400 duration-200">
            Home
          </a>
          <a href="#about" className="hover:text-gray-400 duration-200">
            About Me
          </a>
          <a href="#service" className="hover:text-gray-400 duration-200">
            Services
          </a>
          <a href="#project" className="hover:text-gray-400 duration-200">
            Project
          </a>
          <a href="#contact" className="hover:text-gray-400 duration-200">
            Contact
          </a>
        </div>
        <button className="font-poppins font-medium bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
