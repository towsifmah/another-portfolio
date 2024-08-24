import React from "react";
const vectorAbout = "https://i.ibb.co/Kx00Ggz/about.png";
const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-poppins font-bold text-center mb-12 ">
          About Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src={vectorAbout}
            alt="AboutImage"
            className="w-[300px] h-[320px] rounded object-cover mb-8 md:mb-0 transform transition-transform duration-300 hover:scale-105"
          />
          <div className="flex-1">
            <p className="text-lg font-poppins font-normal mb-8">
              I am a Passionate front-end developer with a focus on building
              modeern and responsive web applications. With a strong foundation
              in both frontend and backend technologies. I strive to create
              seamless and efficient user experiences.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <label
                  htmlFor="htmlandcss"
                  className="w-2/12 font-poppins font-medium"
                >
                  HTML & CSS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-10/12 cursor-pointer"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="htmlandcss"
                  className="w-2/12 font-poppins font-medium"
                >
                  React JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12 cursor-pointer"></div>
                </div>
              </div>
              <div className="flex items-center">
                <label
                  htmlFor="htmlandcss"
                  className="w-2/12 font-poppins font-medium"
                >
                  Node JS
                </label>
                <div className="grow bg-gray-800 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12 cursor-pointer"></div>
                </div>
              </div>
            </div>
            <div className="mt-12 flex justify-between text-center">
              <div>
                <h3 className="text-3xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  1.5+
                </h3>
                <p className="font-poppins font-medium">Years Experience</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  35+
                </h3>
                <p className="font-poppins font-medium">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold font-poppins text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                  10+
                </h3>
                <p className="font-poppins font-medium">Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
