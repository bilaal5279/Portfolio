import React from 'react';

const Skills = () => {
  const technicalSkills = [
    { name: 'JavaScript', percentage: 85 },
    { name: 'HTML5/CSS3', percentage: 90 },
    { name: 'React', percentage: 80 },
    { name: 'Node.js', percentage: 75 },
    { name: 'React Native', percentage: 75 },
    { name: 'MongoDB', percentage: 70 },
    { name: 'Git/GitHub', percentage: 85 },
    { name: 'Python', percentage: 65 }
  ];

  const professionalSkills = [
    { name: 'Problem Solving', percentage: 90 },
    { name: 'Communication', percentage: 85 },
    { name: 'Teamwork', percentage: 90 },
    { name: 'Time Management', percentage: 80 }
  ];

  const frameworks = [
    'React', 'Express.js', 'Next.js', 'React Native', 'Tailwind CSS', 'Material UI', 'NodeJS'
  ];

  const tools = [
    'VS Code', 'Git', 'GitHub', 'Firebase', 'MongoDB', 'Postman', 'Figma',
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Professional <span className="text-blue-600">Skills</span>
          </h2>
          <div className="w-16 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Throughout my career, I've developed expertise in various technologies and methodologies,
            allowing me to deliver comprehensive solutions across multiple platforms.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Professional Skills
            </h3>
            <div className="space-y-6 mb-10">
              {professionalSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-700 font-medium">{skill.name}</span>
                    <span className="text-blue-600 font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full transition-all duration-1000" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Education & Certifications
              </h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md border-l-4 border-blue-600">
                  <h4 className="text-gray-800 font-bold">BSc in Computer Science</h4>
                  <p className="text-gray-600">Staffordshire University | 2022 - Present</p>
                </div>

              </div>
            </div>
          </div>
        </div>
        
        {/* Frameworks and Tools */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Frameworks & Libraries
            </h3>
            <div className="flex flex-wrap gap-3">
              {frameworks.map((item, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-700 px-4 py-2 rounded-md shadow-sm border border-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Tools & Platforms
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((item, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-700 px-4 py-2 rounded-md shadow-sm border border-gray-200 hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;