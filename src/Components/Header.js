import React, { useState } from 'react';
function Header() {
  const [highlightedHeaderTab, setHighlightedHeaderTab] = useState("home");
  return (
    <header className='bg-black lg:py-2   px-6 flex flex-wrap justify-between lg:px-4 sticky top-0 z-50 '>
      <div>
        <h1 className='lg:text-green-400 lg:text-2xl'>Portfolio</h1>
      </div>
      <div>
        <a href='#home'>
          <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "home" ? "text-green-400 underline" : "text-white"}`}
            onClick={() => setHighlightedHeaderTab("home")}>
            <h1>Home</h1>
          </button>
        </a>
        <a href='#workexp'>
          <button className={` px-2 transition-all duration-300 lg:text-lg ${highlightedHeaderTab === "workexperience" ? "text-green-400 underline" : "text-white"}`}
            onClick={() => setHighlightedHeaderTab("workexperience")}>
            <h1>Work Experience</h1>
          </button>
        </a>

        <a href='#skills'>
          <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "Skills" ? "text-green-400 underline" : "text-white"}`}
            onClick={() => setHighlightedHeaderTab("Skills")}>
            <h1>My Skills</h1>
          </button>
        </a>

        <a href='#projects'>
          <button className={` px-2  lg:text-lg ${highlightedHeaderTab === "projects" ? "text-green-400 underline" : "text-white"}`}
            onClick={() => setHighlightedHeaderTab("projects")}>
            <h1>Projects</h1>
          </button>
        </a>

        <a href='#education'>
          <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "education" ? "text-green-400 underline" : "text-white"}`}
            onClick={() => setHighlightedHeaderTab("education")}>
            <h1>Education</h1>
          </button>
        </a>

        <a href='#contact'>
          <button className={`px-2  lg:text-lg ${highlightedHeaderTab === "contact" ? "text-green-400 underline" : "text-white"}`}
            onClick={() => setHighlightedHeaderTab("contact")}>
            <h1>Contact Me</h1>
          </button>
        </a>


      </div>

    </header>
  );
}

export default Header;
