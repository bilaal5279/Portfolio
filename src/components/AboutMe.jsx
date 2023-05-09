import React from 'react';
import { Progress } from 'antd'; // import a progress bar component from antd library
import { useSpring, animated } from 'react-spring'; // import a spring animation library

const AboutMe = () => {
  const titleSpring = useSpring({
    opacity: 1,
    transform: 'translateY(0)',
    from: { opacity: 0, transform: 'translateY(-100px)' },
    config: { duration: 1000 },
  });

  const barSpring = useSpring({
    width: '100%',
    from: { width: '0%' },
    config: { duration: 2000 },
  });

  const gradientStyle = {
    background:
      'linear-gradient(to right, #020202, #040c16, #020202)',
    color: '#fff',
  };

  return (
    <div name='skills' id="aboutme" className='w-full h-screen mb-60' style={gradientStyle}>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className=' w-full flex justify-center items-center flex-col mb-7'>
          <animated.p
            className='text-4xl font-bold inline border-b-4 border-amber-300 text-center '
            style={titleSpring}
          >
            Skills
          </animated.p>
          <p className='py-4 text-2xl'>
          I have a passion for exploring and mastering new skills. Here are some of the technologies that I have experience with.
          </p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {/* Use animated tag to apply the barSpring animation */}
          <animated.div
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            style={barSpring}
          >
            <p className='my-4'>HTML</p>
            {/* Use Progress component to show proficiency level */}
            <Progress percent={90} showInfo={false} />
          </animated.div>
          <animated.div
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            style={barSpring}
          >
            <p className='my-4'>CSS</p>
            <Progress percent={80} showInfo={false} />
          </animated.div>
          <animated.div
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            style={barSpring}
          >
            <p className='my-4'>JAVASCRIPT</p>
            <Progress percent={70} showInfo={false} />
          </animated.div>
          <animated.div
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            style={barSpring}
          >
            <p className='my-4'>REACT</p>
            <Progress percent={60} showInfo={false} />
          </animated.div>
          <animated.div
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            style={barSpring}
          >
            <p className='my-4'>GITHUB</p>
            <Progress percent={50} showInfo={false} />
          </animated.div>
          <animated.div
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            style={barSpring}
          >
            <p className='my-4'>NODE JS</p>
            <Progress percent={40} showInfo={false} />
          </animated.div>          <animated.div
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            style={barSpring}
          >
            <p className='my-4'>Python</p>
            <Progress percent={50} showInfo={false} />
          </animated.div>          <animated.div
            className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'
            style={barSpring}
          >
            <p className='my-4'>C#</p>
            <Progress percent={30} showInfo={false} />
          </animated.div>
        </div>
      </div>
    </div>
  );
};
export default AboutMe;