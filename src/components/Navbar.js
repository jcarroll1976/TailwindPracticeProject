import React from 'react';
import {FaBars,FaTimes} from "react-icons/fa";



function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
        <div>
            <h2 className='text-white text-2xl md:text-4xl font-bold'>JC</h2>
        </div>
        <div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Skills</li>
                <li>Work</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar