import React from "react";
import ProjectCards from "./ProjectCards";
import { ProjectData } from "../utils/ProjectData";

function Projects() {
  return (
    <div className="project-section min-h-screen bg-gray-900">
      {/* <Particle /> */}
      <div className="container mx-auto py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-4">
          My Recent <span className="text-purple-500">Works</span>
        </h1>
        <p className="text-white text-center mb-8">
          Here are a few projects I've worked on recently.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:mx-48 gap-4">
         {
          ProjectData.map(proj=>(
            <ProjectCards
            imgPath={proj.imagepath}
            isBlog={false}
            title={proj.name}
            description={proj.description}
            ghLink={proj.githubLink}
            liveLink={proj.liveLink}
            isHosted={proj.isHostedOnline}
          />
          ))
         }
         
          

          

        </div>
      </div>
    </div>
  );
}

export default Projects;
