import React from "react";
import { FaEnvelope, FaPhone, FaMapMarkedAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20" id="contact">
      <div className="container px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-poppins font-bold text-center mb-12 ">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className="text-3xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4">
              Let's Talk
            </h3>
            <p className="font-poppins font-normal">
              I'm open to discussing web development projectgs or partnership
              opportunities.
            </p>
            <div className="mb-4 mt-8">
              <FaEnvelope className="inline-block text-green-400 text-xl mr-2"></FaEnvelope>
              <a
                href="mailto:mernmahmudhasan24@gmail.com"
                className="hover:underline duration-200 font-poppins font-medium"
              >
                mernmahmudhasan24@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className="inline-block text-green-400 text-xl mr-2"></FaPhone>
              <span className="font-poppins font-medium">+880 16179-71644</span>
            </div>
            <div className="mb-4">
              <FaMapMarkedAlt className="inline-block text-green-400 text-xl mr-2"></FaMapMarkedAlt>
              <span className="font-poppins font-medium">
                Dhaka, Dhaka Danmondi zigatola, Bangladesh
              </span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="font-poppins font-medium block mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 font-poppins placeholder:font-poppins"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="font-poppins font-medium block mb-2"
                >
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 font-poppins placeholder:font-poppins"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="font-poppins font-medium block mb-2"
                >
                  Message
                </label>
                <textarea
                  rows={5}
                  type="text"
                  placeholder="Enter Your Message"
                  className="w-full p-2 rounded bg-gray-800 border border-gray-600 focus:outline-none focus:border-green-400 font-poppins placeholder:font-poppins"
                />
              </div>
              <button className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-8 py-2 rounded-full font-poppins font-medium">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
