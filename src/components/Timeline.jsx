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
<h3 className="vertical-timeline-element-title">CareerStudio</h3>
  <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
  <p>
  Developed a Resume Builder and Cover Letter Creator tailored to specific job applications using
OpenAI's API. This project leverages AI to generate personalized and professional resumes and
cover letters, streamlining the application process for users. Designed with a user-friendly interface
and robust customization options to meet diverse job requirements
  </p>
  <a href="#" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline" >Visit  Website (N/A)</a> 
  <a href="https://github.com/bilaal5279/CareerStudio" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline">View GitHub Code</a> 
</VerticalTimelineElement>
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#000', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #000' }}
  date="Feb 2023 - Jun 2023"
  iconStyle={{ background: '#000', color: '#fff' }}
  icon={<FontAwesomeIcon icon={faFire} />} // use font awesome icon
>
  <h3 className="vertical-timeline-element-title">Green Air</h3>
  <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
  <p>
  A front-end focused project utilizing React, Tailwind CSS, and Vite. Designed and implemented an
intuitive and responsive user interface, emphasizing clean design principles and efficient
development practices.

  </p>
  <a href="https://greenairconditioning.netlify.app/" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline" >Visit  Website </a> 
  <a href="https://github.com/bilaal5279/GreenAir" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline">View GitHub Code</a> 
</VerticalTimelineElement>
<VerticalTimelineElement
  className="vertical-timeline-element--work"
  contentStyle={{ background: '#000', color: '#fff' }}
  contentArrowStyle={{ borderRight: '7px solid  #000' }}
  date="Feb 2023 - Jun 2023"
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