import Lottie from "lottie-react";
import lottieEduAnimation from '../utils/lottieEduAnimation.json';

 const educations = [
  {
    id: 1,
    title: "Bachelor Degree",
    duration: "2019 - 2022",
    institution: "MIT Academy Of Engineering, Pune",
  },
  {
    id: 2,
    title: "Higher Secondary Certificate",
    duration: "2018 - 2019",
    institution: "Kendriya Vidyalaya No 1 Dehuroad, Pune",
  },
  {
    id: 3,
    title: "Secondary School Certificate",
    duration: "2015 - 2016",
    institution: "Kendriya Vidyalaya No 1 Dehuroad, Pune",
  }
]
function Education() {
  return (
    <div  className=" my-12 lg:my-2 lg:h-screen">
     
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4  ">
            <Lottie animationData={lottieEduAnimation} loop={true} className=" w-full h-full"/>;
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6 ">
              {
                educations.map(education => (
                  <div key={education.id} identifier={`education-${education.id}`}>
                    <div className="lg:mr-14 p-3 relative text-white border border-slate-200 bg-gradient-to-r from-indigo-900 via-slate-900 to-black-900 rounded-lg shadow-slate-400 shadow hover:shadow-lg ">
                     {/*  <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      /> */}
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-[#16f2b3]">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                          {/* <BsPersonWorkspace size={36} /> */}
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base">{education.institution}</p>
                        </div>
                      </div>
                    </div> 
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;