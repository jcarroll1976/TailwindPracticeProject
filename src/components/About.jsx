import React from 'react'

function About() {
  return (
    <div name='about' className="w-full h-screen bg-[#0a192f] text-gray-300">
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#FBEC5D]'>About</p>
                </div>
                <div></div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi, I'm Josh, nice to meet you. Please have a look around.</p>
                    </div>
                    <div>
                        <p>I am passionate about building web applications to improve the lives of those around me.
                            After building several personal projects, I decided to change careers and sharpen my skills by
                            entering a coding bootcamp.I would love to help optimize your applications to enhance the user's experience!
                        </p>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default About