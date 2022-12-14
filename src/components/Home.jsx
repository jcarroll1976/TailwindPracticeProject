import React from 'react';
import {HiArrowNarrowRight} from "react-icons/hi";

function Home() {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#FBEC5D]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Joshua Carroll</h1>
            <div className='flex justify-between'>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>I'm a Full Stack Developer</h2>
            <img className='w-24 md:w-36 lg:w-48 rounded-full' src='https://pbs.twimg.com/profile_images/1586786350690443264/srf6Kdg4_400x400.jpg' alt='profile'/>
            </div>
            <p className='text-[#8892b0] py-4 max-w-[700px]'>I am a recent graduate from a coding bootcamp at Grand Circus in Detroit,MI.
                I enjoy building responsive full stack web applications.
            </p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#FBEC5D] hover:border-[#FBEC5D] hover:text-[#8892b0]'>View Work
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3' />
                </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home