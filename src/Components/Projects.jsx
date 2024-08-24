import React from "react";
const project = [
  {
    id: 1,
    name: "Travels Agency",
    technologies: "React jsx & Tailwind CSS",
    image: "https://i.ibb.co/c2rtHS9/travel.png",
    github: "https://github.com/towsifmah/Travel_website",
    netlify: "https://mahmudtravels.netlify.app/",
  },
  {
    id: 2,
    name: "Chatting App",
    technologies: "React jsx,tailwind css,redux & Firebase",
    image: "https://i.ibb.co/k8dfqJX/chattingapplation.png",
    github: "https://github.com/towsifmah/ChattingApp",
    netlify: "https://chattingapplication400.netlify.app/",
  },
  {
    id: 3,
    name: "Prime Pay",
    technologies: "React jsx & Tailwind CSS",
    image: "https://i.ibb.co/zRRm0ST/primepay.png",
    github: "https://github.com/towsifmah/Prime-pay",
    netlify: "https://primepaymahmud.netlify.app/",
  },
  {
    id: 4,
    name: "E-commerce e-SHOP",
    technologies: "React jsx,tailwind CSS & Rudux",
    image: "https://i.ibb.co/4YC1HWb/e-SHOP-10.png",
    github: "https://github.com/towsifmah/Ecommerce-shop",
    netlify: "https://eshopmahmud.netlify.app/",
  },
  {
    id: 5,
    name: "Petroil",
    technologies: "React jsx & Tailwind CSS",
    image: "https://i.ibb.co/hMCqdfJ/petroil.png",
    github: "https://github.com/towsifmah/Petroil",
    netlify: "https://towsifmahmud-petroil.netlify.app/",
  },
  {
    id: 6,
    name: "Nexcent",
    technologies: "React jsx & Tailwind CSS",
    image: "https://i.ibb.co/MC22FB7/Nexcent.png",
    github: "https://github.com/towsifmah/Nexcent",
    netlify: "https://towsifmahmud-nexcent.netlify.app/",
  },
];

const Projects = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-poppins font-bold text-center mb-12 ">
          My Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {project.map((projects) => (
            <div
              key={projects.id}
              className="bg-gray-800 p-6 rounded-lg mb-4 transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={projects.image}
                alt={projects.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold font-poppins mb-2">
                {projects.name}
              </h3>
              <p className="text-gray-400 mb-4 font-poppins">
                {projects.technologies}
              </p>
              <div className="flex  gap-x-2">
                <a
                  href={projects.github}
                  target="blank"
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-poppins font-medium transform transition-transform duraiton-300 hover:scale-105 "
                >
                  Github
                </a>
                <a
                  href={projects.netlify}
                  target="blank"
                  className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full font-poppins font-medium transform transition-transform duraiton-300 hover:scale-105"
                >
                  Link
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
