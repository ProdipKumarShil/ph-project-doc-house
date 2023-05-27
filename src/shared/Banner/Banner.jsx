import React from 'react';
import capsule from '../../assets/objects/capsule.png'
import round from '../../assets/objects/round.png'
import '../../App.css'


const Banner = () => {
  return (
    <div className='relative bg-primary h-[100vh]'>
      <img className='absolute rotate-[-45deg] w-[353px] left-[-95px] top-[-188px]' src={capsule} alt="" />
      <img className='absolute anim-pulse-speed-10 animate-pulse right-[38%] top-[60%] scale-50' src={capsule} alt="" />
      <img className='absolute animate-spin anim-speed-20 right-[38%] top-[30%]' src={capsule} alt="" /> 
      <img className='absolute animate-bounce anim-speed-10 right-[13%] top-[20%]' src={round} alt="" />
    </div>
  );
};

export default Banner;