import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typing = () => {
  return (
    <div className="absolute top-1/2 transform -translate-y-1/2 w-full text-center">
    <span className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white font-bold font-opensans'>
      <span>I am a </span> {''}
      <TypeAnimation
        sequence={[
          // Same String at the start will only be typed once, initially
          'WebDeveloper',
          1000,
          'Entrepreneur ',
          1000,
          'Investor',
          1000,
          'Student',
          1000,
        ]}
        cursor={true}
        speed={50}
        repeat={Infinity}
        className='text-amber-300'
      />
    </span>
    </div>
  );
};

export default Typing;
