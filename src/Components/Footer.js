
import githubIcon from '../Assests/github.png';
import linkedInIcon from '../Assests/linkedin.png';

function Footer() {
  return (
    <div className="relative border-t bg-[#0d1224] border-[#353951] text-white px-14">
      <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] py-6 lg:py-10">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-[1px] w-1/2  bg-gradient-to-r from-transparent via-violet-500 to-transparent"></div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm">
            © Developer Portfolio by <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/suraj-bhairat-672879176/" className="text-[#16f2b3]">Suraj Bhairat</a>
          </p>
          <div className="flex items-center lg:w-48 justify-between ">
            <a 
              target="_blank"
              rel="noreferrer"
              href="https://github.com/suraj_b-07"
              className="flex items-center  gap-2 lg:w-8 lg:h-8 m-4 hover:text-[#16f2b3]"
            >
              <img alt="gitub icon" src={githubIcon} className='lg:w-full lg:h-full w-18 h-9'/>
              <span>Github</span>
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/suraj-bhairat-672879176/"
              className="flex items-center gap-2 lg:w-8 lg:h-8 m-4 hover:text-[#16f2b3]"
            >
              <img alt='linkedin icon' src={linkedInIcon} className='lg:w-full lg:h-full w-18 h-9'/>
              <span>Linkedin</span>
            </a>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Footer;