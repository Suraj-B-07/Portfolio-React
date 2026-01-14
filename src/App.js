import Body from './Components/Home';
import Header from './Components/Header';
import WorkExperience from './Components/WorkExperience';
import Project from './Components/Project';
import Education from './Components/Education';
import ComponentEndTemplate from './Components/ComponentEndTemplate';
import Skills from './Components/Skills';
import Footer from './Components/Footer';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="bg-black flex flex-col min-w-full">
      <Header />
      <div className=''>
        <Body />

        <ComponentEndTemplate title={'Work Experience'}  id={'workexp'}/>
        <WorkExperience />

        <ComponentEndTemplate title={'My Skills'} id={'skills'}/>
        <Skills/>
        <ComponentEndTemplate title={'My Projects'} id={'projects'}/>
        <Project/>

        <ComponentEndTemplate title={'Education'} id={"education"}/>
        <Education />

        <ComponentEndTemplate title={'Contact Me'} id={"contact"}/>
        <Contact />
      </div>

      <Footer/>

      {/* <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/work-experience" element={<WorkExperience />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/hire-me" element={<WorkExperience />} />
        </Routes>
      </Router> */}
    </div>
  );
}

export default App;
