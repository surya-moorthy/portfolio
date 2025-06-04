import React from 'react';

const About: React.FC = () => {
  return (
    
    <div className="py-16 bg-gradient-to-b from-blue-50 to-white shadow-lg rounded-2xl my-15" id='about'>
      <div className="container mx-auto px-4 max-w-3xl" >
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-6">
          About Me
        </h1>
        <div className="w-16 h-1 bg-blue-600 mx-auto mb-8 rounded-full"></div>
        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
          I am a passionate developer with expertise in building modern web applications.
        </p>
        <p className="text-lg text-gray-700 text-center mb-8 leading-relaxed">
          Exploring solana as for core blockchain and Defi Development
        </p>
        {/* <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors shadow-md">
            View Resume
          </button>
          <button className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            Contact Me
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default About;