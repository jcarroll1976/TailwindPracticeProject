import React from 'react'

function Contact() {
  return (
    <div name="contact" className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action='https://getform.io/f/7e31bf9c-af1a-4bb8-ae03-bebd622f3002' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl text-gray-300 font-bold inline border-b-4 border-[#FBEC5D]'>Contact</p>
                <p className='text-gray-300 py-4'>Submit the form below or shoot me an email - carrolljosh1976@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder="Name" name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder="Email" name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name='message' rows="10" placeholder="Message"></textarea>
            <button className="text-white border-2 hover:bg-[#FBEC5D] hover:border-[#FBEC5D] px-4 py-3 my-8 mx-auto flex items-center">Let's Chat!</button>
        </form>
    </div>
  )
}

export default Contact