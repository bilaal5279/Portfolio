import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { MenuOutlined, Close } from '@mui/icons-material';
import resume from '../assets/resume.pdf';
const Navbar = () => {
  const [active, setActive] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const showMenu = () => setActive(!active);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Custom scroll function
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80; // Adjust this value based on your navbar height
    window.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md py-3 shadow-xl' : 'bg-transparent py-5'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="text-white">
          <h1 className="text-2xl md:text-3xl font-bold">
            Bilaal <span className="text-blue-500">Ishtiaq</span>
          </h1>
        </div>
        
        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-white">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item} className="relative group">
              <Link 
                smooth 
                to={`#${item.toLowerCase()}`} // Remove the leading slash
                scroll={scrollWithOffset}
                className="text-base font-medium tracking-wide"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
          <li>
            <a 
              href={resume}
              target="_blank" 
              rel="noreferrer" 
              className="px-4 py-2 rounded-md bg-blue-600 text-white font-medium hover:bg-blue-700 transition-all duration-300"
            >
              Resume
            </a>
          </li>
        </ul>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden text-white">
          <MenuOutlined 
            onClick={showMenu} 
            className="text-3xl cursor-pointer" 
          />
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`fixed top-0 right-0 h-full w-full md:w-72 bg-gray-900 z-50 transform transition-transform duration-300 ease-in-out ${active ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex justify-end p-6">
          <Close onClick={showMenu} className="text-white text-3xl cursor-pointer" />
        </div>
        <ul className="flex flex-col items-center justify-center space-y-8 mt-12 text-white">
          {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item} className="relative">
              <Link 
                smooth 
                to={`#${item.toLowerCase()}`} // Remove the leading slash
                scroll={scrollWithOffset}
                className="text-xl font-medium tracking-wide"
                onClick={showMenu}
              >
                {item}
              </Link>
            </li>
          ))}
          <li>
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noreferrer" 
              className="px-6 py-2 rounded-md bg-blue-600 text-white font-medium"
              onClick={showMenu}
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;