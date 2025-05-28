// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import { useLocation } from 'react-router-dom';
import { MenuOutlined, Close } from '@mui/icons-material';
import resume from '../assets/resume.pdf';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolledPast, setScrolledPast] = useState(false);
  const location = useLocation();

  // track window scroll
  useEffect(() => {
    const onScroll = () => setScrolledPast(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // consider “scrolled” if:
  // • we’re physically scrolled past 50px, OR
  // • we opened the mobile menu, OR
  // • we’re not on the root (so sub‐pages are always opaque)
  const atRoot = location.pathname === '/';
  const isSolid = !atRoot || scrolledPast || menuOpen;

  const scrollWithOffset = el => {
    const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const sections = ['home','about','skills','projects','contact'];

  return (
    <>
      <nav
        className={`
          fixed top-0 w-full z-50 transition-all duration-300
          
          /* MOBILE DEFAULT: always solid */
          bg-black/90 backdrop-blur-md py-3 shadow-xl
          
          /* DESKTOP OVERRIDE: transparent when at top on home */
          ${!isSolid
            ? 'md:bg-transparent md:backdrop-none md:py-5 md:shadow-none'
            : ''}
        `}
      >
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <h1 className="text-2xl md:text-3xl font-bold text-white">
            Bilaal <span className="text-blue-500">Ishtiaq</span>
          </h1>

          {/* Desktop menu */}
          <ul className="hidden md:flex space-x-8 text-white">
            {sections.map(s => (
              <li key={s} className="relative group">
                <Link
                  smooth
                  to={`/#${s}`}
                  scroll={scrollWithOffset}
                  className="text-base font-medium tracking-wide"
                >
                  {s[0].toUpperCase() + s.slice(1)}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-300 group-hover:w-full"/>
                </Link>
              </li>
            ))}
            <li>
              <a
                href={resume}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-md bg-blue-600 font-medium hover:bg-blue-700 transition-all duration-300"
              >
                Resume
              </a>
            </li>
          </ul>

          {/* Mobile toggle */}
          <div className="md:hidden text-white">
            <MenuOutlined onClick={() => setMenuOpen(o => !o)} className="text-3xl cursor-pointer"/>
          </div>
        </div>
      </nav>

      {/* Mobile slide-out panel */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full md:w-72 bg-gray-900 z-50
          transform transition-transform duration-300 ease-in-out
          ${menuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="flex justify-end p-6">
          <Close onClick={() => setMenuOpen(false)} className="text-3xl text-white cursor-pointer"/>
        </div>
        <ul className="flex flex-col items-center justify-center space-y-8 mt-12 text-white">
          {sections.map(s => (
            <li key={s}>
              <Link
                smooth
                to={`/#${s}`}
                scroll={scrollWithOffset}
                onClick={() => setMenuOpen(false)}
                className="text-xl font-medium tracking-wide"
              >
                {s[0].toUpperCase() + s.slice(1)}
              </Link>
            </li>
          ))}
          <li>
            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-2 rounded-md bg-blue-600 font-medium"
            >
              Resume
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
