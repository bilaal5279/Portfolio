import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
// import font awesome icons
import { faGraduationCap, faLaptopCode, faUser, faHeart , faFire } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Timeline = () => {
  return (
    <div id="projects">
    <VerticalTimeline animate={true}> 
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{ background: '#000', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #000' }}
        date="2022 - present"
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faGraduationCap} />} // use font awesome icon
      >
        <h3 className="vertical-timeline-element-title">StaffordShire University</h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor of Science in Computer Science</h4>
        <p>
        Acquiring knowledge in the fields of programming, data structures, algorithms, web development, artificial intelligence, and other related areas.        </p>
        <a href="https://www.staffs.ac.uk/" target="_blank" rel="noreferrer" className="block mt-10 cursor-pointer underline" >Visit University Website</a> 
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#000', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #000' }}
        date="December 2022"
        iconStyle={{ background: '#000', color: '#fff' }}
        icon={<FontAwesomeIcon icon={faUser} style={{color: "#ffffff",}} />} // use font awesome icon
      >
        <h3 className="vertical-timeline-element-title">Portfolio 1.0</h3>
        <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
        <p>
        During my university studies, I had the opportunity to create my first-ever website as a personal project, which I crafted using pure HTML and CSS. This project was a significant milestone in my career, as it allowed me to hone my technical skills and develop a solid foundation in web development. I am excited to bring this passion and expertise to new projects and challenges, and to continue delivering exceptional results to my clients.
                  </p>
        <a href="https://i039978m-wdos.web.app/index.html" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline" >Visit Website</a> 
        <a href="https://github.com/bilaal5279/FirstPortfolio" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline">View GitHub Code</a> 
      </VerticalTimelineElement>
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#000', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #000' }}
  date="January 2023 - March 2023"
  iconStyle={{ background: '#000', color: '#fff' }}
  icon={<FontAwesomeIcon icon={faHeart} />} // use font awesome icon
>
  <h3 className="vertical-timeline-element-title"> VyroAi</h3>
  <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
  <p>
  As part of my ongoing commitment to innovation and education, I recently designed a sophisticated web application that 
  leverages GPT technology to help students learn and test their own abilities on a particular topic. This app represents a significant
  breakthrough in my knowledge, and I am excited to continue exploring new ways to enhance the learning experience for students around the world.
  </p>
  <a href="https://www.vyroai.com/" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline" >Visit VyroAi Website</a> 
  <a href="https://github.com/VyroAI/vyroai-webapp" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline">View GitHub Code (Private)</a> 
</VerticalTimelineElement>
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#000', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #000' }}
  date="April 2023 - present"
  iconStyle={{ background: '#000', color: '#fff' }}
  icon={<FontAwesomeIcon icon={faLaptopCode} />} // use font awesome icon
>
  <h3 className="vertical-timeline-element-title">Working on ***********</h3>
  <h4 className="vertical-timeline-element-subtitle">Proffesional Project</h4>
  <p>
  As an intern at JXML INC, I am currently working on the engineering of a sophisticated web application. 
  My responsibilities include designing and implementing key features of the application, 
  as well as troubleshooting any issues that arise during the development process. 
  I am utilizing my knowledge of programming languages such as HTML, CSS, JavaScript and React to build an intuitive and 
  user-friendly interface that meets the needs of our target audience  </p>
  <a href="#" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline" >Visit  Website (N/A)</a> 
  <a href="" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline">View GitHub Code (N/A)</a> 
</VerticalTimelineElement>
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#000', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #000' }}
  date="May 2023 - present"
  iconStyle={{ background: '#000', color: '#fff' }}
  icon={<FontAwesomeIcon icon={faFire} />} // use font awesome icon
>
  <h3 className="vertical-timeline-element-title">Portfolio V2</h3>
  <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
  <p>
  I am currently engaged in the development of an updated version of my professional portfolio website using the latest technologies and frameworks. Specifically, I am utilizing React, Tailwind CSS, and JavaScript to create a dynamic and visually stunning user interface that showcases my skills and achievements in a compelling and engaging manner. 
  </p>
  <a href="#" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline" >Visit Website</a>  
  <a href="https://github.com/bilaal5279/Portfolio" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline">View GitHub Code </a> 

</VerticalTimelineElement>
</VerticalTimeline>
</div>
);
};

export default Timeline;