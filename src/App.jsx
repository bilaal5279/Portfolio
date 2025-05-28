import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WeightlyCaseStudy from './components/case-studies/WeightlyCaseStudy';
import CareerStudioCaseStudy from './components/case-studies/CareerStudioCaseStudy';
import ScrollToTop from './components/ScrollToTop'; // Import the custom ScrollToTop component
import './App.css';

const App = () => {
  return (
    <>
      <ScrollToTop /> 
      <Navbar />
      <Routes>
        <Route path="/" element={
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
        } />
        <Route path="/case-studies/weightly" element={<WeightlyCaseStudy />} />
        <Route path="/case-studies/careerstudio" element={<CareerStudioCaseStudy />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;