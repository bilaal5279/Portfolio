import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { title: 'Home', path: '/#home' },
    { title: 'About', path: '/#about' },
    { title: 'Skills', path: '/#skills' },
    { title: 'Projects', path: '/#projects' },
    { title: 'Contact', path: '/#contact' },
  ];
  
  const socialLinks = [

  ];
  


  return (
    <footer className="bg-gray-900 pt-12 pb-6 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4">
              Bilaal <span className="text-blue-500">Ishtiaq</span>
            </h3>
            <p className="text-gray-400 mb-6">
              Software engineer specializing in web and mobile development,
              focused on creating efficient and user-friendly digital solutions.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={link.label}
                  className="text-gray-400 hover:text-blue-500 transition-all duration-300"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    smooth
                    to={link.path}
                    className="text-gray-400 hover:text-blue-500 transition-all duration-300 flex items-center"
                  >
                    <span className="mr-2">›</span> {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
         
        </div>
        
        {/* Divider */}
        <div className="h-px bg-gray-800 mb-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-center md:text-left">
            © {currentYear} Bilaal Ishtiaq. All rights reserved.
          </p>
          <p className="text-gray-400 text-center md:text-right mt-4 md:mt-0">
            Software Engineer & Web Developer
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;