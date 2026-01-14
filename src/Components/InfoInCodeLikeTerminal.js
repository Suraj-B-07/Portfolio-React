import React from 'react';

const Projects = () => {
  const coder = {
    name: 'Suraj Bhairat',
    skills: [
      'Java',
      'Spring Boot',
      'Microservices',
      'React.js',
      'Tailwind CSS',
      'Redux Toolkit',
      'HTML5',
      'ES6',
      'Typescript',
      'Debugging',
      'REST API',
      'Postman',
      'Docker',
      'MySQL',
      'MongoDB',
      'AWS',
      'Kafka'
    ],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    creative: true,
    hireable() {
      return (
        this.hardWorker &&
        this.problemSolver &&
        this.skills.length >= 5
      );
    },
  };

  return (
    <div className='p-16 min-h-screen'>
      <div className='order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]'>
        {/* Top Bar */}
        <div className='flex flex-row'>
          <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600'></div>
          <div className='h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent'></div>
        </div>

        {/* Header Circles */}
        <div className='px-4 lg:px-8 py-5'>
          <div className='flex flex-row space-x-2'>
            <div className='h-3 w-3 rounded-full bg-red-400'></div>
            <div className='h-3 w-3 rounded-full bg-orange-400'></div>
            <div className='h-3 w-3 rounded-full bg-green-200'></div>
          </div>
        </div>

        {/* Code Block */}
        <div className='overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8'>
          <code className='font-mono text-xs md:text-sm lg:text-base text-gray-300'>
            <div>
              <span className='text-pink-500 mr-2'>const</span>
              <span className='text-white mr-2'>coder</span>
              <span className='text-pink-500 mr-2'>=</span>
              <span className='text-gray-400'>{'{'}</span>
            </div>

            <div className='ml-4'>
              <span className='text-white mr-2'>name:</span>
              <span className='text-amber-300'>'Suraj Bhairat'</span>,
            </div>

            <div className='ml-4'>
              <span className='text-white'>skills:</span>{' '}
              <span className='text-gray-400'>[</span>
              {coder.skills.map((skill, index) => (
                <span key={index}>
                  <span className='text-amber-300'>'{skill}'</span>
                  {index < coder.skills.length - 1 && <span className='text-gray-400'>, </span>}
                </span>
              ))}
              <span className='text-gray-400'>],</span>
            </div>

            <div className='ml-4 text-white'>hardWorker: <span className='text-orange-400'>true</span>,</div>
            <div className='ml-4 text-white'>quickLearner: <span className='text-orange-400'>true</span>,</div>
            <div className='ml-4 text-white'>problemSolver: <span className='text-orange-400'>true</span>,</div>
            <div className='ml-4 text-white'>creative: <span className='text-orange-400'>true</span>,</div>

            <div className='ml-4 text-green-400'>
              hireable: <span className='text-orange-400'>function</span>() {'{'}
            </div>
            <div className='ml-8 text-orange-400'>return (</div>
            <div className='ml-12 text-cyan-400'>this.<span className='text-white'>hardWorker</span> &&</div>
            <div className='ml-12 text-cyan-400'>this.<span className='text-white'>problemSolver</span> &&</div>
            <div className='ml-12 text-cyan-400'>this.<span className='text-white'>skills.length</span> {'>='} <span className='text-orange-400'>5</span></div>
            <div className='ml-8 text-orange-400'>);</div>
            <div className='ml-4 text-gray-400'>{'}'}</div>
            <div className='text-gray-400'>{'}'}</div>
          </code>
        </div>
      </div>
    </div>
  );
};

export default Projects;
