import React from "react";
const hero = "https://i.ibb.co/bRwfBX8/mahmud.png";
const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16" id="home">
      <img
        className="mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
        src={hero}
        alt=""
      />
      <h1 className="text-4xl font-bold font-poppins">
        I'm{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Mahmud Hasan
        </span>
        , Front-End Developer
      </h1>
      <p className="mt-4 text-lg font-poppins font-medium text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button className="font-poppins font-medium bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Contact with Me
        </button>
        <button className="font-poppins font-medium bg-gradient-to-r from-green-400 to to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
          Resume
        </button>
      </div>
    </div>
  );
};

export default Hero;
