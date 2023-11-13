import React from 'react'

const About = () => {
  return (
    <div name='About' className='w-full h-screen bg-[#0a192f] text-gray-200'>
        <div className='flex flex-col justify-center items-center w-full h-full'>

            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className=' pb-8 pl-4'>
                    <p className=' text-4xl font-bold inline border-b-4 border-yellow-700'>About</p>
                </div>

                <div>
                </div>
                </div>
                <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8 '>
                 
                 <div className='px-4 text-4xl font-bold'>
                    <p className=''>Hi! Lets take a small tour around my website.</p>
                
                 </div>
                 <div>
                    <p className='px-4 '>I've interned at prominent companies including Ata Holding/Tıkla Gelsin, Amadeus, and MetalMaker3D, where I engaged with cutting-edge technologies to develop practical software solutions. At Ata Holding/Tıkla Gelsin, I utilized Node.js and MySQL for efficient website data management. Amadeus saw me contributing to a Spring Boot project logging Web Services interactions into an Oracle database.
                     My recent role at MetalMaker3D involved hands-on work with Python GTK GUI and React.js, contributing to the development of 3D printing software. Initially I am working with Amadeus as a part-time Software Developer.</p>
                
                 </div>
                 </div>
           
        </div>

    </div>
  )
}

export default About