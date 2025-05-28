import React from 'react';

const Skills = () => {
  const technicalSkills = [
    'JavaScript',
    'HTML5 & CSS3',
    'React',
    'Node.js',
    'React Native',
    'MongoDB',
    'Git & GitHub',
    'Python',
  ];

  const professionalSkills = [
    'Problem Solving',
    'Communication',
    'Teamwork',
    'Time Management',
  ];

  const frameworksAndTools = [
    'React',
    'Express.js',
    'Next.js',
    'Tailwind CSS',
    'Material UI',
    'Firebase',
    'MongoDB',
    'Postman',
    'Figma',
  ];

  return (
    <section id="skills" className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800">
            Skills & <span className="text-blue-600">Education</span>
          </h2>
          <div className="mt-4 mx-auto w-24 h-1 bg-blue-600 rounded-full" />
        </div>

        {/* Cards Grid */}
        <div className="grid gap-8 lg:grid-cols-3 mb-20">
          {/* Technical Skills Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Technical Skills
            </h3>
            <ul className="space-y-3">
              {technicalSkills.map(skill => (
                <li key={skill} className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mt-1 mr-3" />
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Professional Skills Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transform hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Professional Skills
            </h3>
            <ul className="space-y-3">
              {professionalSkills.map(skill => (
                <li key={skill} className="flex items-start">
                  <span className="w-3 h-3 bg-blue-600 rounded-full mt-1 mr-3" />
                  <span className="text-gray-700">{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Education Card */}
          <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-blue-600 hover:shadow-lg transform hover:-translate-y-1 transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Education
            </h3>
            <div className="text-gray-700">
              <h4 className="text-xl font-semibold">
                BSc Computer Science{' '}
                <span className="text-blue-600">(First Class Hons)</span>
              </h4>
              <p className="mt-2">
                Staffordshire University &middot; 2022 – 2025
              </p>
            </div>
          </div>
        </div>

        {/* Frameworks & Tools Badges */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Frameworks & Tools
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {frameworksAndTools.map(item => (
              <span
                key={item}
                className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 text-sm font-medium text-center hover:bg-blue-600 hover:text-white transition"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
