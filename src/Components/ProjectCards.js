import React from "react";
function ProjectCards(props) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <img className="w-full h-1/2" src={props.imgPath} alt="Project" />

      <div className="p-6">
        <h2 className="font-bold text-xl mb-2">{props.title}</h2>
        <p className="text-gray-700 text-base">{props.description}</p>
        <div className="mt-4">
        
        
          
        </div>
      </div>
    </div>
  );
}

export default ProjectCards;
