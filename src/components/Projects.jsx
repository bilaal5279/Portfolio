import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaExternalLinkAlt, FaGoogle, FaBook } from 'react-icons/fa';
import weightly from '../assets/WeightlyBanner.png';
import Greenair from '../assets/Greenair.png';
import Firstportfolio from '../assets/Firstportfolio.png';
import Careerstudio from '../assets/Careerstudio.png';
import Themepark from '../assets/Themepark.png';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'Weightly',
      description: 'A GLP-1 weight loss tracking application built with React Native. Helps users monitor their weight loss journey with medication like Ozempic and Wegovy. Features include weight tracking, medication scheduling, and progress analytics.',
      image: weightly,
      category: ['mobile', 'featured'],
      tech: ['React Native', 'Firebase', 'RevenueCat', 'Expo',],
      links: {
        live: 'https://play.google.com/store/apps/details?id=com.bilaal5279.weightly',
        github: 'https://github.com/bilaal5279/weightly',
        caseStudy: '/case-studies/weightly'
      }
    },
    {
      id: 2,
      title: 'CareerStudio',
      description: 'Resume Builder and Cover Letter Creator tailored to specific job applications using OpenAI\'s API. Generates personalized and professional documents based on job descriptions to optimize application success rates.',
      image: Careerstudio,
      category: ['web', 'featured'],
      tech: ['React', 'Node.js', 'OpenAI API', 'MongoDB'],
      links: {
        live: '',
        github: 'https://github.com/bilaal5279/CareerStudio',
        caseStudy: '/case-studies/careerstudio'
      }
    },
    {
      id: 3,
      title: 'Green Air',
      description: 'A responsive website for an air conditioning company, featuring service information, product catalog, and contact functionality. Designed with modern UI/UX principles for optimal user experience.',
      image: Greenair,
      category: ['web'],
      tech: ['React', 'Tailwind CSS', 'Vite'],
      links: {
        live: 'https://greenairconditioning.netlify.app/',
        github: 'https://github.com/bilaal5279/GreenAir'
      }
    },
    {
      id: 4,
      title: 'Theme Park System',
      description: 'A comprehensive management system for theme parks with features for ticketing, attraction management, staff scheduling, and visitor analytics. Implements secure authentication and role-based access control.',
      image: Themepark,
      category: ['web', 'backend'],
      tech: ['Node.js', 'Express.js', 'MongoDB', 'Firebase'],
      links: {
        live: '',
        github: 'https://github.com/bilaal5279/Theme-Park-NodeJs'
      }
    },
    {
      id: 5,
      title: 'Portfolio 1.0',
      description: 'My first portfolio website showcasing my early web development skills and projects. Built with semantic HTML and CSS following responsive design principles.',
      image: Firstportfolio,
      category: ['web'],
      tech: ['HTML', 'CSS', 'JavaScript'],
      links: {
        live: 'https://i039978m-wdos.web.app/index.html',
        github: 'https://github.com/bilaal5279/FirstPortfolio'
      }
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(filter));

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            My <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Below are some of the key projects I've developed that demonstrate my technical skills
            and problem-solving abilities. Each project reflects my commitment to creating
            efficient, user-friendly applications.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-12">
          {['all', 'featured', 'web', 'mobile', 'backend'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category)}
              className={`px-5 py-2 rounded-md font-medium transition-all duration-300 ${
                filter === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-4 transition-all duration-300">
                  {project.links.github && (
                    <a 
                      href={project.links.github} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-all duration-300"
                    >
                      <FaGithub className="text-xl" />
                    </a>
                  )}
                  {project.links.live && (
                    <a 
                      href={project.links.live} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-white bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition-all duration-300"
                    >
                      {project.links.live.includes('play.google.com') 
                        ? <FaGoogle className="text-xl" /> 
                        : <FaExternalLinkAlt className="text-xl" />}
                    </a>
                  )}
                </div>
                {project.category.includes('featured') && (
                  <div className="absolute top-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                    Featured
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-gray-100 text-xs text-gray-600 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {/* Show Case Study instead of Source Code for Weightly */}
                  {project.title === 'Weightly' ? (
                    <Link 
                      to={project.links.caseStudy}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      <FaBook /> Case Study
                    </Link>
                  ) : (
                    project.links.github && (
                      <a 
                        href={project.links.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        <FaGithub /> Source Code
                      </a>
                    )
                  )}
                  
                  {/* Add Case Study button for CareerStudio */}
                  {project.title === 'CareerStudio' && (
                    <Link 
                      to={project.links.caseStudy}
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      <FaBook /> Case Study
                    </Link>
                  )}
                  
                  {project.links.live && (
                    <a 
                      href={project.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-300"
                    >
                      {project.links.live.includes('play.google.com') 
                        ? <><FaGoogle /> Play Store</> 
                        : <><FaExternalLinkAlt /> Live Demo</>}
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* More Projects Button */}
        <div className="text-center mt-12">
          <a 
            href="https://github.com/bilaal5279"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
          >
            <FaGithub /> View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;