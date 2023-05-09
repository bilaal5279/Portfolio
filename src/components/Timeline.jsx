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
          Learning about programming, data structures, algorithms, web development, artificial intelligence, and more.
        </p>
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
        <h3 className="vertical-timeline-element-title">First version of my portfolio website</h3>
        <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
        <p>
          My first ever website as a University Assignment coded in pure HTML and CSS
                  </p>
        <a href="https://i039978m-wdos.web.app/index.html" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline" >Visit Portfolio Website</a> 
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
    Created a webapp that uses gpt to help students learn and test their own abilities on a certain topic
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
    Working on a web app as an intern for JXML INC
  </p>
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
  <h3 className="vertical-timeline-element-title">Working on this portfolio</h3>
  <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
  <p>
    Working on a second version of my portfolio website using React, Next.js, Tailwind CSS, and Firebase to showcase my skills and projects.
  </p>
  <a href="#portfolio2" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline" >Visit Portfolio Website</a> 
  <a href="https://github.com/bilalishtiaq/bilalishtiaq.com-v2" target="_blank" rel="noreferrer" className="inline-block mr-2 cursor-pointer underline">View GitHub Code</a> 
</VerticalTimelineElement>
</VerticalTimeline>
</div>
);
};

export default Timeline;