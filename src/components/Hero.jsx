import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { HashLink as Link } from 'react-router-hash-link';
import profilePic from '../assets/pfp.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-gray-900 z-[1]"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10 text-center md:text-left">
        <div className="md:flex md:items-center md:justify-between">
          <div className="md:w-3/5">
            <p className="text-gray-300 text-lg mb-2">
              Hello, I'm
            </p>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Bilaal <span className="text-blue-500">Ishtiaq</span>
            </h1>
            
            <div className="text-xl md:text-3xl text-white font-medium mb-6">
              <span>I'm a </span>
              <TypeAnimation
                sequence={[
                  'Software Engineer',
                  1500,
                  'Web Developer',
                  1500,
                  'Mobile App Developer',
                  1500,
                  'Full Stack Developer',
                  1500,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                className="text-blue-500"
              />
            </div>
            
            <p className="text-gray-300 text-base md:text-lg max-w-xl mb-8">
              BSc Computer Science student at Staffordshire University with expertise in building responsive web applications and 
              mobile solutions. Passionate about creating efficient, scalable, and user-friendly software that solves real-world problems.
            </p>
            
            <div className="flex justify-center md:justify-start space-x-4 mb-8">
              <a
                href="https://github.com/bilaal5279"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-500 transition-colors duration-300"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/bilaal-ishtiaq-3a7b11250/"
                target="_blank"
                rel="noreferrer"
                className="text-white hover:text-blue-500 transition-colors duration-300"
              >
                <FaLinkedin size={24} />
              </a>

            </div>
            
            <div className="flex flex-col sm:flex-row justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <Link smooth to="/#projects">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium text-base hover:bg-blue-700 transition-all duration-300 w-full sm:w-auto">
                  View Projects
                </button>
              </Link>
              <Link smooth to="/#contact">
                <button className="bg-transparent text-white border-2 border-white px-6 py-3 rounded-md font-medium text-base hover:border-blue-500 hover:text-blue-500 transition-all duration-300 w-full sm:w-auto">
                  Contact Me
                </button>
              </Link>
            </div>
          </div>
          
          <div className="hidden md:block md:w-2/5">
            <div className="relative">
              <div className="absolute inset-0 -translate-x-4 -translate-y-4 border-2 border-blue-500 rounded-lg z-0"></div>
              <img 
               src={profilePic} 
                alt="Bilaal Ishtiaq" 
                className="rounded-lg shadow-2xl relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;