import React from 'react';
import Navbar from '../components/Navbar';
import Background from '../components/Background';
import Typing from '../components/Typing';
import Timelinepage from './Timelinepage';
import AboutMe from '../components/AboutMe'
import Cursor from '../components/Cursor';
import Contact from '../components/Contact';



export const Hero = () => {
    return (
        <div >
          <Cursor/>
          <Navbar />
          <Background />
          <Typing />
          <AboutMe id= 'aboutme'/>
          <Timelinepage id= 'projects'/>
          <Contact id= 'contact'/>
      </div>
    );
  };
  
  
