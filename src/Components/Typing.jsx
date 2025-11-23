import { TypeAnimation } from 'react-type-animation';
import React from 'react';
export const Typing = () => {
  return (
    <TypeAnimation
      sequence={[ 
        'Full Stack Developer',
        1000, 
        'MERN Stack Developer',
        1000,
        'Backend Developer',
        1000,
        // 'We ',
        // 1000
      ]}
      wrapper="span"
      speed={50}
      style={{ display: 'inline-block' }}
      repeat={Infinity}
    />
  );
};