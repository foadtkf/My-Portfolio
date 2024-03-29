import React from "react";
import { Fade } from "react-reveal";
const ProjectShort = () => {
  const projects = [
    {
      id: 1,
      name: "Daisy Computers",
      website: "https://manufacturer-c9f9e.web.app/",
      description:
        "A full-stack e-commerce website with admin role implemented. Also implemented payment gateway using Stripe",
      img: "https://i.ibb.co/JzBqQJx/Screenshot-139.png",
    },
    {
      id: 2,
      name: "MrPhotoMan",
      website: "https://mr-photoman.web.app/",
      description:
        "A personal website of a professional photographer. All his services will be shown in this website.",
      img: "https://i.ibb.co/rdWkB3k/Screenshot-138.png",
    },
    {
      id: 3,
      name: "LTHouse",
      website: "https://laptop-dokan.web.app/",
      description:
        "A complete warehouse management website of laptops. Products can be managed through this website",
      img: "https://i.ibb.co/QYmZ5k1/Screenshot-141.png",
    },
  ];
  return (
    <Fade left cascade>
      <div className="my-5 mx-5 text-black">
        <h1 className="lg:text-3xl text-2xl font-serif font-bold text-center my-2">
          Some of my projects
        </h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <>
              <div className="card sm:w-full bg-base-100 shadow-xl hover:shadow-2xl hover:shadow-red-800  image-full">
                <figure>
                  <img src={project.img} alt="websiteImage" />
                </figure>
                <div className="card-body">
                  <h2 className="text-3xl text-white font-bold">
                    {project.name}
                  </h2>
                  <h1 className="text-xl text-white">{project.description}</h1>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </Fade>
  );
};

export default ProjectShort;
