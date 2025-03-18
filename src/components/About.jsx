import React from 'react';
import { FaCode, FaServer, FaMobileAlt, FaDatabase, FaGamepad, FaTrophy, FaDumbbell } from 'react-icons/fa';

const About = () => {
  const expertise = [
    {
      icon: <FaCode />,
      title: 'Frontend Development',
      description: 'Building responsive web interfaces using React, JavaScript, HTML5 and CSS3 with modern frameworks like Tailwind CSS and Material UI.'
    },
    {
      icon: <FaMobileAlt />,
      title: 'React Native Development',
      description: 'Creating cross-platform mobile applications for iOS and Android using React Native and Expo, with a focus on performance and user experience.'
    },
    {
      icon: <FaGamepad />,
      title: 'UI/UX Design',
      description: 'Designing intuitive user interfaces and smooth user experiences with a focus on accessibility, responsiveness, and modern design principles.'
    },
    {
      icon: <FaTrophy />,
      title: 'Performance Optimization',
      description: 'Optimizing application performance through efficient rendering techniques, state management, and code splitting strategies.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-50 rounded-bl-full opacity-70"></div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50 rounded-tr-full opacity-70"></div>
      <div className="absolute top-1/4 left-10 w-6 h-6 bg-blue-200 rounded-full"></div>
      <div className="absolute top-3/4 right-10 w-4 h-4 bg-blue-300 rounded-full"></div>
      <div className="absolute top-1/2 left-1/5 w-3 h-3 bg-blue-400 rounded-full"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4 inline-block relative">
            About <span className="text-blue-600">Me</span>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-600 transform scale-x-50 origin-center"></div>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
        </div>
        
        <div className="grid grid-cols-1 gap-12">
          <div className="text-gray-700 relative">
            <div className="absolute top-0 right-0 w-20 h-20 bg-blue-50 rounded-full -z-10 transform translate-x-6 -translate-y-6"></div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 inline-flex items-center gap-2">
              <span className="bg-blue-600 w-3 h-8 rounded-md inline-block mr-2"></span>
              Software Engineer & Web Developer
            </h3>
            <div className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-blue-600 mb-6">
              <p className="mb-4 text-base">
                I'm a passionate software engineer with expertise in web and mobile development, 
                currently pursuing a Bachelor's degree in Computer Science at Staffordshire University. 
                My academic foundation combined with hands-on experience enables me to deliver efficient 
                and user-friendly applications.
              </p>
              <p className="mb-0 text-base">
                My technical journey has equipped me with a diverse skill set spanning frontend frameworks 
                like React, backend technologies such as Node.js, and mobile development with React Native. 
                I'm committed to continuous learning and staying updated with industry best practices and 
                emerging technologies.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Name</h4>
                    <p className="font-medium text-gray-800">Bilaal Ishtiaq</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Degree</h4>
                    <p className="font-medium text-gray-800">BSc in Computer Science</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Location</h4>
                    <p className="font-medium text-gray-800">United Kingdom</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 p-5 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full text-blue-600 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm uppercase tracking-wider text-gray-500 mb-1">Email</h4>
                    <p className="font-medium text-gray-800">bilaalishtiaq@gmail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Personal Interests Section */}
        <div className="mt-12 mb-16 relative">
          <div className="absolute -right-20 top-1/2 w-40 h-40 bg-blue-50 rounded-full opacity-50 transform -translate-y-1/2"></div>
          <div className="absolute -left-16 bottom-0 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
          
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-8 inline-flex items-center justify-center w-full">
            Beyond <span className="text-blue-600 relative mx-2">Coding
              <svg className="absolute -bottom-1 left-0 w-full" height="5" viewBox="0 0 200 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 2.5C50 2.5 50 0 100 0C150 0 150 2.5 200 2.5" stroke="#2563EB" strokeWidth="2"/>
              </svg>
            </span>
          </h3>
          
          <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl shadow-md relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="transform transition-all duration-300 hover:scale-105">
                <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 bg-blue-600 w-10 h-10 rounded-md flex items-center justify-center text-white mr-4">
                    <FaTrophy />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2">Competitive Spirit</h4>
                    <p className="text-gray-700">
                      I bring the same dedication and focus to my professional work that I've developed 
                      through competitive gaming. As a highly ranked Overwatch player who reached the 
                      top 30 globally, I understand what it takes to constantly improve, adapt to changing 
                      environments, and perform under pressure. This competitive mindset translates directly 
                      to how I approach software development challenges.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="transform transition-all duration-300 hover:scale-105">
                <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex-shrink-0 bg-blue-600 w-10 h-10 rounded-md flex items-center justify-center text-white mr-4">
                    <FaDumbbell />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2">Athletic Pursuits</h4>
                    <p className="text-gray-700">
                      Boxing is another passion that has taught me valuable lessons about discipline, 
                      perseverance, and strategic thinking. The training regimen and mental focus required 
                      in boxing have strengthened my ability to tackle complex problems methodically and 
                      maintain composure in challenging situations—skills that prove invaluable in software 
                      development and team environments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <div className="flex-shrink-0 bg-blue-600 w-10 h-10 rounded-md flex items-center justify-center text-white mr-4">
                  <FaGamepad />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2 border-b border-gray-200 pb-2">Gaming & Technology</h4>
                  <p className="text-gray-700">
                    My passion for technology extends beyond professional development into gaming, where 
                    I've not only competed at high levels but also gained insights into user experience, 
                    interface design, and performance optimization. This perspective helps me create more 
                    intuitive and engaging applications. I actively follow technology trends and continuously 
                    experiment with new tools and frameworks to enhance my skill set.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 relative">
          <div className="absolute top-20 left-0 w-20 h-20 bg-blue-50 rounded-full opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-12 h-12 bg-blue-100 rounded-full opacity-40"></div>
          
          <h3 className="text-2xl font-bold text-gray-800 text-center mb-12 relative inline-block">
            My <span className="text-blue-600">Expertise</span>
            <div className="absolute -bottom-2 left-0 w-12 h-1 bg-blue-600"></div>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-lg shadow-md border-b-2 border-blue-600 hover:translate-y-[-5px] transition-all duration-300 group"
              >
                <div className="text-blue-600 text-4xl mb-4 group-hover:scale-110 transform transition-transform duration-300">
                  {item.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-3">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.description}
                </p>
                
                {/* Decorative lines */}
                <div className="w-1/3 h-0.5 bg-blue-100 mt-4 group-hover:w-full transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;