import React from "react";
import { FaFacebook, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 items-center mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="text-2xl font-bold font-poppins mb-2">
              Mahmud Hasan{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 text-4xl rounded-full">
                .
              </span>
            </h3>
            <p className="font-poppins text-sm text-gray-400 font-normal">
              Front-end Developer upcomint Full-Stack Developer based in the
              Bangladesh, specializing in web and software development.
            </p>
          </div>
          <div className="flex-1 w-full">
            <form className="flex items-center justify-center">
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-2 rounded-l-lg bg-gray-800 border-gray-600 focus:outline-none focus:border focus:border-green-400 font-poppins placeholder:font-poppins"
              />
              <button
                type="submit"
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-r-lg font-poppins font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 font-poppins font-normal">
            &copy; {new Date().getFullYear()} Mahmud Hasan. All right reserved
          </p>
          <div className="flex space-x-4 my-4 md:my-0">
            <a href="" className="text-gray-400 hover:text-white">
              <FaFacebook />
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              <FaTwitter />
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              <FaLinkedin />
            </a>
            <a href="" className="text-gray-400 hover:text-white">
              <FaGithub />
            </a>
          </div>
          <div className="flex space-x-4">
            <a
              href=""
              className="text-gray-400 hover:text-white duration-300 font-poppins font-normal"
            >
              Privacy
            </a>
            <a
              href=""
              className="text-gray-400 hover:text-white duration-300 font-poppins font-normal"
            >
              Terms of Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
