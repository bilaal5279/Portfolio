import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaGithub } from 'react-icons/fa';
import careerstudio from '../../assets/Careerstudio.png';

const CareerStudioCaseStudy = () => {
  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6">
        <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-8">
          <FaArrowLeft /> Back to Portfolio
        </Link>
        
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          CareerStudio Case Study
        </h1>
        
        <div className="w-24 h-1 bg-blue-600 mb-8"></div>
        
        <img 
          src={careerstudio} 
          alt="CareerStudio Banner"
          className="w-full rounded-lg shadow-md mb-10"
        />
        
        <div className="bg-blue-50 p-6 rounded-lg mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Project Overview
          </h2>
          <p className="text-gray-700 mb-3">
            CareerStudio is an intelligent resume builder and cover letter creator that uses OpenAI's GPT-3 API 
            to generate personalized application documents tailored to specific job descriptions. Developed in 2023 as my first 
            significant project, this platform helps job seekers optimize their applications by highlighting relevant skills 
            and experiences. It was a challenging but rewarding introduction to integrating AI with web development, requiring 
            creative technical solutions to overcome the limitations of available technologies at that time.
          </p>
          <div className="flex items-center gap-2 mt-4">
            <a 
              href="https://github.com/bilaal5279/CareerStudio"
              target="_blank"
              rel="noreferrer" 
              className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300"
            >
              <FaGithub /> View on GitHub
            </a>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Motivation & Background
          </h2>
          <p className="text-gray-700 mb-4">
            The idea for CareerStudio emerged from my own experiences and observations of friends 
            struggling with the job application process. Many talented individuals were not getting 
            interviews because their application materials weren't effectively highlighting their 
            relevant skills for specific positions.
          </p>
          <p className="text-gray-700 mb-4">
            With the emergence of advanced AI models like GPT, I saw an opportunity to create a tool 
            that could analyze job descriptions, understand what employers were looking for, and help 
            candidates present their experiences in the most relevant way possible.
          </p>
          <p className="text-gray-700 mb-4">
            My goal was to democratize access to high-quality application materials, regardless of a 
            candidate's background in resume writing or their confidence in selling themselves on paper.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Technical Challenges
          </h2>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              1. GPT-3 Limitations & Prompt Engineering
            </h3>
            <p className="text-gray-700 mb-3">
              When I built CareerStudio in 2023, GPT-3 was the latest available model from OpenAI. A significant 
              challenge was that GPT-3 would frequently return irrelevant information with each prompt. I had to 
              meticulously engineer a prompt that would work consistently 100% of the time. This involved weeks 
              of testing various prompt structures, context settings, and temperature parameters to achieve reliable 
              results across different industries and job types.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              2. Creative Document Rendering Solution
            </h3>
            <p className="text-gray-700 mb-3">
              Even after solving the prompt engineering challenge, I faced a major hurdle: transforming 
              GPT's plain text output into professionally formatted resumes. Traditional PDF generation libraries 
              couldn't achieve the design quality I wanted. I developed an innovative solution by implementing 
              a headless Chrome browser using Puppeteer in my Node.js middleware. I instructed ChatGPT to create 
              complete HTML pages with CSS styling, then used Puppeteer to render and screenshot these pages, 
              which were then converted into professional-looking PDFs.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              3. Resume Parsing Complexity
            </h3>
            <p className="text-gray-700 mb-3">
              A major challenge was extracting structured data from users' existing resumes in various formats. 
              I implemented pdf-parser to extract text and structure from uploaded PDFs, but had to develop 
              additional logic to identify sections, skills, and experiences from inconsistently formatted documents. 
              This was particularly challenging because resume formats vary widely, and ensuring accurate data 
              extraction was critical for generating relevant AI-enhanced content.
            </p>
          </div>
          
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              4. Cost Optimization
            </h3>
            <p className="text-gray-700 mb-3">
              Working with the OpenAI API presented significant cost challenges, especially for a tool intended to be 
              accessible to job seekers who might have limited resources. I implemented token optimization 
              techniques and caching strategies to minimize API costs while maintaining quality output. This was my 
              first real project dealing with API usage.
            </p>
          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Key Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-2">AI-Powered Resume Builder</h3>
              <p className="text-gray-700">
                Generate professional resumes tailored to specific job descriptions, highlighting 
                relevant skills and experiences.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Custom Cover Letters</h3>
              <p className="text-gray-700">
                Create personalized cover letters that address company requirements and showcase 
                alignment with the role and organization.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Job Description Analysis</h3>
              <p className="text-gray-700">
                Extract key requirements and preferred qualifications from job listings to optimize 
                application materials.
              </p>
            </div>
            

          </div>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Technologies Used
          </h2>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">React</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Node.js</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">OpenAI GPT-3</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Firebase</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Express</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Puppeteer</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">pdf-parser</span>
            <span className="bg-gray-100 px-4 py-2 rounded-md text-gray-700">Headless Chrome</span>
          </div>
          
          <p className="text-gray-700">
            The frontend was built with React, featuring a clean and intuitive user interface. For the backend, 
            I developed a sophisticated Node.js/Express system with several innovative technical solutions. The 
            most creative aspect was using Puppeteer to control a headless Chrome browser that rendered HTML/CSS 
            templates generated by GPT-3, which were then captured as screenshots and converted to PDF documents. 
            This unconventional approach allowed me to create visually polished resumes that traditional PDF 
            libraries couldn't match. I also implemented pdf-parser to extract and structure information from 
            existing resumes, while Firebase handled user profiles and document history. This project, completed 
            in 2023, was my first major full-stack application that integrated advanced AI with creative technical solutions.
          </p>
        </div>
        
        <div className="mb-10">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">
            Outcome & Learnings
          </h2>
          <p className="text-gray-700 mb-4">
            CareerStudio was developed as a prototype and shared with a small group of job seekers for 
            initial feedback. Users reported significant improvements in their application materials and 
            several attributed successful interview invitations to the documents created with CareerStudio.
          </p>
          <p className="text-gray-700 mb-4">
            Key learnings from this project:
          </p>
          <ul className="list-disc pl-6 text-gray-700 mb-4 space-y-2">
            <li>The importance of domain-specific training for AI systems to understand professional contexts</li>
            <li>Balancing automation with human customization to maintain authenticity in career documents</li>
            <li>Implementing effective feedback mechanisms to continuously improve AI output quality</li>
            <li>The challenges of scaling AI-powered applications while managing compute costs</li>
          </ul>
          <p className="text-gray-700">
            While CareerStudio remains a prototype, the insights gained have informed my approach to 
            AI integration in practical applications, particularly in contexts where the output needs 
            to be personalized, professional, and adaptable to specific requirements.
          </p>
        </div>
        
        <div className="text-center mt-12">
          <Link to="/" className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-all duration-300">
            <FaArrowLeft /> Back to Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareerStudioCaseStudy;